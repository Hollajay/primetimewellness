"use client"

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"
import { motion } from 'framer-motion'
import Image from "next/image";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
         {/* ⚪ MAIN NAVBAR */}
      <div className=" w-full bg-gradient-to-b from-black via-black/100 to-[#1a0000]/100 ">
      <div className="px-6 md:px-16 py-4 flex justify-between items-center ">

        {/* LOGO */}
        <div><Image className="object-fit" width={73} height={67} src={'/logo.png'} alt="primetime logo" /></div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex justify-center items-center gap-8">
             <nav className="hidden md:flex  gap-8 text-white font-medium">
          <a href="#" className="hover:text-primary transition">About</a>
          <a href="#" className="hover:text-primary transition">Programs</a>
          <a href="#" className="hover:text-primary transition">Facilities</a>
          <a href="#" className="hover:text-primary transition">Membership</a>
          
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <button className="bg-red-600 text-white px-5 py-2  hover:text-deepprimary transition">
            Join Now
          </button>
        </div>
        </div>
       

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </button>
        </div>
      </div>
      </div>


      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 w-[75%] h-full bg-white shadow-lg p-6 z-50"
        >
          {/* CLOSE */}
          <div className="flex justify-end mb-6">
            <FiX onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          </div>

          {/* MENU ITEMS */}
          <nav className="flex flex-col gap-6 text-black text-lg">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Sermons</a>
            <a href="#">Events</a>
            <a href="#">Contact</a>
          </nav>

          {/* CTA */}
          <button className="mt-8 bg-blue-600 text-white px-5 py-3 rounded-full">
            Partner
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default Nav