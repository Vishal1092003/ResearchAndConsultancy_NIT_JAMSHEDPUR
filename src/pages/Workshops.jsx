import React, { useEffect, useState } from 'react';
import workshopData from '../data/WorkshopData.json';
import { CalendarDays, Users, Award } from 'lucide-react';

const Workshops = () => {
  const [visibleItems, setVisibleItems] = useState(17);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        setVisibleItems(17);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-orange-50 pb-20">
        <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-5 shadow-md text-center text-2xl font-bold">
          Workshops / Conferences / STC / STTP / FDP - 2025
        </header>

        {/* Title */}
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-orange-500 bg-clip-text text-transparent mb-4">
            Upcoming Events & Workshops
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">An overview of academic and technical programs</p>
        </div>

        {/* Cards */}
        <div className="px-4 max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          {workshopData.Sheet1.slice(0, visibleItems).map((item, index) => {
            return (
              <div
                key={index}
                className={`relative bg-white border-l-4 border-blue-400 hover:border-orange-400 rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-1 group`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
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
            );
          })}
        </div>

        {/* Floating Icons */}
        <div className="hidden md:block fixed bottom-10 left-10 opacity-20 animate-bounce-slow">
          <Award className="h-10 w-10 text-orange-500" />
        </div>
        <div className="hidden md:block fixed bottom-10 right-10 opacity-20 animate-bounce-slower">
          <Users className="h-10 w-10 text-blue-500" />
        </div>
      </div>
    </>
  );
};

export default Workshops;
