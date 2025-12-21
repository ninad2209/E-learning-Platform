"use client";
import React from 'react'
import { FaArrowRight, FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Define Grid*/}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
      {/* 1st Part */}
      <div data-aos="fade-right" data-aos-anchor-placement="top-center">
        <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
                <FaAward className="h-6 w-6 text-white"/>
            </div>
            <h1 className="text-xl text-black font-semibold">Gauranteed and Certified</h1>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">Now Learn from 
            your comfort Zone</h1>
        <p className="mt-4 text-gray-600">Flexible learning, expert guidance, and limitless growth — 
            all from where you feel most comfortable.</p>
        <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white">
            <span>Learn more</span>
            <FaArrowRight/>
        </button>
      </div>
      {/* 2nd Part */}
      <div data-aos="fade-left" data-aos-delay="150" data-aos-anchor-placement="top-center">
        <div>
            <h1 className="text-7xl lg:text-8xl font-bold text-black text-opacity-5">01</h1>
            <div className="-mt-10">
                <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">Flexible schedule</h1>
                <p className="w-[90%] lg:w-[70%] text-base text-black text-opacity-60">Learn at your own pace with flexible schedules.Access courses anytime,pause when needed, 
                    and continue learning without pressure or fixed time commitments.</p>
            </div>
        </div>
        <div className="mt-8 w-full">
            <h1 className="text-7xl lg:text-8xl font-bold text-black text-opacity-5">02</h1>
            <div className="-mt-10">
                <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">Budget Friendly Learning</h1>
                <p className="w-[90%] lg:w-[70%] text-base text-black text-opacity-60">Access high-quality courses at affordable prices, helping you 
                    learn new skills without financial stress or heavy expenses.</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
