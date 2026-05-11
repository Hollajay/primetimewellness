"use client";

import { useState } from "react";
import CustomSelect from "./ui/CustomSelect";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    sex: "",
    phone: "",
    program: "",
  });

  const phoneNumber = "2349068457729";

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      // ✅ SAVE TO FIREBASE
      await addDoc(collection(db, "registrations"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      toast.success("Registration saved successfully!");

      // ✅ WHATSAPP MESSAGE
      const message = `
Hello, I would like to register for Primetime Wellness.

Full Name: ${form.name}
Email: ${form.email}
Sex: ${form.sex}
Phone: ${form.phone}
Program: ${form.program}

Kindly assist me with the next steps.
      `;

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      // RESET FORM
      setForm({
        name: "",
        email: "",
        sex: "",
        phone: "",
        program: "",
      });

      // OPEN WHATSAPP
      window.open(url, "_blank");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-light">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full bg-inputbg px-4 py-2 text-lg outline-none border border-white"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-light">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="johnola@gmail.com"
          className="w-full bg-inputbg px-4 py-2 text-lg outline-none border border-white"
          required
        />
      </div>

      {/* Sex */}
      <CustomSelect
        label="Sex"
        options={["Male", "Female"]}
        value={form.sex}
        onChange={(val: string) => setForm({ ...form, sex: val })}
        placeholder="Select your sex"
      />

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-light">Phone / WhatsApp</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="e.g 08034567890"
          className="w-full bg-inputbg px-4 py-2 text-lg outline-none border border-white"
          required
        />
      </div>

      {/* Program */}
      <CustomSelect
        label="Program / Facility"
        options={["Gym", "Spa", "Swimming", "Football"]}
        value={form.program}
        onChange={(val: string) => setForm({ ...form, program: val })}
        placeholder="Select a program"
      />

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 py-3 text-sm font-semibold transition disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Send Via WhatsApp"}
      </button>
    </form>
  );
}