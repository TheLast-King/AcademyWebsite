import React from "react";
import Image from "next/image";
import img1 from "../assets/img1.jpg";
import music from "../assets/categories/music.jpg";
import dancing from "../assets/dancing/dancing.png";
import inauguration from "../assets/events/inauguration.jpg"
import SummerCamp from "../assets/events/SummerCamp.jpg"
import SocialCampaign from "../assets/events/SocialCampaign.jpg"
import SocialAwareness from "../assets/events/SocialAwareness.jpg"


const Event = () => {
  const courses = [
    { imgSrc: inauguration, title: "Inauguration", duration: "6 months", classSize: 20 },
    { imgSrc: SocialCampaign, title: "Social Campaign", duration: "6 months", classSize: 20 },
    { imgSrc: SummerCamp, title: "Summer Camp", duration: "6 months", classSize: 20 },
    { imgSrc: SocialAwareness, title: "Social Awareness", duration: "6 months", classSize: 20 },


  ];

  return (
    <>
      <h1 className="text-4xl mt-6 p-2 flex justify-center items-center m-2">
        Events
      </h1>
      <div className="flex flex-wrap justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4  flex p-4 justify-center items-center"
          >
            <div className="flex flex-col h-auto rounded-md">
              {/* Hello */}

              <Image
                src={course.imgSrc}
                alt={`Image ${index}`}
                width={400}
                height={300}
                className="rounded aspect-square object-cover"
              />
              <div className="flex justify-center items-center text-2xl m-2">
                {" "}
                {course.title} 
              </div>
              {/* <div className='flex flex-row'>
                <div className='text-2xl m-1'>Course:</div>
                <div className='text-2xl m-1'>{course.duration}</div>
              </div>
              <div className='flex flex-row justify-start items-center'>
                <div className='text-2xl m-1 p-2 bg-blue-100 rounded'>Class Size</div>
                <div className='text-2xl m-1'>{course.classSize}</div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Event;
