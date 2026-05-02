"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/img/image1.jpeg",
  "/img/image2.jpeg",
  "/img/image3.jpeg",
  "/img/image4.jpeg",
  "/img/image5.jpeg",
  "/img/image6.jpeg",
  "/img/image7.jpeg",
  "/img/image8.jpeg",
  "/img/image9.jpeg",
  "/img/image10.jpeg",
];

const Gallery = () => {
  return (
    <section className="bg-[#050505] text-white py-24 px-6 font-main">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-red-500 shrink-0" />
            <p className="text-red-500 uppercase tracking-widest text-sm leading-none">
              GALLERY
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-title font-normal leading-tight">
            VIRTUAL <span className="text-red-600">TOUR</span>
          </h2>

          <p className="text-white text-lg mt-4 max-w-md">
            Explore our space, from gym floors to relaxation zones, every corner
            is built for your transformation.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 auto-rows-[200px]">
          
          {images.map((src, i) => {
            // 🔥 Custom layout (this is what makes it premium)
            const spanClass =
              i === 0
                ? "md:col-span-2 md:row-span-2"
                : i === 3
                ? "md:col-span-2"
                : i === 5
                ? "md:row-span-2"
                : "";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden group ${spanClass}`}
              >
                <Image
                  src={src}
                  alt={`gallery-${i}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

                {/* Optional label */}
                <div className="absolute bottom-3 left-3 text-sm text-white opacity-0 group-hover:opacity-100 transition">
                  PrimeTime Wellness
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;