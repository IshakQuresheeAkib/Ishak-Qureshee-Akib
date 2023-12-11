import Navbar from '../../Components/Navbar/Navbar';
import Banner from './Banner/Banner';
import Education from './Education/Education';
import Experiences from './Experiences/Experiences';
import MySkills from './MySkills/MySkills';
import Projects from './Projects/Projects';
import './home.css'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <MySkills></MySkills>
            <Experiences></Experiences>
            <Projects></Projects>
            <Education></Education>
        </div>
    )}
export default Home;