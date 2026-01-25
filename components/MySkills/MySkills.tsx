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
    <section className="py-36" id="skills">
      <div className="mx-auto w-fit pb-16">
        <Title>SkillSet</Title>
      </div>
      <div className="flex flex-col justify-center">
        <div className="lg:max-w-4xl md:mx-auto w-full">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
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
    <div className="sm:mt-0 sm:mb-12">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center"
      >
        <div
          className={`flex ${
            isLeft ? "justify-start" : "justify-end"
          } w-full mx-auto items-center sm:my-0 my-8`}
        >
          <div
            className={`w-full sm:w-1/2 ${isLeft ? "sm:pr-8" : "sm:pl-8"}`}
          >
            <div className="p-4 bg-white/25 text-white/90 rounded shadow">
              {skill.description}
            </div>
          </div>
        </div>
        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          {skill.iconType === "component" ? (
            <SiExpress className="w-10 h-10 text-white" />
          ) : (
            <div className="w-10 h-10 relative">
              <Image
                src={skill.icon as string}
                alt={skill.name}
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
