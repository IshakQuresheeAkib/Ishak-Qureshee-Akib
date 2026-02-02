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
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-medium uppercase text-white before:content-[''] before:block before:w-[82px] before:h-2 before:rounded-[2rem] before:bg-[#2282ff] before:mb-2">
        {children}
      </h1>
    </motion.div>
  );
}