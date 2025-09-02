import React, { forwardRef, useEffect, useRef } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isFocused?: boolean;
  placeholder?: string; // ✅ corrected spelling (instead of placeHolder)
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { type = "text", placeholder, className = "", isFocused = false, ...props },
    ref
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);

    // merge ref (forwarded + local)
    const setRef = (el: HTMLInputElement | null) => {
      innerRef.current = el;
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
      }
    };

    useEffect(() => {
      if (isFocused && innerRef.current) {
        innerRef.current.focus();
      }
    }, [isFocused]);

    return (
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className={`w-full ${className}`}
        ref={setRef}
      />
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
