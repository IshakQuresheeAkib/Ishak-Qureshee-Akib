"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import { NAV_SECTIONS, type SectionConfig } from "@/lib/navigation";

// Context value type
interface ScrollSnapContextValue {
  activeSection: number;
  setActiveSection: (index: number) => void;
  sections: readonly SectionConfig[];
  scrollToSection: (index: number) => void;
  scrollProgress: number;
}

const ScrollSnapContext = createContext<ScrollSnapContextValue | undefined>(
  undefined
);

interface ScrollSnapProviderProps {
  children: ReactNode;
}

export function ScrollSnapProvider({
  children,
}: ScrollSnapProviderProps): React.ReactElement {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Scroll to specific section
  const scrollToSection = useCallback((index: number): void => {
    const sectionId = NAV_SECTIONS[index]?.id;
    if (!sectionId) return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(index);
    }
  }, []);

  // Handle scroll events to detect active section
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Calculate overall scroll progress (0 to 1)
      const maxScroll = Math.max(docHeight - windowHeight, 0);
      const progress = maxScroll === 0 ? 0 : scrollTop / maxScroll;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));

      // Find active section based on scroll position
      let currentSection = 0;
      NAV_SECTIONS.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active when its top is within the top half of viewport
          if (rect.top <= windowHeight * 0.5 && rect.bottom > windowHeight * 0.3) {
            currentSection = index;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      sections: NAV_SECTIONS,
      scrollToSection,
      scrollProgress,
    }),
    [activeSection, scrollToSection, scrollProgress]
  );

  return (
    <ScrollSnapContext.Provider value={value}>
      {children}
    </ScrollSnapContext.Provider>
  );
}

export function useScrollSnap(): ScrollSnapContextValue {
  const context = useContext(ScrollSnapContext);
  if (context === undefined) {
    throw new Error("useScrollSnap must be used within a ScrollSnapProvider");
  }
  return context;
}
