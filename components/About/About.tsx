"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Title from "@/components/Title/Title";
import { PERSONAL_INFO, ANIMATION_DURATION } from "@/lib/constants";
import "./aboutImage.css";


interface InfoItem {
  label: string;
  value: string;
}

const infoItems: InfoItem[] = [
  { label: "Email", value: PERSONAL_INFO.email },
  { label: "Location", value: PERSONAL_INFO.location },
  { label: "Passion", value: PERSONAL_INFO.passion },
  { label: "Age", value: PERSONAL_INFO.age },
];

export default function About(): React.ReactElement {
  return (
    <section className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 scroll-section overflow-hidden" id="about">
          <div className="mb-8 sm:mb-10 md:text-center">
            <div className="w-fit mx-auto">
              <Title>About Me</Title>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10">
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: ANIMATION_DURATION }}
              viewport={{ once: true }}
              className="h-fit w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto flex-shrink-0"
            >
              <AboutImage />
            </motion.div>
            <motion.div
              className="w-full mb-6 lg:mb-0 text-white px-2 sm:px-4 lg:px-0"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: ANIMATION_DURATION }}
              viewport={{ once: true }}
            >
              <h2 className="py-2 sm:py-3 mb-3 sm:mb-4 text-xl sm:text-2xl 3xl:text-3xl font-bold">So, Who Am I?</h2>
              <p className="font-thin mb-6 sm:mb-8 lg:mb-10 text-white/90 text-sm sm:text-base 3xl:text-lg leading-relaxed">
                I&apos;m a MERN Stack Developer with a expertise in building dynamic and responsive web applications. I have 1.5 years+ experience working in a software agency located in NY, USA. I worked remotely as a front end developer, having hands on experience creating custom wordpress theme. Created multiple real world projects using React.js, Next.js, Typescript and Supabase etc. I keen to learn new technologies and explore new things in the tech world.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
                {infoItems.map((item) => (
                  <div key={item.label}>
                    <h6 className="font-bold text-sm sm:text-base 3xl:text-lg">{item.label}</h6>
                    <p className="text-xs sm:text-sm 3xl:text-base font-thin text-white/80 break-words">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
    </section>
  );
}

function AboutImage(): React.ReactElement {
  return (
    <div className="w-full flex justify-center">
      <div className="about-image-wrapper">
        <Image
          className="about-image"
          src="https://i.ibb.co/hJbS7G9G/Untitled-design-1.png"
          alt="Ishak Qureshee Akib"
          width={400}
          height={400}
          sizes="(max-width: 480px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
          priority
        />
      </div>
    </div>
  );
}
