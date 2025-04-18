import { useState } from 'react';

export function Menu() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Spaghetti Carbonara', category: 'Main Course', price: '$14.99', available: true },
    { id: 2, name: 'Margherita Pizza', category: 'Main Course', price: '$12.99', available: true },
    { id: 3, name: 'Caesar Salad', category: 'Salad', price: '$8.99', available: true },
    { id: 4, name: 'Grilled Chicken', category: 'Main Course', price: '$16.99', available: true },
    { id: 5, name: 'Tiramisu', category: 'Dessert', price: '$7.99', available: true },
    { id: 6, name: 'Garlic Bread', category: 'Appetizer', price: '$4.99', available: false },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Appetizer', 'Salad', 'Main Course', 'Dessert', 'Beverage'];
  
  const filteredMenuItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Menu Management</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Add Menu Item
        </button>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMenuItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
              <div className="text-lg font-bold">{item.price}</div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                item.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {item.available ? 'Available' : 'Unavailable'}
              </span>
              <div>
                <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 