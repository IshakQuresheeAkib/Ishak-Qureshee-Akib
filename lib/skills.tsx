import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiTypescript, SiGit, SiGithub } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { GrWordpress } from "react-icons/gr";
import { FaFigma,  FaUserShield } from "react-icons/fa";
import type { ReactElement } from "react";
import { BsFillPiggyBankFill } from "react-icons/bs";

export interface Skill {
  name: string;
  icon: ReactElement;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#e03f23]" aria-hidden="true" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#0095ff]" aria-hidden="true" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" aria-hidden="true" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" aria-hidden="true" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" aria-hidden="true" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" aria-hidden="true" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" aria-hidden="true" /> },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" aria-hidden="true" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" aria-hidden="true" /> },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" aria-hidden="true" /> },
      { name: "Supabase", icon: <RiSupabaseFill className="text-[#3CC98B]" aria-hidden="true" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" aria-hidden="true" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" aria-hidden="true" /> },
      { name: "Zustand", icon: <BsFillPiggyBankFill className="text-[#000000]" aria-hidden="true" /> },
      { name: "NextAuth", icon: <FaUserShield className="text-[#6366F1]" aria-hidden="true" /> },
      { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" aria-hidden="true" /> },
      { name: "WordPress", icon: <GrWordpress className="text-[#50b9ff]" aria-hidden="true" /> },
      { name: "Firebase", icon: <IoLogoFirebase className="text-[#f59712]" aria-hidden="true" /> },
    ],
  },
];
