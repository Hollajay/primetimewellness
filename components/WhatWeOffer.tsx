"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const programs = [
  {
    title: "Aerobics",
    desc: "High-energy cardio sessions that get your heart pumping and calories burning. Fun, fast, effective.",
    image: "/img/aerobics.png",
  },
  {
    title: "Swimming",
    desc: "Full body, low-impact training in our pool. Perfect for recovery or competitive swim.",
    image: "/img/swimming.jpg",
  },
  {
    title: "Yoga",
    desc: "Balance your body and calm your mind. Flexibility, strength, and mental clarity.",
    image: "/img/yoga.jpg",
  },
  {
    title: "Boxing",
    desc: "Build power, speed, and confidence with expert-led boxing classes.",
    image: "/img/boxing.png",
  },
  {
    title: "HIIT",
    desc: "High-intensity interval training designed to maximize fat burn in minimal time.",
    image: "/img/hiit.jpg",
  },
  {
    title: "Bellyblast & Bodyweight Blast",
    desc: "Targeted core sessions + equipment-free total body workouts. Results you can see and feel.",
    image: "/img/bellyblast.jpg",
  },
];

export default function OurPrograms() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="bg-black text-white py-24 font-main">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 space-y-1 mb-16">
        <div className="flex items-center gap-2">
          <span className="w-6 h-[1px] bg-red-500 shrink-0" />

          <p className="text-red-500 uppercase font-main tracking-widest text-sm leading-none">
            WHAT WE OFFER
          </p>
        </div>
        <h2 className="text-5xl md:text-6xl font-normal font-title">
          OUR <span className="text-red-600">PROGRAMS</span>
        </h2>
        <p className="max-w-lg">
          Six powerful fitness programs, each designed to push your limits and
          deliver real results. Find your match.
        </p>
      </div>

      {/* MOBILE */}
      {isMobile ? (
        <div className="px-4">
          <Swiper
            modules={[Autoplay]}
            loop
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 1.1 },
              640: { slidesPerView: 2 },
            }}
          >
            {programs.map((item, i) => (
              <SwiperSlide key={i}>
                <MobileCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <DesktopLayout />
      )}
      <div className="flex items-center justify-center mt-6">
        <button className="w-auto bg-red-600 hover:bg-deepprimary px-6 py-4 font-main font-semibold transition">
          Ask About Classes
        </button>
      </div>
    </section>
  );
}

function DesktopLayout() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 ">
        {programs.map((item, i) => {
          // reverse layout for specific items
          const isReverse = i === 2 || i === 3; // yoga, boxing

          // red background logic
          const hasRedBg = i === 0 || i === 3 || i === 4; // aerobics, boxing, hiit

          return (
            <div
              key={i}
              className={`flex h-full ${isReverse ? "flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="w-1/2">
                <Image
                  src={item.image}
                  alt=""
                  width={600}
                  height={400}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Text */}
              <div
                className={`w-1/2 flex flex-col justify-center p-6 ${
                  hasRedBg
                    ? "bg-red-500 text-white"
                    : "bg-cardblack text-white-800"
                } 
                  
                `}
              >
                <h1 className="text-[42px] font-normal font-title text-center mb-3">
                  {item.title}
                </h1>
                <p className={`${hasRedBg ? "text-white/90" : ""} text-center`}>
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MobileCard({ item }: any) {
  return (
    <div className="bg-cardblack hover:bg-deepprimary overflow-hidden">
      {/* IMAGE */}
      <div className="relative h-[346px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* TEXT */}
      <div className="px-4 py-8 flex flex-col items-center justify-center">
        <h3 className="md:text-[42px] text-[30px] font-title font-normal text-center">
          {item.title}
        </h3>
        <p className="text-lg text-white  text-center mt-2">{item.desc}</p>
      </div>
    </div>
  );
}
