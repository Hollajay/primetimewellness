"use client";

import { motion } from "framer-motion";
import { FaPhone, FaMailBulk, FaInstagram } from "react-icons/fa";
import CustomSelect from "./ui/CustomSelect";

export default function GetInTouch() {
  return (
    <section className="bg-[#050505] text-white py-24 px-6 font-main">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-red-500 shrink-0" />

            <p className="text-red-500 uppercase tracking-widest text-sm leading-none">
              GET IN TOUCH
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-title font-normal leading-tight">
            LET’S TALK <span className="text-red-600">WELLNESS</span>
          </h2>

          <p className="text-white text-lg mt-4 max-w-md">
            Have questions? Want to book a tour? Ready to join? Reach us through
            any of the channels below — we respond fast.
          </p>

          {/* Contact Cards */}
          <div className="mt-8 space-y-4">
            {/* WhatsApp */}
            <div className="border border-red-900/40 p-5 flex items-center gap-4 bg-[#0a0a0a]">
              <FaPhone className="text-red-600" size={18} />
              <div>
                <p className="text-lg text-primary font-light font-title">
                  PHONE/WHATSAPP
                </p>
                <p className="text-sm font-normal">0803 706 0002</p>
                <p className="text-sm font-normal">0814 000 3050</p>
              </div>
            </div>

            {/* Email */}
            <div className="border border-red-900/40 p-5 flex items-center gap-4 bg-[#0a0a0a]">
              <FaMailBulk className="text-red-600" size={18} />
              <div>
                <p className="text-lg font-title font-normal text-primary">
                  EMAIL
                </p>
                <p className="text-sm font-normal">
                  primetimewellness@gmail.com
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="border border-red-900/40 p-5 flex items-center gap-4 bg-[#0a0a0a]">
              <FaInstagram className="text-red-600" size={18} />
              <div>
                <p className="text-lg text-primary font-title font-extralight">
                  INSTAGRAM
                </p>
                <p className="text-sm font-normal">@primetimewellness</p>
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
          className="bg-footerblack p-8 md:p-10"
        >
          <h3 className="text-4xl font-title font-normal mb-2">
            BOOK A FREE TOUR
          </h3>

          <p className="text-lg text-white mb-6">
            Come see the facilities for yourself. No commitment required.
          </p>

          {/* Form */}
          <form className="space-y-8">
            <div className=" flex flex-col gap-2">
              <label className="text-lg font-light ">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-inputbg px-4 py-3 text-lg placeholder:text-white placeholder:font-extralight  outline-none border-[1px] border-white "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-lg font-light">Phone / WhatsApp</label>
              <input
              type="text"
              placeholder="e.g 08034567890"
              className="w-full bg-inputbg px-4 py-3 text-lg placeholder:text-white placeholder:font-extralight outline-none border-[1px] border-white "
            />
            </div>
            
           <CustomSelect/>

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
