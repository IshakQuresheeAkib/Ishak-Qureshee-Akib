"use client";

import { useRef } from "react";
import {  useScroll } from "framer-motion";
import Title from "@/components/ui/Title/Title";
import { PROJECTS_DATA } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";

export default function Projects(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="relative" ref={containerRef}>
      {/* Protected sticky header logic to prevent overlapping */}
      <div className="sticky top-0 w-full pt-10 lg:pt-20 z-30 pointer-events-none flex justify-center">
         <Title>Projects</Title>
      </div>

      <div className="relative w-full flex flex-col items-center pb-20">
        {PROJECTS_DATA.map((project, index) => {
          // Add sticky offset per card so they stack
          const targetScale = 1.15 - (PROJECTS_DATA.length - index) * 0.15;
          
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}