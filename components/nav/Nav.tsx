"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../ui/Icon";
import Image from "next/image";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background after scroll
      setScrolled(currentScrollY > 50);

      // Show/hide nav based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
              ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
          >
            <div className="px-6 md:px-16 py-4 flex justify-between items-center">
              {/* LOGO */}
              <div>
                <Image
                  width={73}
                  height={68}
                  className="object-fit"
                  src={"/logo.png"}
                  alt="LOGO"
                />
              </div>

              {/* DESKTOP MENU */}
              <div className="hidden md:flex items-center gap-8 text-white font-medium">
                <a href="#about" className="hover:text-red-500 transition">
                  About
                </a>
                <a href="#programs" className="hover:text-red-500 transition">
                  Programs
                </a>
                <a href="#facilities" className="hover:text-red-500 transition">
                  Facilities
                </a>
                <a href="#membership" className="hover:text-red-500 transition">
                  Membership
                </a>

                <div className="">
                  <a
                    href="https://wa.me/2349068457729?text=Hi%20I%27m%20interested%20in%20joining%20the%20gym"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold transition text-center"
                  >
                    Join Now
                  </a>
                </div>
              </div>

              {/* MOBILE MENU BUTTON */}
              <div className="md:hidden">
                <button onClick={() => setMenuOpen(true)}>
                  <Icon type="menu" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-[75%] h-full bg-black text-white p-6 z-50"
          >
            {/* CLOSE */}
            <div
              className="flex justify-end mb-6"
              onClick={() => setMenuOpen(false)}
            >
              <Icon type="xicon" />
            </div>

            {/* MENU ITEMS */}
            <nav className="flex flex-col gap-6 text-lg">
              <a href="/home">Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
                  About
                </a>
                <a href="#programs" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
                  Programs
                </a>
                <a href="#facilities" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
                  Facilities
                </a>
                <a href="#membership" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">
                  Membership
                </a>
            </nav>

            <div className="mt-10">
              <a
                href="https://wa.me/2349068457729?text=Hi%20I%27m%20interested%20in%20joining%20the%20gym"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold transition text-center"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
