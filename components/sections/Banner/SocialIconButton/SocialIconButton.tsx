"use client";

import { memo } from "react";
import type { IconType } from "react-icons";

interface SocialIconButtonProps {
  icon: IconType;
  href: string;
  variant: "github" | "linkedin" | "facebook";
  ariaLabel: string;
}

const variantStyles = {
  github: {
    iconColor: "#65c1ff",
    fillBg: "#24292f",
  },
  linkedin: {
    iconColor: "#65c1ff",
    fillBg: "#0a66c2",
  },
  facebook: {
    iconColor: "#65c1ff",
    fillBg: "#1877f2",
  },
};

const SocialIconButton = memo<SocialIconButtonProps>(
  ({ icon: Icon, href, variant, ariaLabel }) => {
    const colors = variantStyles[variant];

    return (
      <li
        className="relative flex-[0_0_clamp(2.75rem,3vw,3rem)] list-none group/icon"
      >

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="relative flex aspect-square w-[clamp(2.75rem,3vw,3rem)] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-(--social-accent) text-(--social-accent) no-underline transition-colors duration-300 group/link hover:border-(--social-fill) hover:text-white focus-visible:border-(--social-fill) focus-visible:text-white focus-visible:outline-2 focus-visible:outline-[#65c1ff] focus-visible:outline-offset-4"
          style={{
            "--social-accent": colors.iconColor,
            "--social-fill": colors.fillBg,
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 top-full z-0 bg-(--social-fill) transition-all duration-500 pointer-events-none group-hover/link:top-0 group-focus-visible/link:top-0" />
          <Icon
            aria-hidden="true"
            className="relative z-2 rounded-3xl w-full h-full max-w-[clamp(1.7rem,1vw,2.5rem)] max-h-[clamp(1.7rem,1vw,2.5rem)]"
          />
        </a>
      </li>
    );
  }
);

SocialIconButton.displayName = "SocialIconButton";

export default SocialIconButton;
