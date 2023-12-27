import Title from "../Shared/Title/Title";
import { HiCheckBadge } from "react-icons/hi2";
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="md:py-28 pt-24 max-w-7xl mx-auto" id="aboutUs">
            <section className="flex items-center xl:h-screen">
                <div className="justify-center flex-1 ">
                    <div className="px-4 mb-10 md:text-center">
                        <div className="w-fit mx-auto"><Title>About Us</Title></div>
                        <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                            <div className="flex-1 h-2 bg-blue-200">
                            </div>
                            <div className="flex-1 h-2 bg-blue-400">
                            </div>
                            <div className="flex-1 h-2 bg-blue-300">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10">
                        <motion.div initial={{x:-100,opacity:0}} animate={{x:1,opacity:1}} transition={{duration: 1.5}}
                        className="mb-10 lg:mb-0 overflow-hidden max-w-[350px] h-[450px] rounded-2xl">
                            <img src="https://i.ibb.co/PmsK1JR/2edb14e9-2798-40d5-a762-c57f8600.jpg" alt=""
                                className="relative hover:scale-110 object-cover duration-500  transition w-[350px] h-[450px] shadow-dark-blue rounded-2xl"/>
                        </motion.div>
                        <motion.div initial={{x:100,opacity:0}} animate={{x:1,opacity:1}} transition={{duration: 1.5}} 
                        className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <h2 className="py-3 mb-4 text-2xl font-bold text-white">
                                We are providing a better facility-
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                            As a Front-end Developer, my professional trajectory is anchored in the pursuit of mastery in Full Stack Development, particularly within the MERN (MongoDB, Express.js, React.js, Node.js) stack. My commitment extends beyond conventional learning, aiming for proficiency aligned with industry standards.
                            </p>
                            <ul className="mb-10">
                                <li className="flex  mb-4 text-base text-gray-600 dark:text-gray-400">
                                    <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                    <HiCheckBadge className="text-white text-2xl"/>
                                    </span>
                                    Leverage your HTML, CSS, and Tailwind CSS skills to create visually appealing and responsive websites that adapt seamlessly to various devices.
                                </li>
                                <li className="flex  mb-4 text-base text-gray-600 dark:text-gray-400">
                                    <span className="mr-3 text-blue-500 dark:text-blue-400">
                                    <HiCheckBadge className="text-white text-2xl"/>
                                    </span>
                                    Develop dynamic and interactive user interfaces using React, providing clients with modern and engaging web applications.
                                </li>
                                <li className="flex  mb-4 text-base text-gray-600 dark:text-gray-400">
                                    <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                    <HiCheckBadge className="text-white text-2xl"/>
                                    </span>
                                    Offer end-to-end web development services using both frontend (HTML, CSS, React) and backend (Node.js, Express.js, MongoDB) technologies.
                                </li>
                                <li className="flex  mb-4 text-base text-gray-600 dark:text-gray-400">
                                    <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                    <HiCheckBadge className="text-white text-2xl"/>
                                    </span>
                                    Provide services in setting up and managing MongoDB databases, offering clients a flexible and scalable solution for their data storage needs.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )}
export default About;