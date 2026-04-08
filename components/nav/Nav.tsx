"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../ui/Icon";

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
               <Icon type={'logo'} />
              </div>

              {/* DESKTOP MENU */}
              <div className="hidden md:flex items-center gap-8 text-white font-medium">
                <a href="#" className="hover:text-red-500 transition">About</a>
                <a href="#" className="hover:text-red-500 transition">Programs</a>
                <a href="#" className="hover:text-red-500 transition">Facilities</a>
                <a href="#" className="hover:text-red-500 transition">Membership</a>

                <button className="bg-red-600 px-5 py-2 hover:bg-red-700 transition">
                  Join Now
                </button>
              </div>

              {/* MOBILE MENU BUTTON */}
              <div className="md:hidden">
                <button onClick={() => setMenuOpen(true)}>
                  <FiMenu className="text-white text-2xl" />
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
            <div className="flex justify-end mb-6">
              <FiX
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-2xl"
              />
            </div>

            {/* MENU ITEMS */}
            <nav className="flex flex-col gap-6 text-lg">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Programs</a>
              <a href="#">Facilities</a>
              <a href="#">Membership</a>
            </nav>

            {/* CTA */}
            <button className="mt-8 bg-red-600 px-5 py-3">
              Join Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;