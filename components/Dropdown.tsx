"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface DropdownProps {
  img: string;
  title: string;
  options: string[];
  isOpen?: boolean; 
  onToggle?: () => void;
  onSelect?: (option: string) => void;
  selected?: string; 
}

export default function Dropdown({
  img,
  title,
  options,
  isOpen: controlledIsOpen,
  onToggle,
  onSelect,
  selected: controlledSelected,
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpenUncontrolled, setIsOpenUncontrolled] = useState(false);
  const [selectedUncontrolled, setSelectedUncontrolled] = useState(title);

  const isOpen = controlledIsOpen ?? isOpenUncontrolled;
  const selected = controlledSelected ?? selectedUncontrolled;

  const toggleDropdown = () => {
    if (onToggle) {
      onToggle();
    } else {
      setIsOpenUncontrolled(!isOpenUncontrolled);
    }
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div className="relative w-[210px]" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <div
        className={`bg-[#141414] flex items-center border rounded-[8px] tracking-wide px-[12px] py-[10px] cursor-pointer ${
          isOpen ? "border-[#703BF7]" : "border-[#262626]"
        }`}
        onClick={toggleDropdown}
      >
        <Image
          className="h-[17px] w-[17px]"
          src={img}
          alt=""
          width={20}
          height={20}
          priority
        />

        <div className="h-[16px] mx-[8px] bg-[#262626] w-[0.5px]"></div>
        <p className="text-[#999999] tracking-wide text-[14px]">{selected}</p>

        <div
          className={`bg-[#191919] p-1 rounded-full ml-auto transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <Image
            className="h-[17px] w-[17px]"
            src="/whitearrowdown.svg"
            alt=""
            width={20}
            height={20}
            priority
          />
        </div>
      </div>

      {/* Dropdown Options */}
      <div
        className={`mt-2 w-full absolute bg-[#141414] border border-[#703BF7] rounded-md shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
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
