"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import Title from "@/components/Title/Title";
import BadgeTitle from "@/components/MySkills/BadgeTitle";
import NeoSkillCircle from "@/components/MySkills/NeoSkillCircle";
import { SKILL_CATEGORIES } from "@/components/MySkills/skillCategories";
import "./skills.css";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// --- Main Component ---
export default function MySkills(): ReactElement {
  return (
    <section id="skills" className="scroll-section py-16 sm:py-24">
      <div className="max-w-[92%] 2xl:max-w-325 3xl:max-w-425 mx-auto">
        <div className="mx-auto w-fit pb-8 sm:pb-12 lg:pb-16">
          <Title>SkillSet</Title>
        </div>
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
              {/* Badge Category Title */}
              <BadgeTitle title={category.title} />

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