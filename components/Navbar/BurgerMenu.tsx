"use client";

import { useRef } from "react";
import { FaHome } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import { useScrollSnap, SECTIONS } from "@/lib/ScrollSnapContext";
import './burgerMenu.css';

export default function BurgerMenu(): React.ReactElement {
  const { scrollToSection, activeSection } = useScrollSnap();
  const togglerRef = useRef<HTMLInputElement>(null);

  // Map icons to section titles
  const iconMap: Record<string, React.ReactElement> = {
    Home: <FaHome />,
    Projects: <RiShareBoxLine />,
    About: <BsPersonVcard />,
    Skills: <HiOutlineSparkles />,
    Education: <IoSchoolOutline />,
    Contact: <MdAlternateEmail />,
  };

  const handleNavClick = (index: number): void => {
    scrollToSection(index);
    // Close the menu by unchecking the toggler
    if (togglerRef.current) {
      togglerRef.current.checked = false;
    }
  };

  return (
    <div>
      <input 
        ref={togglerRef}
        type="checkbox" 
        className="toggler" 
        aria-label="Toggle menu" 
      />
      <div id="hamburger">
        <div></div>
      </div>
      <div id="menu">
        <div>
          <ul>
            {SECTIONS.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(index);
                  }}
                  className={activeSection === index ? "burger-active" : ""}
                >
                  {iconMap[section.title]}
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
