import React from "react";


function Footer() {
	return (
		<>
			<div className="bg-black h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10">
				<div className="p-3">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-3">
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
							Courses
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Our Mission
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact Us
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About Us 
						</li>
						
					</ul>
				</div>
				<div className="p-3">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Products
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-3">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							 Portal
						</li>
						
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
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