// import Image from 'next/image'
'use client'
import Image from "next/image";
import img from "../assets/img1.jpg"
import { useState } from "react";
import Header from "@/components/header";
import CourseCard from "@/components/courseCard";
import Address from "@/components/addressCard";
import Footer from "@/components/footer";
import music from "../assets/categories/music.jpg";

export default function Home() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (isSubmenu, position) => {
    if (isSubmenu) {
      setIsSubmenuOpen(true);
      setSubmenuPosition(position);
    } else {
      setIsDropdownOpen(true);
      setIsSubmenuOpen(false);
    }
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setIsSubmenuOpen(false);
  };

  return (
   <div className="bg-gray-50">
      <Header/>

   <div className="flex justify-center items-center mt-1 mb-2 p-2">
   
    <Image src={music} alt="home-screen" className="w-full rounded-lg" priority/>
    </div>
    <CourseCard/>
    <Address/>
    <Footer/>
    
   </div>
  )
}
