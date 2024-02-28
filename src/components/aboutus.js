'use client'
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import aboutus from "../assets/about-us/aboutus.jpg";
import Image from "next/image";
import Aos from 'aos';
import 'aos/dist/aos.css'


const AboutUs = () => {
  useEffect(() => {
    Aos.init();

  },[]);
  const aboutUsData = {
    title: "Vishwakarma Academy",
    content:
      "Vishwakarma Academy introduces to you a music academy with modern academy facilities, best faculties and extensive connections within the music industry thus offering to you a music career that you have always dream of. We bring to you a music course that is designed to develop the aspiring singer within you to the highest potential and make you music industry ready.",
    imageUrl: aboutus,
    altText: "Company Image",
  };

  // Controls for animation
  const controls = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  // Intersection observer hook
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      data-aos="fade-right"
      className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto p-6 lg:p-12"
    >
      {/* Left side content with motion animation */}
      <div
        className="lg:w-2/3 lg:pr-6"
      >
        <h2 className="text-4xl md:text-4xl font-bold mb-4">
          {aboutUsData.title}
        </h2>
        <p className="text-gray-600 text-lg md:text-md">
          {aboutUsData.content}
        </p>
      </div>

      {/* Right side image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src={aboutUsData.imageUrl}
          alt={aboutUsData.altText}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
