"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useScrollSnap } from "@/context/ScrollSnapContext";
import "./burgerMenu.css";
import { NAV_ICONS, NAV_SECTIONS } from "@/lib/navigation";

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

  if (!mounted) return null;

  return createPortal(
    <div className={`burger-wrapper block lg:hidden ${isOpen ? "nav-open" : ""}`} ref={menuRef}>
      <div className="menu-trigger trigger-btn" onClick={toggleMenu} role="button" aria-label="Open Menu" aria-expanded={isOpen}>
        <span className="menu-trigger-bar top"></span>
        <span className="menu-trigger-bar middle"></span>
        <span className="menu-trigger-bar bottom"></span>
      </div>

      <div className="close-trigger trigger-btn" onClick={toggleMenu} role="button" aria-label="Close Menu">
        <span className="close-trigger-bar left"></span>
        <span className="close-trigger-bar right"></span>
      </div>

      {/* MENU OVERLAY */}
      <div className={`menu-overlay ${isOpen ? "is-active" : ""}`}>
        <i className="menu-bg top"></i>
        <i className="menu-bg middle"></i>
        <i className="menu-bg bottom"></i>

        <div className="absolute inset-0 flex items-center justify-center z-10000">
          <ul className="menu-content flex flex-col items-start gap-6 p-10">
            {NAV_SECTIONS.map((section, index) => {
              const Icon = NAV_ICONS[section.title];

              return (
                <li key={section.id} className="relative group overflow-hidden">
                  <a href={`#${section.id}`}
                  onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(index);
                    }}
                    className={`menu-link text-2xl md:text-3xl font-bold flex items-center gap-4 transition-colors duration-300 ${
                      activeSection === index ? "text-[#2da7ff]" : "text-white/80"
                    }`}
                  >
                    <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                      <Icon className="text-2xl md:text-3xl" />
                    </span>
                    {section.title}
                    <i className="menu-link-line"></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>,
    document.body
  );
}