"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import "./SocialIconButton.css";

interface SocialIconButtonProps {
  icon: IconType;
  href: string;
  variant: "github" | "linkedin" | "facebook";
  ariaLabel: string;
  tooltip: string;
}

const SocialIconButton = memo<SocialIconButtonProps>(
  ({ icon: Icon, href, variant, ariaLabel, tooltip }) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    return (
      <motion.li
        className={`social-icon social-icon--${variant}`}
        data-tooltip={tooltip}
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
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          <Icon />
        </a>
      </motion.li>
    );
  }
);

SocialIconButton.displayName = "SocialIconButton";

export default SocialIconButton;
