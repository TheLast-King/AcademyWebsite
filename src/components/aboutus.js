// components/AboutUs.js

import React from 'react';
import aboutus from "../assets/about-us/aboutus.jpg"
import Image from 'next/image';
const AboutUs = () => {
  // Dummy data
  const aboutUsData = {
    title: 'Vishwakarma Academy',
    content: 'Vishwakarma Academy introduces to you a music academy with modern academy facilities, best faculties and extensive connections within the music industry thus offering to you a music career that you have always dream of. We bring to you a music course that is designed to develop the aspiring singer within you to the highest potential and make you music industry ready.',
    imageUrl: aboutus, // Replace with your actual image URL
    altText: 'Company Image',
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl mx-auto p-8 lg:p-16">
      {/* Left side content */}
      <div className="lg:w-1/2 lg:pr-8">
        <h2 className="text-4xl font-bold mb-4">{aboutUsData.title}</h2>
        <p className="text-gray-600 text-md">{aboutUsData.content}</p>
      </div>

      {/* Right side image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <Image src={aboutUsData.imageUrl} alt={aboutUsData.altText} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default AboutUs;
