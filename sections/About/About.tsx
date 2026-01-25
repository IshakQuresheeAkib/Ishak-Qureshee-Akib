"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Title from "@/components/Title/Title";
import { PERSONAL_INFO, ANIMATION_DURATION } from "@/lib/constants";

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
    <section className="max-w-7xl mx-auto" id="aboutUs">
      <div className="flex items-center xl:h-screen">
        <div className="justify-center flex-1">
          <div className="px-4 mb-10 md:text-center">
            <div className="w-fit mx-auto">
              <Title>About Me</Title>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center gap-10">
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: ANIMATION_DURATION }}
              viewport={{ once: true }}
              className="h-fit mx-auto"
            >
              <AboutImage />
            </motion.div>
            <motion.div
              className="w-full mb-10 lg:w-11/12 lg:mb-0 text-white"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: ANIMATION_DURATION }}
              viewport={{ once: true }}
            >
              <h2 className="py-3 mb-4 text-2xl font-bold">So, Who Am I?</h2>
              <p className="font-thin mb-10 text-white/90">
                I&apos;m a Front-end Developer with a strong passion for mastering
                the MERN stack. Despite pursuing Zoology in undergrad, my true love
                is software development. Recently, I completed a complete web
                development course at Programming Hero and now, I&apos;m actively
                exploring job or internship opportunities to apply and further grow
                my expertise in a professional setting.
              </p>
              <div className="grid grid-cols-2 gap-10">
                {infoItems.map((item) => (
                  <div key={item.label}>
                    <h6 className="font-bold">{item.label}</h6>
                    <p className="md:text-sm text-xs font-thin text-white/80">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutImage(): React.ReactElement {
  return (
    <div>
      <Image
        className="aboutImage"
        src="https://i.ibb.co/PmsK1JR/2edb14e9-2798-40d5-a762-c57f8600.jpg"
        alt="Ishak Qureshee Akib"
        width={300}
        height={400}
      />
    </div>
  );
}
