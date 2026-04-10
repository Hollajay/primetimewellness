"use client";

import { motion } from "framer-motion";
import CustomSelect from "./ui/CustomSelect";
import Icon from "./ui/Icon";
import ContactForm from "./Form";

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
              <Icon type="phone" />
              <div>
                <p className="text-lg text-primary font-light font-title">
                  PHONE/WHATSAPP
                </p>
                <p className="text-sm font-normal">09116718650</p>
                <p className="text-sm font-normal">09068457729</p>
              </div>
            </div>

            {/* Email */}
            <div className="border border-red-900/40 p-5 flex items-center gap-4 bg-[#0a0a0a]">
              <Icon type="mail" />
              <div>
                <p className="text-lg font-title font-normal text-primary">
                  EMAIL
                </p>
                <p className="text-sm font-normal">
                  primetimewellnessng@gmail.com
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="border border-red-900/40 p-5 flex items-center gap-4 bg-[#0a0a0a]">
              <Icon type="instagram" />
              <div>
                <p className="text-lg text-primary font-title font-extralight">
                  INSTAGRAM
                </p>
                <p className="text-sm font-normal">@primetimewellnessng</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
           <div className="flex items-start">
            <a
              href="https://wa.me/2348149776078?text=Hi%20I%27m%20interested%20in%20joining%20the%20gym"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex flex-row gap-2 items-center rounded justify-center bg-green-600 hover:bg-green-700 px-6 py-4 text-lg font-semibold transition"
            >
              <span>
                <Icon type="whatsapp" />
              </span>
              Message us on WhatsApp
            </a>
            </div>
          
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
          <ContactForm/>
        </motion.div>
      </div>
    </section>
  );
}
