'use client'


// pages/courses/Courses.js
import React, { useState } from 'react';
import Header from '@/components/header';
import Link from 'next/link';
import Footer from '@/components/footer';
import Image from 'next/image';
import testImage from "../../assets/img1.jpg"
import { useSearchParams } from 'next/navigation';

const Courses = () => {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('search')

  const [filterCategory, setFilterCategory] = useState(search || 'All');
  const [filterDuration, setFilterDuration] = useState('All');

  const coursesData =   [
      
      {
        Name: "Music",
        Days: "Monday to Thursday",
        Timing: "4:00 p.m. to 9:00 p.m.",
        Course_Details: ["1 M", "3 M", "6 M", "1 year"]
      },
      {
        Name: "Keyboard",
        Days: "Monday to Saturday",
        Timing: "5:00 p.m. to 9:00 p.m.",
        Course_Details: ["1 M", "3 M", "6 M", "1 year"]
      },
      {
        Name: "Tabla",
        Days: "Monday to Saturday",
        Timing: "5:00 p.m. to 9:00 p.m.",
        Course_Details: ["1 M", "3 M", "6 M", "1 year"]
      },
      {
        Name: "Harmonium",
        Days: "Monday to Friday",
        Timing: "4:00 p.m. to 9:00 p.m.",
        Course_Details: ["1 M", "3 M", "6 M", "1 year"]
      },
      {
        Name: "Dance",
        Days: "Monday to Friday",
        Timing: "6:00 p.m. to 8:00 p.m.",
        Course_Details: ["1 M", "3 M", "6 M", "1 year"]
      },
      {
        Name: "Public Speaking",
        Days: "Monday to Friday",
        Timing: "8:30 p.m. to 10:30 p.m.",
        Course_Details: ["2 M"]
      },
      {
        Name: "Yoga Aerobic",
        Days: "Monday to Saturday",
        Timing: "6:00 p.m. to 8:00 p.m.",
        Course_Details: ["1 M", "3 M", "6 M", "1 year"]
      },
      {
        Name: "Tarot Card Reading",
        Days: null,
        Timing: "8:30 p.m. to 10:30 p.m.",
        Course_Details: ["10 Days"]
      },
      {
        Name: "Beauty Parlour",
        Days: "Monday/Wednesday/Saturday",
        Timing: "2:00 p.m. to 4:00 p.m.",
        Course_Details: ["3 M", "6 M", "1 year"]
      },
      {
        Name: "Mahendi",
        Days: "Monday/Wednesday/Saturday",
        Timing: "2:00 p.m. to 4:00 p.m.",
        Course_Details: ["3 M", "6 M", "1 year"]
      },
      {
        Name: "NATA",
        Days: "Saturday, Sunday",
        Timing: "6:00 p.m. to 8:00 p.m.",
        Course_Details: ["1 year"]
      }
    
    
  ];
  
  
  const uniqueCategories = ['All', ...new Set(coursesData.map(course => course.Name))];
  const uniqueDurations = ['All', ...new Set(coursesData.map(course => course.Days))];

  const filteredCourses = coursesData.filter(course => {
    const categoryFilter = filterCategory === 'All' || course.Name === filterCategory;
    const durationFilter = filterDuration === 'All' || course.Days === filterDuration;
    return categoryFilter && durationFilter;
  });
  
  // Separate courses matching the search query from the remaining courses
  const searchFilteredCourses = filteredCourses.filter(course => 
    course.Name.toLowerCase().includes(search?.toLowerCase())
  );
  
  const remainingCourses = filteredCourses.filter(course => 
    !course.Name.toLowerCase().includes(search?.toLowerCase())
  );
  
  // Concatenate search filtered courses first, followed by remaining courses
  const finalFilteredCourses = searchFilteredCourses.concat(remainingCourses);
  

  return (
    <div>
      <Header />
      <div className='text-4xl flex justify-center items-center'>Courses</div>
      <div className='flex flex-row justify-center items-center font-semibold  p-2'>
      
        <span className='text-lg md:text-xl lg:text-xl p-2 m-2'>Category:</span>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className='p-2 w-28 border rounded-md'
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
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
          {uniqueDurations.filter(duration => duration != null).map((duration) => (
            <option key={duration} value={duration}>
              {duration}
            </option>
          ))}
        </select>
       
      </div>
   
      <div className="flex flex-wrap justify-start">
        {finalFilteredCourses.map((course, index) => (
          
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex p-4 justify-center items-center"
          >

<Link href={`/courses/${encodeURIComponent(course.Name)}`}>

            <div className="flex flex-col h-auto rounded transition duration-300 transform hover:scale-105">
             
             <Image src={testImage} alt="test" width="100vh" height="100vh"/>
              <div className="flex justify-center items-center text-2xl m-2">
                {" "}
                {course.Name}
              </div>

              <div className="flex justify-center items-center text-2xl m-2">
                {" "}
                {course.Days}
              </div>


              <div className="flex justify-center items-center text-2xl m-2 rounded-md bg-green-200 hover:bg-green-300 transition-colors duration-300">
                {" "}
                {course.Timing}
              </div>


              <div className="flex justify-center items-center text-2xl m-2 ">
  {course.Course_Details.map((cd, idx) => (
    <div key={idx} className='m-2 rounded-md bg-blue-500 text-sm p-2 hover:bg-blue-300 transition-colors duration-300'>{cd}</div>
  ))}
</div>

            </div>
</Link>
          </div>
        ))}
      </div>


      <Footer />
    </div>
  );
};

export default Courses;