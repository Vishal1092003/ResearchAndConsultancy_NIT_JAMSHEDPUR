import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Tab from "../components/Tab/Tab";
import SponseredResearchData from "../Data/SponseredResearchData.json";
import DynamicTable from "@/components/dynamicTable/dynamicTable";

const SponsoredResearch = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  const tabData = {
    ongoing: SponseredResearchData.Sheet1,
    "2024-25": SponseredResearchData.Sheet2,
    "2023-24": SponseredResearchData.Sheet3,
  };

  const tabs = [
    { id: "ongoing", label: "Ongoing Projects" },
    { id: "2024-25", label: "Received Projects 2024-25" },
    { id: "2023-24", label: "Received Projects 2023-24" },
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
            Sponsored Research Projects
          </h1>
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
export default SponsoredResearch;
