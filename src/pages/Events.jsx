import React, { useState } from "react";
import eventsData from "../Data/Events.json";
import Navbar from "@/components/Navbar/Navbar";
import Tab from "@/components/Tab/Tab";
import DynamicTable from "@/components/dynamicTable/dynamicTable";

const Events = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-50">
        <div className="overflow-x-hidden">
          <Navbar />
        </div>
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <Tab />
        </div>
        <div className="flex flex-col items-center p-4 w-full">
          <div className="w-full h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-blue-600">
            <h1 className="font-bold text-2xl text-white">Stay Updated With Events</h1>
          </div>

          <div className="w-full mt-8 space-y-4">
            <DynamicTable data={eventsData.Sheet1} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

import Footer from "@/components/Footer/Footer";
export default Events;
