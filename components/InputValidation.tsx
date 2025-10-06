"use client";

import React, { useState } from "react";

interface InputProps {
  title: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp; // custom regex validation
  errorMessage?: string; // custom error message
  onChange?: (value: string) => void;
}

export default function InputValidation({
  title,
  placeholder,
  required = false,
  minLength,
  maxLength,
  pattern,
  errorMessage,
  onChange,
}: InputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (val: string) => {
    if (required && !val.trim()) {
      return "This field is required.";
    }
    if (minLength && val.length < minLength) {
      return `Must be at least ${minLength} characters.`;
    }
    if (maxLength && val.length > maxLength) {
      return `Must be less than ${maxLength} characters.`;
    }
    if (pattern && !pattern.test(val)) {
      return errorMessage || "Invalid format.";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);

    const validationError = validate(val);
    setError(validationError);

    if (onChange) onChange(val);
  };

  return (
    <div className="tracking-wide flex flex-col w-full">
      <p className="mb-2">{title}</p>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`border mt-1 bg-[#191919] placeholder:text-[13px] placeholder:text-[#666666] p-3 rounded-md focus:outline-none cursor-pointer ${
          error ? "border-red-500" : "border-[#262626] focus:border-[#703BF7]"
        }`}
      />
      {error && (
        <span className="text-red-500 text-[12px] mt-1 ml-auto">{error}</span>
      )}
    </div>
  );
}
