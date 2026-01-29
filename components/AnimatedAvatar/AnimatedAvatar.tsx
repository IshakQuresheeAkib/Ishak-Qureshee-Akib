"use client";

import { memo } from "react";
import Image from "next/image";
import "./AnimatedAvatar.css";

interface AnimatedAvatarProps {
  src: string;
  alt: string;
  priority?: boolean;
}

/**
 * SVG Glow Filter Component
 * Hidden SVG that provides the glow effect filter for the avatar
 */
function GlowFilterSVG(): React.ReactElement {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      className="glow-filter-svg"
    >
      <filter id="avatar-glow-filter" x="-.25" y="-.25" width="1.5" height="1.5">
        <feComponentTransfer>
          <feFuncA type="table" tableValues="0 1 5" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="5" />
        <feComponentTransfer result="rond">
          <feFuncA type="table" tableValues="-2 3" />
        </feComponentTransfer>
        <feMorphology operator="dilate" radius="1" />
        <feGaussianBlur stdDeviation="10" />
        <feBlend in="rond" result="glow" />
        <feComponentTransfer in="SourceGraphic">
          <feFuncA type="table" tableValues="0 0 1" />
        </feComponentTransfer>
        <feBlend in2="glow" />
      </filter>
    </svg>
  );
}

/**
 * AnimatedAvatar Component
 * Displays a profile image with animated rotating gradient glow border
 * Uses CSS animations + SVG filter for enhanced glow effect
 */
function AnimatedAvatarComponent({
  src,
  alt,
  priority = false,
}: AnimatedAvatarProps): React.ReactElement {
  return (
    <div className="animated-avatar-wrapper">
      <GlowFilterSVG />
      <div className="animated-avatar">
        <div className="animated-avatar-image-wrapper">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 374px) 160px, (max-width: 639px) 200px, (max-width: 767px) 220px, (max-width: 1023px) 250px, (max-width: 1279px) 280px, (max-width: 1535px) 300px, 350px"
            className="animated-avatar-image"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
const AnimatedAvatar = memo(AnimatedAvatarComponent);
AnimatedAvatar.displayName = "AnimatedAvatar";

export default AnimatedAvatar;
