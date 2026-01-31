"use client";

import Image from "next/image";
import type { Project } from "@/lib/projects";

interface ProjectImageProps {
  project: Project;
  index: number;
  isActive: boolean;
}

export function ProjectImage({
  project,
  index,
  isActive,
}: ProjectImageProps): React.ReactElement {
  return (
    <div
      className="absolute inset-0 transition-all duration-500"
      style={{
        opacity: isActive ? 1 : 0,
        transform: isActive ? "translateY(0)" : "translateY(10%)",
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
          priority={index === 0}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
    </div>
  );
}
