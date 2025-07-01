import Navbar from '@/components/Navbar/Navbar';
import workshopData from '../data/WorkshopData.json';
import { CalendarDays, Users, Award } from 'lucide-react';

const Workshops = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      
      {/* ✅ Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* ✅ Sticky Workshop Header at 190px from top */}
      <div className="sticky top-[120px] md:top-[190px] z-40 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 text-center text-xl md:text-2xl font-bold shadow-md">
        Workshops / Conferences / STC / STTP / FDP - 2025
      </div>

      {/* ✅ Adjusted padding-top to avoid overlap (190px + header height ~64px = ~254px) */}
      <div className="pt-[254px] pb-20">
        
        {/* Title Section */}
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-orange-500 bg-clip-text text-transparent mb-4">
            Upcoming Workshops & Conferences
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            An overview of Workshops and Conferences
          </p>
        </div>

        {/* Cards Section */}
        <div className="px-4 max-w-3xl mx-auto flex flex-col gap-6">
          {workshopData.Sheet1.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border-l-4 border-blue-400 hover:border-orange-400 rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-1 group"
            >
              {/* Background Decorations */}
              <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute w-20 h-20 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full -top-10 -right-10"></div>
                <div className="absolute w-16 h-16 bg-gradient-to-tr from-orange-400 to-blue-400 rounded-full -bottom-10 -left-10"></div>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold">{item.department}</span>
                  </div>
                  <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full border border-green-200">
                    Active
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{item.subject}</h2>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Coordinators:</strong> {item.coordinators}
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <CalendarDays className="h-4 w-4 text-orange-600 mr-2" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Icons */}
        <div className="hidden md:block fixed bottom-10 left-10 opacity-20 animate-bounce-slow">
          <Award className="h-10 w-10 text-orange-500" />
        </div>
        <div className="hidden md:block fixed bottom-10 right-10 opacity-20 animate-bounce-slower">
          <Users className="h-10 w-10 text-blue-500" />
        </div>

      </div>
    </div>
  );
};

export default Workshops;
