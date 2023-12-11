import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {

    const navbarItems1 = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Contact Us', link: '/available-foods'},
        { id: 7, title: 'About Us', link: '/faq'}
      ];

    return (
        <div className="fixed top-0 py-6 w-screen text-white text-xl backdrop-blur-sm z-40">
             <div className="flex justify-center gap-20">
             {
                        navbarItems1.map(navbarItem => <span key={navbarItem.id}  className=" group items-center bg-transparent cursor-default ">
                                <NavLink  to={navbarItem.link} className={`text-center font-bold relative  after:transition-transform after:duration-700 after:ease-in-out after:absolute after:-bottom-[3.1px] after:left-0 after:block after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-light-blue after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 `}>{navbarItem.title}</NavLink>
                       </span>)                       
                    } 
             </div>
        </div>
    )}
export default Navbar;