import Title from "../../Shared/Title/Title";
import {  motion } from "framer-motion"


const Education = () => {


    return (
        <div className="max-w-6xl mx-auto ">
            <div className="mx-auto w-fit pb-16"><Title>Education</Title></div>
            <motion.div className="flex flex-wrap gap-20 justify-center text-white"  initial={{y:50,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration: 1}}>
                <div className="border-b pb-4 lg:w-1/3 md:w-3/4 w-full" >
                    <small>Batch 8</small>
                    <h3 className="text-xl font-bold">Complete Web Development Course </h3>
                    <p>- Programming Hero</p>
                    <small>Avg Marks: 58.42</small>
                </div>
                <div className="border-b pb-4 lg:w-1/3 md:w-3/4 w-full" >
                    <small>Session 2019-2020</small>
                    <h3 className="text-xl font-bold">Bachelor (HONORS) In Zoology </h3>
                    <p>- Mc College, Sylhet</p>
                </div>
                <div className="border-b pb-4  lg:w-1/3 md:w-3/4 w-full">
                    <small>Session 2017-2018</small>
                    <h3 className="text-xl font-bold">Higher Secondary School Certificate Examination</h3>
                    <p>- Sylhet Government College, Sylhet.</p>
                    <small>GPA-4.75</small>
                </div>
                <div className="border-b pb-4  lg:w-1/3 md:w-3/4 w-full self-start">
                    <small>Session 2016-2017</small>
                    <h3 className="text-xl font-bold">Secondary School Certificate Examination</h3>
                    <p>- Shahjalal Jamia Islamia School & College, Sylhet</p>
                    <small>GPA-5.00</small>
                </div>
                
            </motion.div>
        </div>
    )}
export default Education;