#!/bin/bash

# Restaurant Management System Frontend Deployment Script

echo "Starting deployment of Restaurant Management Frontend..."

# Ensure we're in the correct directory
script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$script_dir"

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Deployment target directory (modify as needed)
DEPLOY_DIR="/var/www/restaurant-management"

# Check if the directory exists, create if not
if [ ! -d "$DEPLOY_DIR" ]; then
  echo "Creating deployment directory..."
  sudo mkdir -p "$DEPLOY_DIR"
  sudo chown -R $(whoami):$(whoami) "$DEPLOY_DIR"
fi

# Copy build files to deployment directory
echo "Copying build files to deployment directory..."
sudo rsync -avz --delete dist/ "$DEPLOY_DIR"

# Restart Nginx if needed
echo "Restarting web server..."
sudo systemctl restart nginx

echo "Deployment complete! Application is now live."
echo "You can access it at http://your-server-ip:3000" 