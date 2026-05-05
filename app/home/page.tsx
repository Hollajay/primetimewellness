"use client"
 import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Facilities from '@/components/Facilities'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import GetInTouch from '@/components/GetInTouch'
import Hero from '@/components/Hero'
import PreSignupSection from '@/components/Membership'
import Marquee from '@/components/ui/Marquee'
import OurPrograms from '@/components/WhatWeOffer'
import WhoWeAre from '@/components/WhoWeAre'
import React from 'react'

const HomePage = () => {
 

useEffect(() => {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const el = document.getElementById(hash);
  if (!el) return;

  const yOffset = -80;
  const y =
    el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  setTimeout(() => {
    window.scrollTo({ top: y, behavior: "smooth" });
  }, 100); // wait for render
}, []);
  return (
    <div>
  <section id="home"><Hero/></section>
  <section id="about"><WhoWeAre/></section>
  <section id="programs"><OurPrograms/></section>
  <section id="facilities"><Facilities/></section>
  <section id="membership"><PreSignupSection/></section>
  <section id="contact"><GetInTouch/></section>
  <section id="gallery"><Gallery/></section>
</div>
  )
}

export default HomePage