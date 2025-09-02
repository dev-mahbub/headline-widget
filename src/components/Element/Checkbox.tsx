import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        "rounded border-gray-300 text-primary shadow-sm translate-y-[-1px] focus:ring-primary " +
        className
      }
    />
  );
};

export default Checkbox;
