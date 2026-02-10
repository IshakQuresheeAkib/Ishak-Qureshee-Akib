"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FaCloudDownloadAlt, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import CustomButton from "@/components/CustomButton/CustomButton";
import AnimatedAvatar from "@/components/AnimatedAvatar/AnimatedAvatar";
import SocialIconButton from "@/components/SocialIconButton/SocialIconButton";
import { SOCIAL_LINKS, EXTERNAL_URLS } from "@/lib/constants";
import ScrollDown from "./ScrollDown";

// ... [Keep ROLES and SOCIAL_ICONS arrays exactly as they were] ...
const ROLES: string[] = [
  "Web Developer",
  "Front End Developer",
  "Mern Stack Developer",
  "Full Stack Developer",
  "Javascript Developer",
];

const SOCIAL_ICONS = [
  {
    icon: FaGithub,
    href: SOCIAL_LINKS.github,
    variant: "github" as const,
    ariaLabel: "Visit GitHub Profile",
  },
  {
    icon: FaLinkedin,
    href: SOCIAL_LINKS.linkedin,
    variant: "linkedin" as const,
    ariaLabel: "Visit LinkedIn Profile",
  },
  {
    icon: FaFacebook,
    href: SOCIAL_LINKS.facebook,
    variant: "facebook" as const,
    ariaLabel: "Visit Facebook Profile",
  },
];

export default function Banner(): React.ReactElement {
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const initAnimation = async (): Promise<void> => {
      try {
        const SplitTextJS = (await import("split-text-js")).default;

        if (!textWrapperRef.current) return;

        const titles = textWrapperRef.current.querySelectorAll("h5");
        if (titles.length === 0) return;

        if (timelineRef.current) {
          timelineRef.current.kill();
        }

        const tl = gsap.timeline({ repeat: -1 });
        timelineRef.current = tl;

        titles.forEach((title) => {
          const splitTitle = new SplitTextJS(title as HTMLElement);

          tl.from(
            splitTitle.chars,
            {
              opacity: 0,
              y: 10,
              rotateX: -90,
              stagger: 0.02,
            },
            "<"
          ).to(
            splitTitle.chars,
            {
              opacity: 0,
              y: -10,
              rotateX: 90,
              stagger: 0.02,
            },
            "<1"
          );
        });
      } catch (error) {
        console.error("Error initializing text animation:", error);
      }
    };

    initAnimation();

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isMounted]);

  return (
    <section
      id="banner"
      // Added 'relative' to allow absolute positioning of the ScrollDown component
      className="scroll-section relative flex flex-col-reverse lg:flex-row min-h-screen max-w-[98%] lg:max-w-[90%] xl:max-w-[88%] 2xl:max-w-9/12 3xl:max-w-9/12 mx-auto justify-center items-center gap-[5vh] lg:gap-0 pt-[calc(100px-5vh)] lg:pt-[calc(200px-15vh)] mb-14 lg:mb-0"
    >
      <div>
        <p className="text-3xl 3xl:text-5xl font-bold text-white"> Hi! I&apos;m </p>
        <p
          className="text-3xl font-auto_wide sm:text-4xl xl:text-5xl 3xl:text-6xl font-extrabold uppercase text-white my-5"
          style={{
            textShadow:
              "0 .2ch 10px oklch(10% .2 320), 0 -2px 0 oklch(98% .05 320)",
          }}
        >
          Ishak Qureshee Akib
        </p>
        <div className="flex items-center gap-2 3xl:gap-4 xl:mt-9 3xl:mt-11">
          <p className="text-xl sm:text-3xl 3xl:text-5xl font-bold text-white whitespace-nowrap">I&apos;m a</p>
          <div className="relative inline-flex min-w-0 items-baseline" ref={textWrapperRef}>
            {ROLES.map((role) => (
              <h5 key={role} className="absolute left-0 m-0 whitespace-nowrap text-xl sm:text-3xl 3xl:text-5xl font-bold leading-0 text-[#65c1ff]">
                {role}
              </h5>
            ))}
          </div>
        </div>
          <p className="mt-2 3xl:mt-5 font-thin text-white/90 text-base 2xl:text-lg 3xl:text-2xl sm:max-w-4/5 leading-7 3xl:leading-10">
            passionate about building scalable and performant web applications using MERN stack. I take responsibility to craft a good user experience using modern front-end architecture.
          </p>
          <ul className="flex w-fit gap-3 sm:gap-5 my-7">
            {SOCIAL_ICONS.map((social, index) => (
              <motion.div
                key={social.variant}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <SocialIconButton
                  icon={social.icon}
                  href={social.href}
                  variant={social.variant}
                  ariaLabel={social.ariaLabel}
                />
              </motion.div>
            ))}
          </ul>

          <a
            href={EXTERNAL_URLS.resume}
            download
          >
            <CustomButton before={<FaCloudDownloadAlt className="text-base sm:text-xl 3xl:text-4xl" />}>
               Resume
            </CustomButton>
          </a>
      </div>

      <div className="flex justify-center items-center shrink-0">
        <AnimatedAvatar
          src={EXTERNAL_URLS.avatarImage}
          alt="Ishak Qureshee Akib"
          priority
        />
      </div>

      {/* Scroll Indicator positioned absolutely at bottom */}
      <ScrollDown />
    </section>
  );
}