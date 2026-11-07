# =============================================================================
# BEXONIA 3D Cell & Virus Explorer (`bexonia-learn` -> `learn.bexonia.com`)
# =============================================================================
# 1. Provisions `bexonia-learn` namespace.
# 2. Packages the static WebGL HTML/JS models (`*.html`, `tours/*.js`) into
#    compressed ConfigMap bundles (< 650 KB each) and Nginx config (`nginx/default.conf`).
# 3. Deploys Nginx (:8080) in `Deployment/bexonia-learn` with automatic
#    sha256 checksum rollout.
# 4. Creates the cross-namespace Traefik `IngressRoute` for `learn.bexonia.com`
#    (picked up automatically by `bexonia-ingress` with Let's Encrypt DNS-01 TLS).
# 5. Provisions the Cloudflare DNS `CNAME` record (`learn.bexonia.com`) and
#    updates the active Cloudflare Zero Trust Tunnel ingress rules.

data "kubernetes_config_map_v1" "tunnel_metadata" {
  metadata {
    name      = "cloudflare-tunnel-metadata"
    namespace = var.cloudflare_namespace
  }
}

data "cloudflare_zones" "domain" {
  filter {
    name = var.domain
  }
}

locals {
  tunnel_id     = data.kubernetes_config_map_v1.tunnel_metadata.data["tunnel_id"]
  account_id    = data.kubernetes_config_map_v1.tunnel_metadata.data["account_id"]
  tunnel_target = "${local.tunnel_id}.cfargotunnel.com"
  zone_id       = data.cloudflare_zones.domain.zones[0].id
  traefik_svc   = "https://traefik.${var.ingress_namespace}.svc.cluster.local:443"

  bundle_1_b64 = filebase64("${path.module}/../dist/bundle-1.tar.gz")
  bundle_2_b64 = filebase64("${path.module}/../dist/bundle-2.tar.gz")
  bundle_3_b64 = filebase64("${path.module}/../dist/bundle-3.tar.gz")
  bundle_4_b64 = filebase64("${path.module}/../dist/bundle-4.tar.gz")

  bundle_checksum = sha256(
    "${local.bundle_1_b64}${local.bundle_2_b64}${local.bundle_3_b64}${local.bundle_4_b64}${file("${path.module}/../nginx/default.conf")}"
  )
}

# -----------------------------------------------------------------------------
# 1. Namespace & ConfigMaps (Nginx + Compressed WebGL Bundles)
# -----------------------------------------------------------------------------

resource "kubernetes_namespace_v1" "bexonia_learn" {
  metadata {
    name = var.learn_namespace
    labels = {
      "app.kubernetes.io/part-of" = "bexonia-platform"
      "bexonia.io/zone"           = "learn"
    }
  }
}

resource "kubernetes_config_map_v1" "learn_nginx" {
  metadata {
    name      = "bexonia-learn-nginx"
    namespace = kubernetes_namespace_v1.bexonia_learn.metadata[0].name
  }

  data = {
    "default.conf" = file("${path.module}/../nginx/default.conf")
  }
}

resource "kubernetes_config_map_v1" "learn_bundle_1" {
  metadata {
    name      = "bexonia-learn-bundle-1"
    namespace = kubernetes_namespace_v1.bexonia_learn.metadata[0].name
  }

  binary_data = {
    "bundle-1.tar.gz" = local.bundle_1_b64
  }
}

resource "kubernetes_config_map_v1" "learn_bundle_2" {
  metadata {
    name      = "bexonia-learn-bundle-2"
    namespace = kubernetes_namespace_v1.bexonia_learn.metadata[0].name
  }

  binary_data = {
    "bundle-2.tar.gz" = local.bundle_2_b64
  }
}

resource "kubernetes_config_map_v1" "learn_bundle_3" {
  metadata {
    name      = "bexonia-learn-bundle-3"
    namespace = kubernetes_namespace_v1.bexonia_learn.metadata[0].name
  }

  binary_data = {
    "bundle-3.tar.gz" = local.bundle_3_b64
  }
}

