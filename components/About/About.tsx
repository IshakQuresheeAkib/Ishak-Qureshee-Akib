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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0" id="aboutUs">
      <div className="flex items-center xl:min-h-screen">
        <div className="justify-center flex-1">
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
              <h2 className="py-2 sm:py-3 mb-3 sm:mb-4 text-xl sm:text-2xl font-bold">So, Who Am I?</h2>
              <p className="font-thin mb-6 sm:mb-8 lg:mb-10 text-white/90 text-sm sm:text-base leading-relaxed">
                I&apos;m a Front-end Developer with a strong passion for mastering
                the MERN stack. Despite pursuing Zoology in undergrad, my true love
                is software development. Recently, I completed a complete web
                development course at Programming Hero and now, I&apos;m actively
                exploring job or internship opportunities to apply and further grow
                my expertise in a professional setting.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
                {infoItems.map((item) => (
                  <div key={item.label}>
                    <h6 className="font-bold text-sm sm:text-base">{item.label}</h6>
                    <p className="text-xs sm:text-sm font-thin text-white/80 break-words">
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
    <div className="w-full">
      <Image
        className="aboutImage w-full h-auto"
        src="https://i.ibb.co.com/hJbS7G9G/Untitled-design-1.png"
        alt="Ishak Qureshee Akib"
        width={400}
        height={500}
        sizes="(max-width: 480px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
      />
    </div>
  );
}
