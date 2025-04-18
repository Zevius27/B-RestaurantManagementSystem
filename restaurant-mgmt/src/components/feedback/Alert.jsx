export function Alert({
  title,
  children,
  variant = "info",
  className = "",
  ...props
}) {
  const variants = {
    info: "bg-blue-50 text-blue-800 border-blue-100",
    success: "bg-green-50 text-green-800 border-green-100",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-100",
    error: "bg-red-50 text-red-800 border-red-100"
  }

  return (
    <div
      role="alert"
      className={`rounded-lg border p-4 ${variants[variant]} ${className}`}
      {...props}
    >
      {title && (
        <h3 className="mb-2 font-medium">
          {title}
        </h3>
      )}
      <div className="text-sm">
        {children}
      </div>
    </div>
  )
} 