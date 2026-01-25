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
    <section className="max-w-6xl mx-auto py-20" id="education">
      <div className="mx-auto w-fit pb-16">
        <Title>Education</Title>
      </div>
      <motion.div
        className="flex flex-wrap gap-20 justify-center text-white"
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
      className={`border-b pb-4 lg:w-1/3 md:w-3/4 w-full ${
        item.id === 4 ? "self-start" : ""
      }`}
    >
      <small className="text-white/60">{item.period}</small>
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p className="text-white/80">- {item.institution}</p>
      {item.grade && (
        <small className="text-white/60">{item.grade}</small>
      )}
    </div>
  );
}
