import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';

const pdfFiles = [
  "Account detail of Research & Consultancy.pdf",
  "GST.pdf",
  "NIT JAMSHEDPUR (AIU).pdf",
  "PAN-signed.pdf",
];

const RncDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const rncDetailsData = pdfFiles.map((file, idx) => {
    const title = file.replace(/\.pdf$/i, "");
    return {
      id: idx + 1,
      title,
      pdfPath: `/rncDetails/${file}`
    };
  });

  const filteredDetails = rncDetailsData.filter(detail =>
    detail.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewPDF = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-50">
      
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      <div className="md:top-[190px] z-40 bg-sky-300 text-black py-6 text-center shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-black">
          RNC Details & Documentation
        </h2>
      </div>

      <div className="pb-20">
        
        <div className="text-center py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-700 mb-3">
            RNC Details
          </h1>
          <div className="w-24 h-1 bg-sky-300 mx-auto mb-4"></div>
          
        </div>

        <div className="px-4 max-w-lg mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search RNC documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300 outline-none transition-all duration-200 text-slate-700"
            />
            <svg 
              className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" 
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
            {filteredDetails.length > 0 ? (
              filteredDetails.map((detail, index) => (
                <div
                  key={detail.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-slate-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      
                      <div className="flex-grow pr-4">
                        <div className="flex items-center mb-2">
                          <span className="bg-sky-300 text-black text-xs font-medium px-2 py-1 rounded-full mr-3">
                            RNC #{String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-700 mb-1 leading-tight">
                          {detail.title}
                        </h3>
                        <p className="text-sm text-slate-500">
                          RNC Document • PDF Format
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <button
                          onClick={() => handleViewPDF(detail.pdfPath)}
                          className="bg-sky-300 hover:bg-sky-400 text-black px-6 py-2.5 rounded-md font-medium transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 outline-none"
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
                <div className="bg-slate-50 rounded-lg p-8 max-w-md mx-auto">
                  <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-medium text-slate-600 mb-2">
                    No RNC Documents Found
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {searchTerm ? 'Try adjusting your search terms.' : 'No RNC documents available at the moment.'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RncDetails;
