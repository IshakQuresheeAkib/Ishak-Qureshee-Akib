import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import './main.css'
import { useEffect, useState } from "react";
import Initialloading from "../Components/InitialLoading/InitialLoading";



const Main = () => {

    const {pathname} = useLocation()
    console.log(pathname);

    const [initialloading,setInitialLoading] = useState(false)

    
    
    useEffect(()=>{
        setInitialLoading(true)
        setTimeout(()=>{
            setInitialLoading(false)
        },3000)
    },[])

    return (
        <div>
            {
            initialloading ?<Initialloading></Initialloading> : <div className="banner bg-cover min-h-screen max-w-screen overflow-hidden">
            {
                pathname === '/' ? <Home></Home> : <Navbar></Navbar>
            }
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
        }
        </div>
        
    )}
export default Main;