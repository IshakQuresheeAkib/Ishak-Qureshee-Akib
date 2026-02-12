"use client";

import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import CustomButton from "@/components/CustomButton/CustomButton";
import { TECH_ICONS } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import type { IconType } from "react-icons";
import "./projectCard.css";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  totalProjects: number;
  index: number;
}

const THEMES = ["teal", "orange", "red"] as const;

export default function ProjectCard({
  project,
  isActive,
  index,
}: ProjectCardProps): React.ReactElement {
  
  // Cycle themes based on index (0=teal, 1=orange, 2=red)
  const theme = THEMES[index % THEMES.length];

  // Helper to render icon list
  const renderTechIcons = (techs: string[], label: string) => (
    <div className="flex flex-col">
      <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-gray-500">{label}</span>
      <div className="flex flex-wrap gap-1">
        {techs.map((tech) => {
          const Icon: IconType = TECH_ICONS[tech] || TECH_ICONS["React"]; 
          return (
            <div key={tech} className="group relative flex items-center justify-center p-2 rounded-lg bg-gray-50 border border-gray-100 hover:border-blue-400/50 hover:bg-blue-50 transition-all duration-300" title={tech}>
              <Icon className="text-lg sm:text-xl text-gray-600 group-hover:text-blue-600 transition-colors" />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      className="absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? "translateY(0)" : "translateY(20px)",
        pointerEvents: isActive ? "auto" : "none",
        zIndex: isActive ? 10 : 0,
      }}
    >
      <div 
        data-theme={theme} 
        className="relative"
      >
        <section className="font-sans text-black flex items-center justify-center h-full w-[90%] mx-auto">
          <div className="fancy-corners rounded-3xl fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right flex flex-col lg:flex-row shadow-2xl h-[85vh] mb-4 lg:h-[68vh]">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="h-auto w-full max-h-[40vh] lg:max-h-full lg:max-w-[55vw] flex-1 object-cover transition-transform duration-700 rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"
              priority={isActive}
            />
            <div className="h-full rounded-b-2xl lg:rounded-r-2xl lg:w-[40vw] xl:w-[40vw] flex flex-col justify-center gap-[2vh] pb-2 bg-gray-50 px-3 2xl:px-5 overflow-hidden">
                <div>
                  <div className="mb-[1vh]">
                      <span className="text-base font-bold font-auto_wide text-gray-400 select-none">{String(index + 1).padStart(2, "0")}  </span>
                      <span className="text-[12px] text-gray-400 select-none font-auto_wide">/ 04</span>
                      <div className="h-px bg-gray-300 flex-1" />
                  </div>
                  <h2 className="text-xl lg:text-2xl 3xl:text-4xl font-bold text-gray-900 leading-tight"> {project.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-sm 3xl:text-base pt-[1vh]"> {project.description} </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Core Features</h3>
                  <ul className="sm:space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 leading-relaxed text-sm 3xl:text-base">
                        <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-3 gap-y-6 gap-x-2">
                  {project.techStack.frontend.length > 0 && renderTechIcons(project.techStack.frontend, "Frontend")}
                  {project.techStack.backend.length > 0 && renderTechIcons(project.techStack.backend, "Backend")}
                  {project.techStack.database.length > 0 && renderTechIcons(project.techStack.database, "Database")}
                </div>
               <div>
                 <CustomButton 
                  variant="primary"
                  size="sm"
                  before={<HiOutlineExternalLink className="text-base" />}
                  content="Live Site"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
               </div>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}