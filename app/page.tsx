import Banner from "@/components/Banner/Banner";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import MySkills from "@/components/MySkills/MySkills";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import ContactUs from "@/components/ContactUs/ContactUs";
import SectionIndicator from "@/components/SectionIndicator/SectionIndicator";

export default function HomePage(): React.ReactElement {
  return (
    <>
      {/* Section Indicator - Fixed position scroll navigation */}
      <SectionIndicator />

      <div className="scroll-container xl:mx-10 md:mx-8 mx-5 relative">
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
