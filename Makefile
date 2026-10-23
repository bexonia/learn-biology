# ==============================================================================
# Learn Biology — 3D Interactive Prokaryotic Cell & 29 Nanomachines
# Local Development & Verification Makefile
# ==============================================================================

PYTHON := c:/Users/devcd/GenProjects/blender-mcp-server/.venv/Scripts/python.exe
PORT   := 5173

.PHONY: all run dev open install build preview typecheck dashboard verify help

all: run

help:
	@echo ""
	@echo "  Learn Biology (29 Prokaryotic 3D Scenarios) — Commands:"
	@echo "  -------------------------------------------------------"
	@echo "  make run        Start the Vite 3D web app on http://localhost:$(PORT) and open browser"
	@echo "  make dev        Start the Vite 3D dev server without auto-opening a new tab"
	@echo "  make dashboard  Open the 29-scenario Visual Verification HTML Dashboard"
	@echo "  make install    Install npm dependencies inside client/"
	@echo "  make typecheck  Run TypeScript compiler validation (tsc --noEmit)"
	@echo "  make build      Build production bundle in client/dist/"
	@echo "  make preview    Serve production bundle locally"
	@echo "  make verify     Regenerate HTML verification dashboards (verification.html)"
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

# Open the 29-scenario visual verification dashboard
dashboard:
	"$(PYTHON)" scripts/generate_verification_html.py
	cmd /c start "" "verification.html"

# Regenerate verification HTML dashboards
verify:
	"$(PYTHON)" scripts/generate_verification_html.py
