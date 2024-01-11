import React, { useEffect, useState } from 'react';

const Address = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); //breakpoint 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={`flex flex-col lg:flex-row m-2 p-2 ${isMobile ? 'lg:flex-col' : ''}`}>
        <div className={`flex m-2 p-2 ${isMobile ? 'mb-2' : 'w-full lg:w-3/5'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1270820143845!2d72.89904187357429!3d21.226808680950082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4c771b48e3%3A0x303cb3b1443d2fd5!2sVishwakarma%20Academy!5e0!3m2!1sen!2sin!4v1704963764711!5m2!1sen!2sin"
            width="100%"
            height={isMobile ? "300" : "650"}
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={`flex flex-col w-full lg:w-2/5 m-2 p-2 ${isMobile ? '' : 'ml-2'}`}>
          <div className='flex justify-center text-3xl mb-4'>Form</div>
          <form className='space-y-4'>
            <div className='flex flex-col'>
              <label htmlFor="name" className='text-lg font-semibold'>Name:</label>
              <input type="text" id="name" name="name" className='border p-2 rounded-md' />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="email" className='text-lg font-semibold'>Email:</label>
              <input type="email" id="email" name="email" className='border p-2 rounded-md' />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="message" className='text-lg font-semibold'>Message:</label>
              <textarea id="message" name="message" className='border p-2 h-60 rounded-md'></textarea>
            </div>

            <button type="submit" className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Address;
