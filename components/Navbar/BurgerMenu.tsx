"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaHome } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import { useScrollSnap, SECTIONS } from "@/lib/ScrollSnapContext";
import "./burgerMenu.css";

type IconMap = Record<string, React.ReactElement>;

export default function BurgerMenu(): React.ReactElement | null {
  const { scrollToSection, activeSection } = useScrollSnap();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleNavClick = (index: number): void => {
    scrollToSection(index);
    setIsOpen(false);
  };

  const iconMap: IconMap = {
    Home: <FaHome />,
    Projects: <RiShareBoxLine />,
    About: <BsPersonVcard />,
    Skills: <HiOutlineSparkles />,
    Education: <IoSchoolOutline />,
    Contact: <MdAlternateEmail />,
  };

  if (!mounted) return null;

  return createPortal(
    <div className={`burger-wrapper ${isOpen ? "nav-open" : ""}`} ref={menuRef}>
      {/* OPEN TRIGGER (Diagonal Hamburger) */}
      <div 
        className="menu-trigger trigger-btn" 
        onClick={toggleMenu}
        role="button"
        aria-label="Open Menu"
        aria-expanded={isOpen}
      >
        <span className="menu-trigger-bar top"></span>
        <span className="menu-trigger-bar middle"></span>
        <span className="menu-trigger-bar bottom"></span>
      </div>

      {/* CLOSE TRIGGER (Exploding X) */}
      <div 
        className="close-trigger trigger-btn" 
        onClick={toggleMenu}
        role="button"
        aria-label="Close Menu"
      >
        <span className="close-trigger-bar left"></span>
        <span className="close-trigger-bar right"></span>
      </div>

      {/* MENU OVERLAY */}
      <div className={`menu-overlay ${isOpen ? "is-active" : ""}`}>
        <i className="menu-bg top"></i>
        <i className="menu-bg middle"></i>
        <i className="menu-bg bottom"></i>

        <div className="absolute inset-0 flex items-center justify-center z-[10000]">
          <ul className="menu-content flex flex-col items-start gap-6 p-10">
            {SECTIONS.map((section, index) => (
              <li key={section.id} className="relative group overflow-hidden">
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(index);
                  }}
                  className={`menu-link text-3xl md:text-5xl font-bold flex items-center gap-4 transition-colors duration-300 ${
                    activeSection === index ? "text-[#2da7ff]" : "text-white/80"
                  }`}
                >
                  <span className="text-2xl md:text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {iconMap[section.title]}
                  </span>
                  {section.title}
                  <i className="menu-link-line"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none">
           <span className="text-[20vw] font-bold text-white/5 whitespace-nowrap">MENU</span>
        </div>
      </div>
    </div>,
    document.body
  );
}