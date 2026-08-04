import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';

const Achievements = () => {
  const achievements =[
    {
    text: "Secured the 82nd position among all Engineering Institutes of India in the NIRF rankings"
  },
  {
    text: "Currently, 65 ongoing research projects are funded by reputed agencies such as SERB, DST, DRDO, ICMR & various industries and 105 consultancy projects has been completed"
  },
  {
    text: "The Ministry of MSME sanctioned the conduct of 33 training programs, encompassing ESDP, A-ESDP, MDP, and A-MDP, with a total financial assistance of ₹67.23 lakh"
  },
  {
    text: "Three faculty members featured among the world's top 5% scientists, in SciRank Global Registry Report"
  },
  {
    text: "Central Research Facility is established to bridge the gap between departmental research infrastructure and modern scientific requirements by providing centralized access to state of the art sophisticated equipments"
  },
  {
    text: "NIT Jamshedpur records an impressive overall placement percentage of 95.6% in the session 2025-26"
  },
  {
    text: "ICICI Foundation has given amount ₹73,98,600 for the Development of Reverse Engineering Facilities for Skill Development of youth under CSR fund"
  },
  {
    text: "Undergraduate students have successfully completed 36 innovative projects, showcasing their creativity and technical skills under the UG Innovation Project 9.72 lakhs (under IIPA) in 2025"
  },
  {
    text: "Aligning with its Vision 2035 roadmap, NIT Jamshedpur has successfully completed a comprehensive academic audit across all 11 departments to ensure excellence and future-readiness"
  },
  {
    text: "Signed 50+ MoUs with premier institutions, industries, and government bodies to foster innovation, knowledge exchange and skill development"
  }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>
      <div className="pt-8 pb-6 bg-blue-600">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-white">Achievements</h1>
      </div>
      <div className="px-4 py-8 max-w-6xl mx-auto">
        <div className="grid gap-6 md:gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-1">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

import Footer from "@/components/Footer/Footer";
export default Achievements;
