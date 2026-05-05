"use client";

import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function MembershipSection() {
  const phone = "2348149776078";

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="w-full bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT VIDEO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative h-[600px] w-full overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="object-cover w-full h-full"
          >
            <source src="/video/primetime3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-deepprimary p-8 md:p-10 text-white"
        >
          {/* Tag */}
          <span className="text-xs  uppercase tracking-widest bg-red-700/70 px-3 py-1 inline-block mb-4">
            Now Open
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Join PrimeTime <br /> Wellness Today
          </h2>

          {/* Description */}
          <p className="text-sm text-white/90 mb-6">
            PrimeTime Wellness is officially open. Step into a complete fitness
            experience with world-class facilities, expert trainers, and a
            supportive community built to help you reach your goals.
          </p>

          {/* FEATURES */}
          <div className="space-y-3 mb-6">
            {[
              "Fully Equipped Modern Gym",
              "Access to Swimming Pool & Spa",
              "Professional Trainer Guidance",
              "Football & Outdoor Facilities",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FiCheckCircle size={18} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* PRICING */}
          <div className="space-y-3 mb-6">
            <div className="bg-white text-black px-4 py-2 text-sm font-semibold">
              Couples/Pair – ₦40,000 Monthly
            </div>
            <div className="bg-white text-black px-4 py-2 text-sm font-semibold">
              Single – ₦25,000 Monthly
            </div>
          </div>

          {/* CTA */}
          <a
            href={createWhatsAppLink(
              "Hello, I’m interested in joining PrimeTime Wellness. Please provide more details about membership plans and how to get started.",
            )}
            target="_blank"
            className="bg-red-600 px-6 py-3 text-sm font-semibold hover:bg-red-700 transition"
          >
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
