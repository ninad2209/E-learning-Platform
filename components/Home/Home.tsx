"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';


import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Couses from './Course/Couses'
import Feature from './Feature/Feature'
import Review from './Review/Review'
import Article from './Article/Article'



const Home = () => {

  useEffect(()=> {
    const initAos= async ()=>{
      await import('aos');
       AOS.init({ 
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"
       })
    }

    initAos();
  },[])
  return (
    <div>
      <section id="home">
        <Hero/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="couses">
        <Couses/>
      </section>
      <section id="feature">
        <Feature/>
      </section>
      <section id="review">
        <Review/>
      </section>
      <section id="article">
        <Article/>
      </section>
      
    </div>
  )
}

export default Home
