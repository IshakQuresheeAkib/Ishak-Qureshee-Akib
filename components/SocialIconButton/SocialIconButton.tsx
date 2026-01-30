"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SocialIconButtonProps {
  icon: IconType;
  href: string;
  variant: "github" | "linkedin" | "facebook";
  ariaLabel: string;
  tooltip: string;
}

const variantStyles = {
  github: {
    iconColor: "#6e7681",
    fillBg: "#24292f",
  },
  linkedin: {
    iconColor: "#0a66c2",
    fillBg: "#0a66c2",
  },
  facebook: {
    iconColor: "#1877f2",
    fillBg: "#1877f2",
  },
};

const SocialIconButton = memo<SocialIconButtonProps>(
  ({ icon: Icon, href, variant, ariaLabel, tooltip }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const colors = variantStyles[variant];

    useEffect(() => {
      setIsMounted(true);
    }, []);

    return (
      <motion.li
        className="relative flex-[0_0_clamp(2rem,3vw,3rem)] list-none group/icon"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={
          isMounted
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.5, y: 20 }
        }
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        {/* Tooltip */}
        <div className="absolute bottom-[60%] left-1/2 -translate-x-1/2 -translate-y-0 z-10 px-3 py-1 rounded text-white font-medium text-[clamp(0.75rem,1.5vw,0.875rem)] whitespace-nowrap opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible transition-all duration-300 pointer-events-none"
          style={{ backgroundColor: colors.fillBg }}
        >
          {tooltip}
          {/* Arrow */}
          <div 
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent"
            style={{ borderTopColor: colors.fillBg }}
          />
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="relative flex justify-center items-center w-[clamp(2rem,3vw,3rem)] aspect-square text-[clamp(1rem,1vw,1rem)] border-2 rounded-full no-underline outline-none overflow-hidden cursor-pointer transition-colors duration-300 -webkit-tap-highlight-color-transparent group/link"
          style={{
            color: colors.iconColor,
            borderColor: colors.iconColor,
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = colors.fillBg;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.iconColor;
            e.currentTarget.style.borderColor = colors.iconColor;
          }}
        >
          {/* Fill animation background */}
          <div
            className="absolute inset-0 top-full group-hover/link:top-0 transition-all duration-300 z-0 pointer-events-none"
            style={{ backgroundColor: colors.fillBg }}
          />

          <Icon className="relative z-[2] w-full h-full max-w-[clamp(1rem,1vw,1rem)] max-h-[clamp(1rem,1vw,1rem)]" />
        </a>
      </motion.li>
    );
  }
);

SocialIconButton.displayName = "SocialIconButton";

export default SocialIconButton;
