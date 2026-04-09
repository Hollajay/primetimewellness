"use client";

import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";

export default function PreSignupSection() {
  return (
    <section className="w-full bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative h-[500px] w-full overflow-hidden">
          <Image
           width={1000}
           height={1000}
            src="/img/membership.jpg"
            alt="Gym"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-deepprimary p-8 md:p-10 text-white">

          {/* Tag */}
          <span className="text-xs uppercase tracking-widest bg-white/20 px-3 py-1 inline-block mb-4">
            Limited Spot Available
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Introductory <br /> Pre-Signup Offer
          </h2>

          {/* Description */}
          <p className="text-sm text-white/90 mb-6">
            Join before we officially open and lock in exclusive founding
            member rates. Get early access and be part of the Primetime
            fitness community from day one.
          </p>

          {/* FEATURES */}
          <div className="space-y-3 mb-6">
            {[
              "Flexible Membership Plans",
              "Full Access to Fitness Facilities",
              "Professional Trainer Assistance",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FiCheckCircle className="text-white" size={18} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* PRICING */}
          <div className="space-y-3 mb-6">
            <div className="bg-white text-black px-4 py-2 text-sm font-semibold">
              Couples/Pair – 40K Monthly
            </div>
            <div className="bg-white text-black px-4 py-2 text-sm font-semibold">
              Single – 25K Monthly
            </div>
          </div>

          {/* VALIDITY */}
          <p className="text-xs text-white/80 mb-6">
            Offer valid till April 15th
          </p>

          {/* CTA */}
          <button className="bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-neutral-900 transition">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}