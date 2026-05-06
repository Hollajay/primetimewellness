"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder,
}: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative font-main">
      
      {/* Label */}
      <label className="block text-lg font-extralight mb-2 text-white">
        {label}
      </label>

      {/* Select Box */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full bg-inputbg px-4 py-3 flex justify-between items-center cursor-pointer border-white border"
      >
        <span className="text-lg font-extralight">
          {value || placeholder}
        </span>

        <FaAngleDown
          className={`transition ${open ? "rotate-180" : ""}`}
          size={18}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-footerblack rounded-md overflow-hidden shadow-lg z-50">
          {options.map((item: string, index: number) => (
            <div
              key={index}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className={`px-4 py-3 text-lg cursor-pointer transition
                ${
                  value === item
                    ? "bg-red-600 text-white"
                    : "hover:bg-red-700"
                }`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}