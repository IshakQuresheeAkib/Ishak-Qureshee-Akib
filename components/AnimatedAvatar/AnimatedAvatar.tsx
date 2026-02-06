"use client";

import { memo } from "react";
import Image from "next/image";
import "./AnimatedAvatar.css";

interface AnimatedAvatarProps {
  src: string;
  alt: string;
  priority?: boolean;
}

function GlowFilterSVG(): React.ReactElement {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      className="fixed w-0 h-0 pointer-events-none"
    >
      <filter id="avatar-glow-filter" x="-.25" y="-.25" width="1.5" height="1.5">
        <feComponentTransfer>
          <feFuncA type="table" tableValues="0 1 5" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="5" />
        <feComponentTransfer result="rond">
          <feFuncA type="table" tableValues="-2 3" />
        </feComponentTransfer>
        <feMorphology operator="dilate" radius="3" />
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

function AnimatedAvatarComponent({
  src,
  alt,
  priority = false,
}: AnimatedAvatarProps): React.ReactElement {
  return (
    <div className="animated-avatar-wrapper flex justify-center items-center shrink-0">
      <GlowFilterSVG />
      <div className="animated-avatar w-75 h-75 md:w-96 md:h-96 object-cover rounded-full relative">
        <div className="animated-avatar-image-wrapper">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 30vw, (max-width: 1200px) 40vw, 40vw"
            className="w-full h-full object-cover rounded-full"
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
