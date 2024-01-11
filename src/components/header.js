'use client'
import React, { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className='p-4 h-20 text-3xl'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between'>
          <div className='border border-green-300 rounded-lg p-2'>Logo</div>
          <div className='flex mr-2'>

            {/* Show "Courses," "Events," and "Join" on desktop */}
            <div className='hidden md:flex'>
              <div className='mr-4 border border-green-300 rounded-lg p-2'>Courses</div>
              <div className='mr-2 border border-green-300 rounded-lg p-2'>Events</div>
              <div className='border border-green-300 rounded-lg p-2'>Join</div>
            </div>

            {/* Show hamburger icon on mobile */}
            <button onClick={toggleSidebar} className='md:hidden'>
              ☰
            </button>
          </div>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className='fixed top-0 left-0 h-screen w-64 bg-gray-200 p-4'>
            <div className='border border-green-300 rounded-lg p-2 mb-2'>Courses</div>
            <div className='border border-green-300 rounded-lg p-2 mb-2'>Events</div>
            <div className='border border-green-300 rounded-lg p-2 mb-2'>Join</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
