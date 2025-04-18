import { Input } from "../ui/Input";

export function FormField({
  label,
  id,
  error,
  description,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <Input
        id={id}
        error={!!error}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : description ? `${id}-description` : undefined}
        required={required}
        {...props}
      />
      {description && !error && (
        <p id={`${id}-description`} className="text-xs text-gray-500">
          {description}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
} 