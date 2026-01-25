"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import BurgerMenu from "./BurgerMenu";
import { NAV_ITEMS, SCROLL_THRESHOLD } from "@/lib/constants";

export default function Navbar(): React.ReactElement {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const pathname = usePathname();

  // Consolidated scroll handler for both visibility and scroll state
  const handleScroll = useCallback((): void => {
    const currentScrollY = window.scrollY;
    
    // Update scrolled state
    setScrolled(currentScrollY > SCROLL_THRESHOLD);
    
    // Update headroom visibility
    if (currentScrollY < SCROLL_THRESHOLD) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Map icons to nav items
  const iconMap: Record<string, React.ReactElement> = {
    "Home": <FaHome />,
    "Projects": <RiShareBoxLine />,
    "Contact Me": <MdAlternateEmail />,
  };

  const handleNavClick = (link: string): void => {
    if (link.startsWith("#")) {
      const targetId = link.substring(1) || "banner";
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 text-white/70 text-lg z-10 w-full"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <AnimatePresence initial={true} mode="wait">
        <nav
          key={pathname}
          className={`flex w-full lg:pl-9 lg:pr-28 pl-3 justify-between lg:py-3 py-2 ${
            scrolled ? "backdrop-blur-md bg-black/20" : ""
          }`}
        >
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Image
                src="https://i.ibb.co/wKR0hV6/Akib.png"
                alt="Logo"
                width={96}
                height={96}
                className="w-24"
                unoptimized
              />
            </motion.div>

            <div className="lg:gap-24 gap-10 lg:flex hidden">
              {NAV_ITEMS.map((navItem) => (
                <span
                  key={navItem.id}
                  className="group items-center bg-transparent cursor-default hover:cursor-pointer flex gap-1 text-white hover:text-white/80 transition-colors duration-400"
                >
                  {iconMap[navItem.title]}
                  <a
                    href={navItem.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(navItem.link);
                    }}
                    className="text-center relative after:transition-transform after:duration-700 after:ease-in-out after:absolute after:-bottom-[3.1px] after:left-0 after:block after:h-[3px] after:w-full after:scale-x-0 after:bg-[#2282ff] after:content-[''] after:group-hover:scale-x-100 transition-colors"
                  >
                    {navItem.title}
                  </a>
                </span>
              ))}
            </div>

            <div className="lg:hidden block">
              <BurgerMenu />
            </div>
          </nav>
      </AnimatePresence>
    </motion.div>
  );
}
