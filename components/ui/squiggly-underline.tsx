"use client";

import { motion, useReducedMotion } from "framer-motion";
import "./squiggly-underline.css";

interface SquigglyUnderlineProps {
  className?: string;
  layoutId?: string;
}

export function SquigglyUnderline({
  className = "",
  layoutId = "navbar-squiggly-underline",
}: SquigglyUnderlineProps): React.ReactElement {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      layoutId={layoutId}
      className={`pointer-events-none absolute left-1/2 top-full mt-0.5 h-2 w-[calc(100%+0.5rem)] -translate-x-1/2 text-[#2da7ff] ${className}`}
      transition={{
        layout: {
          duration: shouldReduceMotion ? 0 : 0.35,
          ease: [0.25, 1, 0.5, 1],
        },
      }}
      aria-hidden="true"
    >
      <svg
        className="block h-full w-full overflow-visible"
        viewBox="0 0 37 8"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          className="squiggly-underline-path"
          d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  );
}
