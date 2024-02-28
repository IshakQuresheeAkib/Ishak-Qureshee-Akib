import './title.css'
import { motion } from "framer-motion"


const Title = ({children}) => {
    return (
        <motion.div className="ten w-fit" initial={{opacity:0}} whileInView={{opacity:1}}  transition={{duration: 1.5}} >
             <h1 className='md:text-5xl text-4xl'>{children} </h1>
        </motion.div>
    )}
export default Title;