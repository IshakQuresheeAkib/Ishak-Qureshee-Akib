"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import BurgerMenu from "./BurgerMenu";
import Logo from "@/components/Logo/Logo";
import { SCROLL_THRESHOLD } from "@/lib/constants";
import { useScrollSnap, SECTIONS } from "@/lib/ScrollSnapContext";
import "./Navbar.css";

export default function Navbar(): React.ReactElement {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
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
    Skills: <HiOutlineSparkles className="nav-icon" />,
    Education: <IoSchoolOutline className="nav-icon" />,
    Contact: <MdAlternateEmail className="nav-icon" />,
  };

  const handleNavClick = (index: number): void => {
    scrollToSection(index);
  };

  return (
    <header className="site-header">
      <AnimatePresence initial={true} mode="wait">
        <nav
          key={pathname}
          className={`navbar-container ${scrolled ? "navbar-scrolled" : ""}`}
        >
          {/* Logo */}
          <motion.div
            className="navbar-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection(0)}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {SECTIONS.map((section, index) => (
              <motion.button
                key={section.id}
                className={`nav-link ${activeSection === index ? "active" : ""}`}
                onClick={() => handleNavClick(index)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                type="button"
              >
                {iconMap[section.title]}
                <span className="nav-text">{section.title}</span>

                {/* Active indicator line */}
                {activeSection === index && (
                  <motion.div
                    className="nav-active-indicator"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="navbar-mobile">
            <BurgerMenu />
          </div>
        </nav>
      </AnimatePresence>
    </header>
  );
}
