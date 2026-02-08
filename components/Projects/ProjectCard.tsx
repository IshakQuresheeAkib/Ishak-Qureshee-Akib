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

const THEMES = ["teal", "purple", "blue"] as const;

export default function ProjectCard({
  project,
  isActive,
  index,
}: ProjectCardProps): React.ReactElement {
  
  // Cycle themes based on index (0=teal, 1=purple, 2=blue)
  const theme = THEMES[index % THEMES.length];

  // Helper to render icon list
  const renderTechIcons = (techs: string[], label: string) => (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-gray-500">{label}</span>
      <div className="flex flex-wrap gap-3">
        {techs.map((tech) => {
          const Icon: IconType = TECH_ICONS[tech] || TECH_ICONS["React"]; // Fallback
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
      {/* DATA-THEME WRAPPER 
        This div carries the 'fancy-corners' class and the theme attribute.
      */}
      <div 
        data-theme={theme} 
        className="relative w-full max-w-[96%] h-auto mx-auto"
      >
        <section className="font-sans text-black">
          <div className="fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right flex flex-col lg:flex-row lg:items-stretch shadow-2xl">
            
            {/* --- Image Section (Left) --- 
                Maps to: .flex-shrink-0 .self-stretch
            */}
            <div className="relative w-full lg:w-[55%] xl:w-[60%] shrink-0 h-auto">
               <div className="h-full w-full relative overflow-hidden group">
                 <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={isActive}
                />
                {/* Overlay matching theme color (optional, adds polish) */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
               </div>
            </div>

            {/* --- Content Section (Right) --- 
                Maps to: .p-6 .bg-grey
            */}
            <div className="w-full lg:w-[45%] xl:w-[40%] bg-grey px-6 sm:px-10 lg:px-12 flex flex-col justify-center">
              <div className="leading-relaxed">
                {/* Header */}

          <div className="mb-6">

             <div className="flex items-center gap-3 mb-2">

                <span className="text-4xl sm:text-5xl font-bold text-gray-100 select-none">

                  {String(index + 1).padStart(2, "0")}

                </span>

                <div className="h-px bg-gray-200 flex-1" />

             </div>

             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">

               {project.title}

             </h2>

          </div>



          {/* Description */}

          <div className="mb-8">

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">

              {project.description}

            </p>

          </div>



          {/* Core Features */}

           <div className="mb-8">

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



          {/* Tech Stack Grid */}

          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8 pt-6 border-t border-gray-100">

            {project.techStack.frontend.length > 0 && renderTechIcons(project.techStack.frontend, "Frontend")}

            {project.techStack.backend.length > 0 && renderTechIcons(project.techStack.backend, "Backend")}

            {project.techStack.database.length > 0 && renderTechIcons(project.techStack.database, "Database")}

          </div>



          {/* Action Button */}

          <div className="mt-auto pt-4">

             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block">

                <CustomButton

                  variant="primary"

                  before={<HiOutlineExternalLink className="text-lg" />}

                >

                  Explore Live

                </CustomButton>

             </a>

          </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}