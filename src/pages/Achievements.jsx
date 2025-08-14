// import React from 'react';

// const Achievements = () => {
//   const achievements = [
//     {
//       text: "Currently, 51 ongoing research projects are funded by reputed agencies such as SERB, DST, DRDO, ICMR & different industries.",
//       color: "bg-purple-400"
//     },
//     {
//       text: "Signed 45+ MoUs with premier institutions, industries, and government bodies to foster innovation, knowledge exchange, and skill development.",
//       color: "bg-yellow-300"
//     },
//     {
//       text: "MoU signed between JCSTI and NIT Jamshedpur to enhance academic collaboration, faculty development, and research in line with NEP 2020.",
//       color: "bg-green-300"
//     },
//     {
//       text: "JCSTI sanctioned six research projects in May 2025.",
//       color: "bg-orange-300"
//     },
//     {
//       text: "MSME sanctioned ₹66.45 lakh in 2025 for 27 training programs including ESDP, A-ESDP, MDP, and A-MDP.",
//       color: "bg-pink-300"
//     },
//     {
//       text: "Institute participated in APAIE 2025 held at Yashobhoomi, Delhi, as part of internationalization efforts.",
//       color: "bg-blue-300"
//     },
//     {
//       text: "Eight faculty members featured among the world's top 2% scientists, as recognized by Stanford University in 2024.",
//       color: "bg-indigo-400"
//     },
//     {
//       text: "Over 150 of the 198 faculty members are young and dynamic, contributing actively to academic and research growth.",
//       color: "bg-cyan-300"
//     },
//     {
//       text: "Under the UG Innovation Project, ₹11.94 lakh was sanctioned in 2024, and ₹8.6 lakh in 2025 for IIPA, IATT, and ISG initiatives.",
//       color: "bg-purple-300"
//     },
//     {
//       text: "Hosts a DST-NIDHI Inclusive Technology Business Incubator (i-TBI) established with support of 5 Cr grant from DST, GoI to support startups through mentoring, prototyping, seed funding, and entrepreneurship programs.",
//       color: "bg-lime-300"
//     },
//     {
//       text: "Received 1.66 Crores for enabling technical textiles in NITJSR for Laboratory Infrastructure development as well as training on technical textiles.",
//       color: "bg-gray-300"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500">
//       {/* Header */}
//       <div className="pt-8 pb-6">
//         <h1 className="text-center text-6xl font-bold text-white">Achievements</h1>
//       </div>

//       {/* Achievement Cards */}
//       <div className="px-4 pb-8">
//         {achievements.map((item, index) => (
//           <div key={index} className="mb-4 mx-auto max-w-4xl">
//             <div 
//               className={`${item.color} px-8 py-6 text-black relative`}
//               style={{
//                 clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 100%, 30px 100%)'
//               }}
//             >
//               <p className="text-lg font-medium text-center leading-relaxed">
//                 {item.text}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Achievements;




import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';

const Achievements = () => {
  const achievements = [
    {
      text: "Currently, 51 ongoing research projects are funded by reputed agencies such as SERB, DST, DRDO, ICMR & different industries.",
      color: "bg-purple-400"
    },
    {
      text: "Signed 45+ MoUs with premier institutions, industries, and government bodies to foster innovation, knowledge exchange, and skill development.",
      color: "bg-yellow-300"
    },
    {
      text: "MoU signed between JCSTI and NIT Jamshedpur to enhance academic collaboration, faculty development, and research in line with NEP 2020.",
      color: "bg-green-300"
    },
    {
      text: "JCSTI sanctioned six research projects in May 2025.",
      color: "bg-orange-300"
    },
    {
      text: "MSME sanctioned ₹66.45 lakh in 2025 for 27 training programs including ESDP, A-ESDP, MDP, and A-MDP.",
      color: "bg-pink-300"
    },
    {
      text: "Institute participated in APAIE 2025 held at Yashobhoomi, Delhi, as part of internationalization efforts.",
      color: "bg-blue-300"
    },
    {
      text: "Eight faculty members featured among the world's top 2% scientists, as recognized by Stanford University in 2024.",
      color: "bg-indigo-400"
    },
    {
      text: "Over 150 of the 198 faculty members are young and dynamic, contributing actively to academic and research growth.",
      color: "bg-cyan-300"
    },
    {
      text: "Under the UG Innovation Project, ₹11.94 lakh was sanctioned in 2024, and ₹8.6 lakh in 2025 for IIPA, IATT, and ISG initiatives.",
      color: "bg-purple-300"
    },
    {
      text: "Hosts a DST-NIDHI Inclusive Technology Business Incubator (i-TBI) established with support of 5 Cr grant from DST, GoI to support startups through mentoring, prototyping, seed funding, and entrepreneurship programs.",
      color: "bg-lime-300"
    },
    {
      text: "Received 1.66 Crores for enabling technical textiles in NITJSR for Laboratory Infrastructure development as well as training on technical textiles.",
      color: "bg-gray-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500">
      
      {/* Navbar Section */}
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      {/* Header */}
      <div className="pt-8 pb-6">
        <h1 className="text-center text-6xl font-bold text-white">Achievements</h1>
      </div>

      {/* Achievement Cards */}
      <div className="px-4 pb-8">
        {achievements.map((item, index) => (
          <div key={index} className="mb-4 mx-auto max-w-4xl">
            <div 
              className={`${item.color} px-8 py-6 text-black relative`}
              style={{
                clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 100%, 30px 100%)'
              }}
            >
              <p className="text-lg font-medium text-center leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;