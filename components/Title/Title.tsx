"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps): React.ReactElement {
  return (
    <motion.div
      className="ten w-fit"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl">{children}</h1>
    </motion.div>
  );
}
