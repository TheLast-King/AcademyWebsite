'use client'
import Header from '@/components/header'
import {useState} from 'react';
import React from 'react'
import Link from 'next/link';
import Footer from '@/components/footer';
import testImage from "../../../assets/img1.jpg"
import Image from 'next/image';
import Courses from '../page';
import coursesData from '@/data/courseData';
import CourseCard from '@/components/course';
import { useSearchParams } from 'next/navigation';



const Details = ({params}) => {

  const searchParams = useSearchParams();
  const search = searchParams.get('search');
    const uniqueDurations = ['All', ...new Set(coursesData.map(course => course.duration))];
  


    const [filterCategory, setFilterCategory] = useState(search || 'All');
    const [filterDuration, setFilterDuration] = useState('All');
  
    const uniqueCategories = ['All', ...new Set(coursesData.map(course => course.Name))];
    const uniqueDays = ['All', ...new Set(coursesData.flatMap(course => course.Days))];
  
    const filteredCourses = coursesData.filter(course => {
      const categoryFilter = filterCategory === 'All' || course.Name === filterCategory;
      const durationFilter = filterDuration === 'All' || course.Days.includes(filterDuration);
      return categoryFilter && durationFilter;
    });
  
    const searchFilteredCourses = filteredCourses.filter(course =>
      course.Name.toLowerCase().includes(search?.toLowerCase())
    );
  
    const remainingCourses = filteredCourses.filter(course =>
      !course.Name.toLowerCase().includes(search?.toLowerCase())
    );
  
    const finalFilteredCourses = searchFilteredCourses.concat(remainingCourses);
    const selectedCourse = coursesData.find(course => course.Name === params.coursename)

  return (
    <div>
    <Header />

    <div className='flex flex-row justify-center items-center bg-gray-50 h-full m-2 '>
      <div className='w-full md:w-1/3 '>
      <Image src={selectedCourse.img} className='object-contain w-80 h-80' alt="test"/>
      </div>
      <div className='m-4 w-full text-md md:w-2/3 text-lg '>
      <h3 className='font-bold mb-2'> 
        {selectedCourse.content}
      </h3>
      <div className='font-bold text-sm mb-2'>
      <p >Duration: {selectedCourse.Name}</p>
      <p>Instructor: {selectedCourse.Course_Details}</p>
      <p>Category: {selectedCourse.coursename}</p>
      </div>
    </div>
    </div>


    <div className='text-4xl flex justify-center items-center m-2 mt-8'>OtherCourses</div>
   
    <div className='flex flex-row justify-center items-center font-semibold  p-2'>
        <span className='text-lg md:text-xl lg:text-xl p-2 m-2'>Category:</span>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className='p-2 w-28 border rounded-md'
        >
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <span className='text-lg md:text-xl lg:text-xl p-2 m-2'> Duration:</span>
        <select
          value={filterDuration}
          onChange={(e) => setFilterDuration(e.target.value)}
          className='p-2 w-32 border rounded-md'
        >
          {uniqueDays.filter(day => day != null).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center items-center">
       
        {finalFilteredCourses.map((course, index) => (
        <div key={index} className="flex justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
        <CourseCard course={course} />
</div>        ))}
      </div>

          
      
          <Footer/>
  </div>
  )
}

export default Details