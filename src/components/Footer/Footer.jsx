import { Link } from "react-router-dom";
import "../Footer/style.css";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
    return (
        <div id="footer"  className="flex flex-col items-center justify-around h-[200px]  bg-yellow-50/50" >
         

         

                 
                  <div >
                    <b className="ml-5" >National Institute of Technology Jamshedpur</b><br />
                     <p>  Q4GV+RJ5, Adityapur, Jamshedpur, Jharkhand 831014</p>
                   </div>
               
                   <div className=" flex">
                    <Link to={"https://www.youtube.com/channel/UCSKf3jRXKuA9QkPsu69tzkQ"} className="hover:text-red-500 text-orange-500">
                        <FaYoutube className="mr-4 text-3xl hover:scale-110 transition duration-100" />
                    </Link>
                    <Link to={"https://www.instagram.com/nitjamshedpur_official/"} className="hover:text-red-500">
                        <FaInstagram className="mr-4 text-3xl text-orange-500 hover:scale-110 transition duration-100" />
                    </Link>
                    <Link to={"https://twitter.com/jamshedpur_nit?s=08"} className="hover:text-red-500">
                        <FaTwitter className="mr-4 text-3xl hover:scale-110  text-blue-400 transition duration-100" />
                    </Link>
                    <Link to={"https://www.facebook.com/NITJamshedpurOfficial/"} className="hover:text-red-500">
                        <FaFacebook className="mr-4 text-3xl text-blue-400 hover:scale-110 transition duration-100" />
                    </Link>
                    <Link to={"https://twitter.com/jamshedpur_nit?s=08"} className="hover:text-red-500">
                        <FaLinkedinIn className="mr-4 text-3xl  text-blue-400 hover:scale-110 transition duration-100" />
                    </Link>
                </div>
                
              
                
             

        
</div>
    )
}

export default Footer
