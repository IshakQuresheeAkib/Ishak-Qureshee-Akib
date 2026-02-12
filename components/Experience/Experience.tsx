"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineMapPin, HiOutlineCalendarDays } from "react-icons/hi2";
import { BsCheck2Circle } from "react-icons/bs";
import Title from "@/components/Title/Title";
import { PiBuildingOfficeBold } from "react-icons/pi";

interface ExperienceItem {
  id: number;
  company: string;
  location: string;
  period: string;
  role: string;
  details: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Lexaeon",
    location: "NY, USA (Remote)",
    period: "June 2024 – Jan 2026",
    role: "Front end developer",
    details: [
      "Designed and developed responsive web applications using React, Next.js, TypeScript, etc.",
      "Implemented headless CMS using WordPress as the backend and Next.js for the front end.",
      "Created custom WordPress theme.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience(): ReactElement {
  return (
    <section
      className="scroll-section max-w-6xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      id="experience"
    >
      <div className="mx-auto w-fit pb-8 sm:pb-12 lg:pb-16">
        <Title>Experience</Title>
      </div>

      <motion.div
        className="flex flex-wrap gap-6 sm:gap-10 lg:gap-16 xl:gap-20 justify-center text-white"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}

interface ExperienceCardProps {
  item: ExperienceItem;
}

function ExperienceCard({ item }: ExperienceCardProps): ReactElement {
  return (
    <motion.div
      variants={itemVariants}
      className="border-b border-white/30 pb-3 sm:pb-4 lg:w-[45%] md:w-7/12 xl:w-1/2 w-full"
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 text-xs sm:text-sm 3xl:text-base">
        <span className="inline-flex items-center gap-2">
          <HiOutlineCalendarDays className="text-base sm:text-lg text-primary" />
          {item.period}
        </span>
        <span className="inline-flex items-center gap-2">
          <HiOutlineMapPin className="text-base sm:text-lg text-primary" />
          {item.location}
        </span>
      </div>

      <div className="my-3 flex items-center gap-2">
        <HiOutlineBriefcase className="text-xl text-primary" />
        <h3 className="text-base sm:text-lg lg:text-xl 3xl:text-2xl font-bold leading-snug ">
          {item.role}
        </h3>
      </div>
      <p className="inline-flex items-center gap-2 text-sm sm:text-base 3xl:text-lg">
        <PiBuildingOfficeBold className="text-base sm:text-lg inline leading-2 mr-1 text-primary" />
        {item.company}
      </p>
      <ul className="mt-3 space-y-2 text-white/80 text-sm sm:text-base 3xl:text-lg">
        {item.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2">
            <BsCheck2Circle className="mt-0.5 shrink-0 text-[#3CC98B]" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
