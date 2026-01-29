"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Title from "@/components/Title/Title";
import CustomButton from "@/components/CustomButton/CustomButton";
import AnimatedAvatar from "@/components/AnimatedAvatar/AnimatedAvatar";
import { SOCIAL_LINKS, EXTERNAL_URLS, ANIMATION_DURATION } from "@/lib/constants";

// Dynamic import for Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Lottie animation data type
interface LottieData {
  default: object;
}

export default function Banner(): React.ReactElement {
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [lottieAnimations, setLottieAnimations] = useState<{
    github: object | null;
    linkedin: object | null;
    facebook: object | null;
  }>({
    github: null,
    linkedin: null,
    facebook: null,
  });

  useEffect(() => {
    setIsMounted(true);
    // Dynamic imports for Lottie JSON files to reduce bundle size
    Promise.all([
      import("@/assets/github.json") as Promise<LottieData>,
      import("@/assets/linkedin.json") as Promise<LottieData>,
      import("@/assets/facebook.json") as Promise<LottieData>,
    ]).then(([github, linkedin, facebook]) => {
      setLottieAnimations({
        github: github.default,
        linkedin: linkedin.default,
        facebook: facebook.default,
      });
    });
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

  return (
    <section
      id="banner"
      className="flex flex-col-reverse lg:flex-row min-h-screen justify-center items-center 2xl:pt-0 lg:pt-0 pt-20"
    >
      <div className="mt-20 px-4 lg:px-0 w-[60%]">
        <Title>
          Hi! <br /> I&apos;m Ishak Qureshee Akib
        </Title>
        <p className="absolute text-2xl font-bold text-white mt-4">I&apos;m a </p>
        <div className="text-wrapper mt-3.5 w-fit" ref={textWrapperRef}>
          <h5>Web Developer</h5>
          <h5>Front End Developer</h5>
          <h5>Mern Stack Developer</h5>
          <h5>Full Stack Developer</h5>
          <h5>Javascript Developer</h5>
        </div>
        <p className="pt-9 font-thin text-white/80 lg:w-[60%] 2xl:text-base text-sm">
          specializing in creating Full stack web application using MERN stack. Mostly i focused on front end of website to create highly optimized, scalable and fully responsive interfaces for better user experiences with React and Next js.
        </p>
        <div className="xl:py-8 py-6 flex w-fit gap-4">
          {isMounted && lottieAnimations.github && lottieAnimations.linkedin && lottieAnimations.facebook && (
            <>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Lottie animationData={lottieAnimations.github} className="w-7 cursor-pointer" loop />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Lottie animationData={lottieAnimations.linkedin} className="w-7 cursor-pointer" loop />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Lottie animationData={lottieAnimations.facebook} className="w-7 cursor-pointer" loop />
              </motion.a>
            </>
          )}
        </div>

        <a
          href={EXTERNAL_URLS.resume}
          download
        >
          <CustomButton
            variant="primary"
            before={<FaCloudDownloadAlt className="text-xl" />}
          >
            Download Resume
          </CustomButton>
        </a>
      </div>

      <div className="scale-[1.7]">
        <AnimatedAvatar
          src={EXTERNAL_URLS.avatarImage}
          alt="Ishak Qureshee Akib"
          priority
        />
      </div>
    </section>
  );
}
