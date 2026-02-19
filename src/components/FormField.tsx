type FormFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "url";
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[];
  rows?: number;
};

export default function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
  error,
  as = "input",
  options,
  rows = 3,
}: FormFieldProps) {
  const inputBase =
    "w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-cyan focus:border-transparent transition-colors";
  const errorBorder = error ? "border-red-500" : "";

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`${inputBase} ${errorBorder} resize-none`}
        />
      ) : as === "select" && options ? (
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`${inputBase} ${errorBorder}`}
        >
          <option value="">Select...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${inputBase} ${errorBorder}`}
        />
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
