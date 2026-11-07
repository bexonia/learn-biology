variable "learn_namespace" {
  type        = string
  description = "Dedicated Kubernetes namespace for the BEXONIA 3D Cell & Virus Explorer (learn.bexonia.com)."
  default     = "bexonia-learn"
}

variable "cloudflare_namespace" {
  type        = string
  description = "Kubernetes namespace where bootstrap-cloudflare created cloudflare-tunnel-metadata."
  default     = "bexonia-cloudflare"
}

variable "ingress_namespace" {
  type        = string
  description = "Kubernetes namespace where Child Traefik runs."
  default     = "bexonia-ingress"
}

variable "cloudflare_secret_name" {
  type        = string
  description = "Secret name inside bexonia-vault under infra/data/cloudflare/<name>."
  default     = "default"
}

variable "domain" {
  type        = string
  description = "Primary Cloudflare DNS zone for BEXONIA."
  default     = "bexonia.com"
}

variable "nginx_image" {
  type        = string
  description = "Container image for the Nginx static WebGL frontend."
  default     = "nginx:1.27-alpine"
}

variable "openbao_addr" {
  type        = string
  description = "Internal OpenBao service endpoint in bexonia-vault."
  default     = "http://openbao.bexonia-vault.svc.cluster.local:8200"
}

variable "openbao_token" {
  type        = string
  description = "Short-lived OpenBao token obtained via bexonia-infra-runner-sa Kubernetes auth."
  sensitive   = true
}
