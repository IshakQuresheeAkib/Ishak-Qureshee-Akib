"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { FaHome } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import BurgerMenu from "./BurgerMenu";
import { SCROLL_THRESHOLD } from "@/lib/constants";
import { useScrollSnap, SECTIONS } from "@/lib/ScrollSnapContext";
import "./Navbar.css";
import { TbUserCode } from "react-icons/tb";

const Navbar = memo(function Navbar(): React.ReactElement {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { activeSection, scrollToSection } = useScrollSnap();

  // Scroll handler for background state only (header is always visible)
  const handleScroll = useCallback((): void => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Map icons to section titles
  const iconMap: Record<string, React.ReactElement> = {
    Home: <FaHome className="nav-icon" />,
    Projects: <RiShareBoxLine className="nav-icon" />,
    About: <BsPersonVcard className="nav-icon" />,
    Skills: <TbUserCode className="nav-icon" />,
    Education: <IoSchoolOutline className="nav-icon" />,
    Contact: <MdAlternateEmail className="nav-icon" />,
  };

  const handleNavClick = (index: number): void => {
    scrollToSection(index);
  };

  const handleMouseEnter = (index: number): void => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (): void => {
    setHoveredIndex(null);
  };

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-1000 text-sm 3xl:text-2xl flex justify-center pt-[3vh]">
      <nav className={`navbar-container ${scrolled ? "navbar-scrolled" : ""} ${hoveredIndex !== null ? "has-hover" : ""}`}>
        <ul className="navbar-links" data-no-hover={hoveredIndex === null ? "true" : "false"}>
          {SECTIONS.map((section, index) => (
            <li key={section.id} className="nav-item">
              <button
                className={`nav-link ${
                  activeSection === index ? "active" : ""
                } ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                onClick={() => handleNavClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                type="button"
                aria-label={`Navigate to ${section.title}`}
                aria-current={activeSection === index ? "page" : undefined}
              >
                {iconMap[section.title]}
                <span className="nav-text">{section.title}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-mobile">
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
