// import { Link } from "react-router-dom";
// import {
//   FaFacebook,
//   FaYoutube,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa6";
// const Footer = () => {
//   return (
//     <div className="flex flex-col items-center justify-around h-[200px]  bg-sky-300">
//       <div>
//         <div className="text-md md:text-2xl font-bold ">
//           National Institute of Technology Jamshedpur
//         </div>
//         <div className="text-md md:text-lg font-semibold text-center">
//           {" "}
//           Q4GV+RJ5, Adityapur, Jamshedpur, Jharkhand 831014
//         </div>
//       </div>

//       <div className=" flex">
//         <Link
//           to={"https://twitter.com/jamshedpur_nit?s=08"}
//           className="text-blue-800 hover:text-blue-900"
//         >
//           <FaTwitter className="mr-4 text-3xl hover:scale-110   transition duration-100" />
//         </Link>
//         <Link
//           to={"https://www.youtube.com/channel/UCSKf3jRXKuA9QkPsu69tzkQ"}
//           className="hover:text-red-800 text-red-500"
//         >
//           <FaYoutube className="mr-4 text-3xl hover:scale-110 transition duration-100" />
//         </Link>
//         <Link
//           to={"https://www.facebook.com/NITJamshedpurOfficial/"}
//           className="text-blue-800 hover:text-blue-900"
//         >
//           <FaFacebook className="mr-4 text-3xl hover:scale-110  transition duration-100" />
//         </Link>
//         <Link
//           to={"https://www.instagram.com/nitjamshedpur_official/"}
//           className="hover:text-pink-800 text-pink-600"
//         >
//           <FaInstagram className="mr-4 text-3xl  hover:scale-110  transition duration-100" />
//         </Link>
//         <Link
//           to={"https://twitter.com/jamshedpur_nit?s=08"}
//           className="text-blue-800 hover:text-blue-900"
//         >
//           <FaLinkedinIn className="mr-4 text-3xl   hover:scale-110 transition duration-100" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Footer;
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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Institute Info */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                NIT Jamshedpur
              </span>
            </h3>
            <div className="space-y-4">
              <p className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-3 text-blue-400" />
                Q4GV+RJ5, Adityapur, Jamshedpur, Jharkhand 831014
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-3 text-blue-400" />
                +91 XXX XXX XXXX
              </p>
            </div>
          </div>

          {/* Email Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Get In Touch
            </h3>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <a
                href="mailto:contact@nitjsr.ac.in"
                className="flex items-center bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <FaEnvelope className="mr-3 text-2xl text-blue-400" />
                <div>
                  <p className="text-sm text-gray-300">Email us at</p>
                  <p className="font-medium">contact@nitjsr.ac.in</p>
                </div>
              </a>
              <p className="text-gray-400 text-sm mt-2">
                We'll respond to your inquiry within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-5">
            <Link
              to="https://twitter.com/jamshedpur_nit?s=08"
              className="bg-gray-700 hover:bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCSKf3jRXKuA9QkPsu69tzkQ"
              className="bg-gray-700 hover:bg-red-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="YouTube"
            >
              <FaYoutube className="text-xl" />
            </Link>
            <Link
              to="https://www.facebook.com/NITJamshedpurOfficial/"
              className="bg-gray-700 hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </Link>
            <Link
              to="https://www.instagram.com/nitjamshedpur_official/"
              className="bg-gray-700 hover:bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </Link>
            <Link
              to="https://www.linkedin.com/school/nit-jamshedpur/"
              className="bg-gray-700 hover:bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-xl" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 pt-4 border-t border-gray-700 w-full">
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
