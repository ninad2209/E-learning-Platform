"use client"
import React from 'react'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { FaFile, FaStar, FaUser } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
//define type
type Props={
    course: {
    id: number;
    image: string;
    title: string;
    price: number;
    author: string;
    reviewNumber: number;
    lessons: number;
    students: number;
    category: string;
}
}
const CourseCard = ({course}:Props) => {
  return (
    <Tilt>
        <div className="bg-white rounded-lg overflow-hidden cursor-pointer">
            <div>{/*Image */}
                <Image src={course.image} alt={course.title} width={400} height={400} className="w-full h-full"/>
            </div>
            <div className="p-4">{/*Price Ball */}
                <h1 className="ml-auto relative z-[10] h-20 w-20 flex items-center text-lg font-bold justify-center flex-col mt-[-4rem] rounded-full bg-rose-700 text-white">${course.price}</h1>
            {/*Information of the Course */}
            <div className="flex items-center mt-6 space-x-4">
                <span className="text-lg text-black text-opacity-70 font-bold">{course.category}</span>
                <span className="text-base text-gray-600">{course.author}</span>
            </div>
            {/*Course title*/}
            <h1 className="text-xl text-black font-bold mt-2">{course.title}</h1>
            {/*Course Review */}
            <div className='flex mt-2 items-center space-x-2'>
                <div className='flex items-center'>
                    <FaStar className="w-4 h-4 text-orange-500"/>
                    <FaStar className="w-4 h-4 text-orange-500"/>
                    <FaStar className="w-4 h-4 text-orange-500"/>
                    <FaStar className="w-4 h-4 text-orange-500"/>
                    <FaStar className="w-4 h-4 text-orange-500"/>
                </div>
                <span className='text-base text-yellow-800 font-normal'>({course.reviewNumber} Reviews)</span>
            </div>
            <div className='pt-6 mt-6 mb-6 w-4 h-[2pex] bg-gray-500 opacity-15'></div>{/*Line */}
            <div className='flex mb-8 items-center justify-between'>{/* Lessons and Students */}
                <div className='flex items-center space-x-2'> 
                    <FaFile className='w-4 h-4 text-orange-600'/>
                    <p className='text-base font-semibold text-gray-800'>{course.lessons} Lessons</p>
                </div>
                <div className='flex items-center space-x-2'> 
                    <FaUserGroup className='w-4 h-4 text-orange-600'/>
                    <p className='text-base font-semibold text-gray-800'>{course.students} Students</p>
                </div>
            </div>
            </div>
            
            
        </div>
    </Tilt>
  )
}

export default CourseCard
