import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-6 text-gray-700">
              NIT Jamshedpur
            </h3>
            <div className="space-y-4">
              <p className="flex items-center justify-center md:justify-start text-gray-600">
                <FaMapMarkerAlt className="mr-3 text-blue-600" />
                Q4GV+RJ5, Adityapur, Jamshedpur, Jharkhand 831014
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-600">
                <FaPhone className="mr-3 text-blue-600" />
                 0657 2472222
              </p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Get In Touch
            </h3>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <a
                href="mailto:contact@nitjsr.ac.in"
                className="flex items-center bg-white hover:bg-gray-50 px-6 py-3 rounded-lg border border-gray-200 transition-colors duration-300"
              >
                <FaEnvelope className="mr-3 text-2xl text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">
                    Email us at
                  </p>
                  <p className="font-medium text-gray-700">contact@nitjsr.ac.in</p>
                </div>
              </a>
              <p className="text-gray-600 text-sm mt-2">
                We will respond to your inquiry within 24 hours
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-5">
            <Link
              to="https://twitter.com/jamshedpur_nit?s=08"
              className="bg-white hover:bg-blue-600 text-gray-600 hover:text-white w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCSKf3jRXKuA9QkPsu69tzkQ"
              className="bg-white hover:bg-red-600 text-gray-600 hover:text-white w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="text-xl" />
            </Link>
            <Link
              to="https://www.facebook.com/NITJamshedpurOfficial/"
              className="bg-white hover:bg-blue-600 text-gray-600 hover:text-white w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </Link>
            <Link
              to="https://www.instagram.com/nitjamshedpur_official/"
              className="bg-white hover:bg-pink-600 text-gray-600 hover:text-white w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </Link>
            <Link
              to="https://www.linkedin.com/school/nit-jamshedpur/"
              className="bg-white hover:bg-blue-600 text-gray-600 hover:text-white w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-xl" />
            </Link>
          </div>

          <div className="text-center text-gray-600 pt-4 border-t border-gray-200 w-full">
            <p>
              © {new Date().getFullYear()} National Institute of Technology
              Jamshedpur. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
