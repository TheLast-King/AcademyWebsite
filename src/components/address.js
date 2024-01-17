'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";

import addressIcon from "../assets/addressCard/addressPointer.png"; 
import contact from "../assets/addressCard/call.png"

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
        <div className={`flex flex-col w-full justify-center items-center lg:w-2/5 m-2 p-2 ${isMobile ? '' : 'ml-2'}`}>
          {/* <div className='flex justify-center text-3xl mb-4'>Form</div> */}
          {/* <form className='space-y-4'>
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
          </form> */}

          <div className='flex flex-col w-full p-2'>
          <div className='w-10'>
          <Image
          src={addressIcon} // Provide the correct path to your image
          alt="home-screen"
          width={20} // Provide the actual width of your image
          height={20} // Provide the actual height of your image
          className="w-full rounded-lg"
          priority
        />     
        </div>     <p className='text-2xl'> Sarthana Branch </p>
          1 Bhagwan Nagar,<br/>
          Sarthana Jakatnaka <br/>
          Sarthana, <br/>
           </div>

           <div className='flex flex-row w-full p-2'>
           <div className='flex flex-col justify-start  mr-6'>
           <div className='w-10'>

           <Image
          src={contact} // Provide the correct path to your image
          alt="home-screen"
          width={20} // Provide the actual width of your image
          height={20} // Provide the actual height of your image
          className="w-full rounded-lg"
          priority
        />      
         </div>   <p className='text-2xl'> Contact </p>
          1 Bhagwan Nagar,<br/>
          Sarthana Jakatnaka <br/>
          Sarthana, <br/>
           </div>
           
           <div className='flex flex-col  justify-start items-center'>
           <div className='w-10'>

           <Image
          src={addressIcon} // Provide the correct path to your image
          alt="home-screen"
          width={20} // Provide the actual width of your image
          height={20} // Provide the actual height of your image
          className="w-full rounded-lg"
          priority
        />  </div>        <p className='text-2xl'> Timings </p>
          1 Bhagwan Nagar,<br/>
          Sarthana Jakatnaka <br/>
          Sarthana, <br/>
           </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Address;
