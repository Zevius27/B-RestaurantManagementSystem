/**
 * Production debug helper
 * Add this to your index.html for debugging production issues
 */
(function() {
  // Log any errors to a visible div for debugging
  window.addEventListener('error', function(event) {
    const errorDiv = document.createElement('div');
    errorDiv.style.position = 'fixed';
    errorDiv.style.top = '0';
    errorDiv.style.left = '0';
    errorDiv.style.right = '0';
    errorDiv.style.padding = '20px';
    errorDiv.style.background = 'red';
    errorDiv.style.color = 'white';
    errorDiv.style.zIndex = '9999';
    errorDiv.textContent = `Error: ${event.message} at ${event.filename}:${event.lineno}:${event.colno}`;
    document.body.appendChild(errorDiv);
  });

  // Log resource loading failures
  window.addEventListener('unhandledrejection', function(event) {
    const errorDiv = document.createElement('div');
    errorDiv.style.position = 'fixed';
    errorDiv.style.top = '50px';
    errorDiv.style.left = '0';
    errorDiv.style.right = '0';
    errorDiv.style.padding = '20px';
    errorDiv.style.background = 'orange';
    errorDiv.style.color = 'white';
    errorDiv.style.zIndex = '9999';
    errorDiv.textContent = `Unhandled Promise Rejection: ${event.reason}`;
    document.body.appendChild(errorDiv);
  });

  // Log document load state
  console.log('Document readyState:', document.readyState);
  
  // Check if the root element exists
  window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired');
    console.log('Root element exists:', !!document.getElementById('root'));
  });
})(); 