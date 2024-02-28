import Title from "../../Shared/Title/Title";
import { SiExpress   } from "react-icons/si";
import { motion } from "framer-motion"
import html5 from '../../../assets/html.png'
import css from '../../../assets/css.png'
import tailwind from '../../../assets/tailwind-css.svg'
import javascript from '../../../assets/js.png'
import react from '../../../assets/react.png'
import nodejs from '../../../assets/nodejs.png'
import mongodb from '../../../assets/mongodb.png'

const MySkills = () => {


    return (
        <div className="py-36" >
            <div className="mx-auto w-fit pb-16"><Title>SkillSet</Title></div>
            <div className="flex flex-col justify-center">
                <div className="lg:max-w-4xl md:mx-auto w-full">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">

                    {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                    <div className=" sm:mt-0 sm:mb-12">
                        <motion.div initial={{y:150,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration: 1}}
                        className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-start w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 bg-white/25 text-white/90 rounded shadow">
                            Started by mastering HTML to structure web content,
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img src={html5} className="w-10 h-10 "/>
                        </div>
                        </motion.div>
                    </div>

                    {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                    <div className="sm:mt-0 sm:mb-12">
                        <motion.div initial={{y:150,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration: 1}}  className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-end w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                            <div className="p-4 bg-white/25 text-white/90 rounded shadow">
                            Moved on to CSS to style and visually enhance my web pages,
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img src={css} className="w-10 h-10 "/>
                        </div>
                        </motion.div>
                    </div>

                    {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                    <div className="sm:mt-0 sm:mb-12">
                        <motion.div initial={{y:150,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration: 1}} 
                        className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-start w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 bg-white/25 text-white/90 rounded shadow">
                            Explored Tailwind CSS to streamline and simplify the styling process with a utility-first approach.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img src={tailwind} className="w-10 h-10 "/>

                        </div>
                        </motion.div>
                    </div>

                    {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                    <div className="sm:mt-0 sm:mb-12">
                        <motion.div initial={{y:150,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration: 1}}
                        className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-end w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                            <div className="p-4 bg-white/25 text-white/90 rounded shadow">
                            Learnt JavaScript to add interactivity and dynamic behavior to websites.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img src={javascript} className="w-10 h-10 "/>

                        </div>
                        </motion.div>
                    </div>

                    <div className="sm:mt-0 sm:mb-12">
                        <motion.div initial={{y:150,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration: 1}}
                        className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-start w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 bg-white/25 text-white/90 rounded shadow">
                            Dived into React to build dynamic and scalable user interfaces using a component-based architecture.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img src={react} className="w-10 h-10 "/>
                        </div>
                        </motion.div>
                    </div>

                    {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                    <div className="sm:mt-0 sm:mb-12">
                        <motion.div initial={{y:150,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration: 1}}
                        className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-end w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                            <div className="p-4 bg-white/25 text-white/90 rounded shadow">
                            Commenced with Node.js to understand server-side JavaScript.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img src={nodejs} className="w-10 h-10 "/>
                        </div>
                        </motion.div>
                    </div>

                    <div className="sm:mt-0 sm:mb-12">
                        <motion.div initial={{y:150,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration: 1}}
                        className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-start w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 bg-white/25 text-white/90 rounded shadow">
                            Taken on hand Express.js, a minimal and powerful web application framework.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <SiExpress   className="w-10 h-10 text-white"/>
                        </div>
                        </motion.div>
                    </div>

                    {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                    <div className="sm:mt-0 sm:mb-12">
                        <motion.div initial={{y:150,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration: 1}}
                        className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-end w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                            <div className="p-4 bg-white/25 text-white/90 rounded shadow">
                            Went to MongoDB for flexible and scalable data storage in NoSQL format.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <img src={mongodb} className="w-10 h-10 "/>
                        </div>
                        </motion.div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )}
export default MySkills;