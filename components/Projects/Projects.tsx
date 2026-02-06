"use client";
 
import { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/components/Title/Title";
import CustomButton from "@/components/CustomButton/CustomButton";
import { HiOutlineExternalLink } from "react-icons/hi";
import { PROJECTS_DATA, type Project } from "@/lib/projects";
import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";

const projects = PROJECTS_DATA;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(2500 * projects.length);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateScrollHeight = (): void => {
      const base = window.innerHeight + 550;
      setScrollHeight(base * projects.length);
      ScrollTrigger.refresh();
    };

    updateScrollHeight();

    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const base = window.innerHeight + 550;
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${base * projects.length}`,
        onUpdate: (self) => {
          const total = projects.length;
          const index = Math.min(
            total - 1,
            Math.max(0, Math.floor(self.progress * total))
          );
          setActiveIndex(index);
        },
      });
    }, containerRef);

    window.addEventListener("resize", updateScrollHeight);

    return () => {
      window.removeEventListener("resize", updateScrollHeight);
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative scroll-section" id="projects">
      {/* Title Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="mx-auto w-fit">
          <Title>Projects</Title>
        </div>
      </div>

      {/* Main Tabs Container */}
      <div
        ref={containerRef}
        className="relative z-10 rounded-t-4xl lg:rounded-t-[3rem]"
        style={{ 
          height: `${scrollHeight}px`,
        }}
      >
        {/* Sticky Wrapper */}
        <div className="sticky top-[5vh] h-[90vh] pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-480 mx-auto h-full px-4 sm:px-6 lg:px-12">
            {/* Grid Container */}
            <div className="grid lg:grid-cols-[0.6fr_0.7fr] grid-cols-1 gap-8 h-full">
              {/* Left Content Panel */}
              <div className="bg-[#05126744] rounded-2xl lg:rounded-3xl p-4 sm:p-6 flex flex-col justify-end h-full">
                <div className="relative flex-1 mb-4 sm:mb-6">
                  {projects.map((project: Project, index: number) => (
                    <ProjectContent
                      key={project.id}
                      project={project}
                      index={index}
                      totalProjects={projects.length}
                      isActive={activeIndex === index}
                    />
                  ))}
                </div>

                {/* CTA Button */}
                <div className="w-full">
                  <a
                    href={projects[activeIndex].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <CustomButton
                      variant="primary"
                      before={
                        <HiOutlineExternalLink className="text-base sm:text-lg 3xl:text-xl font-bold" />
                      }
                    >
                      Live Site
                    </CustomButton>
                  </a>
                </div>
              </div>

              {/* Right Image Panel */}
              <div className="relative h-75 lg:h-full rounded-2xl lg:rounded-3xl overflow-hidden">
                {projects.map((project: Project, index: number) => (
                  <ProjectImage
                    key={project.id}
                    project={project}
                    index={index}
                    isActive={activeIndex === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}