export function Tabs({ tabs = [], activeTab, onChange, className = "" }) {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium transition-colors
              ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }
            `}
            onClick={() => onChange(tab.id)}
            aria-current={activeTab === tab.id ? "page" : undefined}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium
                  ${
                    activeTab === tab.id
                      ? "bg-primary/10 text-primary"
                      : "bg-gray-100 text-gray-900"
                  }
                `}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
} 