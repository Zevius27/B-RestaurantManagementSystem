@echo off
echo Starting deployment of Restaurant Management Frontend...

rem Navigate to the script directory
cd /d "%~dp0"

rem Install dependencies
echo Installing dependencies...
call npm install

rem Build the application
echo Building the application...
call npm run build

rem Deployment target directory (modify as needed)
set DEPLOY_DIR=C:\inetpub\wwwroot\restaurant-management

rem Check if the directory exists, create if not
if not exist "%DEPLOY_DIR%" (
  echo Creating deployment directory...
  mkdir "%DEPLOY_DIR%"
)

rem Copy build files to deployment directory
echo Copying build files to deployment directory...
xcopy /s /y /i dist\* "%DEPLOY_DIR%"

rem Restart IIS if needed (requires admin privileges)
echo Restarting web server...
rem iisreset

echo Deployment complete! Application is now live.
echo You can access it at http://localhost:3000 