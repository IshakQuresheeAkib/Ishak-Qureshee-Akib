import { Link } from "react-router-dom";
import Title from "../../Shared/Title/Title";

const Projects = () => {

    

    return (
        <div className="py-36 px-5 lg:px-0">
             <div className="mx-auto w-fit pb-16"><Title>My Projects</Title></div>
             <div className="grid md:grid-cols-2 grid-cols-1 max-w-5xl mx-auto place-items-center gap-10">
                <div className="card w-96 bg-white/90 shadow-xl text-black">
                    <div className="card-body h-80">
                        <h2 className="text-3xl font-bold text-light-blue">Concord</h2>
                        <p>Concord is a modern matrimony platform designed for seamless connections. With a user-friendly interface and advanced features, Concord simplifies the search for the perfect life partner. Join today and embark on your journey to love and companionship.</p>
                        <div className="card-actions justify-end">
                        <Link to='https://assignment-12-847d7.web.app/'><button className="btn btn-outline text-dark-blue">Check It Out</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white/90 shadow-xl text-black">
                    <div className="card-body h-80">
                        <h2 className="text-3xl font-bold text-light-blue">Nourish Net</h2>
                        <p>NourishNet is a Community Food Sharing and Surplus Reduction Platform,it offers a user-friendly interface where users can view their donation and request history, manage their profile, and track ongoing donation or request statuses.</p>
                        <div className="card-actions justify-end">
                        <Link to='https://nourish-net.web.app/'><button className="btn btn-outline text-dark-blue">Check It Out</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white/90 shadow-xl text-black">
                    <div className="card-body h-80">
                        <h2 className="text-3xl font-bold text-light-blue">Car Canvas</h2>
                        <p>Car Canvas is a project where user can see a Wide Array of Cars from Leading Global Brands: Visitors can easily browse and explore a diverse selection of cars from renowned automobile manufacturers worldwide.</p>
                        <div className="card-actions justify-end">
                        <Link to='https://car-canvas.web.app/'><button className="btn btn-outline text-dark-blue">Check It Out</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white/90 shadow-xl text-black">
                    <div className="card-body h-80 ">
                        <h2 className="text-3xl font-bold text-light-blue">Occasion Alchemy</h2>
                        <p>Occasion Alchemy is your partner in transforming ordinary events into extraordinary memories. With an alchemical blend of creativity, meticulous planning, and personalized touches, we specialize in weddings, birthdays, anniversaries, engagement parties, baby showers  etc.</p>
                        <div className="card-actions justify-end">
                        <Link to='https://assignment-12-847d7.web.app/'><button className="btn btn-outline text-dark-blue">Check It Out</button></Link>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )}
export default Projects;