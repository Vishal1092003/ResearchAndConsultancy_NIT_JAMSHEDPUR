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

// Using the same theme constants from your TeamSection
const theme = {
  colors: {
    primary: "#3A8DCC", // premiumBlue
    secondary: "#2C3E50",
    accent: "#E74C3C",
    lightBg: "#F8F9FA",
    darkText: "#2D3748",
    mediumText: "#4A5568",
    lightText: "#718096",
    border: "#E2E8F0",
    white: "#FFFFFF",
  },
  shadows: {
    card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    hover:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  borderRadius: {
    small: "0.375rem",
    medium: "0.5rem",
    large: "0.75rem",
    full: "9999px",
  },
};

const Footer = () => {
  return (
    <footer
      className={`bg-${theme.colors.secondary} text-${theme.colors.white} pt-12 pb-8 border-t border-${theme.colors.border} `}
    >
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
              <p
                className={`flex items-center justify-center md:justify-start text-${theme.colors.lightText}`}
              >
                <FaMapMarkerAlt
                  className={`mr-3 text-${theme.colors.primary}`}
                />
                Q4GV+RJ5, Adityapur, Jamshedpur, Jharkhand 831014
              </p>
              <p
                className={`flex items-center justify-center md:justify-start text-${theme.colors.lightText}`}
              >
                <FaPhone className={`mr-3 text-${theme.colors.primary}`} />
                 0657 2472222
              </p>
            </div>
          </div>

          {/* Email Contact Section */}
          <div className="text-center md:text-left">
            <h3
              className={`text-xl font-semibold mb-4 text-${theme.colors.primary}`}
            >
              Get In Touch
            </h3>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <a
                href="mailto:contact@nitjsr.ac.in"
                className={`flex items-center bg-${theme.colors.darkText} hover:bg-${theme.colors.mediumText} px-6 py-3 rounded-${theme.borderRadius.medium} transition-colors duration-300`}
              >
                <FaEnvelope
                  className={`mr-3 text-2xl text-${theme.colors.primary}`}
                />
                <div>
                  <p className={`text-sm text-${theme.colors.lightText}`}>
                    Email us at
                  </p>
                  <p className="font-medium">contact@nitjsr.ac.in</p>
                </div>
              </a>
              <p className={`text-${theme.colors.lightText} text-sm mt-2`}>
                We will respond to your inquiry within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-5">
            <Link
              to="https://twitter.com/jamshedpur_nit?s=08"
              className={`bg-${theme.colors.darkText} hover:bg-blue-500 w-12 h-12 rounded-${theme.borderRadius.full} flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1`}
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCSKf3jRXKuA9QkPsu69tzkQ"
              className={`bg-${theme.colors.darkText} hover:bg-red-600 w-12 h-12 rounded-${theme.borderRadius.full} flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1`}
              aria-label="YouTube"
            >
              <FaYoutube className="text-xl" />
            </Link>
            <Link
              to="https://www.facebook.com/NITJamshedpurOfficial/"
              className={`bg-${theme.colors.darkText} hover:bg-blue-600 w-12 h-12 rounded-${theme.borderRadius.full} flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1`}
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </Link>
            <Link
              to="https://www.instagram.com/nitjamshedpur_official/"
              className={`bg-${theme.colors.darkText} hover:bg-pink-600 w-12 h-12 rounded-${theme.borderRadius.full} flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1`}
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </Link>
            <Link
              to="https://www.linkedin.com/school/nit-jamshedpur/"
              className={`bg-${theme.colors.darkText} hover:bg-blue-500 w-12 h-12 rounded-${theme.borderRadius.full} flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1`}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-xl" />
            </Link>
          </div>

          {/* Copyright */}
          <div
            className={`text-center text-${theme.colors.lightText} pt-4 border-t border-${theme.colors.border} w-full`}
          >
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
