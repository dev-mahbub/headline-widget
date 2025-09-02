import React from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  data: SelectOption[];
  data_label?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  data,
  data_label,
  className,
  ...props
}) => {
  return (
    <select
      {...props}
      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm ${
        className ?? ""
      }`}
    >
      {data_label && <option value="">{data_label}</option>}
      {data.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
