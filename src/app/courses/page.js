// pages/courses/Courses.js
'use client'
import Header from '@/components/header';
import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';

const Courses = () => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterDuration, setFilterDuration] = useState('All');

  const coursesData = [
    // Your course data here...
    {
      id: 1,
      title: 'programming-basics',
      duration: '4 weeks',
      instructor: 'John Doe',
      category: 'Programming',
      imageUrl: 'https://example.com/programming-basics.jpg',
    },
    {
      id: 2,
      title: 'web-development-fundamentals',
      duration: '6 weeks',
      instructor: 'Jane Smith',
      category: 'Web Development',
      imageUrl: 'https://example.com/web-development-fundamentals.jpg',
    },
    {
      id: 3,
      title: 'programming-basics',
      duration: '4 weeks',
      instructor: 'John Doe',
      category: 'Programming',
      imageUrl: 'https://example.com/programming-basics.jpg',
    },{
      id: 4,
      title: 'programming-basics',
      duration: '4 weeks',
      instructor: 'John Doe',
      category: 'Programming',
      imageUrl: 'https://example.com/programming-basics.jpg',
    },{
      id: 5,
      title: 'programming-basics',
      duration: '4 weeks',
      instructor: 'John Doe',
      category: 'Programming',
      imageUrl: 'https://example.com/programming-basics.jpg',
    },{
      id: 6,
      title: 'programming-basics',
      duration: '4 weeks',
      instructor: 'John Doe',
      category: 'Programming',
      imageUrl: 'https://example.com/programming-basics.jpg',
    },
    // Add more courses as needed
  ];

  const uniqueCategories = ['All', ...new Set(coursesData.map(course => course.category))];
  const uniqueDurations = ['All', ...new Set(coursesData.map(course => course.duration))];

  const filteredCourses = coursesData.filter(course => {
    const categoryFilter = filterCategory === 'All' || course.category === filterCategory;
    const durationFilter = filterDuration === 'All' || course.duration === filterDuration;
    return categoryFilter && durationFilter;
  });

  return (
    <div>
      <Header />
      <div className='text-4xl flex justify-center items-center m-2'>Courses</div>
      <div className='flex justify-center items-center m-4'>
        <span className='mr-2'>Filter by Category:</span>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className='p-2 border rounded-md'
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <span className='mx-4'>Filter by Duration:</span>
        <select
          value={filterDuration}
          onChange={(e) => setFilterDuration(e.target.value)}
          className='p-2 border rounded-md'
        >
          {uniqueDurations.map((duration) => (
            <option key={duration} value={duration}>
              {duration}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4'>
        {filteredCourses.map((course) => (
          <div key={course.id} className='bg-gray-200 p-4'>
            <Link href={`/courses/${encodeURIComponent(course.title.toLowerCase())}`}>
                <img src={course.imageUrl} alt={course.title} className='mb-2 w-full h-32 object-cover' />
                <h3 className='text-lg font-bold mb-2'>{course.title}</h3>
                <p className='text-sm mb-2'>Duration: {course.duration}</p>
                <p className='text-sm mb-2'>Instructor: {course.instructor}</p>
                <p className='text-sm mb-2'>Category: {course.category}</p>
            </Link>
          </div>
        ))}
      </div>


      {/* <div className='text-2xl flex justify-start items-center m-2 mt-4'> Other Courses</div>

  <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 p-4'>
    {filteredCourses.map((course) => (
      <div key={course.id} className='bg-gray-200 p-4'>
        <Link href={`/courses/${encodeURIComponent(course.title.toLowerCase())}`}>
            <img src={course.imageUrl} alt={course.title} className='mb-2 w-full h-32 object-cover' />
            <h3 className='text-lg font-bold rounded-lg border-green-500 mb-2'>{course.title}</h3>
            <p className='text-sm  rounded-lg border-green-500 mb-2'>Duration: {course.duration}</p>
            <p className='text-sm mb-2'>Instructor: {course.instructor}</p>
            <p className='text-sm mb-2'>Category: {course.category}</p>
        </Link>
      </div>
    ))}
  </div> */}
  <Footer/>
    </div>
  );
};

export default Courses;
