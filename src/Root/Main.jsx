import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";

const Main = () => {

    const {pathname} = useLocation()
    console.log(pathname);

    return (
        <div className="banner bg-cover min-h-screen">
            {
                pathname === '/' ? <Home></Home> : <Navbar></Navbar>
            }
            <Outlet></Outlet>
        </div>
    )}
export default Main;