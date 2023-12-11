import Title from "../../Shared/Title/Title";

const Banner = () => {
    return (
                <div className="flex flex-col lg:flex-row min-h-screen justify-between items-center lg:pt-0 pt-36">
                    <div className="sm:ml-36">
                    <Title>Hi! <br /> I'm Ishak Qureshee Akib</Title>
                    <p className="py-6">I'm a Front-end Developer, currently studying the MERN Stack, aiming to become an expert in Full Stack Development.</p>
                    <button className="btn btn-outline">Download Resume</button>
                    </div>
                    <img src="https://i.ibb.co/cD7gdfy/transparent-1.png" className="lg:max-w-2xl lg:self-end " />
                </div>
    )}
export default Banner;