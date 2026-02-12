"use client";

import type { ReactElement } from "react";
interface BadgeTitleProps {
  title: string;
}

export default function BadgeTitle({ title }: BadgeTitleProps): ReactElement {
  return (
    <div className="skill-badge relative mb-8 px-4 py-2 3xl:px-7 3xl:py-4 rounded-full text-white font-medium select-none cursor-default backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)]">
      <h3 className="text-lg sm:text-xl 3xl:text-4xl font-bold text-gray-300 tracking-wide">
        {title}
      </h3>

      {/* Sparkle element — pseudo ::before & ::after handled in globals.css */}
      <span className="skill-badge__sparkle absolute w-[25px] h-[25px] top-[-12px] right-[-2px] -rotate-[20deg] [filter:blur(0.5px)]" />
    </div>
  );
}
