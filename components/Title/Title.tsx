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
      <h1 className="md:text-5xl text-4xl">{children}</h1>
    </motion.div>
  );
}
