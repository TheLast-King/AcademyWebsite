'use client'
import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useSearchParams } from 'next/navigation';
import coursesData from '@/data/courseData';
import CourseCard from '@/components/course';


const Courses = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
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

  return (
    <div>
      <Header/>
    
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
          {uniqueDays.filter(day => day != null).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center items-center m-2 w-90">
        {finalFilteredCourses.map((course, index) => (
 <div key={index} className="w-1/3 p-2"> {/* Assuming each card takes 1/4 of the width */}
 <CourseCard course={course} />
</div>        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Courses;
