"use client";

import { motion } from "framer-motion";
import Icon from "./ui/Icon";

const facilities = [
  {
    icon: 'gym',
    title: "GYM (INDOOR & OUTDOOR)",
    desc: "State-of-the-art equipment for strength training, cardio, and functional fitness. Our indoor facility is air-conditioned and outdoor spaces offer fresh-air training experiences.",
  },
  {
    icon: "spa",
    title: "SPA",
    desc: "Recovery is part of the process. Unwind in our full-service spa designed to soothe sore muscles, reduce stress, and restore your body after intense training sessions or long weeks.",
  },
  {
    icon: 'swimming',
    title: "SWIMMING POOL",
    desc: "Cool down, train, or relax in our modern swimming pool. Ideal for low-impact training, cooling off post-workout, or simply enjoying a peaceful swim at your own pace.",
  },
  {
    icon: 'football',
    title: "5-ASIDE PITCH",
    desc: "Top-quality turf for team games, group training, or competitive 5-a-side matches. A perfect way to stay active with friends, colleagues, or family.",
  },
];

export default function Facilities() {
  return (
    <section className="bg-[#050505] text-white py-24 px-6 font-main">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <div className="flex items-center gap-2">
          <span className="w-6 h-[1px] bg-red-500 shrink-0" />

          <p className="text-red-500 uppercase tracking-widest text-sm leading-none">
            OUR SPACES
          </p>
        </div>

          <h2 className="text-5xl md:text-6xl font-normal font-title leading-tight">
            WORLD-CLASS <span className="text-primary">PROGRAMS</span>
          </h2>

          <p className="text-gray-400 text-sm mt-3 max-w-md">
            Everything you need in one place. Built for performance, comfort, and community.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.015 }}
              className="relative border border-red-900/40 p-8 bg-[#0a0a0a] group transition"
            >
              {/* Top Left Accent */}
              <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-red-600"></div>
               <div className="py-3">
                <Icon type={item.icon} />
               </div>
              {/* Title */}
              <h3 className="text-2xl font-normal font-title mb-4 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Hover border glow */}
              <div className="absolute inset-0 border border-red-600 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}