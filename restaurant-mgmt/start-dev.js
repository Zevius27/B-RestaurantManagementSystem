/**
 * Restaurant Management System Development Server Starter
 * 
 * This script starts the development server on port 4000.
 * It can be run with: node start-dev.js
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Starting Restaurant Management System on port 4000...');

// Check if node_modules exists
if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  console.log('Installing dependencies...');
  
  try {
    // Run npm install synchronously
    const npmInstall = spawn('npm', ['install'], { 
      stdio: 'inherit',
      shell: true
    });
    
    npmInstall.on('exit', (code) => {
      if (code !== 0) {
        console.error(`npm install exited with code ${code}`);
        process.exit(code);
      }
      startDevServer();
    });
  } catch (error) {
    console.error('Failed to install dependencies:', error);
    process.exit(1);
  }
} else {
  startDevServer();
}

function startDevServer() {
  console.log('Starting development server...');
  
  try {
    // Start the development server
    const devServer = spawn('npm', ['run', 'dev'], { 
      stdio: 'inherit',
      shell: true
    });
    
    devServer.on('exit', (code) => {
      console.log(`Development server stopped with code ${code}`);
    });
    
    // Handle process termination
    process.on('SIGINT', () => {
      console.log('Stopping development server...');
      devServer.kill('SIGINT');
    });
  } catch (error) {
    console.error('Failed to start development server:', error);
    process.exit(1);
  }
} 