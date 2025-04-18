export function Input({ 
  className = "", 
  size = "md",
  variant = "default",
  error,
  ...props 
}) {
  const baseStyles = "w-full rounded-md border bg-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
  
  const variants = {
    default: "border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-primary",
    error: "border-red-300 text-red-900 placeholder:text-red-400 focus:border-red-500 focus:ring-red-200"
  }
  
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base"
  }
  
  return (
    <input
      className={`${baseStyles} ${variants[error ? "error" : variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
} 