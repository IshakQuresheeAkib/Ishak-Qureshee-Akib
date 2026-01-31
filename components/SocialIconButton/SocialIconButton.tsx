"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SocialIconButtonProps {
  icon: IconType;
  href: string;
  variant: "github" | "linkedin" | "facebook";
  ariaLabel: string;
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
  ({ icon: Icon, href, variant, ariaLabel }) => {
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
          duration: 2,
          delay: 0.1,
          ease: [0.25, 1, 0.5, 1],
        }}
      >

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="relative flex justify-center items-center w-[clamp(2rem,2vw,3rem)] aspect-square text-[clamp(1rem,1vw,1rem)] border-2 rounded-full no-underline outline-none overflow-hidden cursor-pointer transition-colors duration-700 -webkit-tap-highlight-color-transparent group/link"
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
            className="absolute inset-0 top-full group-hover/link:top-0 transition-all duration-700 z-0 pointer-events-none"
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
