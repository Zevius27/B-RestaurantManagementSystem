import { useState, useEffect } from 'react';

export function DashboardOverview() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h3 className="text-lg font-medium mb-3">Dashboard Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-3 rounded-md">
          <h4 className="text-sm font-medium text-blue-800">Total Sales</h4>
          <p className="text-2xl font-bold text-blue-900">$12,345</p>
        </div>
        <div className="bg-green-50 p-3 rounded-md">
          <h4 className="text-sm font-medium text-green-800">Total Orders</h4>
          <p className="text-2xl font-bold text-green-900">284</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-md">
          <h4 className="text-sm font-medium text-purple-800">New Customers</h4>
          <p className="text-2xl font-bold text-purple-900">42</p>
        </div>
      </div>
    </div>
  );
}

export function QuickAccess() {
  const quickActions = [
    { id: 1, name: 'New Order', icon: '📝', path: '/orders/new' },
    { id: 2, name: 'Add Menu Item', icon: '🍽️', path: '/menu/add' },
    { id: 3, name: 'View Reports', icon: '📊', path: '/reports' },
    { id: 4, name: 'Customer List', icon: '👥', path: '/customers' },
    { id: 5, name: 'Staff Schedule', icon: '👤', path: '/staff' },
    { id: 6, name: 'Inventory', icon: '📦', path: '/inventory' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h3 className="text-lg font-medium mb-3">Quick Access</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {quickActions.map((action) => (
          <button 
            key={action.id}
            className="flex flex-col items-center justify-center p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl mb-1">{action.icon}</span>
            <span className="text-sm text-center">{action.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function RecentActivity() {
  const activities = [
    { id: 1, type: 'order', text: 'New order #1234 received', time: '10 mins ago' },
    { id: 2, type: 'customer', text: 'John Doe updated profile', time: '25 mins ago' },
    { id: 3, type: 'inventory', text: 'Inventory alert: Low stock on tomatoes', time: '1 hour ago' },
    { id: 4, type: 'staff', text: 'Sarah assigned to evening shift', time: '2 hours ago' },
    { id: 5, type: 'order', text: 'Order #1230 marked as delivered', time: '3 hours ago' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h3 className="text-lg font-medium mb-3">Recent Activity</h3>
      <div className="space-y-3 max-h-60 overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start p-2 border-b border-gray-100 last:border-0">
            <div className="mr-3">
              {activity.type === 'order' && <span className="text-blue-500">🛒</span>}
              {activity.type === 'customer' && <span className="text-green-500">👤</span>}
              {activity.type === 'inventory' && <span className="text-red-500">📦</span>}
              {activity.type === 'staff' && <span className="text-purple-500">👥</span>}
            </div>
            <div className="flex-1">
              <p className="text-sm">{activity.text}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PerformanceMetrics() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h3 className="text-lg font-medium mb-3">Performance Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded-md">
          <h4 className="text-sm font-medium mb-2">Daily Sales</h4>
          <div className="h-32 flex items-end space-x-2">
            {[40, 65, 30, 85, 60, 70, 90].map((value, i) => (
              <div 
                key={i} 
                className="bg-blue-500 w-full rounded-t-sm" 
                style={{ height: `${value}%` }}
                title={`Day ${i+1}: ${value}%`}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-md">
          <h4 className="text-sm font-medium mb-2">Popular Items</h4>
          <div className="space-y-2">
            {[
              { name: 'Spaghetti Carbonara', value: 85 },
              { name: 'Margherita Pizza', value: 70 },
              { name: 'Caesar Salad', value: 60 },
              { name: 'Grilled Chicken', value: 55 },
              { name: 'Tiramisu', value: 45 }
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>{item.name}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-green-500 h-1.5 rounded-full" 
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SystemNotifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'System update scheduled for tonight at 2 AM', type: 'info', read: false },
    { id: 2, text: 'Backup completed successfully', type: 'success', read: true },
    { id: 3, text: 'Payment processing error for Order #1228', type: 'error', read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium">System Notifications</h3>
        <button 
          onClick={clearAll}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Clear All
        </button>
      </div>
      
      {notifications.length === 0 ? (
        <p className="text-gray-500 text-sm py-4 text-center">No notifications</p>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-3 rounded-md ${
                notif.read ? 'bg-gray-50' : 'bg-blue-50 border-l-4 border-blue-500'
              } ${
                notif.type === 'error' ? 'border-l-4 border-red-500' : 
                notif.type === 'success' ? 'border-l-4 border-green-500' : ''
              }`}
            >
              <div className="flex justify-between">
                <p className="text-sm">{notif.text}</p>
                {!notif.read && (
                  <button 
                    onClick={() => markAsRead(notif.id)}
                    className="text-xs text-blue-600 hover:text-blue-800"
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-6">
        <DashboardOverview />
        <QuickAccess />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecentActivity />
          <SystemNotifications />
        </div>
        
        <PerformanceMetrics />
      </div>
    </div>
  );
} 