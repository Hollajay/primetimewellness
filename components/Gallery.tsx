"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const previewImages = [
  "/img/image1.jpg",
  "/img/image2.jpg",
  "/img/image3.jpg",
  "/img/image4.jpg",
];

const Gallery = () => {
  return (
    <section className="bg-[#050505] text-white py-24 px-6 font-main">
      <div className="max-w-7xl mx-auto ">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 ">
            <span className="w-6 h-[1px] bg-red-500" />
            <p className="text-red-500 uppercase tracking-widest text-sm">
              GALLERY
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-title mt-3">
            VIRTUAL <span className="text-red-600">TOUR</span>
          </h2>
          <p className="text-sm text-white/90 mb-6 max-w-lg">
            Explore our space, from gym floors to relaxation zones, every corner is built for your transformation.
          </p>
        </motion.div>

        {/* GRID (ONLY 5 IMAGES) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 auto-rows-[200px]">
          {previewImages.map((src, i) => {
            const spanClass =
              i === 0
                ? "md:col-span-2 md:row-span-2"
                : i === 3
                ? "md:col-span-2"
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
              </motion.div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 text-center"
        >
          <Link href="/gallery">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 text-sm font-semibold transition">
              View Full Gallery
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;