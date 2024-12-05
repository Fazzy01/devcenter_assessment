import Input from '../shared/Input'
import Label from '../shared/Label'


export function FormField({ id, name, value, label, type, required = false, autoComplete, placeholder, helpText, error }) {
  return (
    <div className='flex flex-col'>
      <Label htmlFor={id} required={required}>{label}</Label>
      <Input
        id={id}
        name={name}
        value={value}
        type={type}
        required={required}
        aria-required={required ? "true" : undefined}
        placeholder = {placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        className="mt-1"
      />
      {helpText && <p id={`${id}-help`} className="mt-2 text-sm text-gray-500">{helpText}</p>}
      {error && <p id={`${id}-error`} className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

