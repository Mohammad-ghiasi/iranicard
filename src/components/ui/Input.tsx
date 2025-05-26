import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  name: string;
  register?: UseFormRegisterReturn;
  className?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FloatInput({
  label,
  name,
  register,
  className = "",
  error,
  ...rest
}: Props) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };


  return (
    <div className="relative w-full">
      {/* لیبل شناور */}
      <label
        htmlFor={name}
        className={`absolute right-3 px-1 bg-white text-gray-500 text-sm transition-all duration-200 pointer-events-none  ${focused
            ? "-top-2 text-xs text-blue-500"
            : "top-3 right-4"
          }`}
      >
        {label}
      </label>

      {/* input */}
      <input
        id={name}
        name={name}
        onFocus={handleFocus}
        {...register}
        className={`w-full border rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-0 transition-all
    ${error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-primary-200"} 
    focus:ring-2 ${className}`}
        {...rest}
      />


      {/* خطای ولیدیشن */}
      {error && <p className="text-[12px] text-red-500 mt-1">{error}</p>}
    </div>
  );
}



