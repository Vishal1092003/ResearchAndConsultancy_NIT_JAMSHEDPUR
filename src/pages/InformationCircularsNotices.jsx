import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';

const pdfFiles = [
  "Expenditure on Filling the Patent.pdf",
  "Procurment Rule 08-07-2025.pdf",
  "RC_Rule.pdf",
  "Annexure III.pdf",
  "Internal Links.pdf",
  "Notice-001.pdf",
  "Notice 02.pdf",
  "Notice regarding payement proof excess Rs. 5000.pdf",
  "Research Bulletin Comitee.pdf",
  "SOP for Functioning of R&C Division -09-08-2021.pdf",
  "SOP for Start Up Grant.pdf",
  "SOP for Student Innovation Project.pdf",
  "SOP R & C 2019.pdf",
  "Summary report of Workshop.pdf",
  "TA Rule-2024.pdf",
  "TA Rule.pdf",
  "DPC_R&C.pdf",
  "Innovation cell.pdf",
  "BIS Commitee.pdf",
  "Filling of patent.pdf",
  "Format for assistant to technical team.pdf",
  "Guidelines for Air ticket booking with format.pdf",
  "IPR CELL.pdf",
  "Minutes Innovation project.pdf",
  "NIT Act, 2007.pdf",
  "Format for IIPA.pdf",
  "Format for financial assistant for conference.pdf",
  "Format for Proposals.pdf",
  "Office order for financial.pdf"

];

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const noticesData = pdfFiles.map((file, idx) => {
    const title = file.replace(/\.[^/.]+$/, "");
    return {
      id: idx + 1,
      title,
      pdfPath: `/notices/${file}`
    };
  });

  const filteredNotices = noticesData.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewPDF = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      <div className="md:top-[190px] z-40 bg-blue-600 text-white py-6 text-center shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
          Official Notices & Documents
        </h2>
      </div>

      <div className="pb-20">
        
        <div className="text-center py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-3">
            Important Notices
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Access official announcements, guidelines, and important documents
          </p>
        </div>

        <div className="px-4 max-w-lg mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search notices and documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all duration-200 text-gray-700"
            />
            <svg 
              className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="px-4 max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice, index) => (
                <div
                  key={notice.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      
                      <div className="flex-grow pr-4">
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full mr-3">
                            Notice #{String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-1 leading-tight">
                          {notice.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Official Document • PDF Format
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <button
                          onClick={() => handleViewPDF(notice.pdfPath)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 outline-none"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          View PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <div className="bg-white rounded-lg p-8 max-w-md mx-auto border border-gray-200">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-600 mb-2">
                    No Notices Found
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {searchTerm ? 'Try adjusting your search terms.' : 'No notices available at the moment.'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
       <Footer />
    </div>
  );
};

export default Notices;
import Footer from "@/components/Footer/Footer";
