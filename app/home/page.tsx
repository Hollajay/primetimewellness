import Facilities from '@/components/Facilities'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'
import Hero from '@/components/Hero'
import PreSignupSection from '@/components/Membership'
import Marquee from '@/components/ui/Marquee'
import OurPrograms from '@/components/WhatWeOffer'
import WhoWeAre from '@/components/WhoWeAre'
import React from 'react'

const HomePage = () => {
  return (
    <div>
  <section id="home"><Hero/></section>
  <section id="about"><WhoWeAre/></section>
  <section id="programs"><OurPrograms/></section>
  <section id="facilities"><Facilities/></section>
  <section id="membership"><PreSignupSection/></section>
  <section id="contact"><GetInTouch/></section>
</div>
  )
}

export default HomePage