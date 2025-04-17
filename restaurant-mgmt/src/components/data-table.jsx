import { useState } from "react"

export function DataTable({ data }) {
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [searchTerm, setSearchTerm] = useState("")
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }
  
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const sortedData = [...filteredData].sort((a, b) => {
    const fieldA = a[sortField]
    const fieldB = b[sortField]
    
    if (typeof fieldA === "string") {
      return sortDirection === "asc" 
        ? fieldA.localeCompare(fieldB)
        : fieldB.localeCompare(fieldA)
    }
    
    return sortDirection === "asc" ? fieldA - fieldB : fieldB - fieldA
  })
  
  return (
    <div className="w-full">
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:flex sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Menu Items</h3>
          <div className="mt-3 sm:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200 border-collapse">
            <thead>
              <tr className="border-b bg-gray-50 text-left text-sm font-medium text-gray-500">
                <SortableHeader 
                  label="Name" 
                  field="name" 
                  currentSort={sortField} 
                  direction={sortDirection} 
                  onSort={handleSort} 
                  className="pl-4 py-3.5"
                />
                <SortableHeader 
                  label="Category" 
                  field="category" 
                  currentSort={sortField} 
                  direction={sortDirection} 
                  onSort={handleSort} 
                  className="py-3.5"
                />
                <SortableHeader 
                  label="Price" 
                  field="price" 
                  currentSort={sortField} 
                  direction={sortDirection} 
                  onSort={handleSort} 
                  className="py-3.5"
                />
                <SortableHeader 
                  label="Sales" 
                  field="sales" 
                  currentSort={sortField} 
                  direction={sortDirection} 
                  onSort={handleSort} 
                  className="py-3.5 pr-4"
                />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {sortedData.length > 0 ? (
                sortedData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">${item.price.toFixed(2)}</td>
                    <td className="whitespace-nowrap py-4 pr-4 text-sm text-gray-500">{item.sales}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-sm text-gray-500">
                    No items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="border-t border-gray-200 px-4 py-3 text-right text-sm text-gray-500">
          {filteredData.length} items
        </div>
      </div>
    </div>
  )
}

function SortableHeader({ label, field, currentSort, direction, onSort, className = "" }) {
  return (
    <th 
      scope="col"
      className={`${className} cursor-pointer whitespace-nowrap`}
      onClick={() => onSort(field)}
    >
      <div className="group inline-flex items-center">
        {label}
        <span className={`ml-2 ${currentSort !== field ? 'invisible group-hover:visible' : ''}`}>
          {currentSort === field ? (
            direction === "asc" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="m18 15-6-6-6 6"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            )
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 opacity-0 group-hover:opacity-100">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          )}
        </span>
      </div>
    </th>
  )
} 