resource "kubernetes_config_map_v1" "learn_bundle_4" {
  metadata {
    name      = "bexonia-learn-bundle-4"
    namespace = kubernetes_namespace_v1.bexonia_learn.metadata[0].name
  }

  binary_data = {
    "bundle-4.tar.gz" = local.bundle_4_b64
  }
}

# -----------------------------------------------------------------------------
# 2. Deployment (`nginx` serving the 3D Cell & Virus Explorer)
# -----------------------------------------------------------------------------

resource "kubernetes_deployment_v1" "bexonia_learn" {
  metadata {
    name      = "bexonia-learn"
    namespace = kubernetes_namespace_v1.bexonia_learn.metadata[0].name
    labels = {
      "app.kubernetes.io/name"      = "bexonia-learn"
      "app.kubernetes.io/component" = "web"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        "app.kubernetes.io/name" = "bexonia-learn"
      }
    }

    template {
      metadata {
        labels = {
          "app.kubernetes.io/name"      = "bexonia-learn"
          "app.kubernetes.io/component" = "web"
        }
        annotations = {
          "checksum/web" = local.bundle_checksum
        }
      }

      spec {
        init_container {
          name    = "unpack-web"
          image   = var.nginx_image
          command = ["/bin/sh", "-c"]
          args = [
            <<-EOT
            set -eu
            for f in /bundles/b1/bundle-1.tar.gz /bundles/b2/bundle-2.tar.gz /bundles/b3/bundle-3.tar.gz /bundles/b4/bundle-4.tar.gz; do
              tar -xzf "$f" -C /web
            done
            cp /web/cell_explorer.html /web/index.html
            EOT
          ]

          volume_mount {
            name       = "web-root"
            mount_path = "/web"
          }
          volume_mount {
            name       = "bundle-1"
            mount_path = "/bundles/b1"
            read_only  = true
          }
          volume_mount {
            name       = "bundle-2"
            mount_path = "/bundles/b2"
            read_only  = true
          }
          volume_mount {
            name       = "bundle-3"
            mount_path = "/bundles/b3"
            read_only  = true
          }
          volume_mount {
            name       = "bundle-4"
            mount_path = "/bundles/b4"
            read_only  = true
          }
        }

        container {
          name  = "nginx"
          image = var.nginx_image

          port {
            name           = "http"
            container_port = 8080
            protocol       = "TCP"
          }

          volume_mount {
            name       = "web-root"
            mount_path = "/usr/share/nginx/html"
            read_only  = true
          }

          volume_mount {
            name       = "nginx-conf"
            mount_path = "/etc/nginx/conf.d/default.conf"
            sub_path   = "default.conf"
            read_only  = true
          }

          readiness_probe {
            http_get {
              path = "/api/health"
              port = 8080
            }
            initial_delay_seconds = 2
            period_seconds        = 10
          }

          liveness_probe {
            http_get {
              path = "/api/health"
              port = 8080
            }
            initial_delay_seconds = 5
            period_seconds        = 20
          }

          resources {
            requests = {
              cpu    = "50m"
              memory = "64Mi"
            }
            limits = {
              cpu    = "250m"
              memory = "128Mi"
            }
          }
        }

        volume {
          name = "web-root"
          empty_dir {}
        }

        volume {
          name = "nginx-conf"
          config_map {
            name = kubernetes_config_map_v1.learn_nginx.metadata[0].name
          }
        }

        volume {
          name = "bundle-1"
          config_map {
            name = kubernetes_config_map_v1.learn_bundle_1.metadata[0].name
          }
        }

        volume {
          name = "bundle-2"
          config_map {
            name = kubernetes_config_map_v1.learn_bundle_2.metadata[0].name
          }
        }

        volume {
          name = "bundle-3"
          config_map {
            name = kubernetes_config_map_v1.learn_bundle_3.metadata[0].name
          }
        }

        volume {
          name = "bundle-4"
          config_map {
            name = kubernetes_config_map_v1.learn_bundle_4.metadata[0].name
          }
        }
      }
    }
  }
}

