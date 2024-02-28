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
        <div>
            <Navbar></Navbar>
            <div className='xl:mx-10 md:mx-8 mx-5' id='#'>
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
            <MySkills></MySkills>
            <Education></Education>
            <ContactUs></ContactUs>            
        </div>
        </div>
    )}
export default Home;