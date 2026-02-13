export const ANIMATION_DURATION = 1;
export const SCROLL_THRESHOLD = 100;

export interface EducationItem {
  id: number;
  period: string;
  title: string;
  institution: string;
}

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

export const PERSONAL_INFO = {
  name: "Ishak Qureshee Akib",
  email: "Akibqureshee11@gmail.com",
  location: "Sylhet, Bangladesh",
  passion: "Traveling & Hiking",
  age: "26 years",
} as const;

export const getEmailJSConfig = () => ({
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
});



export const educationData: EducationItem[] = [
  {
    id: 1,
    period: "Batch 8",
    title: "Complete Web Development Course",
    institution: "Programming Hero",
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
  },
  {
    id: 4,
    period: "Session 2016-2017",
    title: "Secondary School Certificate Examination",
    institution: "Shahjalal Jamia Islamia School & College, Sylhet",
  },
];