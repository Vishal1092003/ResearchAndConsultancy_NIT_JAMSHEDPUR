import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
import React from 'react';
import { Download } from 'lucide-react';
import Footer from '@/components/Footer/Footer';

const ResearchBulletin = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navs */}
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>
      
      {/* PDF Section */}
      <div className="w-full mt-4 sm:mt-6 mb-6 sm:mb-8 px-2 sm:px-4 flex flex-col items-center gap-3 sm:gap-4">
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-blue-600 w-full max-w-xs sm:max-w-md lg:max-w-4xl">
          <img
            src="/research-bulletin-cover.jpg"
            alt="Research Bulletin 2025 Cover"
            width={1200}
            height={1600}
            className="w-full h-auto"
          />
        </div>
        <a
          href="/research-bulletin.pdf"
          download
          className="flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow hover:bg-blue-700 transition text-sm sm:text-base"
        >
          <Download size={16} className="sm:w-5 sm:h-5" />
          <span className="whitespace-nowrap">Download Research Bulletin (PDF)</span>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default ResearchBulletin;