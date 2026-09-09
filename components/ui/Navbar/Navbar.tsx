"use client";

import { useState, useEffect, useCallback, memo } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { SCROLL_THRESHOLD } from "@/lib/constants";
import { useScrollSnap } from "@/context/ScrollSnapContext";
import { NAV_SECTIONS } from "@/lib/navigation";
import { SquigglyUnderline } from "@/components/ui/squiggly-underline";
import "./Navbar.css";

const Navbar = memo(function Navbar(): React.ReactElement {
  const [scrolled, setScrolled] = useState<boolean>(false);
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

  const handleNavClick = (index: number): void => {
    scrollToSection(index);
  };

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-1000 text-sm 3xl:text-2xl flex justify-center pt-[2vh] max-lg:p-4">
      <nav className={`navbar-container flex w-fit max-w-full items-center justify-between relative rounded-full bg-[#1e4a736e] transition-colors duration-400 ease-[cubic-bezier(1,0,0.4,1)] max-lg:w-full max-lg:justify-between max-lg:p-3 max-lg:bg-transparent max-lg:shadow-none max-lg:backdrop-none ${scrolled ? "navbar-scrolled" : ""}`}>
        <ul className="navbar-links flex items-center gap-0 max-lg:hidden">
          {NAV_SECTIONS.map((section, index) => (
            <li key={section.id} className="nav-item">
              <button
                className={`nav-link relative flex items-center px-[clamp(1rem,1.5vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] bg-transparent border-none  hover:text-white text-sm cursor-pointer rounded-full whitespace-nowrap z-10 transition-colors duration-300 ${
                  activeSection === index ? "active font-bold text-white" : "text-white/70"
                }`}
                onClick={() => handleNavClick(index)}
                type="button"
                aria-label={`Navigate to ${section.title}`}
                aria-current={activeSection === index ? "page" : undefined}
              >
                <span className="nav-text relative z-10 text-inherit">
                  {section.title}
                  {activeSection === index && <SquigglyUnderline />}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-mobile hidden max-lg:block z-10">
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
