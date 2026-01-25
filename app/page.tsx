import Banner from "@/sections/Banner/Banner";
import Projects from "@/sections/Projects/Projects";
import About from "@/sections/About/About";
import MySkills from "@/sections/MySkills/MySkills";
import Education from "@/sections/Education/Education";
import ContactUs from "@/sections/ContactUs/ContactUs";

export default function HomePage(): React.ReactElement {
  return (
    <div className="xl:mx-10 md:mx-8 mx-5">
      <Banner />
      <Projects />
      <About />
      <MySkills />
      <Education />
      <ContactUs />
    </div>
  );
}
