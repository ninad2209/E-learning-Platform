import React from 'react'
import Image from 'next/image'
import { coursesData } from '@/data/data'
import CourseCard from './CourseCard'

const Couses = () => {
  return (
    <div className="pt-16 pb-12 relative bg-gray-200">{/* Ping Ball */}
      <Image src="/images/cb.png" alt="image" width={800} height={800} className="absolute top-[30%] animate-bounce"/>
      <div className="w-[80%] pt-8 pb-8 mx-auto">
        {/*Title */}
        <h1 className="text-3xl md:text-4xl text-gray-900 font-bold">High Demand Courses</h1>
        {/*Courses */}
        <div className="md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {coursesData.map((course,i)=>{
                return (  //seperate course card
                <div key={course.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={`${i*150}`}>
                    <CourseCard course={course}/>
                </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Couses
