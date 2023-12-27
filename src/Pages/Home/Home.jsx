import Navbar from '../../Components/Navbar/Navbar';
import About from '../About/About';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Education from './Education/Education';
import Experiences from './Experiences/Experiences';
import MySkills from './MySkills/MySkills';
import Projects from './Projects/Projects';
import './home.css'

import { animateScroll } from 'react-scroll';

const options = {
  // your options here, for example:
  duration: 500,
  smooth: true,
};

animateScroll.scrollToTop(options);

const Home = () => {
    return (
        <div className='' id=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <MySkills></MySkills>
            <Experiences></Experiences>
            <Projects></Projects>
            <About></About>
            <Education></Education>
            <ContactUs></ContactUs>            
        </div>
    )}
export default Home;