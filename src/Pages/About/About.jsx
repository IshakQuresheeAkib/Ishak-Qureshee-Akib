import Title from "../Shared/Title/Title";
import { HiCheckBadge } from "react-icons/hi2";
import { motion } from "framer-motion"
import AboutImage from "./AboutImage";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto" id="aboutUs">
            <section className="flex items-center xl:h-screen">
                <div className="justify-center flex-1 ">
                    <div className="px-4 mb-10 md:text-center">
                        <div className="w-fit mx-auto"><Title>About Me</Title></div>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-center gap-10 ">
                        <motion.div initial={{x:-150,opacity:0}} whileInView={{x:1,opacity:1}} transition={{duration: 1}} className="h-fit mx-auto">
                            <AboutImage></AboutImage>
                        </motion.div>
                        <motion.div className="w-full mb-10 lg:w-11/12 lg:mb-0 text-white" initial={{x:150,opacity:0}} whileInView={{x:1,opacity:1}} transition={{duration: 1}}>
                            <h2 className="py-3 mb-4 text-2xl font-bold">
                                So,Who Am I?
                            </h2>
                            <p className="mb-4/90 font-thin mb-10">
                            I'm a Front-end Developer with a strong passion for mastering the MERN stack. Despite pursuing Zoology in undergrad, my true love is software development. 
                            Recently, I completed a complete web development course at Programming Hero and now, I'm actively exploring job or internship opportunities to apply and further grow my expertise in a professional setting. 
                            </p>
                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <h6 className="font-bold">Email</h6>
                                    <p className="md:text-sm text-xs font-thin text-white/80">Akibqureshee11@gmail.com</p>
                                </div>
                                <div>
                                    <h6 className="font-bold">Location</h6>
                                    <p className="md:text-sm text-xs font-thin text-white/80">Sylhet,Bangladesh.</p>
                                </div>
                                <div>
                                    <h6 className="font-bold">Passion</h6>
                                    <p className="md:text-sm text-xs font-thin text-white/80">Traveling & Hiking</p>
                                </div>
                                <div>
                                    <h6 className="font-bold">Age</h6>
                                    <p className="md:text-sm text-xs font-thin text-white/80">24 years</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )}
export default About;