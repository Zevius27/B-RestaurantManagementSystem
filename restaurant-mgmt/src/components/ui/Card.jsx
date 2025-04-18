export function Card({ 
  children, 
  className = "", 
  variant = "default",
  ...props 
}) {
  const baseStyles = "rounded-lg border bg-white shadow-sm transition-all"
  
  const variants = {
    default: "border-gray-200",
    elevated: "border-gray-200 shadow-md hover:shadow-lg",
    bordered: "border-gray-300",
    ghost: "border-transparent shadow-none"
  }
  
  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "", ...props }) {
  return (
    <div
      className={`border-b border-gray-200 p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div
      className={`p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardFooter({ children, className = "", ...props }) {
  return (
    <div
      className={`border-t border-gray-200 p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
} 