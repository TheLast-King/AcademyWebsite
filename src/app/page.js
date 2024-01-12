import Image from "next/image";
import music from "../assets/categories/music.jpg";
import { useState } from "react";
import Header from "@/components/header";
import CourseCard from "@/components/courseCard";
import Address from "@/components/addressCard";
import Footer from "@/components/footer";

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
      <Header />

      <div className="flex justify-center items-center mt-1 mb-2 p-2">
        <Image
          src={music} // Provide the correct path to your image
          alt="home-screen"
          width={300} // Provide the actual width of your image
          height={300} // Provide the actual height of your image
          className="w-full rounded-lg"
          priority
        />
      </div>

      <CourseCard />
      <Address />
      <Footer />
    </div>
  );
}
