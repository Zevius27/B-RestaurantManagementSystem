import { useState } from 'react';

export function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  
  return (
    <div className="container mx-auto p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab('general')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'general'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          General
        </button>
        <button
          onClick={() => setActiveTab('account')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'account'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Account
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'notifications'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab('appearance')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'appearance'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Appearance
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        {activeTab === 'general' && (
          <div>
            <h3 className="text-lg font-medium mb-4">General Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="My Restaurant"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="contact@myrestaurant.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  defaultValue="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Currency
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Timezone
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="UTC-8">Pacific Time (UTC-8)</option>
                  <option value="UTC-5">Eastern Time (UTC-5)</option>
                  <option value="UTC+0">UTC</option>
                  <option value="UTC+1">Central European Time (UTC+1)</option>
                  <option value="UTC+8">China Standard Time (UTC+8)</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'account' && (
          <div>
            <h3 className="text-lg font-medium mb-4">Account Settings</h3>
            <p className="text-gray-600">Account settings will be displayed here.</p>
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div>
            <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
            <p className="text-gray-600">Notification settings will be displayed here.</p>
          </div>
        )}
        
        {activeTab === 'appearance' && (
          <div>
            <h3 className="text-lg font-medium mb-4">Appearance Settings</h3>
            <p className="text-gray-600">Appearance settings will be displayed here.</p>
          </div>
        )}
        
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors mr-2">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
} 