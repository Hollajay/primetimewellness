"use client";

import { useState } from "react";
import CustomSelect from "./ui/CustomSelect";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    program: "",
  });

  const phoneNumber = "2348012345678";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello, I would like to register for Primetime Wellness.

Full Name: ${form.name}
Phone: ${form.phone}
Program: ${form.program}

Kindly assist me with the next steps.
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-extralight font-title">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full bg-inputbg px-4 py-3 text-lg outline-none border border-white"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-light">
          Phone / WhatsApp
        </label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="e.g 08034567890"
          className="w-full bg-inputbg px-4 py-3 text-lg outline-none border border-white"
          required
        />
      </div>

      {/* Program */}
      {/* <div className="flex flex-col gap-2">
        <label className="text-lg font-light">
          Select Program
        </label>
        <select
          name="program"
          value={form.program}
          onChange={handleChange}
          className="w-full bg-inputbg px-4 py-3 text-lg outline-none border border-white "
          required
        >
          <option className="accent-amber-700" value="">Choose a program</option>
          <option value="Gym Membership">Gym Membership</option>
          <option value="Swimming">Swimming</option>
          <option value="Yoga">Yoga</option>
          <option value="HIIT">HIIT</option>
        </select>
      </div> */}

      <CustomSelect
  value={form.program}
  onChange={(val: any ) => setForm({ ...form, program: val })}
/>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 py-3 text-sm font-semibold transition"
      >
        Send Via WhatsApp
      </button>
    </form>
  );
}