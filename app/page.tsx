import Banner from "@/components/Banner/Banner";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import MySkills from "@/components/MySkills/MySkills";
import Education from "@/components/Education/Education";
import ContactUs from "@/components/ContactUs/ContactUs";

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
