"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const options = ["Gym", "Spa", "Swimming", "Football"];

export default function CustomSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select a Program or Facility");

  return (
    <div className="w-full relative font-main">
      {/* Label */}
      <label className="block text-lg font-extralight mb-2 text-white">
        Program / Facility
      </label>

      {/* Select Box */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full bg-inputbg px-4 py-3 flex justify-between items-center cursor-pointer border-white border-[1px] "
      >
        <span className="text-lg font-extralight">{selected}</span>
        <FaAngleDown
          className={`transition ${open ? "rotate-180" : ""}`}
          size={18}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-footerblack rounded-md overflow-hidden shadow-lg z-50">
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="px-4 py-3 text-lg  hover:bg-red-700 cursor-pointer transition"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
