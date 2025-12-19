"use client";

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from './SliderCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

const Slider = () => {
  return (
    <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={50000} centerMode={false} infinite responsive={responsive} itemClass="item"> 
    {/* SliderCard */} 
    <SliderCard image="/images/r1.jpg" name="Shravani P" role="Web Developer"/>
    <SliderCard image="/images/r2.jpg" name="Virat Kohli" role="NextJs Developer"/>
    <SliderCard image="/images/r3.jpg" name="Shivang" role="Backend Developer"/>
    </Carousel>
  )
}

export default Slider
