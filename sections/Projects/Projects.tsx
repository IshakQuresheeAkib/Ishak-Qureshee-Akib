"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import Title from "@/components/Title/Title";
import CustomButton from "@/components/CustomButton/CustomButton";
import { ANIMATION_DURATION } from "@/lib/constants";

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  liveUrl: string;
  imagePosition: "left" | "right";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Concord",
    description:
      "Concord is a modern matrimony platform designed for seamless connections. With a user-friendly interface and advanced features, Concord simplifies the search for the perfect life partner.",
    features: [
      "Users can add and find biodata for a perfect match, and request contact information by paying a fee by Stripe.",
      "Created different user dashboards based on their roles, like admins and regular users.",
      "Allow users to filter biodatas based on location, age, and gender",
    ],
    image: "https://i.ibb.co/jkHS0LD/IMG-20240227-WA0020-01-jpeg.jpg",
    liveUrl: "https://assignment-12-847d7.web.app/",
    imagePosition: "left",
  },
  {
    id: 2,
    title: "NourishNet",
    description:
      "NourishNet is a Community Food Sharing and Surplus Reduction Platform,it offers a user-friendly interface where users can view their donation and request history, manage their profile, and track ongoing donation or request statuses.",
    features: [
      "Empower users to add surplus food for donation, edit or delete their listings as needed",
      "Allow users to request food, view all requests, and cancel their request if the status is pending.",
      "Donors can view and mark all food requests as delivered on the platform.",
    ],
    image:
      "https://i.ibb.co/Z8BTdK4/Whats-App-Image-2024-02-27-at-23-19-30-a5c82f45.jpg",
    liveUrl: "https://nourish-net.web.app/",
    imagePosition: "right",
  },
  {
    id: 3,
    title: "Car Canvas",
    description:
      "Car Canvas is a project where user can see a Wide Array of Cars from Leading Global Brands: Visitors can easily browse and explore a diverse selection of cars from renowned automobile manufacturers worldwide.",
    features: [
      "Users can add cars with specific details and explore cars based on their brand names.",
      "View car details, add to cart, and easily manage added cars in cart.",
      "Users will experience responsive design across various devices",
    ],
    image:
      "https://i.ibb.co/myZqSvL/Whats-App-Image-2024-02-28-at-00-13-23-c0f74721.jpg",
    liveUrl: "https://car-canvas.web.app/",
    imagePosition: "left",
  },
  {
    id: 4,
    title: "Occasion Alchemy",
    description:
      "Occasion Alchemy is your partner in transforming ordinary events into extraordinary memories. With an alchemical blend of creativity, meticulous planning, and personalized touches, we specialize in weddings, birthdays, anniversaries, engagement parties, baby showers etc.",
    features: [
      "User authentication is implemented using Firebase.",
      "Implemented pagination to enhance user experience with smooth navigation.",
      "Users will experience responsive design across various devices.",
    ],
    image:
      "https://i.ibb.co/T1sX87M/Whats-App-Image-2024-02-28-at-00-31-51-253c595c.jpg",
    liveUrl: "https://occasion-alchemy-40dfe.web.app/",
    imagePosition: "right",
  },
];

export default function Projects(): React.ReactElement {
  const animationVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: ANIMATION_DURATION },
  };

  return (
    <section className="py-28" id="projects">
      <div className="mx-auto w-fit">
        <Title>Projects</Title>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto place-items-center gap-6">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            isReversed={index % 2 !== 0}
            animationVariants={animationVariants}
          />
        ))}
      </div>
    </section>
  );
}

interface ProjectItemProps {
  project: Project;
  isReversed: boolean;
  animationVariants: {
    initial: { opacity: number; scale: number };
    animate: { opacity: number; scale: number };
    transition: { duration: number };
  };
}

function ProjectItem({
  project,
  isReversed,
  animationVariants,
}: ProjectItemProps): React.ReactElement {
  const imageElement = (
    <motion.div
      initial={animationVariants.initial}
      whileInView={animationVariants.animate}
      transition={animationVariants.transition}
      viewport={{ once: true }}
      className="lg:mt-28 mt-10"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="rounded-2xl"
      />
    </motion.div>
  );

  const contentElement = (
    <motion.div
      className="text-white lg:mt-28 mt-10"
      initial={animationVariants.initial}
      whileInView={animationVariants.animate}
      transition={animationVariants.transition}
      viewport={{ once: true }}
    >
      <h1 className="mb-2 text-5xl font-bold">{project.title}</h1>
      <p className="2xl:text-base text-white/90 text-sm font-thin">
        {project.description}
      </p>
      <h3 className="mt-4 font-bold">Core Features:</h3>
      <ul className="mb-7 list-inside list-disc 2xl:text-base text-white/90 text-sm font-thin">
        {project.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <CustomButton
          className="text-sm"
          variant="primary"
          before={<HiOutlineExternalLink className="text-lg font-bold" />}
        >
          Live Site
        </CustomButton>
      </a>
    </motion.div>
  );

  if (isReversed) {
    return (
      <>
        {contentElement}
        {imageElement}
      </>
    );
  }

  return (
    <>
      {imageElement}
      {contentElement}
    </>
  );
}
