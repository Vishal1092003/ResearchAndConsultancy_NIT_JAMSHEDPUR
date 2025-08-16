import CarouselComponents from "../components/Carousel/CarouselComponents.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Tab from "../components/Tab/Tab.jsx";
import messages from "../pages/dean&directorMsg.json";
import React, { useState, useRef } from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import {
  AbhishekSir,
  AkanshaMam,
  SwagatadebSir,
  AshokSir,
  DirectorSir,
  DeanSir,
  SuraviMam,
  Subhash,
} from "../assets/index.js";

const imageMap = {
  DirectorSir,
  DeanSir,
};

const MessageTile = ({ data, reverse }) => {
  const [expanded, setExpanded] = useState(false);
  const msgRef = useRef(null);
  const imgSrc = imageMap[data.image];

  const toggleExpand = () => {
    if (expanded && msgRef.current) {
      // When collapsing, scroll message box back to top
      msgRef.current.scrollTop = 0;
    }
    setExpanded(!expanded);
  };

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } shadow-lg rounded-lg bg-white overflow-hidden w-full border border-gray-200`}
    >
      {/* Left Side */}
      <div
        className={`flex flex-col items-center justify-center min-w-[20rem] p-6 border-b md:border-b-0 ${
          reverse ? "md:border-l" : "md:border-r"
        } border-gray-200`}
      >
        <img
          src={imgSrc}
          alt={data.name}
          className="rounded-lg w-full max-w-[15rem] md:max-w-[18rem] object-cover aspect-square"
        />
        <div className="text-center mt-4 space-y-1">
          <h3 className="font-semibold text-lg text-gray-700">{data.name}</h3>
          <p className="text-gray-600 text-sm">{data.designation}</p>
          <p className="text-gray-600 text-sm">{data.department}</p>
          {data.phone_office && (
            <p className="text-gray-600 text-sm">
              Ph. (O): {data.phone_office}
            </p>
          )}
          {data.mobile && (
            <p className="text-gray-600 text-sm">Mob: {data.mobile}</p>
          )}
          <p className="text-blue-600 text-sm hover:underline">
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 p-6 flex flex-col justify-center bg-gray-50">
        <h2 className="font-serif text-2xl font-semibold text-gray-700 mb-4 text-center">
          {reverse ? "Director's Message" : "Dean's Message"}
        </h2>
        <div className="border-t border-gray-200 pt-4">
          <div
            ref={msgRef}
            className={`relative transition-all duration-700 ease-in-out ${
              expanded
                ? "max-h-60 md:max-h-screen overflow-y-auto"
                : "max-h-40 overflow-hidden"
            }`}
          >
            <p className="text-gray-600 text-justify leading-relaxed">
              {data.message}
            </p>
            {!expanded && data.message.length > 350 && (
              <div
                className="absolute bottom-0 left-0 w-full h-12"
                style={{
                  background: "linear-gradient(to top, #f9fafb, transparent)",
                }}
              ></div>
            )}
          </div>
          {data.message.length > 350 && (
            <button
              onClick={toggleExpand}
              className="mt-4 text-blue-600 hover:text-red-600 font-medium transition-colors"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// const MessageTile = ({ data, reverse }) => {
//   const [expanded, setExpanded] = useState(false);
//   const imgSrc = imageMap[data.image];

//   return (
//     <div
//       className={`flex flex-col md:flex-row ${
//         reverse ? "md:flex-row-reverse" : ""
//       } shadow-lg rounded-lg bg-white overflow-hidden w-full border border-gray-200`}
//     >
//       <div
//         className={`flex flex-col items-center justify-center min-w-[20rem] p-6 border-b md:border-b-0 ${
//           reverse ? "md:border-l" : "md:border-r"
//         } border-gray-200`}
//       >
//         <img
//           src={imgSrc}
//           alt={data.name}
//           className="rounded-lg w-full max-w-[15rem] md:max-w-[18rem] object-cover aspect-square"
//         />
//         <div className="text-center mt-4 space-y-1">
//           <h3 className="font-semibold text-lg text-gray-700">{data.name}</h3>
//           <p className="text-gray-600 text-sm">{data.designation}</p>
//           <p className="text-gray-600 text-sm">{data.department}</p>
//           {data.phone_office && (
//             <p className="text-gray-600 text-sm">
//               Ph. (O): {data.phone_office}
//             </p>
//           )}
//           {data.mobile && (
//             <p className="text-gray-600 text-sm">Mob: {data.mobile}</p>
//           )}
//           <p className="text-blue-600 text-sm hover:underline">
//             <a href={`mailto:${data.email}`}>{data.email}</a>
//           </p>
//         </div>
//       </div>

//       <div className="flex-1 p-6 flex flex-col justify-center bg-gray-50">
//         <h2 className="font-serif text-2xl font-semibold text-gray-700 mb-4 text-center">
//           {reverse ? "Director's Message" : "Dean's Message"}
//         </h2>
//         <div className="border-t border-gray-200 pt-4">
//           <div
//             className={`relative transition-all duration-700 ease-in-out ${
//               expanded
//                 ? "max-h-60 md:max-h-screen overflow-y-auto"
//                 : "max-h-40 overflow-hidden"
//             }`}
//           >
//             <p className="text-gray-600 text-justify leading-relaxed">
//               {data.message}
//             </p>
//             {!expanded && data.message.length > 350 && (
//               <div
//                 className="absolute bottom-0 left-0 w-full h-12"
//                 style={{
//                   background: "linear-gradient(to top, #f9fafb, transparent)",
//                 }}
//               ></div>
//             )}
//           </div>

//           {data.message.length > 350 && (
//             <button
//               onClick={() => setExpanded(!expanded)}
//               className="mt-4 text-blue-600 hover:text-red-600 font-medium transition-colors"
//             >
//               {expanded ? "Read Less" : "Read More"}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

const teams = {
  "Associate Deans": [
    {
      name: "Dr. Surabhi Pal",
      role: "Associate Dean-IPR Cell",
      img: SuraviMam,
      linkedin: "#",
    },
    {
      name: "Dr. Swagatadeb Sahoo",
      role: "Associate Dean",
      img: SwagatadebSir,
      linkedin: "#",
    },
    {
      name: "Dr. Ashok Mandal",
      role: "Associate Dean-Collaboration and Entrepreneurship Development",
      img: AshokSir,
      linkedin: "#",
    },
  ],
  "Administrative Staff": [
    {
      name: "Abhishek Verma",
      role: "Accountant",
      img: AbhishekSir,
      linkedin: "#",
    },
    {
      name: "Subhash kumar",
      role: "Senior Assistant",
      img: Subhash,
      linkedin: "#",
    },
    {
      name: "Akansha Kumari",
      role: "Administrative Staff",
      img: AkanshaMam,
      linkedin: "#",
    },
  ],
  "Research Bulletin Team": [
    //Faculty
    {
      name: "Dr. Abhishek Sharma",
      role: "Assistant Professor Mechanical Engineering",
      img: "./abhishekSharma.jpeg",
      linkedin: "#",
    },
    {
      name: "Dr. Neha Jaiswal",
      role: "Assistant Professor Humanities",
      img: "./nehaJaiswal.jpeg",
      linkedin: "#",
    },
    //Student Volunteer
    {
      name: "Nihal Sahay",
      role: "2023UGME007",
      img: "./nihalSahay.jpg",
      linkedin: "#",
    },
    {
      name: "Harshit Raj",
      role: "2022UGPI032",
      img: "./harshitRaj.jpg",
      linkedin: "#",
    },
    {
      name: "Mrinal Ayush Raj",
      role: "2023UGME052",
      img: "mrinalAyushRaj.jpg",
      linkedin: "#",
    },
  ],
  "Web Team": [
    {
      name: "Aditya Raj",
      role: "Web Team Member",
      img: "./adityaRaj.jpg",
      linkedin: "https://www.linkedin.com/aditraj24",
      email: "2024ugcs012@nitjsr.ac.in",
    },
    {
      name: "Anoop Kumar Burnwal",
      role: "Web Team Member",
      img: "./anoop.jpg",
      linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-aa0b10318/",
      email: "2024ugcm013@nitjsr.ac.in",
    },
    {
      name: "Rishav Kashyap",
      role: "Web Team Member",
      img: "./rishav.jpg",
      linkedin: "https://www.linkedin.com/in/y0rishav",
      email: "2024ugcs017@nitjsr.ac.in",
    },
    {
      name: "MINU KUMARI",
      role: "Web Team Member",
      img: "./minuKumari.jpg",
      linkedin: "https://www.linkedin.com/in/minu-kumari-8a492033a",
      email: "2024ugcs022@nitjsr.ac.in",
    },
    {
      name: "Swayam Agarwal",
      role: "Web Team Member",
      img: "./swayam.jpg",
      linkedin:
        "https://www.linkedin.com/in/swayam-agarwal-2b941b323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "2024ugcs066@nitjsr.ac.in",
    },
    // {
    //   name: "Awaish Ehsan",
    //   role: "Web Team Member",
    //   img: "./awaish.png",
    //   linkedin: "https://www.linkedin.com/in/awaish-ehsan-90639b323/",
    //   email: "2024ugcs042@nitjsr.ac.in",
    // },
    {
      name: "Yogesh Kumar Meena",
      role: "Web Team Member",
      img: "./yogesh.png",
      linkedin: "https://www.linkedin.com/in/yogesh-meena-",
      email: "2024ugcm015@nitjsr.ac.in",
    },

    // {
    //   name: "Ishika Gupta",
    //   role: "Web Team Member",
    //   img: "./ishika.jpg",
    //   linkedin:
    //     "https://www.linkedin.com/in/ishika-gupta-88104a229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    //   email: "2024ugme051@nitjsr.ac.in",
    // },
  ],
};

const TeamMemberCard = ({ member }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      <div className="w-1/3 min-w-[120px] relative aspect-[4/5] overflow-hidden">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-50 transition-colors text-blue-600"
        >
          <FaLinkedin className="text-xl" />
        </a>
      </div>

      <div className="w-2/3 p-5 flex flex-col">
        <h3 className="text-xl font-bold text-gray-700 mb-1">{member.name}</h3>
        <p className="text-gray-600 mb-3 text-sm">{member.role}</p>

        <div className="mt-auto space-y-2">
          {member.email && (
            <div className="flex items-center text-sm text-gray-600">
              <FaEnvelope className="w-4 h-4 mr-2" />
              <span>{member.email}</span>
            </div>
          )}
          {(member.phone || member.mobile) && (
            <div className="flex items-center text-sm text-gray-600">
              <FaPhone className="w-4 h-4 mr-2" />
              <span>{member.phone || member.mobile || "+91 XXXXX XXXXX"}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("Associate Deans");

  const renderTeamMembers = () => {
    if (activeTab !== "Research Bulletin Team") {
      return teams[activeTab].map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ));
    }

    const faculty = teams[activeTab].filter(
      (member) =>
        member.role.includes("Professor") || member.role.includes("Faculty")
    );
    const students = teams[activeTab].filter(
      (member) =>
        member.role.includes("2023UGME007") ||
        member.role.includes("2022UGPI032") ||
        member.role.includes("2023UGME052") ||
        member.role.includes("Volunteer")
    );

    return (
      <>
        {/* Faculty Section */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">
            Faculty
          </h3>
        </div>
        {faculty.map((member, index) => (
          <TeamMemberCard key={`faculty-${index}`} member={member} />
        ))}

        {/* Student Volunteer Section */}
        <div className="md:col-span-2 mt-8">
          <h3 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">
            Student Volunteers
          </h3>
        </div>
        {students.map((member, index) => (
          <TeamMemberCard key={`student-${index}`} member={member} />
        ))}
      </>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(teams).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-lg ${
              activeTab === tab
                ? "text-white bg-blue-600 shadow-lg"
                : "text-gray-600 hover:text-gray-700 bg-gray-50 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">{renderTeamMembers()}</div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="overflow-x-hidden">
        <Navbar />
      </div>

      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      <div className="overflow-x-hidden">
        <CarouselComponents />

        <div className="pt-5 px-4 w-full bg-gray-50">
          <div className="min-h-[50vh] flex flex-col justify-start items-center py-8 max-w-7xl mx-auto space-y-12">
            {Object.entries(messages).map(([key, data], index) => (
              <MessageTile key={key} data={data} reverse={index % 2 === 0} />
            ))}
          </div>
        </div>

        <div className="py-12 bg-white">
          <TeamSection />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
