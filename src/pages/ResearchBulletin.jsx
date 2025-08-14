import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
import React from 'react'

const ResearchBulletin = () => {
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
          <h1 className="font-bold text-2xl">Research Bulletin</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import Footer from "@/components/Footer/Footer";
export default ResearchBulletin
