import './BurgerMenu.css'
import { FaHome } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";


const BurgerMenu = () => {   

  

    return (
        <div>
            <input type="checkbox" className="toggler"/>
    <div id="hamburger"><div></div></div>
    <div id="menu">
        <div>
            <ul>
                <li><a href='#' > <FaHome/>Home</a></li>
                <li><a href='#projects' > <RiShareBoxLine/>Projects</a></li>
                <li><a href='#contactUs' > <MdAlternateEmail/>Contact Me</a></li>
            </ul>
        </div>
    </div>
        </div>
    );
};

export default BurgerMenu;