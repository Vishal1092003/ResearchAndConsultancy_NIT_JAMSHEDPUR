import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-around h-[200px]  bg-sky-300" >
            <div>
                <div className="text-md md:text-2xl font-bold ">National Institute of Technology Jamshedpur</div>
                    <div className="text-md md:text-lg font-semibold text-center"> Q4GV+RJ5, Adityapur, Jamshedpur, Jharkhand 831014</div>
                </div>

                <div className=" flex">
                    
                    
                    <Link to={"https://twitter.com/jamshedpur_nit?s=08"} className="text-blue-800 hover:text-blue-900">
                        <FaTwitter className="mr-4 text-3xl hover:scale-110   transition duration-100" />
                    </Link>
                    <Link to={"https://www.youtube.com/channel/UCSKf3jRXKuA9QkPsu69tzkQ"} className="hover:text-red-800 text-red-500">
                        <FaYoutube className="mr-4 text-3xl hover:scale-110 transition duration-100" />
                    </Link>
                    <Link to={"https://www.facebook.com/NITJamshedpurOfficial/"} className="text-blue-800 hover:text-blue-900">
                        <FaFacebook className="mr-4 text-3xl hover:scale-110  transition duration-100" />
                    </Link>
                    <Link to={"https://www.instagram.com/nitjamshedpur_official/"} className="hover:text-pink-800 text-pink-600">
                        <FaInstagram className="mr-4 text-3xl  hover:scale-110  transition duration-100" />
                    </Link>
                    <Link to={"https://twitter.com/jamshedpur_nit?s=08"} className="text-blue-800 hover:text-blue-900">
                        <FaLinkedinIn className="mr-4 text-3xl   hover:scale-110 transition duration-100" />
                    </Link>
                </div>
            </div>
            )
}

            export default Footer
