import React from "react";
import Link from 'next/link';
function Footer() {
    return (
        <>
            <div className="bg-black h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10">
                <div className="p-3">
                    <ul>
                        <p className="flex justify-center items-center text-gray-800 font-bold text-2xl md:text-2xl pb-3">
                            Vishwakarma<span className="text-blue-600">Academy</span>
                        </p>
                        <div className="flex gap-6 pb-3">
                            <div>instagram</div>
                            <div>fb</div>
                            <div>Hello</div>
                            <div>Hello</div>
                            <div>Hello</div>
                        </div>
                    </ul>
                </div>
                <div className="p-3">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Home</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/courses">Courses</Link>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/Our-Mission">Our Mission</Link>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                      
                    </ul>
                </div>
                <div className="p-3">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Academy</p>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/about-us">About Us</Link>
                        </li>
                       
                       
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/careers">Careers</Link>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/press-&-Media">Press & Media</Link>
                        </li>
                    </ul>
                </div>
                <div className="p-3">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
                       
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/Portal">Portal</Link>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/terms-and-conditions">Terms and Conditions</Link>
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <Link href="/videos">Videos</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
                <h1 className=" text-gray-800 font-semibold">
                    © 2021-2024 All rights reserved | Build  by Mehul Rawal
                    <span className="hover:text-blue-600 font-semibold cursor-pointer">
                        
                    </span>
                </h1>
            </div>
        </>
    );
}

export default Footer;
