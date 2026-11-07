terraform {
  required_version = ">= 1.6.0"

  backend "kubernetes" {
    secret_suffix     = "bexonia-learn"
    namespace         = "bexonia-runners"
    in_cluster_config = true
  }

  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.27"
    }
    vault = {
      source  = "hashicorp/vault"
      version = "~> 4.2"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "kubernetes" {}

provider "vault" {
  address          = var.openbao_addr
  token            = var.openbao_token
  skip_child_token = true
}

data "vault_kv_secret_v2" "cloudflare" {
  mount = "infra"
  name  = "cloudflare/${var.cloudflare_secret_name}"
}

provider "cloudflare" {
  api_token = data.vault_kv_secret_v2.cloudflare.data["api_token"]
}
