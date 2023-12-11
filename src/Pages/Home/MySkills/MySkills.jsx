import Title from "../../Shared/Title/Title";
import { FaHtml5,FaCss3Alt  } from "react-icons/fa";
import { SiTailwindcss,SiJavascript,SiReact,SiNodedotjs,SiMongodb,SiExpress   } from "react-icons/si";


const MySkills = () => {
    return (
        <div className="py-36 px-5 lg:px-0">
            <div className="mx-auto w-fit pb-16"><Title>SkillSet</Title></div>
            <div className="flex flex-col justify-center">
                <div className="lg:max-w-4xl md:mx-auto w-full px-2 sm:px-0">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">

                    {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                    <div className=" sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-start w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 bg-white text-black rounded shadow">
                            Start by mastering HTML to structure web content,
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <FaHtml5 className="w-10 h-10"/>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                    <div className="sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-end w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                            <div className="p-4 bg-white text-black rounded shadow">
                            Move on to CSS to style and visually enhance your web pages,
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <FaCss3Alt  className="w-10 h-10"/>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                    <div className="sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-start w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 bg-white text-black rounded shadow">
                            Explore Tailwind CSS to streamline and simplify the styling process with a utility-first approach.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <SiTailwindcss  className="w-10 h-10"/>

                        </div>
                        </div>
                    </div>

                    {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                    <div className="sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-end w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                            <div className="p-4 bg-white text-black rounded shadow">
                            Learn JavaScript to add interactivity and dynamic behavior to your websites.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <SiJavascript  className="w-10 h-10"/>

                        </div>
                        </div>
                    </div>

                    <div className="sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-start w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 bg-white text-black rounded shadow">
                            Dive into React to build dynamic and scalable user interfaces using a component-based architecture.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <SiReact  className="w-10 h-10"/>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                    <div className="sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-end w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                            <div className="p-4 bg-white text-black rounded shadow">
                            Begin with Node.js to understand server-side JavaScript.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <SiNodedotjs  className="w-10 h-10"/>
                        </div>
                        </div>
                    </div>

                    <div className="sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-start w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 bg-white text-black rounded shadow">
                            Explore Express.js, a minimal and powerful web application framework.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <SiExpress   className="w-10 h-10"/>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                    <div className="sm:mt-0 sm:mb-12">
                        <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-end w-full mx-auto items-center  sm:my-0 my-8">
                            <div className="w-full sm:w-1/2 sm:pl-8">
                            <div className="p-4 bg-white text-black rounded shadow">
                            Delve into MongoDB for flexible and scalable data storage in NoSQL format.
                            </div>
                            </div>
                        </div>
                        <div className="rounded-full absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <SiMongodb   className="w-10 h-10"/>
                        </div>
                        </div>
                    </div>

                    </div>

                </div>
            </div>
        </div>
    )}
export default MySkills;