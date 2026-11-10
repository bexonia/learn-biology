SHELL := $(shell command -v bash 2>/dev/null || echo /bin/sh)

# Automatically add Nix store Node.js 22/24 to PATH if node/npm are not already in PATH
NIX_NODE_BIN := $(shell command -v node >/dev/null 2>&1 || dirname $$(ls -d /nix/store/*nodejs-2*/bin/npm 2>/dev/null | tail -n 1) 2>/dev/null)
ifneq ($(NIX_NODE_BIN),)
export PATH := $(NIX_NODE_BIN):$(PATH)
endif

HOST ?= 127.0.0.1
PORT ?= 8765
API_PORT ?= 3001
LEARN_DB_PATH ?= /tmp/bexonia-learn-biology.sqlite
IMAGE_TAG ?= bexonia/learn-biology:local

.PHONY: all help bootstrap unpack-audio pack-audio dev start dev-api start-api build typecheck test export-cues generate-narration docker clean

all: typecheck build test

help:
	@echo "Bexonia Learn Biology — Makefile Targets"
	@echo ""
	@echo "  make dev                 Build & watch frontend TS + run unified Frontend & API server on http://$(HOST):$(PORT)/cell_explorer.html"
	@echo "  make start               Build production bundles & run unified Frontend & API server on http://$(HOST):$(PORT)/cell_explorer.html"
	@echo "  make dev-api             Run backend API server only (watch mode) on http://$(HOST):$(API_PORT)"
	@echo "  make start-api           Run compiled backend API server only on http://$(HOST):$(API_PORT)"
	@echo "  make build               Typecheck & compile frontend (dist/pages/*.js) and backend (dist/server.js)"
	@echo "  make typecheck           Run TypeScript compiler check (tsc --noEmit)"
	@echo "  make test                Run full Effect unit + static + headless Chrome WebGL E2E verification suite"
	@echo "  make unpack-audio        Extract audio.tar.gz into gitignored audio/ folder if not already extracted"
	@echo "  make pack-audio          Bundle audio/ directory into audio.tar.gz archive"
	@echo "  make export-cues         Export bilingual (EN/ES) tour cues manifest to dist/tour_cues_manifest.json"
	@echo "  make generate-narration  Synthesize bilingual .opus tour narration via GPT-SoVITS v2ProPlus & update audio.tar.gz"
	@echo "  make docker              Build & run production OCI container (Nginx :8080 + Node API :3001)"
	@echo "  make bootstrap           Install npm dependencies (npm ci)"
	@echo "  make clean               Remove compiled dist/ artifacts"

bootstrap:
	@echo "==> Installing dependencies..."
	@command -v node >/dev/null || (echo "node not found"; exit 1)
	@command -v npm >/dev/null || (echo "npm not found"; exit 1)
	npm ci

unpack-audio:
	@if [ ! -d audio/en ] && [ -f audio.tar.gz ]; then \
		echo "==> Extracting audio.tar.gz into audio/ ..."; \
		tar -xzf audio.tar.gz; \
	fi

pack-audio:
	@echo "==> Archiving audio/ into audio.tar.gz ..."
	tar -czf audio.tar.gz audio

typecheck:
	npm run typecheck

build: typecheck
	npm run build

dev: unpack-audio
	@echo "==> Building initial bundles..."
	npm run build
	@echo "==> Starting Frontend esbuild watcher + Unified Web & API Server at http://$(HOST):$(PORT)/cell_explorer.html ..."
	@trap 'trap - INT TERM EXIT; kill $$WEB_PID $$API_PID 2>/dev/null || true' INT TERM EXIT; \
	npm run dev:web & WEB_PID=$$!; \
	HOST=$(HOST) PORT=$(PORT) LEARN_DB_PATH=$(LEARN_DB_PATH) LEARN_STATIC_ROOT=. npm run dev:server & API_PID=$$!; \
	wait $$WEB_PID $$API_PID

start: unpack-audio build
	@echo "==> Starting Unified Production Server (Frontend + API) at http://$(HOST):$(PORT)/cell_explorer.html ..."
	HOST=$(HOST) PORT=$(PORT) LEARN_DB_PATH=$(LEARN_DB_PATH) LEARN_STATIC_ROOT=. node dist/server.js

dev-api:
	@echo "==> Starting Backend API Server (watch mode) at http://$(HOST):$(API_PORT) ..."
	HOST=$(HOST) PORT=$(API_PORT) LEARN_DB_PATH=$(LEARN_DB_PATH) npm run dev:server

start-api: build
	@echo "==> Starting Compiled Backend API Server at http://$(HOST):$(API_PORT) ..."
	HOST=$(HOST) PORT=$(API_PORT) LEARN_DB_PATH=$(LEARN_DB_PATH) node dist/server.js

export-cues:
	npm run export:cues

GSV_PYTHON ?= /tmp/gsv-venv/bin/python
GSV_ROOT ?= /tmp/GPT-SoVITS
GSV_ARGS ?=

generate-narration: export-cues
	SSL_CERT_FILE="$${SSL_CERT_FILE:-/etc/ssl/certs/ca-bundle.crt}" \
	LD_LIBRARY_PATH="/run/opengl-driver/lib:$${NIX_LD_LIBRARY_PATH}:$${LD_LIBRARY_PATH}" \
	PYTHONPATH="$(GSV_ROOT):$(GSV_ROOT)/GPT_SoVITS" \
	$(GSV_PYTHON) tools/generate_narration_gptsovits.py --gsv-root "$(GSV_ROOT)" $(GSV_ARGS)
	$(MAKE) pack-audio

test: unpack-audio build
	npm test

docker:
	docker build -t $(IMAGE_TAG) .
	@echo "==> Running container at http://localhost:8080 ..."
	docker run --rm -p 8080:8080 $(IMAGE_TAG)

clean:
	rm -rf dist
