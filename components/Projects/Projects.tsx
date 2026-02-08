"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/components/Title/Title";
import { PROJECTS_DATA } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        // This defines the scroll distance: 100% of viewport height per project
        end: `+=${PROJECTS_DATA.length * 100}%`, 
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          // Calculate active index based on scroll progress (0 to 1)
          const total = PROJECTS_DATA.length;
          const index = Math.min(
            total - 1,
            Math.max(0, Math.floor(self.progress * total))
          );
          setActiveIndex(index);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative">
      <div ref={containerRef} className="relative h-screen w-full flex flex-col justify-end overflow-hidden" style={{paddingBottom: '0'}}>
        <div className="absolute top-16 left-0 w-full z-20 pt-8 sm:pt-12 px-4 sm:px-8 pointer-events-none">
          <div className="mx-auto w-fit pointer-events-auto">
            <Title>Projects</Title>
          </div>
        </div>
        {/* Cards Stack Container */}
        <div className="relative w-full h-[85vh] sm:h-[90vh] mt-10 lg:mt-0 flex items-center justify-center">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalProjects={PROJECTS_DATA.length}
              isActive={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}