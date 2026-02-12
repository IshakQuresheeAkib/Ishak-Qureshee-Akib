// ===== TIMING CONSTANTS =====
export const ANIMATION_DURATION = 1;
export const SCROLL_THRESHOLD = 100;

// ===== NAVIGATION =====
export interface NavItem {
  id: number;
  title: string;
  link: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Projects", link: "#projects" },
  { id: 3, title: "Contact Me", link: "#contactUs" },
];

// ===== SOCIAL LINKS =====
export const SOCIAL_LINKS = {
  github: "https://github.com/IshakQuresheeAkib",
  linkedin: "https://linkedin.com/in/ishak-qureshee-akib",
  facebook: "https://www.facebook.com/AkibIshak",
} as const;

export const EXTERNAL_URLS = {
  resume: "https://www.dropbox.com/scl/fi/a6czqdsc6oxtmzxfj05yq/Resume-of-Akib-1.pdf?rlkey=1nbo4mpf4u24jp2z28r6d9z1s&st=rzdv6dcq&dl=1",
  avatarImage: "https://i.ibb.co/Z6PYFGCp/Copy-of-Untitled-Design.png",
  aboutImage: "https://i.ibb.co/hJbS7G9G/Untitled-design-1.png",
} as const;

// ===== PERSONAL INFO =====
export const PERSONAL_INFO = {
  name: "Ishak Qureshee Akib",
  email: "Akibqureshee11@gmail.com",
  location: "Sylhet, Bangladesh",
  passion: "Traveling & Hiking",
  age: "26 years",
} as const;

// ===== EMAILJS CONFIG =====
export const getEmailJSConfig = () => ({
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
});
