"use client";
import React from 'react'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';

const HeroImage = () => {
  return (
  <Tilt>
    <div className="hidden lg:block rounded-full">
        <Image src="/images/hero.png" width={800} height={600} alt="Hero"/>
    </div>
  </Tilt>
  )
}
export default HeroImage
