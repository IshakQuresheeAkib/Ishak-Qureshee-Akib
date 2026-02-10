"use client";

import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, 
  SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, 
  SiTypescript, SiGit, SiFirebase 
} from "react-icons/si";
import Title from "@/components/Title/Title";

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
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-black" /> },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      // { name: "VS Code", icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
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
      id="skills" className="scroll-section py-16 sm:py-24 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90%] 2xl:max-w-7xl 3xl:max-w-[2000px] mx-auto">
        
        {/* Title Section - Adjusted color to fit light theme of Neomorphism */}
        <div className="mx-auto w-fit pb-8 sm:pb-12 lg:pb-16">
        <Title>SkillSet</Title>
      </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 3xl:gap-16">
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
              <div className="mb-8 px-8 py-3 rounded-full bg-[#dde1e7] shadow-[-5px_-5px_9px_rgba(255,255,255,0.45),5px_5px_9px_rgba(94,104,121,0.3)]">
                <h3 className="text-lg sm:text-xl 3xl:text-3xl font-bold text-gray-600 tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills Cluster */}
              <div className="flex flex-wrap justify-center gap-6 3xl:gap-10">
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
      className="group relative flex flex-col items-center justify-center gap-3"
    >
      {/* Outer Circle (Convex) */}
      <div 
        className="
          relative flex items-center justify-center 
          w-20 h-20 sm:w-24 sm:h-24 3xl:w-32 3xl:h-32 
          rounded-full bg-[#dde1e7] 
          shadow-[-5px_-5px_9px_rgba(255,255,255,0.45),5px_5px_9px_rgba(94,104,121,0.3)]
          transition-shadow duration-300
        "
      >
        {/* Inner Circle (Concave/Pressed look) */}
        <div 
          className="
            flex items-center justify-center 
            w-[80%] h-[80%] rounded-full bg-transparent
            shadow-[inset_-5px_-5px_9px_rgba(255,255,255,0.45),inset_5px_5px_9px_rgba(94,104,121,0.3)]
          "
        >
          {/* Icon */}
          <div className="text-3xl sm:text-4xl 3xl:text-5xl transition-transform duration-300 group-hover:scale-110">
            {skill.icon}
          </div>
        </div>
      </div>

      {/* Skill Name */}
      <span className="text-sm 3xl:text-xl font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
}