resource "kubernetes_service_v1" "bexonia_learn" {
  metadata {
    name      = "bexonia-learn"
    namespace = kubernetes_namespace_v1.bexonia_learn.metadata[0].name
  }

  spec {
    type = "ClusterIP"
    selector = {
      "app.kubernetes.io/name" = "bexonia-learn"
    }
    port {
      name        = "http"
      port        = 8080
      target_port = 8080
    }
  }
}

# -----------------------------------------------------------------------------
# 3. Public Traefik IngressRoute (`learn.bexonia.com`)
# -----------------------------------------------------------------------------

resource "kubernetes_manifest" "learn_ingressroute" {
  manifest = {
    apiVersion = "traefik.io/v1alpha1"
    kind       = "IngressRoute"
    metadata = {
      name      = "bexonia-learn-route"
      namespace = kubernetes_namespace_v1.bexonia_learn.metadata[0].name
    }
    spec = {
      entryPoints = ["websecure"]
      routes = [
        {
          match = "Host(`learn.${var.domain}`)"
          kind  = "Rule"
          services = [
            {
              name      = kubernetes_service_v1.bexonia_learn.metadata[0].name
              namespace = kubernetes_namespace_v1.bexonia_learn.metadata[0].name
              port      = 8080
            }
          ]
        }
      ]
      tls = {
        certResolver = "cloudflare"
      }
    }
  }
}

# -----------------------------------------------------------------------------
# 4. Cloudflare DNS CNAME Record (`learn.bexonia.com`) & Tunnel Ingress
# -----------------------------------------------------------------------------

resource "cloudflare_record" "learn_cname" {
  zone_id         = local.zone_id
  name            = "learn"
  content         = local.tunnel_target
  type            = "CNAME"
  proxied         = true
  allow_overwrite = true
}

resource "cloudflare_zero_trust_tunnel_cloudflared_config" "bexonia_tunnel" {
  account_id = local.account_id
  tunnel_id  = local.tunnel_id

  config {
    ingress_rule {
      hostname = var.domain
      service  = local.traefik_svc
      origin_request {
        no_tls_verify = true
      }
    }
    ingress_rule {
      hostname = "www.${var.domain}"
      service  = local.traefik_svc
      origin_request {
        no_tls_verify = true
      }
    }
    ingress_rule {
      hostname = "learn.${var.domain}"
      service  = local.traefik_svc
      origin_request {
        no_tls_verify = true
      }
    }
    ingress_rule {
      hostname = "vault.${var.domain}"
      service  = local.traefik_svc
      origin_request {
        no_tls_verify = true
      }
    }
    ingress_rule {
      hostname = "registry.${var.domain}"
      service  = local.traefik_svc
      origin_request {
        no_tls_verify = true
      }
    }
    ingress_rule {
      hostname = "sso.${var.domain}"
      service  = local.traefik_svc
      origin_request {
        no_tls_verify = true
      }
    }
    ingress_rule {
      hostname = "genoma.${var.domain}"
      service  = local.traefik_svc
      origin_request {
        no_tls_verify = true
      }
    }
    ingress_rule {
      hostname = "genoma-dev.${var.domain}"
      service  = local.traefik_svc
      origin_request {
        no_tls_verify = true
      }
    }
    ingress_rule {
      hostname = "auth.${var.domain}"
      service  = local.traefik_svc
      origin_request {
        no_tls_verify = true
      }
    }
    ingress_rule {
      hostname = "auth-dev.${var.domain}"
      service  = local.traefik_svc
      origin_request {
        no_tls_verify = true
      }
    }
    ingress_rule {
      service = "http_status:404"
    }
  }
}
