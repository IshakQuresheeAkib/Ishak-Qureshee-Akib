"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps): React.ReactElement {
  return (
    <motion.div
      className="w-fit"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1
        className="text-[6vw] sm:text-3xl lg:text-4xl 3xl:text-5xl font-medium uppercase text-white before:content-[''] before:block before:w-20.5 before:h-2 before:rounded-4xl font-auto_wide before:bg-[#2282ff] before:mb-2 text-center sm:text-left"
        style={{
          textShadow:
            "0 .2ch 10px oklch(10% .2 320), 0 -2px 0 oklch(98% .05 320)",
        }}
      >
        {children}
      </h1>
    </motion.div>
  );
}