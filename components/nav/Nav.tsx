"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../ui/Icon";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);

  const router = useRouter();
  const pathname = usePathname();

  // 🔥 Handle scroll hide/show nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Smart navigation (works across pages)
  const handleNavClick = (id: string) => {
    if (pathname === "/") {
      // Scroll if already on homepage
      const el = document.getElementById(id);
      if (!el) return;

      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      // Navigate to homepage with hash
      router.push(`/#${id}`);
    }
  };

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
              <Link href="/">
                <Image
                  width={73}
                  height={68}
                  src="/logo.png"
                  alt="LOGO"
                />
              </Link>

              {/* DESKTOP MENU */}
              <div className="hidden md:flex items-center gap-8 text-white font-medium">
                <button
                  onClick={() => handleNavClick("about")}
                  className="hover:text-red-500 transition"
                >
                  About
                </button>

                <button
                  onClick={() => handleNavClick("programs")}
                  className="hover:text-red-500 transition"
                >
                  Programs
                </button>

                <button
                  onClick={() => handleNavClick("facilities")}
                  className="hover:text-red-500 transition"
                >
                  Facilities
                </button>

                <button
                  onClick={() => handleNavClick("membership")}
                  className="hover:text-red-500 transition"
                >
                  Membership
                </button>
                <Link href="/gallery" className="hover:text-red-500 transition">Gallery</Link>

                <a
                  href="https://wa.me/2349068457729?text=Hi%20I%27m%20interested%20in%20joining%20the%20gym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold transition"
                >
                  Join Now
                </a>
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
            <nav className="flex flex-col items-center gap-6 text-lg">

              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <button
                onClick={() => {
                  handleNavClick("about");
                  setMenuOpen(false);
                }}
              >
                About
              </button>

              <button
                onClick={() => {
                  handleNavClick("programs");
                  setMenuOpen(false);
                }}
              >
                Programs
              </button>

              <button
                onClick={() => {
                  handleNavClick("facilities");
                  setMenuOpen(false);
                }}
              >
                Facilities
              </button>

              <button
                onClick={() => {
                  handleNavClick("membership");
                  setMenuOpen(false);
                }}
              >
                Membership
              </button>

               <Link href="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
            </nav>

           

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/2349068457729?text=Hi%20I%27m%20interested%20in%20joining%20the%20gym"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 font-semibold transition text-center block"
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