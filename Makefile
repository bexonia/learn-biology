# ==============================================================================
# Learn Biology — 3D Interactive Prokaryote (29) & Eukaryote (36) Explorer
# Local Development, Testing & Verification Makefile
# ==============================================================================

PYTHON := c:/Users/devcd/GenProjects/blender-mcp-server/.venv/Scripts/python.exe
PORT   := 5173

.PHONY: all run dev open install build preview typecheck test test-prokaryote test-eukaryote verify dashboard dashboard-eukaryote help

all: run

help:
	@echo ""
	@echo "  Learn Biology (Prokaryote 29 & Eukaryote 36 3D Explorer) — Commands:"
	@echo "  --------------------------------------------------------------------"
	@echo "  make run                  Start the Vite 3D web app on http://localhost:$(PORT) and open browser"
	@echo "  make dev                  Start the Vite 3D dev server without auto-opening a new tab"
	@echo "  make test                 Run both Prokaryote (29) and Eukaryote (36) E2E Test Suites"
	@echo "  make test-prokaryote      Run the 29-scenario Prokaryote E2E Test Suite"
	@echo "  make test-eukaryote       Run the 36-scenario Eukaryote E2E Test Suite"
	@echo "  make dashboard            Open the Visual Verification HTML Dashboards"
	@echo "  make dashboard-eukaryote  Open the 36-scenario Eukaryote Visual Verification HTML Dashboard"
	@echo "  make install              Install npm dependencies inside client/"
	@echo "  make typecheck            Run TypeScript compiler validation (tsc --noEmit)"
	@echo "  make build                Build production bundle in client/dist/"
	@echo "  make preview              Serve production bundle locally"
	@echo "  make verify               Regenerate both Prokaryote & Eukaryote verification HTML dashboards"
	@echo ""

# Start local dev server and automatically open http://localhost:5173 in browser
run:
	npm --prefix client run dev -- --port $(PORT) --open

# Start local dev server (without forcing a new browser window)
dev:
	npm --prefix client run dev -- --port $(PORT)

open: run

# Install frontend dependencies
install:
	npm --prefix client install

# Run TypeScript check
typecheck:
	cd client && npx tsc --noEmit

# Build production static bundle
build:
	npm --prefix client run build

# Preview production bundle
preview:
	npm --prefix client run preview -- --port $(PORT) --open

# Run both Prokaryote (29) and Eukaryote (36) E2E test suites
test:
	"$(PYTHON)" prokaryote/scripts/test_prokaryote_suite.py
	"$(PYTHON)" eukaryote/scripts/test_eukaryote_suite.py

test-prokaryote:
	"$(PYTHON)" prokaryote/scripts/test_prokaryote_suite.py

test-eukaryote:
	"$(PYTHON)" eukaryote/scripts/test_eukaryote_suite.py

# Open visual verification dashboards
dashboard:
	"$(PYTHON)" prokaryote/scripts/generate_verification_html.py
	"$(PYTHON)" eukaryote/scripts/generate_eukaryote_verification_html.py
	cmd /c start "" "eukaryote/verification.html"

dashboard-eukaryote:
	"$(PYTHON)" eukaryote/scripts/generate_eukaryote_verification_html.py
	cmd /c start "" "eukaryote/verification.html"

# Regenerate verification HTML dashboards
verify:
	"$(PYTHON)" prokaryote/scripts/generate_verification_html.py
	"$(PYTHON)" eukaryote/scripts/generate_eukaryote_verification_html.py
