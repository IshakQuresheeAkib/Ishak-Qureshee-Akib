"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import type { Skill } from "./types";

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

interface NeoSkillCircleProps {
  skill: Skill;
}

export default function NeoSkillCircle({ skill }: NeoSkillCircleProps): ReactElement {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex flex-col items-center justify-center gap-5"
    >
      <div className="
          relative flex items-center justify-center
          w-15 h-15 3xl:w-24 3xl:h-24
          rounded-full bg-[#0f2c4197]
          shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)]
          transition-shadow duration-300
        ">
        <div className="
            flex items-center justify-center
            w-[84%] h-[84%] rounded-full bg-transparent
            shadow-[inset_-5px_-5px_10px_rgba(255,255,255,0.05),inset_5px_5px_15px_rgba(0,0,0,0.5)]
          ">
          <div className="text-xl sm:text-2xl 2xl:text-3xl 3xl:text-5xl transition-transform duration-300 group-hover:scale-105">
            {skill.icon}
          </div>
        </div>
      </div>
      <span className="text-[12px] 3xl:text-lg font-semibold text-gray-300 absolute -bottom-6 2xl:-bottom-7 whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
}
