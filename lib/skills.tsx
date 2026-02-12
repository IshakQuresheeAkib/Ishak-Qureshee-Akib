import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiTypescript, SiGit} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { GrWordpress } from "react-icons/gr";
import type { ReactElement } from "react";

// --- Types ---

export interface Skill {
  name: string;
  icon: ReactElement;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

// --- Data ---

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#e03f23]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#0095ff]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <IoLogoFirebase className="text-[#f59712]" /> },
      { name: "Supabase", icon: <RiSupabaseFill className="text-[#3CC98B]" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "WordPress", icon: <GrWordpress className="text-[#50b9ff]" /> },
    ],
  },
];
