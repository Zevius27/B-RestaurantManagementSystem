import { Input } from "../ui/Input"

export function FormField({
  label,
  error,
  className = "",
  ...props
}) {
  const id = props.id || props.name

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <Input
        id={id}
        error={error}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
} 