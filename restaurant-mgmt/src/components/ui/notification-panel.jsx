import { useState, useRef, useEffect } from 'react';

export function NotificationPanel({ isOpen, onClose }) {
  const panelRef = useRef(null);
  
  // Close the panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  
  return (
    <div 
      ref={panelRef}
      className="absolute right-2 top-16 z-50 w-80 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg animate-in fade-in slide-in-from-top-5 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
        <h3 className="font-medium text-gray-900 dark:text-gray-100">Notifications</h3>
        <button 
          onClick={onClose}
          className="rounded p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {/* Sample notifications - replace with actual data */}
        <div className="border-b border-gray-200 p-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">New order received</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Order #12345 from John Doe</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">5 minutes ago</p>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 p-4 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Payment successful</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Payment for order #12340 received</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
            </div>
          </div>
        </div>
        <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Low inventory alert</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Chicken wings (5 portions left)</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 p-3 text-center dark:border-gray-700">
        <button className="text-sm font-medium text-primary hover:underline dark:text-primary-400">
          View all notifications
        </button>
      </div>
    </div>
  );
} 