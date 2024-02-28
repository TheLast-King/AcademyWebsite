'use client';
import React, { useState } from 'react';
import logo from "../assets/header/logo.png"
import Image from "next/image";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className='h-20 text-lg bg-black text-white'>
      <div className='max-w-7xl mx-auto flex justify-between items-center pr-2'>
        <div className='flex flex-row justify-center items-center p-2'>
          <Image
            src={logo} // Provide the correct path to your image
            alt="home-screen"
            width={80} // Provide the actual width of your image
            height={40} // Provide the actual height of your image
            className="rounded-lg"
            priority
          />
          <div className='flex flex-col'> 
          <div className='text-md'>Vishwakarma</div>
          <div className='text-sm'>Academy</div>
          </div>
        </div>

        <div className='flex items-center'>
          {/* Show "Courses," "Events," and "Join" on desktop */}
          <div className='hidden md:flex'>
            <div
              className='mr-4  p-2'
            >
              Courses
            </div>
            <div
              className='mr-2   p-2'
            >
              Events
            </div>
            <div
              className='border border-green-300 rounded-lg p-2'
            >
              Join
            </div>
          </div>

          {/* Show hamburger icon on mobile */}
          <button onClick={toggleSidebar} className='md:hidden'>
            ☰
          </button>
        </div>
      </div>

      {/* Sidebar */}
        {isSidebarOpen && (
          <div
          
            className='fixed top-0 left-0 h-screen w-64 bg-gray-200 p-4'
          >
            <div
              className='border border-green-300 rounded-lg p-2 mb-2'
            >
              Courses
            </div>
            <div
              className='border border-green-300 rounded-lg p-2 mb-2'
            >
              Events
            </div>
            <div
              className='border border-green-300 rounded-lg p-2 mb-2'
            >
              Join
            </div>
          </div>
        )}
    </header>
  );
};

export default Header;
