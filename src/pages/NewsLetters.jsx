import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
import React from 'react';
import { Download } from 'lucide-react';
import Footer from '@/components/Footer/Footer';

const NewsLetters = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navs */}
      <div className="overflow-x-hidden">
        <Navbar />
      </div>

      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      {/* Newsletter Grid */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-8 justify-items-center">

          {/* Newsletter 2026 */}
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-blue-600 w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[400px]">
              <img
                src="/newsletter_2026_cover.png"
                alt="newsletter 2026 Cover"
                width={1200}
                height={1600}
                className="w-full h-auto"
              />
            </div>

            <a
              href="/Newsletter-2026.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow hover:bg-blue-700 transition text-sm sm:text-base"
            >
              <Download size={16} className="sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">
                Download Newsletter-2026 (PDF)
              </span>
            </a>
          </div>

          {/* Newsletter 2025 */}
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-blue-600 w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[400px]">
              <img
                src="/newsletter_2025_cover.png"
                alt="newsletter 2025 Cover"
                width={1200}
                height={1600}
                className="w-full h-auto"
              />
            </div>

            <a
              href="/Newsletter-2025.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow hover:bg-blue-700 transition text-sm sm:text-base"
            >
              <Download size={16} className="sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap">
                Download Newsletter-2025 (PDF)
              </span>
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsLetters;
