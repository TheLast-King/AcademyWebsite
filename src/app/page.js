"use client";
import Image from "next/image";
import home from "../assets/center/home.png";
import { useState } from "react";
import Header from "../components/header";
import Address from "../components/address";
import Footer from "../components/footer";
import AboutUs from "../components/aboutus";
import Coursecard from "../components/course";
import Event from "../components/event";
import RunningNumberInfo from "@/components/AcademyNumbers";
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
    <div className="bg-orange-30">
      <Header />

      <div className="flex justify-center items-center mt-1 mb-0">
        <Image
          src={home} // Provide the correct path to your image
          alt="home-screen"
          width={300} // Provide the actual width of your image
          height={300} // Provide the actual height of your image
          className="w-full rounded-lg"
          priority
        />
      </div>
      <RunningNumberInfo/>
      <AboutUs />
      <Coursecard />
      <Event />
      <Address />
      <Footer />
    </div>
  );
}
