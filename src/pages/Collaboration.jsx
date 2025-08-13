import { useState, useEffect } from "react";
import { Building2, FileText } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CollaborationData from "../Data/CollaborationData.json";
import Tab from "@/components/Tab/Tab";
import DynamicTable from "@/components/dynamicTable/dynamicTable";
import collaborationImg from "../assets/Collaboration.jpg"; // Image import

const Collaboration = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleItems < CollaborationData.sheet1.length) {
        setVisibleItems((prev) => prev + 1);
      }
    }, 200);
    return () => clearInterval(timer);
  }, [visibleItems]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsNavbarVisible(false);
        } else {
          setIsNavbarVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
      `}</style>

      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="overflow-x-hidden">
          <Navbar />
        </div>
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <Tab />
        </div>

        <div className="w-full h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
          <h1 className="font-bold text-2xl">Collaboration</h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-6 mb-8 px-4">
          <img
            src={collaborationImg}
            alt="Collaboration"
            className="w-full max-w-5xl rounded-lg shadow-lg object-contain"
            style={{ height: "auto" }}
          />
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-8 mb-12 sm:mb-16">
            <div className="w-full sm:flex-1 sm:min-w-[220px] sm:max-w-xs mx-auto text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <FileText className="mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                42+
              </div>
              <div className="text-gray-600 font-medium">Active MoUs</div>
            </div>
            <div className="w-full sm:flex-1 sm:min-w-[220px] sm:max-w-xs mx-auto text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <Building2 className="mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 text-orange-600" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                {CollaborationData.sheet1.length}
              </div>
              <div className="text-gray-600 font-medium">Partner Institutions</div>
            </div>
          </div>

          {/* Collaborations List */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  Partnership Network
                </span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mx-auto rounded-full"></div>
            </div>
            <div>
              <DynamicTable data={CollaborationData.sheet1} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Collaboration;
