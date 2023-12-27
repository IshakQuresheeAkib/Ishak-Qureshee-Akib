import { FaRegCopyright,FaFacebook,FaLinkedinIn,FaGithub,FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="hero mt-24 backdrop-blur-sm backdrop-opacity-30 backdrop-brightness-0 py-5">
             <div className="flex justify-center sm:justify-between flex-wrap sm:gap-0 gap-10 items-center w-[80vw]">
                <div>
                <FaRegCopyright className="inline mb-1"/> All rights reserved by Ishak Qureshee Akib
                </div>
                <div className="flex items-center text-2xl gap-10 text-white/90">
                <a href="https://www.facebook.com/AkibIshak" target="_blank"><FaFacebook className="cursor-pointer"/></a>
                <a href="https://linkedin.com/in/ishak-qureshee-akib" target="_blank"><FaLinkedinIn  className="cursor-pointer"/></a>
                <a href="https://github.com/IshakQuresheeAkib" target="_blank"><FaGithub  className="cursor-pointer"/></a>
                <a href="https://twitter.com/AkibQureshee" target="_blank"><FaXTwitter   className="cursor-pointer"/></a>
                </div>
             </div>
        </div>
    )
}
export default Footer;