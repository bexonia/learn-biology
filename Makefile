# ==============================================================================
# Learn Biology — 3D Interactive Prokaryote & Eukaryote Explorer
# Local Development, Testing & Verification Makefile
# ==============================================================================

PYTHON := c:/Users/devcd/GenProjects/blender-mcp-server/.venv/Scripts/python.exe
PORT   := 5173

.PHONY: all run dev open install build preview typecheck test verify dashboard help

all: run

help:
	@echo ""
	@echo "  Learn Biology (Prokaryote & Eukaryote 3D Explorer) — Commands:"
	@echo "  --------------------------------------------------------------"
	@echo "  make run        Start the Vite 3D web app on http://localhost:$(PORT) and open browser"
	@echo "  make dev        Start the Vite 3D dev server without auto-opening a new tab"
	@echo "  make test       Run the full 29-scenario Prokaryote E2E Test Suite"
	@echo "  make dashboard  Open the 29-scenario Visual Verification HTML Dashboard"
	@echo "  make install    Install npm dependencies inside client/"
	@echo "  make typecheck  Run TypeScript compiler validation (tsc --noEmit)"
	@echo "  make build      Build production bundle in client/dist/"
	@echo "  make preview    Serve production bundle locally"
	@echo "  make verify     Regenerate HTML verification dashboards (prokaryote/verification.html)"
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
	npx --prefix client tsc --noEmit

# Build production static bundle
build:
	npm --prefix client run build

# Preview production bundle
preview:
	npm --prefix client run preview -- --port $(PORT) --open

# Run the moved Prokaryote E2E test suite
test:
	"$(PYTHON)" prokaryote/scripts/test_prokaryote_suite.py

# Open the 29-scenario visual verification dashboard
dashboard:
	"$(PYTHON)" prokaryote/scripts/generate_verification_html.py
	cmd /c start "" "prokaryote/verification.html"

# Regenerate verification HTML dashboards
verify:
	"$(PYTHON)" prokaryote/scripts/generate_verification_html.py
