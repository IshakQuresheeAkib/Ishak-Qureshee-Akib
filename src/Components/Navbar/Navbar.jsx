import { NavLink, useLocation } from "react-router-dom";
import './navbar.css'
import { AnimatePresence } from "framer-motion";

const Navbar = () => {

    const location = useLocation();

    const navbarItems1 = [
        { id: 1, title: 'Home', link: '' },
        { id: 2, title: 'Contact Us', link: '#contactUs'},
        { id: 3, title: 'About Us', link: '#aboutUs'}
      ];

    return (
        <div className="fixed top-0 py-6 w-screen text-white/70 text-xl backdrop-blur-md z-40">
             <AnimatePresence initial={true} mode='wait'>
             <div key={location.pathname} location={location} className="flex justify-center gap-20">
             {
                        navbarItems1.map(navbarItem => <span key={navbarItem.id}  className=" group items-center bg-transparent cursor-default ">
                                <a href={navbarItem.link} className={`text-center relative  after:transition-transform after:duration-700 after:ease-in-out after:absolute after:-bottom-[3.1px] after:left-0 after:block after:h-[3px] after:w-full  after:scale-x-0 after:bg-[#2282ff] after:content-[''] after:group-hover:scale-x-100 hover:text-white transition-colors`}>{navbarItem.title}</a></span>)                       
                    } 
             </div>
             </AnimatePresence>
        </div>
    )}
export default Navbar;