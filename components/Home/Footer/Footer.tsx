import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
      {/* Define grid */}
      <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20' >
        {/* First Part of Footer */}
        <div>
          <Image src="/images/logo.png" alt="logo" height={100} width={100}/> 
          <p className='text-white text-opacity-50'>World's Best E-learning Platform</p>
          {/* Social Icons and links*/}
          <div className='flex items-center space-x-4 mt-6'>
            <FaFacebookF className='w-6 h-6 text-blue-600'/>
            <FaTwitter className='w-6 h-6 text-sky-400'/>
            <FaYoutube className='w-6 h-6 text-red-700'/>
            <FaInstagram className='w-6 h-6 text-pink-600'/>
          </div>
        </div>
        {/* SEcond Part */}
        <div>
          <h1 className='footer__heading'>Popular </h1>    {/* Reusable Class */} 
          <p className='footer__link'>Web Development</p>
          <p className='footer__link'>Hacking</p>
          <p className='footer__link'>UI/UX Design</p>
          <p className='footer__link'>App Development</p>
          <p className='footer__link'>Desktop Development</p>
          <p className='footer__link'>Digital Marketing</p>
        </div>
        {/* 3rd Part */}
        <div>
          <h1 className='footer__heading'>Quick Link </h1>    {/* Reusable Class */} 
          <p className='footer__link'>Home</p>
          <p className='footer__link'>About</p>
          <p className='footer__link'>Courses</p>
          <p className='footer__link'>Teacher</p>
          <p className='footer__link'>Profile</p>
          <p className='footer__link'>Privacy Policy</p>
        </div>
        {/* 4th Part */}
        <div>
          <h1 className='footer__heading'>Subscribe our NewsLetter</h1>
          <input type="text" placeholder='Enter your Email' className='px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white'/>
          <button className='px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white hover:bg-rose-900'>Subscribe</button>
        </div>
      </div>
      <p className='text-center mt-4 text-base text-white text-opacity-70'>Copyright 2025 - Ninad P</p>
    </div>
  )
}

export default Footer
