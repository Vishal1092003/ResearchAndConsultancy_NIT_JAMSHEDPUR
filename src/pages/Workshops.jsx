import { useState } from "react";
import DynamicTable from '@/components/dynamicTable/dynamicTable';
import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
import workshopData from '@/Data/WorkshopData.json';

const Workshops = () => {
  const [activeTab, setActiveTab] = useState("2024-25");

  const tabData = {
    "2024-25": workshopData.Sheet1,
    "2025-26": workshopData.Sheet2
  };

  const tabs = [
    { id: "2024-25", label: "2024-25 events" },
    { id: "2025-26", label: "2025-26 events" },
  ];
  
   return (
    <div className="w-full min-h-screen bg-gray-50">
      
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      {/* <div className="md:top-[190px] z-40 bg-blue-600 text-white py-4 text-center text-xl md:text-2xl font-bold shadow-md">
        Workshops / Conferences / STC / STTP / FDP 
      </div> */}
      
      <div className="container mx-auto px-4 py-8">
<div className="bg-blue-600 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="font-bold text-2xl md:text-3xl text-white text-center">
            Workshops / Conferences / STC / STTP / FDP 
          </h1>
        </div>
{/* 2024-25 */}

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
      {/* <div className="pb-20">
        <div className="px-4 w-full mx-auto flex flex-col gap-6">
          <DynamicTable data={workshopData.Sheet1} />
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

import Footer from "@/components/Footer/Footer";
export default Workshops;
