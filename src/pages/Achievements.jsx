import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';

const Achievements = () => {
  const achievements = [
    {
      text: "Secured the 82nd position among all Engineering Institutes of India in the NIRF rankings.",
    },
    {
      text: "NIT Jamshedpur records an impressive overall placement percentage of 94.1% in the session 2024-25.",
    },
    {
      text: "Currently, 58 ongoing research projects are funded by reputed agencies such as SERB, DST, DRDO, ICMR & different industries.",
    },
    {
      text: "Signed 50+ MoUs with premier institutions, industries, and government bodies to foster innovation, knowledge exchange, and skill development.",
    },
    {
      text: "MoU signed between JCSTI and NIT Jamshedpur to enhance academic collaboration, faculty development, and research in line with NEP 2020.",
    },
    {
      text: "JCSTI sanctioned six research projects in May 2025.",
    },
    {
      text: "MSME sanctioned ₹66.45 lakh in 2025 for 27 training programs including ESDP, A-ESDP, MDP, and A-MDP.",
    },
    {
      text: "Institute participated in APAIE 2025 held at Yashobhoomi, Delhi, as part of internationalization efforts.",
    },
    {
      text: "Seven faculty members featured among the world's top 2% scientists, as recognized by Stanford University in 2025.",
    },
    {
      text: "Over 150 of the 205 faculty members are young and dynamic, contributing actively to academic and research growth.",
    },
    {
      text: "Under the UG Innovation Project, ₹11.94 lakh was sanctioned in 2024, and ₹8.6 lakh in 2025 for IIPA, IATT, and ISG initiatives.",
    },
    {
      text: "Hosts a DST-NIDHI Inclusive Technology Business Incubator (i-TBI) established with support of 5 Cr grant from DST, GoI to support startups through mentoring, prototyping, seed funding, and entrepreneurship programs.",
    },
    {
      text: "Received 1.66 Crores for enabling technical textiles in NITJSR for Laboratory Infrastructure development as well as training on technical textiles.",
    },
    {
      text: "Aligning with its Vision 2035 roadmap, NIT Jamshedpur has successfully completed a comprehensive academic audit across all 11 departments to ensure excellence and future-readiness.",
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
