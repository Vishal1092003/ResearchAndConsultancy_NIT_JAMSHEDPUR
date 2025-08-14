import Navbar from "../components/Navbar/Navbar";
import Tab from "../components/Tab/Tab";
import DynamicTable from "../components/dynamicTable/dynamicTable";
import SponseredResearchData from "../Data/SponseredResearchData.json";

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
          Our Consultancy with Academia
        </h1>
      </div>

      <div className="w-full py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-blue-600 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-700 mb-2">
                {SponseredResearchData.Sheet1.length}
              </div>
              <div className="text-gray-600 font-medium">Active Projects</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-orange-600 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-700 mb-2">
                {
                  new Set(
                    SponseredResearchData.Sheet1.map(
                      (item) => item["Sponsoring Agency"]
                    )
                  ).size
                }
              </div>
              <div className="text-gray-600 font-medium">
                Partner Institutions
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-gray-700">
              Our Consultancy Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="mt-8">
            <DynamicTable data={SponseredResearchData.Sheet1} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

import Footer from "@/components/Footer/Footer";
export default Consultancy;
