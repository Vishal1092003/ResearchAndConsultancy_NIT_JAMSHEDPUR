import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillProfile, AiOutlineBook, AiOutlineTrophy } from 'react-icons/ai';
import ReserchAreaData from "../Data/ReserchAreaData.json";
import Footer from "@/components/Footer/Footer";
import ExpertiseNavbar from "@/components/Expertise/ExpertiseNavbar";
import SwagatadebProfile from "@/components/TeacherProfile/SwagatadebProfile";

const Expertise = () => {
  const [selectedArea] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  //navbar hide/unhide ke leye
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsNavbarVisible(false);
        } else {
          setIsNavbarVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className={`transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <ExpertiseNavbar />
        </div>
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-600 text-white py-16"
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container mx-auto px-4 text-center">
            <AiOutlineTrophy className="mx-auto mb-4 h-16 w-16 text-white opacity-90" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Research Expertise
            </h1>
          </div>
        </motion.div>


        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar*/}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/4"
            >
              <div>
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <AiOutlineBook className="h-6 w-6" />
                        <h2 className="text-xl font-bold">Research Areas</h2>
                      </div>
                      <div className="lg:hidden">
                        <span className="text-2xl">&#8226;&#8226;&#8226;</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-2">
                    {ReserchAreaData.resarchArea.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className={`p-3 rounded-lg transition-all duration-300 ${
                          selectedArea === index 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                            : 'bg-gray-50 hover:bg-blue-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <AiFillProfile className="h-5 w-5" />
                          <span className="font-medium text-sm">{item.RA}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Main Content Area */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-3/4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <SwagatadebProfile />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Expertise;