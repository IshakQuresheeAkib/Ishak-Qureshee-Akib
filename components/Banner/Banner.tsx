"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FaCloudDownloadAlt, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Title from "@/components/Title/Title";
import CustomButton from "@/components/CustomButton/CustomButton";
import AnimatedAvatar from "@/components/AnimatedAvatar/AnimatedAvatar";
import SocialIconButton from "@/components/SocialIconButton/SocialIconButton";
import { SOCIAL_LINKS, EXTERNAL_URLS } from "@/lib/constants";

export default function Banner(): React.ReactElement {
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Dynamically import SplitTextJS since it's a client-only library
    const initAnimation = async (): Promise<void> => {
      try {
        const SplitTextJS = (await import("split-text-js")).default;

        if (!textWrapperRef.current) return;

        const titles = textWrapperRef.current.querySelectorAll("h5");
        if (titles.length === 0) return;

        // Clear any existing timeline
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

  const roles : string[] = [
    "Web Developer",
    "Front End Developer",
    "Mern Stack Developer",
    "Full Stack Developer",
    "Javascript Developer",
  ];

  return (
    <section
      id="banner"
      className="scroll-section flex flex-col-reverse lg:flex-row min-h-screen justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0 gap-8 lg:gap-12"
    >
      <div className="w-full lg:w-1/2 xl:w-[55%] max-w-2xl">
        <Title> Ishak Qureshee Akib</Title>
        <div className="flex items-center gap-2 mt-3 sm:mt-4">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white whitespace-nowrap">I&apos;m a</p>
          <div className="relative inline-flex min-h-[1.5em] min-w-0 items-baseline" ref={textWrapperRef}>
            {roles.map((role) => (
              <h5 key={role} className="absolute left-0 m-0 whitespace-nowrap text-[16px] font-bold leading-none text-[#65c1ff] xs:text-[18px] sm:text-[20px] lg:text-[24px]">
                {role}
              </h5>
            ))}
          </div>
        </div>
        <p className="pt-6 sm:pt-8 lg:pt-9 font-thin text-white/80 text-sm sm:text-base max-w-xl">
          specializing in creating Full stack web application using MERN stack. Mostly i focused on front end of website to create highly optimized, scalable and fully responsive interfaces for better user experiences with React and Next js.
        </p>
        <ul className="py-4 sm:py-6 xl:py-8 flex w-fit gap-3 sm:gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <SocialIconButton
              icon={FaGithub}
              href={SOCIAL_LINKS.github}
              variant="github"
              ariaLabel="Visit GitHub Profile"
              tooltip="GitHub"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <SocialIconButton
              icon={FaLinkedin}
              href={SOCIAL_LINKS.linkedin}
              variant="linkedin"
              ariaLabel="Visit LinkedIn Profile"
              tooltip="LinkedIn"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <SocialIconButton
              icon={FaFacebook}
              href={SOCIAL_LINKS.facebook}
              variant="facebook"
              ariaLabel="Visit Facebook Profile"
              tooltip="Facebook"
            />
          </motion.div>
        </ul>

        <a
          href={EXTERNAL_URLS.resume}
          download
        >
          <CustomButton size="sm" before={<FaCloudDownloadAlt className="text-md sm:text-xl" />}>
            Download Resume
          </CustomButton>
        </a>
      </div>

      <div className="w-full lg:w-1/2 xl:w-[45%] flex justify-center items-center scale-[1.2] sm:scale-[1.4] lg:scale-[1.6] xl:scale-[1.7]">
        <AnimatedAvatar
          src={EXTERNAL_URLS.avatarImage}
          alt="Ishak Qureshee Akib"
          priority
        />
      </div>
    </section>
  );
}
