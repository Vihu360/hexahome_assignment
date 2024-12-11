interface FilterCheckboxProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    checked: boolean;
  }
  
  export function FilterCheckbox({ label, value, onChange, checked }: FilterCheckboxProps) {
    return (
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          value={value}
          checked={checked}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="text-sm text-gray-600">{label}</span>
      </label>
    );
  }