"use client"
import React from 'react'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { FaAward, FaBriefcase } from 'react-icons/fa';

const Feature = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto'>
        {/* Image */}
        <Tilt>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
            <Image src="/images/f.png" alt="image" width={1000} height={1000}/>
          </div>
        </Tilt>
        
        {/* Text Content */}
        <div>
          {/* Subheading */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
              <FaBriefcase className="h-6 w-6 text-white"/>
              </div>
              <h1 className="text-xl text-black font-semibold">Premium Learning Experience</h1>
          </div>
          {/* Main Heading */}
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800'>Best Courses available here !!</h1>
          <div className='mt-8 mb-6'>
            <h1 className='text-lg md:text-2xl text-black text-opacity-70 font-semibold'>Develop the Skills That Matter Most</h1>
            <p className='text-sm md:text-base text-black text-opacity-70 mt-4'>Build in-demand skills through focused learning, hands-on practice,
              and real-world projects that accelerate your professional growth.</p>
          </div>
          <div className='mt-8 mb-6'>
            <h1 className='text-lg md:text-2xl text-black text-opacity-70 font-semibold'>Learn Smarter, Learn Faster</h1>
            <p className='text-sm md:text-base text-black text-opacity-70 mt-4'>Enhance how you learn by improving focus, consistency, critical thinking, and applying knowledge through practice.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Feature
