import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";

const Main = () => {

    const {pathname} = useLocation()
    console.log(pathname);

    return (
        <div className="banner bg-cover min-h-screen max-w-screen overflow-hidden">
            {
                pathname === '/' ? <Home></Home> : <Navbar></Navbar>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )}
export default Main;