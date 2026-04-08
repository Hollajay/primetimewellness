"use client";

import { motion } from "framer-motion";
import { FaPhone, FaMailBulk, FaInstagram } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <section className="bg-[#050505] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-red-600 text-xs uppercase mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            LET’S TALK <br />
            <span className="text-red-600">WELLNESS</span>
          </h2>

          <p className="text-gray-400 text-sm mt-4 max-w-md">
            Have questions? Want to book a tour? Ready to join?
            Reach us through any of the channels below — we respond fast.
          </p>

          {/* Contact Cards */}
          <div className="mt-8 space-y-4">

            {/* WhatsApp */}
            <div className="border border-red-900/40 p-5 flex items-center gap-4 bg-[#0a0a0a]">
              <FaPhone className="text-red-600" size={18} />
              <div>
                <p className="text-xs text-gray-400">PRIMETIME WHATSAPP</p>
                <p className="text-sm font-semibold">0813 786 3252</p>
              </div>
            </div>

            {/* Email */}
            <div className="border border-red-900/40 p-5 flex items-center gap-4 bg-[#0a0a0a]">
              <FaMailBulk className="text-red-600" size={18} />
              <div>
                <p className="text-xs text-gray-400">EMAIL</p>
                <p className="text-sm font-semibold">
                  primetimewellness@gmail.com
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="border border-red-900/40 p-5 flex items-center gap-4 bg-[#0a0a0a]">
              <FaInstagram className="text-red-600" size={18} />
              <div>
                <p className="text-xs text-gray-400">INSTAGRAM</p>
                <p className="text-sm font-semibold">@primetimewellness</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <button className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 text-sm font-semibold transition">
            Message us on WhatsApp
          </button>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1a1a1a] p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold mb-2">
            BOOK A FREE TOUR
          </h3>

          <p className="text-sm text-gray-400 mb-6">
            Come see the facilities for yourself. No commitment required.
          </p>

          {/* Form */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#2a2a2a] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-red-600"
            />

            <input
              type="text"
              placeholder="Phone / WhatsApp"
              className="w-full bg-[#2a2a2a] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-red-600"
            />

            <select
              className="w-full bg-[#2a2a2a] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-red-600"
            >
              <option>Select a Program or Facility</option>
              <option>Gym</option>
              <option>Spa</option>
              <option>Swimming</option>
              <option>Football</option>
            </select>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 text-sm font-semibold transition"
            >
              Send Via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}