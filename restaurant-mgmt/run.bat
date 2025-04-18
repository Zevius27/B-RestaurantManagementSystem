@echo off
echo Starting Restaurant Management System on port 3000...

rem Navigate to the script directory
cd /d "%~dp0"

rem Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
)

rem Start the development server
echo Starting development server...
call npm run dev

echo Server stopped. 