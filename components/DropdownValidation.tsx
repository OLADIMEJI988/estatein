"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface DropdownProps {
  title: string;
  options: string[];
  placeholder: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onSelect?: (option: string) => void;
  selected?: string;
}

export default function DropdownValidation({
  title,
  options,
  placeholder,
  isOpen: controlledIsOpen,
  onToggle,
  onSelect,
  selected: controlledSelected,
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpenUncontrolled, setIsOpenUncontrolled] = useState(false);
  const [selectedUncontrolled, setSelectedUncontrolled] = useState("");

  const isOpen = controlledIsOpen ?? isOpenUncontrolled;
  const selected = controlledSelected ?? selectedUncontrolled;

  const toggleDropdown = () => {
    if (onToggle) onToggle();
    else setIsOpenUncontrolled(!isOpenUncontrolled);
  };

  const handleSelect = (option: string) => {
    if (onSelect) onSelect(option);
    else setSelectedUncontrolled(option);

    if (onToggle) onToggle();
    else setIsOpenUncontrolled(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          if (onToggle) onToggle();
          else setIsOpenUncontrolled(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className="tracking-wide flex flex-col w-full" ref={dropdownRef}>
      {/* Label */}
      <p className="mb-2">{title}</p>

      {/* Trigger */}
      <div
        className="flex items-center border mt-1 bg-[#191919] p-3 rounded-md cursor-pointer border-[#262626]"
        onClick={toggleDropdown}
      >
        <p
          className={`tracking-wide text-[14px] ${
            selected ? "text-white" : "text-[#666666]"
          }`}
        >
          {selected || placeholder}
        </p>

        <div
          className={`ml-auto transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <Image
            className="h-[17px] w-[17px]"
            src="/whitearrowdown.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Options */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] mt-2 border border-[#262626]" : "max-h-0"
        } rounded-md bg-[#141414]`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleSelect(option)}
            className="px-4 py-3 text-[14px] text-[#999999] hover:bg-[#191919] border-b border-[#262626] cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
