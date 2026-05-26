import Banner from "@/components/sections/Banner/Banner";
import Projects from "@/components/sections/Projects/Projects";
import About from "@/components/sections/About/About";
import MySkills from "@/components/sections/MySkills/MySkills";
import Experience from "@/components/sections/Experience/Experience";
import Education from "@/components/sections/Education/Education";
import ContactUs from "@/components/sections/ContactUs/ContactUs";
import SectionIndicator from "@/components/ui/SectionIndicator/SectionIndicator";

export default function HomePage(): React.ReactElement {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ishak Qureshee Akib",
    alternateName: ["Akib", "Qureshee"], // Helps capture those extra search strings
    jobTitle: "Front-End Developer",
    url: "https://ishak-qureshee-akib.netlify.app",
    sameAs: [
      "https://github.com/ishakqureshee",
      "https://linkedin.com/in/ishakqureshee",
      "https://www.facebook.com/AkibIshak"
    ],
    knowsAbout: ["Web Development", "React", "Next.js", "Front-End development", "software development", "programming", "technology"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionIndicator />

      <div className="scroll-container xl:mx-10 md:mx-8 mx-2 relative">
        <Banner />
        <Projects />
        <About /> 
        <MySkills /> 
        <Experience />
        <Education />
        <ContactUs /> 
      </div>
    </>
  );
}
