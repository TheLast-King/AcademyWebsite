'use client'

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import coursesData from '@/data/courseData';
import CourseCard from '@/components/course';

const Courses = () => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterDuration, setFilterDuration] = useState('All');

  const uniqueCategories = ['All', ...new Set(coursesData.map(course => course.Category))];
  const uniqueDays = ['All', ...new Set(coursesData.flatMap(course => course.Days))];

  const filteredCourses = coursesData.filter(course => {
    const categoryFilter = filterCategory === 'All' || course.Category === filterCategory;
    const durationFilter = filterDuration === 'All' || course.Days.includes(filterDuration);
    return categoryFilter && durationFilter;
  });

  return (
    <div>
      <Header/>
      <div className='flex flex-row justify-center items-center font-semibold p-2'>
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
        {filteredCourses.map((course, index) => (
          <div key={index} className="w-1/3 p-2">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Courses;
