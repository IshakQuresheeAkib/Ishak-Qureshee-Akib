import { Link } from "react-router-dom";
import Title from "../../Shared/Title/Title";
import { AwesomeButton } from "react-awesome-button";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion"


const Projects = () => {

    const variants = {
        initial: { opacity: 0,scale:0},
        transition:{ duration: 1 },
        whileInView:{opacity:1,scale:1}
    }

    return (
        <div className="py-28"  id="projects">
             <div className="mx-auto w-fit"><Title>Projects</Title></div>
             <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto place-items-center gap-6">
                <motion.img initial={{ opacity: 0,scale:0.8}} transition={{ duration: 1 }} whileInView={{opacity:1,scale:1}} src="https://i.ibb.co/jkHS0LD/IMG-20240227-WA0020-01-jpeg.jpg" alt="" className=" rounded-2xl lg:mt-28 mt-10" />
                <motion.div className="text-white lg:mt-28" initial={{ opacity: 0,scale:0.8}} transition={{ duration: 1 }} whileInView={{opacity:1,scale:1}}>
                    <h1 className="mb-2 text-5xl font-bold">Concord</h1>
                    <p className="2xl:text-base text-white/90 text-sm font-thin">Concord is a modern matrimony platform designed for seamless connections. With a user-friendly interface and advanced features, Concord simplifies the search for the perfect life partner.</p>
                    <h3 className="mt-4 font-bold">Core Features:</h3>
                    <ul className="mb-7 list-inside list-disc 2xl:text-base text-white/90 text-sm font-thin">
                        <li>Users can add and find biodata for a perfect match, and request contact information by paying a fee by Stripe.</li>
                        <li>Created different user dashboards based on their roles, like admins and regular users.</li>
                        <li>Allow users to filter biodatas based on location, age, and gender</li>
                    </ul>
                    <a href="https://assignment-12-847d7.web.app/" target="_blank"><AwesomeButton className="w-36 text-3xl" type="primary" before={<HiOutlineExternalLink className="text-lg font-bold"/>}>Live Site</AwesomeButton></a>
                </motion.div>               
                <motion.div className="text-white lg:mt-28 mt-10" initial={{ opacity: 0,scale:0.8}} transition={{ duration: 1 }} whileInView={{opacity:1,scale:1}}>
                    <h1 className=" mb-2 text-5xl font-bold">NourishNet</h1>
                    <p className="2xl:text-base text-white/90 text-sm font-thin">NourishNet is a Community Food Sharing and Surplus Reduction Platform,it offers a user-friendly interface where users can view their donation and request history, manage their profile, and track ongoing donation or request statuses.</p>
                    <h3 className="mt-4 font-bold">Core Features:</h3>
                    <ul className="mb-7 list-inside list-disc 2xl:text-base text-white/90 text-sm font-thin">
                        <li>Empower users to add surplus food for donation, edit or delete their listings as needed</li>
                        <li>Allow users to request food, view all requests, and cancel their request if the status is pending.</li>
                        <li>Donors can view and mark all food requests as delivered on the platform.</li>
                    </ul>
                    <a href="https://nourish-net.web.app/" target="_blank"><AwesomeButton className="w-36 text-3xl" type="primary" before={<HiOutlineExternalLink className="text-lg font-bold"/>}>Live Site</AwesomeButton></a>
                </motion.div>
                <motion.img initial={{ opacity: 0,scale:0.8}} transition={{ duration: 1 }} whileInView={{opacity:1,scale:1}} src="https://i.ibb.co/Z8BTdK4/Whats-App-Image-2024-02-27-at-23-19-30-a5c82f45.jpg" alt="" className=" rounded-2xl lg:mt-28" />
                <motion.img initial={{ opacity: 0,scale:0.8}} transition={{ duration: 1 }} whileInView={{opacity:1,scale:1}} src="https://i.ibb.co/myZqSvL/Whats-App-Image-2024-02-28-at-00-13-23-c0f74721.jpg" alt="" className=" rounded-2xl lg:mt-28 mt-10" />
                <motion.div className="text-white lg:mt-28 " initial={{ opacity: 0,scale:0.8}} transition={{ duration: 1 }} whileInView={{opacity:1,scale:1}}>
                    <h1 className="mb-2 text-5xl font-bold">Car Canvas</h1>
                    <p className="2xl:text-base text-white/90 text-sm font-thin">Car Canvas is a project where user can see a Wide Array of Cars from Leading Global Brands: Visitors can easily browse and explore a diverse selection of cars from renowned automobile manufacturers worldwide.</p>
                    <h3 className="mt-4 font-bold">Core Features:</h3>
                    <ul className="mb-7 list-inside list-disc 2xl:text-base text-white/90 text-sm font-thin">
                        <li>Users can add cars with specific details and explore cars based on their brand names.</li>
                        <li>View car details, add to cart, and easily manage added cars in cart.</li>
                        <li>Users will experience responsive design across various devices</li>
                    </ul>
                    <a href="https://car-canvas.web.app/" target="_blank"><AwesomeButton className="w-36 text-3xl" type="primary" before={<HiOutlineExternalLink className="text-lg font-bold"/>}>Live Site</AwesomeButton></a>
                </motion.div>
                
                <motion.div className="text-white lg:mt-28 mt-10" initial={{ opacity: 0,scale:0.8}} transition={{ duration: 1 }} whileInView={{opacity:1,scale:1}}>
                    <h1 className="mb-2 text-5xl font-bold">Occasion Alchemy</h1>
                    <p className="2xl:text-base text-white/90 text-sm font-thin">Occasion Alchemy is your partner in transforming ordinary events into extraordinary memories. With an alchemical blend of creativity, meticulous planning, and personalized touches, we specialize in weddings, birthdays, anniversaries, engagement parties, baby showers etc.</p>
                    <h3 className="mt-4 font-bold">Core Features:</h3>
                    <ul className="mb-7 list-inside list-disc 2xl:text-base text-white/90 text-sm font-thin">
                        <li>User authentication is implemented using Firebase.</li>
                        <li>Implemented pagination to enhance user experience with smooth navigation.</li>
                        <li>Users will experience responsive design across various devices.</li>
                    </ul>
                    <a href="https://occasion-alchemy-40dfe.web.app/" target="_blank"><AwesomeButton className="w-36 text-3xl" type="primary" before={<HiOutlineExternalLink className="text-lg font-bold"/>}>Live Site</AwesomeButton></a>
                </motion.div>
                <motion.img initial={{ opacity: 0,scale:0.8}} transition={{ duration: 1 }} whileInView={{opacity:1,scale:1}} src="https://i.ibb.co/T1sX87M/Whats-App-Image-2024-02-28-at-00-31-51-253c595c.jpg" alt="" className=" rounded-2xl lg:mt-28" />
             </div>
        </div>
    )}
export default Projects;