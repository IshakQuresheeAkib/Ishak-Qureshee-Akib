import type { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiStripe } from "react-icons/si";

export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  liveUrl: string;
  clientRepo?: string;
  serverRepo?: string;
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
  };
}

// Icon Mapping Helper
export const TECH_ICONS: Record<string, IconType> = {
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "JavaScript": FaReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "Firebase": SiFirebase,
  "Stripe": SiStripe,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Concord",
    description: "A responsive full-stack MERN matrimony platform with role-based access control (RBAC) and JWT-secured authentication.",
    features: [
      "Stripe payment integration for contact requests",
      "Role-based dashboards (Admin vs User)",
      "Advanced filtering by location, age, gender"
    ],
    image: "https://i.ibb.co/jkHS0LD/IMG-20240227-WA0020-01-jpeg.jpg",
    liveUrl: "https://assignment-12-847d7.web.app/",
    clientRepo: "https://github.com/IshakQuresheeAkib/concord",
    serverRepo: "https://github.com/IshakQuresheeAkib/concord-server",
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"]
    }
  },
  {
    id: 2,
    title: "NourishNet",
    description: "NourishNet is a Community Food Sharing and Surplus Reduction Platform offering a user-friendly interface for donation tracking and profile management.",
    features: [
      "Surplus food listing and management",
      "Food request system with status tracking",
      "Donor dashboard for delivery confirmation"
    ],
    image: "https://i.ibb.co/Z8BTdK4/Whats-App-Image-2024-02-27-at-23-19-30-a5c82f45.jpg",
    liveUrl: "https://nourish-net.web.app/",
    clientRepo: "https://github.com/IshakQuresheeAkib/nourish-net",
    serverRepo: "https://github.com/IshakQuresheeAkib/nourish-net-server",
    techStack: {
      frontend: ["React", "TypeScript"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"]
    }
  },
  {
    id: 3,
    title: "Car Canvas",
    description: "Car Canvas allows visitors to easily browse and explore a diverse selection of cars from renowned automobile manufacturers worldwide.",
    features: [
      "Add cars with specific details",
      "Shopping cart management functionality",
      "Fully responsive design across devices"
    ],
    image: "https://i.ibb.co/myZqSvL/Whats-App-Image-2024-02-28-at-00-13-23-c0f74721.jpg",
    liveUrl: "https://car-canvas.web.app/",
    clientRepo: "https://github.com/IshakQuresheeAkib/car-canvas",
    serverRepo: "https://github.com/IshakQuresheeAkib/car-canvas-server",
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"]
    }
  },
];
