"use client";

import { motion } from "framer-motion";

const items = [
  "HIIT",
  "•",
  "BELLYBLAST",
  "•",
  "SPA",
  "•",
  "AEROBICS",
  "•",
  "5-ASIDE PITCH",
  "•",
  "SWIMMING",
   "•",
   "HIIT",
  "•",
  "BELLYBLAST",
  "•",
  "SPA",
  "•",
  "AEROBICS",
  "•",
  "5-ASIDE PITCH",
  "•",
  "SWIMMING",
];

export default function Marquee() {
  return (
    <div className="absolute bottom-0 w-full bg-red-800 text-white font-bold text-[20px] py-3 overflow-hidden z-20">
      
      <motion.div
        className="flex gap-10 whitespace-nowrap px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {/* Duplicate content for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </motion.div>

    </div>
  );
}