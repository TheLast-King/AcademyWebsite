import React from "react";
import Image from "next/image";
import music from "../assets/categories/music.jpg";
import dancing from "../assets/dancing/dancing.png";
import Tarot from "../assets/categories/tarot.jpg";
import Taekwondo from "../assets/categories/taekwondo.png";
import Link from "next/link";

const Course = () => {
  const courses = [
    { imgSrc: music, title: "Music", duration: "6 months", classSize: 20 },
    { imgSrc: dancing, title: "Dance", duration: "6 months", classSize: 20 },
    { imgSrc: Tarot, title: "Tarot Card", duration: "6 months", classSize: 20 },
    { imgSrc: Taekwondo, title: "Taekwondo", duration: "6 months", classSize: 20 },
  ];;

  return (
    <>
      <h1 className="text-4xl mt-6 p-2 flex justify-center items-center m-2">
        Courses
      </h1>
      <div className="flex flex-wrap justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex p-4 justify-center items-center"
          >
<Link href={`/courses?search=${encodeURIComponent(course.title)}`}>

            <div className="flex flex-col h-auto rounded transition duration-300 transform hover:scale-105">
           
              <Image
                src={course.imgSrc}
                alt={`Image ${index}`}
                width={400}
                height={300}
                className="rounded aspect-square object-cover bg-white"
              />
              <div className="flex justify-center items-center text-2xl m-2">
                {" "}
                {course.title}
              </div>

              <div className="flex justify-center items-center text-2xl m-2">
                {" "}
                {course.Days}
              </div>


              <div className="flex justify-center items-center text-2xl m-2">
                {" "}
                {course.Timing}
              </div>


              <div className="flex justify-center items-center text-2xl m-2">
                {" "}
                {course.Course_Details}
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Course;
