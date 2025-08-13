import DynamicTable from '@/components/dynamicTable/dynamicTable';
import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
import workshopData from '@/Data/WorkshopData.json';

const Workshops = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      
      {/* ✅ Fixed Navbar */}
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      {/* ✅ Sticky Workshop Header at 190px from top */}
      <div className="md:top-[190px] z-40 bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 text-center text-xl md:text-2xl font-bold shadow-md">
        Workshops / Conferences / STC / STTP / FDP - 2025
      </div>

      {/* ✅ Adjusted padding-top to avoid overlap (190px + header height ~64px = ~254px) */}
      <div className="pb-20">
        
        {/* Title Section */}
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-orange-500 bg-clip-text text-transparent mb-4">
            Workshops & Conferences held previously
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            An overview of Workshops and Conferences
          </p>
        </div>

        {/* Cards Section */}
        <div className="px-4 w-full mx-auto flex flex-col gap-6">
          <DynamicTable data={workshopData.Sheet1} />
        </div>
        

      </div>
    </div>
  );
};

export default Workshops;
