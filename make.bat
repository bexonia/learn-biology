@echo off
setlocal
set "TARGET=%~1"
if "%TARGET%"=="" set "TARGET=run"

set "PYTHON=c:\Users\devcd\GenProjects\blender-mcp-server\.venv\Scripts\python.exe"
set "PORT=5173"

if /I "%TARGET%"=="help" goto :help
if /I "%TARGET%"=="run" goto :run
if /I "%TARGET%"=="start" goto :run
if /I "%TARGET%"=="open" goto :run
if /I "%TARGET%"=="dev" goto :dev
if /I "%TARGET%"=="test" goto :test
if /I "%TARGET%"=="install" goto :install
if /I "%TARGET%"=="typecheck" goto :typecheck
if /I "%TARGET%"=="build" goto :build
if /I "%TARGET%"=="preview" goto :preview
if /I "%TARGET%"=="dashboard" goto :dashboard
if /I "%TARGET%"=="verify" goto :verify

echo Unknown target: "%TARGET%"
goto :help

:help
echo.
echo   Learn Biology (Prokaryote ^& Eukaryote 3D Explorer) — Commands:
echo   --------------------------------------------------------------
echo   .\make run        Start the 3D web app on http://localhost:%PORT% and open browser
echo   .\make dev        Start the Vite dev server on http://localhost:%PORT%
echo   .\make test       Run the full 29-scenario Prokaryote E2E Test Suite
echo   .\make dashboard  Open the 29-scenario Visual Verification HTML Dashboard
echo   .\make install    Install npm dependencies inside client/
echo   .\make typecheck  Run TypeScript compiler validation (tsc --noEmit)
echo   .\make build      Build production bundle in client/dist/
echo   .\make preview    Serve production bundle locally
echo   .\make verify     Regenerate prokaryote/verification.html and prokaryote/verification/index.html
echo.
exit /b 0

:run
echo Starting Learn Biology 3D Engine on http://localhost:%PORT% ...
call npm --prefix "%~dp0client" run dev -- --port %PORT% --open
exit /b %ERRORLEVEL%

:dev
echo Starting Learn Biology 3D Engine (dev server) on http://localhost:%PORT% ...
call npm --prefix "%~dp0client" run dev -- --port %PORT%
exit /b %ERRORLEVEL%

:test
"%PYTHON%" "%~dp0prokaryote\scripts\test_prokaryote_suite.py"
exit /b %ERRORLEVEL%

:install
call npm --prefix "%~dp0client" install
exit /b %ERRORLEVEL%

:typecheck
pushd "%~dp0client"
call npx tsc --noEmit
popd
exit /b %ERRORLEVEL%

:build
call npm --prefix "%~dp0client" run build
exit /b %ERRORLEVEL%

:preview
call npm --prefix "%~dp0client" run preview -- --port %PORT% --open
exit /b %ERRORLEVEL%

:dashboard
"%PYTHON%" "%~dp0prokaryote\scripts\generate_verification_html.py"
start "" "%~dp0prokaryote\verification.html"
exit /b %ERRORLEVEL%

:verify
"%PYTHON%" "%~dp0prokaryote\scripts\generate_verification_html.py"
exit /b %ERRORLEVEL%
