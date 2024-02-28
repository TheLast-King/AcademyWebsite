import React, { useEffect } from "react";
import Image from "next/image";
import music from "../assets/categories/music.jpg";
import dancing from "../assets/dancing/dancing.png";
import Tarot from "../assets/categories/tarot.jpg";
import Taekwondo from "../assets/categories/taekwondo.png";
import Link from "next/link";
import Aos from 'aos';
import 'aos/dist/aos.css'
import CoursesData from '../data/courseData'

const Course = () => {

    const courses = CoursesData.slice(0,3);

  useEffect(()=> {
    Aos.init();
  },[])


  return (
    <div>
      <h1 className="text-4xl mt-6 p-2 flex justify-center items-center m-2">
        Courses
      </h1>
      <div className="flex flex-wrap justify-center" data-aos="zoom-in" >
        {courses.map((course, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 flex p-4 justify-center items-center" 
          >
<Link href={`/courses`}>

            <div className="flex flex-col h-auto rounded transition duration-300 transform hover:scale-105">
           
              <Image
                src={course.img}
                alt={`Image ${index}`}
                width={400}
                height={300}
                className="rounded aspect-square object-cover bg-white"
              />
              <div className="flex justify-center items-center text-2xl m-2">
                {" "}
                {course.Name}
              </div>

        

      
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;