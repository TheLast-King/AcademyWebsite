import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CourseCard = ({ course }) => {
  return (
    <div className="m-2 justify-center items-center w-full md:w-96 lg:w-96 xl:w-96 rounded-md course-card transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-black hover:ring-opacity-50">
      <Link href={`/courses/${course.Name}`}>
        <div className="flex flex-col w-full h-auto rounded">
          <div className='flex justify-center items-center'>
            <Image src={course.img} alt="test" className='object-cover'  sizes="100vw"
        style={{
          width: '100%',
          height: '64vh',
        }} />
          </div>
          <div className='flex flex-col text-2xl mt-2'>
            <div>{course?.Name}</div>
            <div>{course?.Days}</div>
            <div className='flex'>
              {course?.Timing?.map((cd, idx) => (
                <div key={idx} className='mr-2 rounded-md bg-blue-500 text-sm p-2 hover:bg-blue-300 transition-colors duration-300'>{cd}</div>
              ))}
            </div>
            <div className="flex text-2xl mt-2">
              {course?.Course_Details?.map((cd, idx) => (
                <div key={idx} className='mr-2 rounded-md bg-blue-500 text-sm p-2 hover:bg-blue-300 transition-colors duration-300'>{cd}</div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
