import { useState, useEffect } from 'react';
import { Building2, Calendar, FileText, Users, Award } from 'lucide-react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CollaborationData from "../Data/CollaborationData.json";

const Collaboration = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleItems < CollaborationData.sheet1.length) {
        setVisibleItems(prev => prev + 1);
      }
    }, 200);

    return () => clearInterval(timer);
  }, [visibleItems]);

  // Navbar hide/show on scroll
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

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('-');
    const date = new Date(`${year}-${month}-${day}`);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
          }`}>
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 text-white mt-16">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
            <div className="animate-fade-in-down">
              <Building2 className="mx-auto mb-4 mt-20 sm:mb-6 h-12 w-12 sm:h-16 sm:w-16 text-white opacity-90" />
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Collaborations with Academia
              </h1>
            </div>

            {/* Floating Elements Mobile me hidden hai */}
            <div className="hidden sm:block absolute bottom-20 left-10">
              <Award className="h-8 w-8 text-white opacity-30 animate-float" />
            </div>
            <div className="hidden sm:block absolute bottom-20 right-10">
              <Users className="h-10 w-10 text-white opacity-30 animate-float-delayed" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-8 mb-12 sm:mb-16">
            <div className="w-full sm:flex-1 sm:min-w-[220px] sm:max-w-xs mx-auto text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <FileText className="mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{CollaborationData.sheet1.length}</div>
              <div className="text-gray-600 font-medium">Active MoUs</div>
            </div>
            <div className="w-full sm:flex-1 sm:min-w-[220px] sm:max-w-xs mx-auto text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
              <Building2 className="mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 text-orange-600" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{CollaborationData.sheet1.length}</div>
              <div className="text-gray-600 font-medium">Partner Institutions</div>
            </div>
          </div>

          {/* Collaborations List */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Partnership Network</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {CollaborationData.sheet1.map((data, index) => {
                const isVisible = index < visibleItems;
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 ${isVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0'
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className={`relative bg-white rounded-2xl shadow-lg border-l-4 border-gradient-to-b from-blue-500 to-orange-500 overflow-hidden group hover:shadow-2xl transition-all duration-300 ${isHovered ? 'sm:scale-105 sm:-translate-y-2' : ''
                      }`}>

                      {/* Background Pattern - Reduced on mobile */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-16 sm:translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-orange-600 to-blue-600 rounded-full translate-y-6 -translate-x-6 sm:translate-y-12 sm:-translate-x-12"></div>
                      </div>

                      <div className="relative p-4 sm:p-6 md:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                          <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1">
                            {/* Serial Number */}
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg">
                                {index + 1}
                              </div>
                            </div>

                            {/* Institution Name */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300 break-words">
                                {data.MoU_Institute}
                              </h3>
                              <div className="flex items-center text-gray-600">
                                <Building2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                                <span className="text-xs sm:text-sm font-medium">Academic Institution</span>
                              </div>
                            </div>
                          </div>

                          {/* Date Section */}
                          <div className="flex items-center justify-between sm:justify-end space-x-3">
                            <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-3 sm:p-4 border border-blue-100 flex-1 sm:flex-none">
                              <div className="flex items-center justify-center mb-1 sm:mb-2">
                                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2" />
                                <span className="text-xs sm:text-sm font-medium text-gray-700">MoU Date</span>
                              </div>
                              <div className="text-sm sm:text-lg font-bold text-gray-800 text-center">
                                {formatDate(data.Date_of_MoU)}
                              </div>
                            </div>

                          </div>
                        </div>

                        {/* Active participation badge  */}
                        <div className="mt-4 flex justify-end">
                          <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            Active Partnership
                          </span>
                        </div>

                        {/* Hover Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/5 to-orange-600/5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                          }`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Collaboration;