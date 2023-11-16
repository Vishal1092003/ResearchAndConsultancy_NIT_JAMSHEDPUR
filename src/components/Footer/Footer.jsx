import { Link } from "react-router-dom";
import "../Footer/style.css";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
    return (
        <div id="footer">
            <div>
                <div>
                    <b>National Institute of<br />Technology Jamshedpur</b><br />
                    Q4GV+RJ5, Adityapur, Jamshedpur, Jharkhand 831014
                </div>
                <div>
                    <a href="tel:+"><i class="fa-solid fa-phone"></i> xxx xxx xxxx<br /></a>
                    <a href="mailto:"><i class="fa-solid fa-envelope"></i> example@gmail.com</a>

                </div>
                <div className="flex">
                    <Link to={"https://www.youtube.com/channel/UCSKf3jRXKuA9QkPsu69tzkQ"}>
                    <FaYoutube className="mr-4 text-2xl" />
                    </Link>
                    <Link to={"https://www.instagram.com/nitjamshedpur_official/"}>
                    <FaInstagram className="mr-4 text-2xl" />
                    </Link>
                    <Link to={"https://twitter.com/jamshedpur_nit?s=08"}>
                    <FaTwitter className="mr-4 text-2xl" />
                    </Link>
                    <Link to={"https://www.facebook.com/NITJamshedpurOfficial/"}>
                    <FaFacebook className="mr-4 text-2xl" />
                    </Link>
                    <Link to={"https://twitter.com/jamshedpur_nit?s=08"}>
                    <FaLinkedinIn className="mr-4 text-2xl" />
                    </Link>
                </div>
        </div>

    )
}

export default Footer