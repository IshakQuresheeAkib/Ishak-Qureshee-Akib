import Title from "../../Shared/Title/Title";
import { IoDownloadOutline } from "react-icons/io5";
import { motion } from "framer-motion"
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import './banner.css'
import { useEffect } from "react";


const Banner = () => {

    

    useEffect(()=>{
        const titles = gsap.utils.toArray('h5')
    const tl = gsap.timeline({repeat:-1});
        titles.forEach(title=>{
            const splitTitle = new SplitTextJS(title)
        
    
        tl 
        .from(splitTitle.chars,{
            opacity:0,
            y:10,
            rotateX:-90,
            stagger:.02
        },"<")
        .to(splitTitle.chars,{
            opacity:0,
            y:-10,
            rotateX:90,
            stagger:.02
        },"<1")
    })
    })

    return (
                <div className="flex flex-col lg:flex-row min-h-screen justify-center items-center 2xl:pt-0 lg:pt-6 pt-36 2xl:px-0 lg:px-2 px-5 mx-auto">
                    <motion.div className="xl:ml-28 lg:ml-4"
                    initial={{opacity:0,x:-100}}
                    animate={{opacity:1,x:1}}
                    transition={{duration:1}}
                    >
                    <Title>Hi! <br /> I'm Ishak Qureshee Akib</Title>
                    <p className="absolute text-2xl font-bold text-white">I'm a</p>
                        <div className="text-wrapper pb-5">
                            <h5>React Developer</h5>
                            <h5>Front End Developer</h5>
                            <h5>Mern Stack Developer</h5>
                            <h5>Javascript Developer</h5>
                        </div>
                    <p className="py-6">specializing in crafting engaging user interfaces. Proficient in HTML, CSS, and JavaScript, I create visually appealing and dynamic websites. With expertise in Tailwind CSS and React, I streamline styling and build scalable, modern interfaces for an enhanced user experience.</p>
                    <div className="relative w-fit text-white hover:text-light-blue">
                        <a href="https://www.dropbox.com/scl/fi/ar8bqci0mlslp0o9nbjum/Assignment-02.pdf?rlkey=lwtwkjwrxj1dm9q67kk26tpib&dl=1" download className="btn btn-outline pl-10 text-white hover:text-light-blue">Download Resume</a>
                        <IoDownloadOutline className="absolute left-3 bottom-3.5 text-2xl"/>
                    </div>
                    </motion.div>
                    <div className="lg:self-end self-center">
                        
                    <motion.img
                    src="https://i.ibb.co/S34WfN1/transparent.png" className="2xl:max-w-2xl max-w-xl"
                    initial={{ opacity: 0,x:100}}
                    animate={{ opacity: 1,x:1}}
                    transition={{ duration: 1 }}                   
                    />
                    </div>  
                                    
                </div>
    )}
export default Banner;