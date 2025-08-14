
import CarouselComponents from "../components/Carousel/CarouselComponents";
import Footer from "../components/Footer/Footer";
import Message from "../components/Message/Message";
import Navbar from "../components/Navbar/Navbar";
import Tab from "../components/Tab/Tab";
import messages from "../pages/dean&directorMsg.json";
import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import {
  AbhishekSir,
  AakashSir,
  AkanshaMam,
  DrKanika,
  SwagatadebSir,
  AshokSir,
  DirectorSir,
  DeanSir,
  SatishSir,
  SuraviMam,
  Subhash,
} from "../assets/index";

// Theme Constants
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

const imageMap = {
  DirectorSir,
  DeanSir: SatishSir,
};

const MessageTile = ({ data, reverse }) => {
  const [expanded, setExpanded] = useState(false);
  const imgSrc = imageMap[data.image];

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } shadow-lg rounded-${theme.borderRadius.medium} bg-${
        theme.colors.white
      } overflow-hidden w-full border border-${theme.colors.border}`}
    >
      {/* Image & Details */}
      <div
        className={`flex flex-col items-center justify-center min-w-[20rem] p-6 border-b md:border-b-0 ${
          reverse ? "md:border-l" : "md:border-r"
        } border-${theme.colors.border}`}
      >
        <img
          src={imgSrc}
          alt={data.name}
          className={`rounded-${theme.borderRadius.medium} w-full max-w-[15rem] md:max-w-[18rem] object-cover aspect-square`}
        />
        <div className="text-center mt-4 space-y-1">
          <h3 className={`font-semibold text-lg text-${theme.colors.darkText}`}>
            {data.name}
          </h3>
          <p className={`text-${theme.colors.mediumText} text-sm`}>
            {data.designation}
          </p>
          <p className={`text-${theme.colors.mediumText} text-sm`}>
            {data.department}
          </p>
          {data.phone_office && (
            <p className={`text-${theme.colors.mediumText} text-sm`}>
              Ph. (O): {data.phone_office}
            </p>
          )}
          {data.mobile && (
            <p className={`text-${theme.colors.mediumText} text-sm`}>
              Mob: {data.mobile}
            </p>
          )}
          <p className={`text-${theme.colors.primary} text-sm hover:underline`}>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </p>
        </div>
      </div>

      {/* Message */}
      <div
        className={`flex-1 p-6 flex flex-col justify-center bg-${theme.colors.lightBg}`}
      >
        <h2
          className={`font-serif text-2xl font-semibold text-${theme.colors.darkText} mb-4 text-center`}
        >
          {reverse ? "Director's Message" : "Dean's Message"}
        </h2>
        <div className={`border-t border-${theme.colors.border} pt-4`}>
          <div
            className="relative overflow-hidden transition-all duration-700 ease-in-out"
            style={{ maxHeight: expanded ? "1000px" : "10rem" }}
          >
            <p
              className={`text-${theme.colors.mediumText} text-justify leading-relaxed`}
            >
              {data.message}
            </p>
            {!expanded && data.message.length > 350 && (
              <div
                className={`absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-${theme.colors.lightBg} to-transparent`}
              ></div>
            )}
          </div>
          {data.message.length > 350 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className={`mt-4 text-${theme.colors.primary} hover:text-${theme.colors.accent} font-medium transition-colors`}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Teams data remains the same
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
    {
      name: "Nihal Sahay",
      role: "Research Analyst",
      img: "./nihalSahay.jpg",
      linkedin: "#",
    },
    {
      name: "Harshit Raj",
      role: "Research Analyst",
      img: "./harshitRaj.jpg",
      linkedin: "#",
    },
    {
      name: "Mrinal Ayush Raj",
      role: "Research Analyst",
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
      email: "adityarajykme24@gmail.com",
    },
    {
      name: "Anoop Kumar Burnwal",
      role: "Web Developer",
      img: "./anoop.jpg",
      linkedin: "https://www.linkedin.com/in/anoop-kumar-burnwal-aa0b10318/",
      email: "2024ugcm013@nitjsr.ac.in",
    },
    {
      name: "Rishav Kashyap",
      role: "Web Team Member",
      img: "./rishav.jpg",
      linkedin: "https://www.linkedin.com/in/y0rishav",
      email: "rishavkashyap7120@gmail.com",
    },
    {
      name: "Swayam Agarwal",
      role: "Web Team Member",
      img: "./swayam.jpg",
      linkedin:
        "https://www.linkedin.com/in/swayam-agarwal-2b941b323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "itzswayam890@gmail.com",
    },
    {
      name: "Yogesh Kumar Meena",
      role: "Web Team Member",
      img: "./yogesh.png",
      linkedin: "https://www.linkedin.com/in/yogesh-meena-",
      email: "yogeshchhandhwal2005@gmail.com",
    },
    {
      name: "MINU KUMARI",
      role: "Web Team Member",
      img: "./minuKumari.jpg",
      linkedin: "https://www.linkedin.com/in/minu-kumari-8a492033a",
      email: "2024ugcs022@nitjsr.ac.in",
    },
    {
      name: "Ishika Gupta",
      role: "Web Team Member",
      img: "./ishika.jpg",
      linkedin:
        "https://www.linkedin.com/in/ishika-gupta-88104a229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "2024ugme051@nitjsr.ac.in",
    },
  ],
  
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("Associate Deans");

  return (
    <div className={`w-full max-w-6xl mx-auto px-4 py-12`}>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(teams).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-${
              theme.borderRadius.full
            } font-medium transition-all duration-300 text-lg ${
              activeTab === tab
                ? `text-${theme.colors.white} shadow-lg`
                : `text-${theme.colors.mediumText} hover:text-${theme.colors.darkText} bg-${theme.colors.lightBg} hover:bg-${theme.colors.border}`
            }`}
            style={{
              backgroundColor:
                activeTab === tab ? theme.colors.primary : undefined,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Team Members Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {teams[activeTab].map((member, index) => (
          <div
            key={index}
            className={`flex bg-${theme.colors.white} rounded-${theme.borderRadius.medium} shadow-${theme.shadows.card} hover:shadow-${theme.shadows.hover} transition-all duration-300 overflow-hidden h-full`}
          >
            {/* Image section */}
            <div className="w-1/3 min-w-[120px] relative aspect-[4/5] overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              {/* LinkedIn button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute bottom-2 right-2 bg-${theme.colors.white} p-2 rounded-${theme.borderRadius.full} shadow hover:bg-${theme.colors.lightBg} transition-colors`}
                style={{ color: theme.colors.primary }}
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>

            {/* Content section */}
            <div className="w-2/3 p-5 flex flex-col">
              <h3
                className={`text-xl font-bold text-${theme.colors.darkText} mb-1`}
              >
                {member.name}
              </h3>
              <p className={`text-${theme.colors.mediumText} mb-3 text-sm`}>
                {member.role}
              </p>

              {/* Contact info */}
              <div className="mt-auto space-y-2">
                {member.email && (
                  <div
                    className={`flex items-center text-sm text-${theme.colors.mediumText}`}
                  >
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    <span>{member.email}</span>
                  </div>
                )}
                {(member.phone || member.mobile) && (
                  <div
                    className={`flex items-center text-sm text-${theme.colors.mediumText}`}
                  >
                    <FaPhone className="w-4 h-4 mr-2" />
                    <span>
                      {member.phone || member.mobile || "+91 XXXXX XXXXX"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className={`min-h-screen w-full bg-${theme.colors.lightBg}`}>
      <div className="overflow-x-hidden">
        <Navbar theme={theme} />
      </div>

      <div className={`sticky top-0 z-10 bg-${theme.colors.white} shadow-md`}>
        <Tab theme={theme} />
      </div>

      <div className="overflow-x-hidden">
        {/* Carousel Section */}
        <CarouselComponents theme={theme} />

        {/* Message Section */}
        <div className={`pt-5 px-4 w-full bg-${theme.colors.lightBg}`}>
          <div className="min-h-[50vh] flex flex-col justify-start items-center py-8 max-w-7xl mx-auto space-y-12">
            {Object.entries(messages).map(([key, data], index) => (
              <MessageTile key={key} data={data} reverse={index % 2 === 0} />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`py-12 bg-${theme.colors.white}`}>
          <TeamSection />
        </div>

        {/* Footer */}
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default Home;
