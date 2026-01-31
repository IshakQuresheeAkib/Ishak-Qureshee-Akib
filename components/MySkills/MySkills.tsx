"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiExpress } from "react-icons/si";
import Title from "@/components/Title/Title";

interface Skill {
  id: number;
  name: string;
  description: string;
  icon: React.ReactElement | string;
  iconType: "image" | "component";
  position: "left" | "right";
}

const skills: Skill[] = [
  {
    id: 1,
    name: "HTML5",
    description: "Started by mastering HTML to structure web content,",
    icon: "/skills/html.png",
    iconType: "image",
    position: "left",
  },
  {
    id: 2,
    name: "CSS3",
    description: "Moved on to CSS to style and visually enhance my web pages,",
    icon: "/skills/css.png",
    iconType: "image",
    position: "right",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    description:
      "Explored Tailwind CSS to streamline and simplify the styling process with a utility-first approach.",
    icon: "/skills/tailwind-css.svg",
    iconType: "image",
    position: "left",
  },
  {
    id: 4,
    name: "JavaScript",
    description:
      "Learnt JavaScript to add interactivity and dynamic behavior to websites.",
    icon: "/skills/js.png",
    iconType: "image",
    position: "right",
  },
  {
    id: 5,
    name: "React",
    description:
      "Dived into React to build dynamic and scalable user interfaces using a component-based architecture.",
    icon: "/skills/react.png",
    iconType: "image",
    position: "left",
  },
  {
    id: 6,
    name: "Node.js",
    description:
      "Commenced with Node.js to understand server-side JavaScript.",
    icon: "/skills/nodejs.png",
    iconType: "image",
    position: "right",
  },
  {
    id: 7,
    name: "Express.js",
    description:
      "Taken on hand Express.js, a minimal and powerful web application framework.",
    icon: "express",
    iconType: "component",
    position: "left",
  },
  {
    id: 8,
    name: "MongoDB",
    description:
      "Went to MongoDB for flexible and scalable data storage in NoSQL format.",
    icon: "/skills/mongodb.png",
    iconType: "image",
    position: "right",
  },
];

export default function MySkills(): React.ReactElement {
  return (
    <section className="py-16 sm:py-24 lg:py-36 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="mx-auto w-fit pb-8 sm:pb-12 lg:pb-16">
        <Title>SkillSet</Title>
      </div>
      <div className="flex flex-col justify-center">
        <div className="lg:max-w-4xl md:mx-auto w-full">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/20" />
            {skills.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillItemProps {
  skill: Skill;
}

function SkillItem({ skill }: SkillItemProps): React.ReactElement {
  const isLeft = skill.position === "left";

  return (
    <div className="mb-8 sm:mb-12">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center relative"
      >
        {/* Mobile layout: icon on top, text below */}
        <div className="sm:hidden flex flex-col items-center gap-4 w-full">
          <div className="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-[#0B2F52]/50 p-2">
            {skill.iconType === "component" ? (
              <SiExpress className="w-8 h-8 text-white" />
            ) : (
              <div className="w-8 h-8 relative">
                <Image
                  src={skill.icon as string}
                  alt={skill.name}
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
            )}
          </div>
          <div className="w-full px-2">
            <div className="p-3 sm:p-4 bg-white/25 text-white/90 rounded shadow text-center text-sm">
              {skill.description}
            </div>
          </div>
        </div>

        {/* Desktop layout: alternating left/right */}
        <div
          className={`hidden sm:flex ${
            isLeft ? "justify-start" : "justify-end"
          } w-full mx-auto items-center`}
        >
          <div
            className={`w-full sm:w-1/2 ${isLeft ? "sm:pr-8" : "sm:pl-8"}`}
          >
            <div className="p-4 bg-white/25 text-white/90 rounded shadow text-sm lg:text-base">
              {skill.description}
            </div>
          </div>
        </div>
        
        {/* Desktop timeline icon */}
        <div className="hidden sm:flex rounded-full absolute left-1/2 transform -translate-x-1/2 items-center justify-center bg-[#0B2F52] p-1">
          {skill.iconType === "component" ? (
            <SiExpress className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
          ) : (
            <div className="w-8 h-8 lg:w-10 lg:h-10 relative">
              <Image
                src={skill.icon as string}
                alt={skill.name}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 32px, 40px"
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
