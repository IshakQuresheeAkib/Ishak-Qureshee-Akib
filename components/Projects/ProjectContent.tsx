"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectContentProps {
  project: Project;
  index: number;
  totalProjects: number;
  isActive: boolean;
}

export function ProjectContent({
  project,
  index,
  totalProjects,
  isActive,
}: ProjectContentProps): React.ReactElement {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-around text-center transition-opacity duration-500"
      style={{
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      {/* Project Number */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-1"
      >
        <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-bold text-white/10">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-sm sm:text-base lg:text-lg 3xl:text-xl text-white/30 ml-2">
          / {String(totalProjects).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Project Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-medium text-white/95 leading-tight mb-3 sm:mb-4"
      >
        {project.title}
      </motion.h2>

      {/* Divider Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full h-1 bg-white/30 mb-3 sm:mb-4"
      ></motion.div>

      {/* Project Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xs sm:text-sm lg:text-base 3xl:text-lg text-white/70 leading-relaxed mb-4 sm:mb-6"
      >
        {project.description}
      </motion.p>

      {/* Core Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-sm sm:text-base lg:text-lg 3xl:text-xl font-semibold text-white/90 mb-2 sm:mb-3">
          Core Features:
        </h3>
        <ul className="text-xs sm:text-sm 3xl:text-base text-white/70 space-y-1 sm:space-y-1.5 text-left px-4 sm:px-6 lg:px-8">
          {project.features.map((feature: string, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              className="list-disc list-inside"
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
