// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { AiFillProfile, AiOutlineBook, AiOutlineTrophy } from 'react-icons/ai';
// import ReserchAreaData from "../Data/ReserchAreaData.json";
// import Footer from "@/components/Footer/Footer";
// import ExpertiseNavbar from "@/components/Expertise/ExpertiseNavbar";
// import SwagatadebProfile from "@/components/TeacherProfile/SwagatadebProfile";

// const Expertise = () => {
//   const [selectedArea] = useState(null);
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);


//   //navbar hide/unhide ke leye
//   useEffect(() => {
//     const controlNavbar = () => {
//       if (typeof window !== 'undefined') {
//         if (window.scrollY > lastScrollY && window.scrollY > 100) {
//           setIsNavbarVisible(false);
//         } else {
//           setIsNavbarVisible(true);
//         }
//         setLastScrollY(window.scrollY);
//       }
//     };

//     if (typeof window !== 'undefined') {
//       window.addEventListener('scroll', controlNavbar);
//       return () => {
//         window.removeEventListener('scroll', controlNavbar);
//       };
//     }
//   }, [lastScrollY]);

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         <div className={`transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
//           <ExpertiseNavbar />
//         </div>
        
//         {/* Hero Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-600 text-white py-16"
//         >
//           <div className="absolute inset-0 bg-black opacity-10"></div>
//           <div className="relative container mx-auto px-4 text-center">
//             <AiOutlineTrophy className="mx-auto mb-4 h-16 w-16 text-white opacity-90" />
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//               Research Expertise
//             </h1>
//           </div>
//         </motion.div>


//         {/* Main Content */}
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-col lg:flex-row gap-8">
            
//             {/* Sidebar*/}
//             <motion.div 
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="lg:w-1/4"
//             >
//               <div>
//                 <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
//                   <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-3">
//                         <AiOutlineBook className="h-6 w-6" />
//                         <h2 className="text-xl font-bold">Research Areas</h2>
//                       </div>
//                       <div className="lg:hidden">
//                         <span className="text-2xl">&#8226;&#8226;&#8226;</span>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="p-4 space-y-2">
//                     {ReserchAreaData.resarchArea.map((item, index) => (
//                       <motion.div
//                         key={index}
//                         whileHover={{ scale: 1.02 }}
//                         className={`p-3 rounded-lg transition-all duration-300 ${
//                           selectedArea === index 
//                             ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
//                             : 'bg-gray-50 hover:bg-blue-50 text-gray-700'
//                         }`}
//                       >
//                         <div className="flex items-center space-x-3">
//                           <AiFillProfile className="h-5 w-5" />
//                           <span className="font-medium text-sm">{item.RA}</span>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//             {/* Main Content Area */}
//             <motion.div 
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="lg:w-3/4"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                   <SwagatadebProfile />
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
        
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Expertise;


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillProfile, AiOutlineBook, AiOutlineTrophy, AiOutlineDown } from 'react-icons/ai';
import ReserchAreaData from "../Data/ReserchAreaData.json";
import Footer from "@/components/Footer/Footer";
import ExpertiseNavbar from "@/components/Expertise/ExpertiseNavbar";
import SwagatadebProfile from "@/components/TeacherProfile/SwagatadebProfile";

const Expertise = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Get research areas with fallback options
  const getResearchAreas = () => {
    return ReserchAreaData.researchArea || 
           ReserchAreaData.resarchArea || 
           ReserchAreaData.areas || 
           ReserchAreaData.data || 
           [];
  };

  const researchAreas = getResearchAreas();

  // Debug log to check data structure
  useEffect(() => {
    console.log('ReserchAreaData keys:', Object.keys(ReserchAreaData));
    console.log('Research areas found:', researchAreas.length);
    console.log('First research area:', researchAreas[0]);
  }, [researchAreas]);

  // Navbar hide/unhide functionality
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

  const handleAreaSelect = (index) => {
    setSelectedArea(index);
    // Auto-close sidebar on mobile after selection
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Fixed Navbar */}
        <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <ExpertiseNavbar />
        </div>
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-600 text-white py-12 md:py-16 mt-16 md:mt-20"
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AiOutlineTrophy className="mx-auto mb-4 h-12 w-12 md:h-16 md:w-16 text-white opacity-90" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
              Research Expertise
            </h1>
            <p className="text-sm md:text-lg text-blue-100 max-w-2xl mx-auto">
              Exploring cutting-edge research areas and academic excellence
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Mobile Research Areas Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg flex items-center justify-between hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <AiOutlineBook className="h-5 w-5" />
                  <span className="font-semibold">Research Areas ({researchAreas.length})</span>
                </div>
                <AiOutlineDown className={`h-5 w-5 transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Sidebar */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/4 w-full"
            >
              <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                  {/* Desktop Header */}
                  <div className="hidden lg:block bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 lg:p-6">
                    <div className="flex items-center space-x-3">
                      <AiOutlineBook className="h-5 w-5 lg:h-6 lg:w-6" />
                      <h2 className="text-lg lg:text-xl font-bold">Research Areas</h2>
                    </div>
                    <p className="text-blue-100 text-sm mt-2">{researchAreas.length} areas available</p>
                  </div>
                  
                  {/* Research Areas List */}
                  <div className="p-3 lg:p-4 space-y-2 max-h-64 md:max-h-80 lg:max-h-[600px] overflow-y-auto">
                    {researchAreas.length > 0 ? (
                      researchAreas.map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAreaSelect(index)}
                          className={`p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                            selectedArea === index 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                              : 'bg-gray-50 hover:bg-blue-50 text-gray-700 hover:shadow-md'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <AiFillProfile className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                            <span className="font-medium text-xs sm:text-sm leading-relaxed">
                              {item.RA || item.researchArea || item.title || item.name || 'Research Area'}
                            </span>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        <AiOutlineBook className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p className="text-sm font-medium">No research areas available</p>
                        <p className="text-xs text-gray-400 mt-2">
                          Available keys: {Object.keys(ReserchAreaData).join(', ')}
                        </p>
                        <button 
                          onClick={() => console.log('Full data:', ReserchAreaData)}
                          className="mt-2 text-xs text-blue-500 underline"
                        >
                          Log data to console
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-3/4 w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Content Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 border-b border-gray-200">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {selectedArea !== null && researchAreas[selectedArea] 
                        ? `Research Area: ${researchAreas[selectedArea].RA || researchAreas[selectedArea].researchArea || researchAreas[selectedArea].title || researchAreas[selectedArea].name}`
                        : 'Faculty Profile & Research Details'
                      }
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedArea !== null 
                        ? 'Detailed information about the selected research area'
                        : 'Select a research area from the sidebar to view details'
                      }
                    </p>
                  </div>
                  
                  {/* Profile Content */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <SwagatadebProfile />
                  </div>
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