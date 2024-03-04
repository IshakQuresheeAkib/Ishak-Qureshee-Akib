import Title from "../../Shared/Title/Title";
import { motion } from "framer-motion"
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import './banner.css'
import { useEffect } from "react";
import bloob from '../../../assets/Animation - 1708466125666.json'
import Lottie from "lottie-react";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import { FaCloudDownloadAlt } from "react-icons/fa";
import github from '../../../assets/github.json'
import linkedin from '../../../assets/linkedin.json'
import facebook from '../../../assets/facebook.json'


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
                <div className="flex flex-col-reverse lg:flex-row min-h-screen justify-center items-center 2xl:pt-0 lg:pt-0 pt-20 gap-5">
                    <motion.div className="mt-20 " initial={{x:-150,opacity:0}} whileInView={{x:1,opacity:1}} transition={{duration: 1}}>
                    <Title>Hi! <br /> I'm Ishak Qureshee Akib</Title>
                    <p className="absolute text-2xl font-bold text-white mt-4">I'm a </p>
                    <div className="text-wrapper mt-3.5">
                        <h5>Web Developer</h5>
                        <h5>Mern Stack Developer</h5>
                        <h5>Front End Developer</h5>
                        <h5>React Developer</h5>
                        <h5>Javascript Developer</h5>
                    </div>
                    <p className="pt-9 font-thin text-white/80 lg:w-4/5 2xl:text-base text-sm">specializing in making attractive and dynamic websites using HTML, CSS, and JavaScript. I specialize in Tailwind CSS and React to create modern, scalable interfaces for better user experiences.</p>
                    <div className="xl:py-8 py-6 flex w-fit gap-4">
                        <motion.a whileHover={{scale:1.2}} whileTap={{scale:0.9}} transition={{ duration: 0.3 }} href="https://github.com/IshakQuresheeAkib" target="_blank" rel="noopener noreferrer">
                        <Lottie animationData={github} className="w-7 cursor-pointer"/>
                        </motion.a>
                        <motion.a whileHover={{scale:1.3}} whileTap={{scale:0.9}} transition={{ duration: 0.3 }} href="https://linkedin.com/in/ishak-qureshee-akib" target="_blank" rel="noopener noreferrer">
                        <Lottie animationData={linkedin} className="w-7 cursor-pointer"/>
                        </motion.a>
                        <motion.a whileHover={{scale:1.2}} whileTap={{scale:0.9}} transition={{ duration: 0.3 }} href="https://www.facebook.com/AkibIshak" target="_blank" rel="noopener noreferrer">
                        <Lottie animationData={facebook} className="w-7 cursor-pointer"/>
                        </motion.a>
                    </div>
                    
                    <a href="https://www.dropbox.com/scl/fi/g9evigs5abu4x8ia0cxgb/Ishak-Qureshee-Akib-Resume.pdf?rlkey=3lymxenn2o6d9jitnwczez40k&dl=1" download>
                        <AwesomeButton type="primary" before={<FaCloudDownloadAlt className=" text-xl"/>}>Download Resume</AwesomeButton>
                    </a>
                        
                    </motion.div>
                    <motion.div initial={{x:150,opacity:0}} whileInView={{x:1,opacity:1}} transition={{duration: 1}}>
                        <Lottie animationData={bloob} className="absolute xl:-bottom-24 -bottom-20 2xl:-left-52 xl:-left-28 md:-left-20 -left-14 2xl:w-[550px] w-[450px]"></Lottie>    
                        <img
                        src="https://i.ibb.co/dkRQyDC/bbb-1.png" className="2xl:max-w-sm max-w-xs sm:-left-5 relative lg:-left-4 xl:-left-10 2xl:-left-28 lg:-bottom-7 rounded-full"/>
                    </motion.div>  
                                    
                </div>
    )}
export default Banner;