"use client";

import { motion } from "framer-motion";
import Title from "@/components/Title/Title";

interface EducationItem {
  id: number;
  period: string;
  title: string;
  institution: string;
  grade?: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    period: "Batch 8",
    title: "Complete Web Development Course",
    institution: "Programming Hero",
    grade: "Avg Marks: 58.42",
  },
  {
    id: 2,
    period: "Session 2019-2020",
    title: "Bachelor (HONORS) In Zoology",
    institution: "Mc College, Sylhet",
  },
  {
    id: 3,
    period: "Session 2017-2018",
    title: "Higher Secondary School Certificate Examination",
    institution: "Sylhet Government College, Sylhet.",
    grade: "GPA-4.75",
  },
  {
    id: 4,
    period: "Session 2016-2017",
    title: "Secondary School Certificate Examination",
    institution: "Shahjalal Jamia Islamia School & College, Sylhet",
    grade: "GPA-5.00",
  },
];

export default function Education(): React.ReactElement {
  return (
    <section className="scroll-section max-w-6xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" id="education">
      <div className="mx-auto w-fit pb-8 sm:pb-12 lg:pb-16">
        <Title>Education</Title>
      </div>
      <motion.div
        className="flex flex-wrap gap-6 sm:gap-10 lg:gap-16 xl:gap-20 justify-center text-white"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {educationData.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}

interface EducationCardProps {
  item: EducationItem;
}

function EducationCard({ item }: EducationCardProps): React.ReactElement {
  return (
    <div
      className={`border-b border-white/30 pb-3 sm:pb-4 lg:w-[45%] xl:w-1/3 md:w-3/4 w-full ${
        item.id === 4 ? "self-start" : ""
      }`}
    >
      <small className="text-white/60 text-xs sm:text-sm 3xl:text-base">{item.period}</small>
      <h3 className="text-base sm:text-lg lg:text-xl 3xl:text-2xl font-bold leading-snug">{item.title}</h3>
      <p className="text-white/80 text-sm sm:text-base 3xl:text-lg">- {item.institution}</p>
      {item.grade && (
        <small className="text-white/60 text-xs sm:text-sm 3xl:text-base">{item.grade}</small>
      )}
    </div>
  );
}
