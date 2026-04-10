"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/img/hero3.jpg",
  "/img/hero2.jpg",
  "/img/hero1.jpg",
  "https://images.unsplash.com/photo-1560090995-01632a28895b",
];

export default function Hero() {
const phone = "2348149776078";
const createWhatsAppLink = (message: string) => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden text-white">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a0000]/80 to-transparent z-10" />

      {/* Extra Red Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000]/10 to-black z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-left">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <span className="w-8 h-[1px] bg-red-500 shrink-0" />

          <p className="text-red-500 uppercase font-main tracking-widest text-sm leading-none">
            Ibadan’s Premier Wellness Center
          </p>
        </div>

        <div className="relative max-w-xl ">
          <span className="absolute  right-[-30px] top-[28px] mt-3 bg-deepprimary text-xs px-3 py-1 rounded hidden md:block">
            Wellness with Purpose
          </span>

          <h1 className="text-[62px] md:text-[90px] font-title font-normal leading-tight md:text-left text-center">
            YOUR <span className="text-red-600">PRIME</span> TIME
          </h1>
          <span className="md:hidden flex items-center justify-center py-1 text-center bg-deepprimary text-xs px-3  rounded">
            Wellness with Purpose
          </span>
        </div>

        <div className="flex flex-row items-center justify-center md:justify-start mt-4 md:mt-1 gap-3">
          <span className="w-2 h-[1px] bg-white shrink-0" />

          <p className="text-white uppercase font-title leading-tight tracking-widest text-2xl ">
            AKOBO AXIS
          </p>
          <span className="w-2 h-[1px] bg-white shrink-0" />
        </div>

         
        {/* Description */}
        <p className="mt-6 max-w-xl text-gray-300 text-sm md:text-base font-main font-normal">
          Train hard. Recover well. Live fully. Primetime Wellness is Ibadan's
          most complete wellness experience — gym, spa, pool, fitness classes,
          and more under one roof.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8 w-full   items-center">
          <a
            href={createWhatsAppLink("Hello, I'm interested in Primetime Wellness services. I would like to inquire about membership options and available programs. Kindly assist me with the details.")}
            target="_blank"
            className="w-full md:w-auto bg-red-600 hover:bg-red-700 px-6 py-3 font-main font-semibold transition inline-block text-center"
          >
            Book Now
          </a>
      
          <button className="w-full md:w-auto border border-white px-6 py-3 hover:bg-white font-semibold font-main hover:text-black transition">
            Explore Programs
          </button>
        </div>

        {/* Stats */}
      </div>

      {/* Bottom Scroller */}
    </section>
  );
}
