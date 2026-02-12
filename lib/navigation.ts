import { FaHome } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import { TbUserCode } from "react-icons/tb";
import { CgCode } from "react-icons/cg";
import type { IconType } from "react-icons";

export const NAV_SECTIONS = [
  { id: "banner", title: "Home" },
  { id: "projects", title: "Projects" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "contactUs", title: "Contact" },
] as const;

export type SectionConfig = (typeof NAV_SECTIONS)[number];
export type SectionTitle = SectionConfig["title"];

export const NAV_ICONS: Record<SectionTitle, IconType> = {
  Home: FaHome,
  Projects: RiShareBoxLine,
  About: BsPersonVcard,
  Skills: TbUserCode,
  Experience: CgCode,
  Education: IoSchoolOutline,
  Contact: MdAlternateEmail,
};
