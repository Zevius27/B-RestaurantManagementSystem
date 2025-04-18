export function NavLink({ 
  href, 
  children, 
  active = false,
  icon,
  className = "",
  ...props 
}) {
  return (
    <a
      href={href}
      className={`
        flex items-center gap-3 rounded-md px-3 py-2 text-sm 
        transition-colors hover:bg-gray-100
        ${active ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="flex h-5 w-5 items-center">{icon}</span>}
      <span>{children}</span>
    </a>
  )
} 