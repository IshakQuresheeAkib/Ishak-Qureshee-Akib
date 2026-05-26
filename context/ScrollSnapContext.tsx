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

type SectionId = SectionConfig["id"];

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

  useEffect(() => {
    let rafId = 0;
    const handleScroll = (): void => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // Calculate overall scroll progress (0 to 1)
        const maxScroll = Math.max(docHeight - windowHeight, 0);
        const progress = maxScroll === 0 ? 0 : scrollTop / maxScroll;
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
        rafId = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    const sectionElements = NAV_SECTIONS
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sectionElements.length === 0) return;

    const ratios = new Map<SectionId, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id as SectionId, entry.intersectionRatio);
        });

        let maxRatio = 0;
        let activeId: SectionId | undefined = NAV_SECTIONS[0]?.id;

        ratios.forEach((ratio, id) => {
          if (ratio >= maxRatio) {
            maxRatio = ratio;
            activeId = id;
          }
        });

        const index = NAV_SECTIONS.findIndex((section) => section.id === activeId);
        if (index !== -1) {
          setActiveSection(index);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -50% 0px",
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
      }
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
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
