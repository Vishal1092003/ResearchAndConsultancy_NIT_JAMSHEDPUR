import { useState } from "react";
import ReserchAreaData from "../Data/ReserchAreaData.json";
import Physics from "../Data/researchExpertiseData/physics.json";
import Mathematics from "../Data/researchExpertiseData/mathematics.json";
import Chemistry from "../Data/researchExpertiseData/chemistry.json";
import Mechanical from "../Data/researchExpertiseData/mechanicalEngineering.json";
import Metallurgy from "../Data/researchExpertiseData/metallurgy.json";
import Ece from "../Data/researchExpertiseData/ece.json";
import Civil from "../Data/researchExpertiseData/civilEngineering.json";
import Cse from "../Data/researchExpertiseData/computerScience.json";
import Production from "../Data/researchExpertiseData/production.json";
import Electrical from "../Data/researchExpertiseData/electricalEngineering.json";
import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Tab from "../components/Tab/Tab";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const researchDataMap = {
  "Physics": Physics.physics,
  "Mathematics": Mathematics.mathematics,
  "Chemistry": Chemistry.chemistry,
  "Mechanical Engineering": Mechanical.mechanical,
  "Metallurgical and Materials Engineering": Metallurgy.metallurgy,
  "Electronics and Communication Engineering": Ece.ece,
  "Civil Engineering": Civil.civil,
  "Computer Science and Engineering": Cse.cse,
  "Production and Industrial Engineering": Production.production,
  "Electrical Engineering": Electrical.electrical,
};

const Expertise = () => {
  const [selectedArea, setSelectedArea] = useState(0);
  const researchAreas = ReserchAreaData.resarchArea || [];

  const currentAreaName = researchAreas[selectedArea]?.RA || "";
  const currentAreaData = researchDataMap[currentAreaName] || [];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="overflow-x-hidden">
          <Navbar />
        </div>
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <Tab />
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">
              Research Expertise
            </h1>
            <hr className="w-20 mx-auto border-t-2 border-blue-600" />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Research Areas
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {researchAreas.map((area, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedArea(index)}
                  className={`p-4 rounded-lg shadow-md transition-all duration-300 ${
                    selectedArea === index
                      ? "bg-blue-600 text-white transform scale-105"
                      : "bg-white hover:bg-blue-50 hover:shadow-lg text-gray-700"
                  }`}
                >
                  <span className="font-medium">{area.RA}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              {currentAreaName || "Research Area"}
            </h2>

            {currentAreaData.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Designation
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Area of Research
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentAreaData.map((expert, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                          {expert.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {expert.designation}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {expert.area_of_research || expert.area_of_research}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center">
                              <FaEnvelope className="mr-2 text-blue-600" />
                              <a
                                href={`mailto:${expert.email}`}
                                className="text-blue-600 hover:underline"
                              >
                                {expert.email}
                              </a>
                            </div>
                            {expert.mobile && (
                              <div className="flex items-center">
                                <FaPhone className="mr-2 text-green-600" />
                                <span>{expert.mobile}</span>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  No research expertise data available for this area.
                </p>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Expertise;
