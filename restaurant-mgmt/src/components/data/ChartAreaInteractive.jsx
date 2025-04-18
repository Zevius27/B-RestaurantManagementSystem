import { useState } from "react"

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = useState("weekly")
  
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Sales Overview</h3>
          <p className="text-sm text-gray-500">Daily sales performance</p>
        </div>
        <div className="flex space-x-2">
          <TimeRangeButton label="Daily" value="daily" active={timeRange === "daily"} onClick={() => setTimeRange("daily")} />
          <TimeRangeButton label="Weekly" value="weekly" active={timeRange === "weekly"} onClick={() => setTimeRange("weekly")} />
          <TimeRangeButton label="Monthly" value="monthly" active={timeRange === "monthly"} onClick={() => setTimeRange("monthly")} />
        </div>
      </div>
      
      <div className="mt-6 flex h-[250px] w-full items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-9 w-9 text-gray-400">
            <path d="M3 3v18h18"></path>
            <path d="m19 9-5 5-4-4-3 3"></path>
          </svg>
          <p className="mt-2 text-sm font-medium text-gray-600">Chart display placeholder</p>
          <p className="mt-1 text-xs text-gray-400">Additional charting libraries can be added later</p>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-4 gap-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="col-span-1 text-center">
            <div 
              className="relative mx-auto h-16 w-6 rounded-t-sm bg-primary/20" 
              style={{ 
                height: `${Math.floor(Math.random() * 64) + 16}px`,
              }} 
            />
            <p className="mt-1 text-xs font-medium text-gray-600">{day}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function TimeRangeButton({ label, value, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
        active
          ? "bg-primary text-white" 
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  )
} 