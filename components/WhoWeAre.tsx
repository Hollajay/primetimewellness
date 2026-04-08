"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  // 🔹 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#0b0000] text-white py-20 font-main overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        
        {/* LEFT IMAGE */}
        <motion.div variants={fadeLeft} className="relative group">
          <div className="relative overflow-hidden border border-red-900/30">
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/img/whoweare.jpg"
                alt="fitness"
                width={600}
                height={750}
                className="object-cover w-full h-[500px] md:h-[600px]"
              />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          {/* Stats Overlay */}
          <motion.div
            variants={fadeUp}
            className="absolute bottom-0 right-0 w-full md:w-[80%] gap-2 bg-black/90 px-6 py-5 flex justify-between text-center border-t border-red-900/30"
          >
            {[
              { num: "6+", text: "Fitness Programs" },
              { num: "4", text: "World-class facilities" },
              { num: "100%", text: "Committed to you" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-left"
              >
                <h3 className="text-red-600 text-3xl md:text-4xl font-title">
                  {item.num}
                </h3>
                <p className="text-xs md:text-sm text-white">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={fadeRight}
          className="border border-red-900/30 p-6 md:p-10 bg-black/40 backdrop-blur-sm"
        >
          {/* Top Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-red-500 shrink-0" />
            <p className="text-red-500 uppercase tracking-widest text-sm leading-none">
              WHO WE ARE
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl font-normal leading-tight font-title mt-4"
          >
            BUILT FOR THE <br />
            <span className="text-red-600">SERIOUS YOU</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-400 text-sm leading-relaxed"
          >
            Primetime Wellness is more than a gym — it's Ibadan’s most complete
            wellness destination. We built this space for people who are serious
            about transformation: physically, mentally, and socially.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-400 text-sm leading-relaxed"
          >
            Whether you're here to lift heavy, find your inner calm, cool off in
            the pool, or dominate on the pitch — we have everything you need.
            Our expert trainers, state-of-the-art equipment, and warm community
            make every visit count.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 gap-y-3 gap-x-6 mt-8 text-sm"
          >
            {[
              "Expert Trainers",
              "Modern Equipment",
              "All Fitness Levels",
              "Warm Community",
              "Indoor & Outdoor",
              "Safe Environment",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-red-600 inline-block" />
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-red-600 hover:bg-red-700 px-6 py-3 text-sm font-semibold transition"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}