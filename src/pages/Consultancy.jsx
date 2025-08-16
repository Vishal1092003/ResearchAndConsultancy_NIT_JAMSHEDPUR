import Navbar from "../components/Navbar/Navbar";
import Tab from "../components/Tab/Tab";
import DynamicTable from "../components/dynamicTable/dynamicTable";
import ConsultancyData from "../Data/Consultancy.json";

const Consultancy = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      <div className="w-full py-12 bg-blue-600 flex flex-col justify-center items-center relative">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
          Consultancy Projects
        </h1>
      </div>

      <div className="w-full py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          <div className="mt-8">
            <DynamicTable data={ConsultancyData.sheet} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

import Footer from "@/components/Footer/Footer";
export default Consultancy;
