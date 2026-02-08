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
      <div ref={containerRef} className="h-screen w-full flex flex-col">
        <div className="w-full pt-24 sm:pt-28 md:pt-32 pb-4 z-20 shrink-0">
          <div className="mx-auto w-fit">
            <Title>Projects</Title>
          </div>
        </div>
        <div className="relative flex-[0.9]">
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