// import Navbar from "../components/Navbar/Navbar";
// import Tab from "../components/Tab/Tab";

// import SponseredResearchData from "../Data/SponseredResearchData.json";
// import DynamicTable from "@/components/dynamicTable/dynamicTable";
// const SponsoredResearch = () => {
//   return (
//     <div>
//       <div className="">
//         <div className="overflow-x-hidden">
//           <Navbar />
//         </div>
//         <div className="sticky top-0 z-10 bg-white shadow-md">
//           <Tab />
//         </div>

//         <div className="w-full  h-16 mt-5 mb-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
//             <h1 className="font-bold text-2xl">Sponsored Research Projects</h1>
//         </div>

//         <div className="pb-12 px-12">
//           <DynamicTable data={SponseredResearchData.Sheet} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SponsoredResearch;



import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Tab from "../components/Tab/Tab";

import SponseredResearchData from "../Data/SponseredResearchData.json";
import DynamicTable from "@/components/dynamicTable/dynamicTable";

const SponsoredResearch = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  // You'll need to organize your data into these three categories
  // For now, I'm using the same data - you should replace with actual data
  const tabData = {
    ongoing: SponseredResearchData.Sheet1, // Replace with actual ongoing projects data
    "2024-25": SponseredResearchData.Sheet2, // Replace with 2024-25 data
    "2023-24": SponseredResearchData.Sheet3, // Replace with 2023-24 data
  };

  const tabs = [
    { id: "ongoing", label: "Ongoing Projects" },
    { id: "2024-25", label: "Received Projects 2024-25" },
    { id: "2023-24", label: "Received Projects 2023-24" },
  ];

  return (
    <div>
      <div className="">
        <div className="overflow-x-hidden">
          <Navbar />
        </div>
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <Tab />
        </div>

        <div className="w-full h-16 mt-5 mb-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
          <h1 className="font-bold text-2xl">Sponsored Research Projects</h1>
        </div>

        {/* Tab Navigation */}
        <div className="px-12 mb-6">
          <div className="flex justify-between border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Table Content */}
        <div className="pb-12 px-12">
          <div className="transition-all duration-300 ease-in-out">
            <DynamicTable data={tabData[activeTab]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsoredResearch;