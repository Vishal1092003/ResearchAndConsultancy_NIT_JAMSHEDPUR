import DynamicTable from '@/components/dynamicTable/dynamicTable';
import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
import workshopData from '@/Data/WorkshopData.json';

const Workshops = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      <div className="md:top-[190px] z-40 bg-blue-600 text-white py-4 text-center text-xl md:text-2xl font-bold shadow-md">
        Workshops / Conferences / STC / STTP / FDP 
      </div>

      <div className="pb-20">
        <div className="px-4 w-full mx-auto flex flex-col gap-6">
          <DynamicTable data={workshopData.Sheet1} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

import Footer from "@/components/Footer/Footer";
export default Workshops;
