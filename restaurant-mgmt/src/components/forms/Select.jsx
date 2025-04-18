export function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  error,
  className = "",
  ...props
}) {
  const baseStyles = "w-full rounded-md border bg-white py-2 pl-3 pr-10 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20";
  
  const variants = {
    default: "border-gray-300 text-gray-900 focus:border-primary",
    error: "border-red-300 text-red-900 focus:border-red-500 focus:ring-red-200"
  };
  
  return (
    <div className="relative">
      <select
        className={`${baseStyles} ${variants[error ? "error" : "default"]} ${className}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
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
          className="text-gray-400"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
} 