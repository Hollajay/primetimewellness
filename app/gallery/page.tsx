"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const allImages = [
  "/img/image1.jpg",
  "/img/image2.jpg",
  "/img/image3.jpg",
  "/img/image5.jpg",
  "/img/image10.jpg",
  "/img/image6.jpg",
  "/img/image7.jpg",
  "/img/image8.jpg",
  "/img/image9.jpg",
  "/img/image12.jpg",
  "/img/image11.jpg",
  "/img/image4.jpg",
];

export default function GalleryPage() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-title mt-3">
            FULL <span className="text-red-600">GALLERY</span>
          </h2>
          <p className="text-sm text-white/90 mb-6 max-w-lg">
            Explore our full gallery and get a complete view of our space. From
            training areas to recovery zones, every section of our gym is
            designed to support performance, comfort, and consistency. This is
            where structure meets motivation, and where your fitness journey
            comes to life visuall
          </p>
        </motion.div>

        {/* MASONRY */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {allImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid overflow-hidden"
            >
              <div className="relative w-full h-auto group">
                <Image
                  src={src}
                  alt={`gallery-${i}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition duration-500"
                />

                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
