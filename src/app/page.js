// import Image from 'next/image'
'use client'
import Image from "next/image";
import img from "../assets/img1.jpg"
import { useState } from "react";
import Header from "@/components/header";
import CourseCard from "@/components/courseCard";
import Address from "@/components/AddressCard";
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
   <>
      <Header/>

   <div className="flex justify-center items-center m-2 p-2">
   
    <Image src={img} alt="home-screen" className="w-auto" priority/>
    </div>
    <CourseCard/>
    <Address/>
   </>
  )
}
