"use client";

import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import CustomButton from "@/components/CustomButton/CustomButton";
import { Project, TECH_ICONS } from "@/lib/projects";
import { IconType } from "react-icons";

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
    <div className="flex flex-col gap-2">
      <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-gray-500">{label}</span>
      <div className="flex flex-wrap gap-3">
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
          <div className="fancy-corners rounded-3xl fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right flex flex-col lg:flex-row shadow-2xl h-[60vh]">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="h-auto w-full flex-1 object-cover transition-transform duration-700 rounded-tl-2xl rounded-bl-2xl"
              priority={isActive}
            />
            <div className="h-full rounded-3xl w-[30vw] flex flex-col justify-around pb-4 bg-gray-50 sm:px-2 lg:px-6 overflow-hidden">
                <div className="">
                  <div className="">
                      <span className="text-4xl sm:text-5xl font-bold text-gray-300 select-none">{String(index + 1).padStart(2, "0")} </span>
                      <div className="h-px bg-gray-400 flex-1" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"> {project.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">

                  {project.description}

                </p>
                <div className="">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Core Features</h3>
                  <ul className="space-y-2">

                    {project.features.map((feature, i) => (

                      <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-gray-600">

                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />

                        {feature}

                      </li>

                    ))}

                  </ul>
                </div>
                <div className="grid grid-cols-3 gap-y-6 gap-x-4 border-t border-gray-100">

                  {project.techStack.frontend.length > 0 && renderTechIcons(project.techStack.frontend, "Frontend")}

                  {project.techStack.backend.length > 0 && renderTechIcons(project.techStack.backend, "Backend")}

                  {project.techStack.database.length > 0 && renderTechIcons(project.techStack.database, "Database")}

                </div>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <CustomButton  variant="primary" before={<HiOutlineExternalLink className="text-lg" />}>Explore Live </CustomButton>
                </a>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}