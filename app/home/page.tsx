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
        <Hero/>
        <Marquee/>
        <WhoWeAre/>
        <OurPrograms/>
        <Facilities/>
        <PreSignupSection/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default HomePage