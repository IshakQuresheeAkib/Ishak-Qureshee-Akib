"use client";

import Image from "next/image";
import { useRef } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import type { Project } from "@/lib/projects";
import TechIconList from "./TechIconList";

interface ProjectCardProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function ProjectCard({
  project,
  index,
  progress,
  range,
  targetScale,
}: ProjectCardProps): React.ReactElement {
  
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const { scrollYProgress: cardProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(cardProgress, [0, 1], [1.3, 1]);

  return (
    <div ref={container} className="min-h-screen w-full flex items-center justify-center sticky top-0 pointer-events-none">
      <motion.div 
        style={{ scale, top: `calc(7vh + ${index * 20}px)` }} 
        className={`relative flex flex-col sm:flex-row w-full min-h-140 sm:min-h-0 sm:h-[75vh] rounded-3xl overflow-hidden border bg-linear-to-br backdrop-blur-xl shadow-2xl origin-top focus-within:ring-2 focus-within:ring-blue-500/50 outline-none pointer-events-auto`}
      >
        {/* Number indicator background */}
        <div className="absolute top-4 right-6 text-slate-100/5 font-black text-7xl md:text-9xl pointer-events-none select-none z-0 mix-blend-overlay">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Image Section */}
        <div className="relative w-full sm:w-[45%] lg:w-[50%] h-[35%] min-h-62 sm:min-h-0 sm:h-full overflow-hidden group flex-none">
           <motion.div style={{ scale: imageScale }} className="absolute inset-0 w-full h-full">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top sm:object-center transition-transform duration-1000 group-hover:scale-105"
              priority={index === 0}
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="relative w-full sm:w-[55%] lg:w-[50%] h-[65%] sm:h-full flex flex-col justify-between px-3 sm:px-10 py-[2vh] z-10 bg-slate-950/50 sm:bg-transparent overflow-hidden">
          
          <div className="flex flex-col h-full pointer-events-auto">
             <div className="flex-none mb-3 sm:mb-4">
               <div className="flex items-center gap-3 mb-2">
                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">{project.title}</h2>
                 <div className="h-px bg-blue-400/50 flex-1 ml-2" />
               </div>
               <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
                 {project.description}
               </p>
             </div>

             <div className="flex-1 flex flex-col md:gap-[3vh]">
               <div>
                 <h3 className="text-[9px] sm:text-[15px] font-bold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">Core Features</h3>
                 <ul className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-1.5 sm:gap-y-2">
                   {project.features.map((feature, i) => (
                     <li key={i} className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm">
                       <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                       {feature}
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="grid grid-cols-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-0">
                 {project.techStack.frontend.length > 0 && <TechIconList techs={project.techStack.frontend} label="Frontend" />}
                 {project.techStack.backend.length > 0 && <TechIconList techs={project.techStack.backend} label="Backend" />}
                 {project.techStack.database.length > 0 && <TechIconList techs={project.techStack.database} label="Database" />}
               </div>
             </div>

             {/* Footer Buttons */}
             <div className="flex-none pt-4 sm:pt-[1vh] flex flex-wrap gap-1.5 sm:gap-3">
               <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-1 py-2 sm:px-5 sm:py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-900/20 focus:ring-2 focus:ring-blue-400 outline-none" aria-label={`View live site for ${project.title}`}>
                 <HiOutlineExternalLink aria-hidden="true" className="text-base" /> Live Site
               </a>
               {project.clientRepo && (
                 <a href={project.clientRepo} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-1 py-2 sm:px-5 sm:py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-medium rounded-lg border border-slate-700 transition-transform hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-slate-400 outline-none" aria-label={`View Client Repo for ${project.title}`}>
                   <FaGithub aria-hidden="true" className="text-base" /> Client Repo
                 </a>
               )}
               {project.serverRepo && (
                 <a href={project.serverRepo} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-1 py-2 sm:px-5 sm:py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-medium rounded-lg border border-slate-700 transition-transform hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-slate-400 outline-none" aria-label={`View Server Repo for ${project.title}`}>
                   <FaGithub aria-hidden="true" className="text-base" /> Server Repo
                 </a>
               )}
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}