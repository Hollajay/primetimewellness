"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
  "https://images.unsplash.com/photo-1560090995-01632a28895b",
];

export default function Hero() {
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

          <h1 className="text-5xl md:text-[90px] font-title font-normal leading-tight md:text-left text-center">
            YOUR <span className="text-red-600">PRIME</span> TIME
          </h1>
          <span className="md:hidden flex items-center justify-center py-1 text-center bg-deepprimary text-xs px-3  rounded">
            Wellness with Purpose
          </span>
        </div>

        {/* Description */}
        <p className="mt-6 max-w-xl text-gray-300 text-sm md:text-base font-main font-normal">
          Train hard. Recover well. Live fully. Primetime Wellness is Ibadan’s
          most complete wellness experience — gym, spa, pool, fitness classes,
          and more under one roof.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8 w-full   items-center">
          <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 px-6 py-3 font-main font-semibold transition">
            Book Now
          </button>

          <button className="w-full md:w-auto border border-white px-6 py-3 hover:bg-white font-semibold font-main hover:text-black transition">
            Explore Programs
          </button>
        </div>

        {/* Stats */}
        <div className="hidden lg:flex gap-10 mt-12 text-sm">
          <div>
            <h3 className="text-red-500 text-2xl font-bold">6+</h3>
            <p className="text-gray-400">Fitness Programs</p>
          </div>

          <div>
            <h3 className="text-red-500 text-2xl font-bold">4</h3>
            <p className="text-gray-400">World-class facilities</p>
          </div>

          <div>
            <h3 className="text-red-500 text-2xl font-bold">100%</h3>
            <p className="text-gray-400">Committed to YOU</p>
          </div>
        </div>
      </div>

      {/* Bottom Scroller */}
    </section>
  );
}
