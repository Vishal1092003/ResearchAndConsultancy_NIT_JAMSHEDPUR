// import Navbar from "@/components/Navbar/Navbar";
// import PatentDataComponent from "@/components/Patent/PatentDataComponent";
// import PatentData from "../Data/PatentData.json";
// import Tab from "@/components/Tab/Tab";
// import DynamicTable from "@/components/dynamicTable/dynamicTable";

// const Patent = () => {
//   return (
//     <>
//       <div className="min-h-screen w-full bg-gray-50">
//         <div className="overflow-x-hidden">
//           <Navbar />
//         </div>
//         <div className="sticky top-0 z-10 bg-white shadow-md">
//           <Tab />
//         </div>
//         <div className="flex flex-col items-center p-4 w-full">
//           <div className="w-full h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-blue-600">
//             <h1 className="font-bold text-2xl text-white">Patent(IPRCELL)</h1>
//           </div>

//           <div className="w-full mt-8 space-y-4">
//             <DynamicTable data={PatentData.sheet1} />
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// };

// import Footer from "@/components/Footer/Footer";
// export default Patent;



import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Tab from "../components/Tab/Tab";
import PatentData from "../Data/PatentData.json";
import DynamicTable from "@/components/dynamicTable/dynamicTable";

const Patent = () => {
  const [activeTab, setActiveTab] = useState("Published");

  const tabData = {
   "Published": PatentData.Sheet1,
    "2024-25": PatentData.Sheet2,
    "2023-24": PatentData.Sheet3,
  };

  const tabs = [
    { id: "Published", label: "Published Patent" },
    { id: "2024-25", label: "Design Registration" },
    { id: "2023-24", label: "Granted Patent" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-blue-600 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="font-bold text-2xl md:text-3xl text-white text-center">
            Patent
          </h1>
        </div>

        {/* Three boxes showing data length */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Published Projects Box */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-blue-600 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-gray-700 mb-2">
              {PatentData.Sheet1.length}
            </div>
            <div className="text-gray-600 font-medium">Published Patent</div>
          </div>

          {/* 2024-25 Projects Box */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-green-600 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-gray-700 mb-2">
              {PatentData.Sheet2.length}
            </div>
            <div className="text-gray-600 font-medium">Design Registration</div>
          </div>

          {/* 2023-24 Projects Box */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-orange-600 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-gray-700 mb-2">
              {PatentData.Sheet3.length}
            </div>
            <div className="text-gray-600 font-medium">Granted Patent</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium text-sm transition-colors duration-200 border-b-2 flex-1 md:flex-none ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600 bg-blue-50"
                      : "border-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="p-6">
            <div className="transition-all duration-300 ease-in-out">
              <DynamicTable data={tabData[activeTab]} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

import Footer from "@/components/Footer/Footer";
export default Patent;