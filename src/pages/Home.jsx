import CarouselComponents from "../components/Carousel/CarouselComponents";
import Footer from "../components/Footer/Footer";
import Message from "../components/Message/Message";
import Navbar from "../components/Navbar/Navbar";
import Tab from "../components/Tab/Tab";
import messages from "../pages/dean&directorMsg.json";
// import { useState } from "react";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  AbhishekSir,
  AakashSir,
  AkanshaMam,
  DrKanika,
  SwagatadebSir,
  AshokSir,
  DirectorSir,
  DeanSir,
} from "../assets/index";

// dean&directorMsg.json contains the messages for Dean and Director

const imageMap = {
  DirectorSir,
  DeanSir,
};

const MessageTile = ({ data, reverse }) => {
  const [expanded, setExpanded] = useState(false);
  const imgSrc = imageMap[data.image];

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } shadow-lg rounded-lg bg-white overflow-hidden w-full border border-gray-200`}
    >
      {/* Image & Details */}
      <div className="flex flex-col items-center justify-center min-w-[20rem] p-6 border-b md:border-b-0 md:border-r border-gray-200">
        <img
          src={imgSrc}
          alt={data.name}
          className="rounded-xl w-full max-w-[15rem] md:max-w-[18rem] object-cover aspect-square"
        />
        <div className="text-center mt-4 space-y-1">
          <h3 className="font-semibold text-lg text-gray-800">{data.name}</h3>
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

      {/* Message */}
      <div className="flex-1 p-6 flex flex-col justify-center bg-gray-50">
        <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4 text-center">
          {reverse ? "Director's Message" : "Dean's Message"}
        </h2>
        <div className="border-t border-gray-200 pt-4">
          <div
            className="relative overflow-hidden transition-all duration-700 ease-in-out"
            style={{ maxHeight: expanded ? "1000px" : "10rem" }} // Adjust height as needed
          >
            <p className="text-gray-700 text-justify leading-relaxed">
              {data.message}
            </p>
            {!expanded && data.message.length > 350 && (
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-50 to-transparent"></div>
            )}
          </div>
          {data.message.length > 350 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

//different teams component

const teams = {
  "Associate Deans": [
    {
      name: "Dr. Kanika Prashad",
      role: "Associate Dean-IPR Cell",
      img: DrKanika,
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
      name: "Aakash",
      role: "Senior Assistant",
      img: AakashSir,
      linkedin: "#",
    },
    {
      name: "Akansha Kumari",
      role: "Administrative Staff",
      img: AkanshaMam,
      linkedin: "#",
    },
  ],
  "Web Team": [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      img: "https://via.placeholder.com/120",
      linkedin: "#",
    },
    {
      name: "David Wilson",
      role: "Backend Developer",
      img: "https://via.placeholder.com/120",
      linkedin: "#",
    },
  ],
  "Research Team": [
    {
      name: "Sophia Lee",
      role: "Research Analyst",
      img: "https://via.placeholder.com/120",
      linkedin: "#",
    },
  ],
};

const premiumBlue = "#3A8DCC";
const accentColor = premiumBlue;

export function TeamSection() {
  const [activeTab, setActiveTab] = useState("Associate Deans");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(teams).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-lg ${
              activeTab === tab
                ? "text-white shadow-lg"
                : "text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200"
            }`}
            style={{
              backgroundColor: activeTab === tab ? accentColor : undefined,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Team Members Grid - 2 columns */}
      <div className="grid gap-8 md:grid-cols-2">
        {teams[activeTab].map((member, index) => (
          <div
            key={index}
            className="flex bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image on left - larger size */}
            <div className="w-1/3 min-w-[120px] relative">
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
                className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
                style={{ color: accentColor }}
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>

            {/* Content on right */}
            <div className="w-2/3 p-5 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-3 text-sm">{member.role}</p>

              {/* Additional info could go here */}
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{member.email || "email@example.com"}</span>
              </div>

              <div className="flex items-center text-sm text-gray-500 mt-1">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{member.phone || "+91 XXXXX XXXXX"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="overflow-x-hidden">
          <Navbar />
        </div>

        <div className="sticky top-0 z-10 bg-white shadow-md">
          <Tab />
        </div>

        <div className="overflow-x-hidden">
          {/* carouselSection */}
          <CarouselComponents />

          {/* messageSection */}
          <div className="pt-5 px-4 w-full bg-yellow-50/50">
            <div className="min-h-[50vh] flex flex-col justify-start items-center py-8 max-w-7xl mx-auto space-y-12">
              {Object.entries(messages).map(([key, data], index) => (
                <MessageTile key={key} data={data} reverse={index % 2 === 0} />
              ))}
            </div>
          </div>

          {/* profileCardsSection*/}
          <div>
            <TeamSection />
          </div>

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
