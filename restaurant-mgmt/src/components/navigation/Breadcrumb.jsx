export function Breadcrumb({ items = [], className = "", ...props }) {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb" {...props}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-2 text-gray-400"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            )}
            {index === items.length - 1 ? (
              <span
                className="text-sm font-medium text-gray-800"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 