"use client";

import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-[#0b0000] text-white py-20 px-6 font-main">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative group">
          <div className="relative overflow-hidden border border-red-900/30">
            <Image
              src="/img/whoweare.jpg"
              alt="fitness"
              width={600}
              height={750}
              className="object-cover w-full h-[500px] md:h-[600px]"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-0 right-0 w-[80%] bg-black/90 px-6 py-5 flex justify-between text-center border-t border-red-900/30">
            <div>
              <h3 className="text-red-600 text-4xl text-left font-title ">6+</h3>
              <p className="text-sm text-white">Fitness Programs</p>
            </div>

            <div>
              <h3 className="text-red-600 text-4xl text-left font-title ">4</h3>
              <p className="text-sm text-white">World-class facilities</p>
            </div>

            <div>
              <h3 className="text-red-600 text-4xl text-left font-title ">100%</h3>
              <p className="text-sm text-white">Committed to you</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="border border-red-900/30 p-8 md:p-10 bg-black/40 backdrop-blur-sm">
          
          <div className="flex items-center gap-2">
          <span className="w-6 h-[1px] bg-red-500 shrink-0" />

          <p className="text-red-500 uppercase tracking-widest text-sm leading-none">
            WHO WE ARE
          </p>
        </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-6xl font-normal leading-tight font-title">
            BUILT FOR THE <br />
            <span className="text-red-600">SERIOUS YOU</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-sm leading-relaxed">
            Primetime Wellness is more than a gym — it's Ibadan’s most complete
            wellness destination. We built this space for people who are serious
            about transformation: physically, mentally, and socially.
          </p>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Whether you're here to lift heavy, find your inner calm, cool off in
            the pool, or dominate on the pitch — we have everything you need.
            Our expert trainers, state-of-the-art equipment, and warm community
            make every visit count.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-8 text-sm">
            {[
              "Expert Trainers",
              "Modern Equipment",
              "All Fitness Levels",
              "Warm Community",
              "Indoor & Outdoor",
              "Safe Environment",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 inline-block" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-10 bg-red-600 hover:bg-red-700 px-6 py-3 text-sm font-semibold transition">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}