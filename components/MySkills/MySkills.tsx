"use client";

import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, 
  SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, 
  SiTypescript, SiGit 
} from "react-icons/si";
import Title from "@/components/Title/Title";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { GrWordpress } from "react-icons/gr";

// --- Types ---
interface Skill {
  name: string;
  icon: React.ReactElement;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

// --- Data ---
const SKILL_CATEGORIES: SkillCategory[] = [
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
      { name: "Wordpress", icon: <GrWordpress  className="text-[#50b9ff]" /> },
    ],
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 }
  },
};

export default function MySkills(): React.ReactElement {
  return (
    <section 
      id="skills" className="scroll-section py-16 sm:py-24 lg:py-36">
      <div className="max-w-[95%] 2xl:max-w-375 3xl:max-w-500 mx-auto">
        
        {/* Title Section - Adjusted color to fit light theme of Neomorphism */}
        <div className="mx-auto w-fit pb-8 sm:pb-12 lg:pb-16">
        <Title>SkillSet</Title>
      </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-20 xl:gap-0">
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="flex flex-col items-center"
            >
              {/* Category Title (Neomorphic Plate) */}
              <div className="mb-8 px-8 py-3 rounded-full bg-[#0f2c4162] shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)]">
                <h3 className="text-lg sm:text-xl 3xl:text-3xl font-bold text-gray-300 tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills Cluster */}
              <div className="flex flex-wrap justify-center gap-10 2xl:gap-12 3xl:gap-y-20">
                {category.skills.map((skill) => (
                  <NeoSkillCircle key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sub-Component: Neomorphic Circle ---
function NeoSkillCircle({ skill }: { skill: Skill }): React.ReactElement {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex flex-col items-center justify-center gap-5"
    >
      {/* Outer Circle (Convex) */}
      <div 
        className="
          relative flex items-center justify-center 
          w-20 h-20 3xl:w-28 3xl:h-28 
          rounded-full bg-[#0f2c4197] 
          shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)]
          transition-shadow duration-300
        "
      >
        {/* Inner Circle (Concave/Pressed look) */}
        <div 
          className="
            flex items-center justify-center 
            w-[80%] h-[80%] rounded-full bg-transparent
            shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.05),inset_5px_5px_15px_rgba(0,0,0,0.5)]
          "
        >
          {/* Icon */}
          <div className="text-xl sm:text-3xl 3xl:text-5xl transition-transform duration-300 group-hover:scale-105">
            {skill.icon}
          </div>
        </div>
      </div>

      {/* Skill Name */}
      <span className="text-[12px] 3xl:text-lg font-semibold text-gray-300 absolute -bottom-6 2xl:-bottom-7 whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
}