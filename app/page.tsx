import Banner from "@/components/sections/Banner/Banner";
import Projects from "@/components/sections/Projects/Projects";
import About from "@/components/sections/About/About";
import MySkills from "@/components/sections/MySkills/MySkills";
import Experience from "@/components/sections/Experience/Experience";
import Education from "@/components/sections/Education/Education";
import ContactUs from "@/components/sections/ContactUs/ContactUs";
import SectionIndicator from "@/components/ui/SectionIndicator/SectionIndicator";

export default function HomePage(): React.ReactElement {
  return (
    <>
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
