'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className='p-4 h-20 text-lg bg-black text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between'>
          <div className='border border-blue-300 rounded-lg p-2'>Logo</div>
          <div className='flex mr-2'>

            {/* Show "Courses," "Events," and "Join" on desktop */}
            <div className='hidden md:flex'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='mr-4 border border-blue-300 rounded-lg p-2'
              >
                Courses
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='mr-2 border border-green-300 rounded-lg p-2'
              >
                Events
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='border border-green-300 rounded-lg p-2'
              >
                Join
              </motion.div>
            </div>

            {/* Show hamburger icon on mobile */}
            <button onClick={toggleSidebar} className='md:hidden'>
              ☰
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className='fixed top-0 left-0 h-screen w-64 bg-gray-200 p-4'
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='border border-green-300 rounded-lg p-2 mb-2'
              >
                Courses
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='border border-green-300 rounded-lg p-2 mb-2'
              >
                Events
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='border border-green-300 rounded-lg p-2 mb-2'
              >
                Join
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
