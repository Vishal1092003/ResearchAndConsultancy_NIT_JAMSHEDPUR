import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
const FundOpportunities = () => {
  const sectionsRef = useRef([]);
  const [showVideo, setShowVideo] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current && showVideo) {
      videoRef.current.muted = false; // Start unmuted as requested
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log("Auto-play was prevented:", error);
          // If autoplay fails, try with muted first
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          });
        });
      }
    }
  }, [showVideo]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen w-full" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif"
    }}>
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>
      {/* Full width container */}
      <div className="w-full bg-white shadow-2xl overflow-hidden" style={{
        boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
      }}>
        {/* Header - Full Width */}
        <div className="relative text-center text-white py-8 px-4 overflow-hidden w-full" style={{
          background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)'
        }}>
          <div className="absolute inset-0 opacity-10" style={{
            background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"1\" fill=\"rgba(255,255,255,0.1)\"/><circle cx=\"75\" cy=\"75\" r=\"1.5\" fill=\"rgba(255,255,255,0.08)\"/><circle cx=\"50\" cy=\"10\" r=\"0.5\" fill=\"rgba(255,255,255,0.12)\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>') repeat",
            animation: 'float 20s linear infinite'
          }}>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 relative z-10">Research Funding Opportunities</h1>
          <p className="text-xl opacity-90 relative z-10">Comprehensive Guide for Funding at NIT JAMAHEDPUR</p>
        </div>

        {/* Video Section - Full Width */}
        <div className="py-12 px-8 text-center w-full" style={{
          background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)'
        }}>
          <div className={`relative mx-auto rounded-3xl overflow-hidden bg-black transition-all duration-500 ${
            isMinimized 
              ? 'w-80 h-48 fixed bottom-4 right-4 z-50 shadow-2xl' 
              : 'w-full max-w-6xl aspect-video'
          }`} style={{
            boxShadow: '0 25px 60px rgba(0,0,0,0.15)'
          }}>
            {showVideo ? (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="./FacultyOpportunity.mp4"
                  loop
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onVolumeChange={(e) => setIsMuted(e.target.muted)}
                />
                
                {/* Video Controls Overlay */}
                <div className={`absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black bg-opacity-50 rounded-lg ${
                  isMinimized ? 'p-2' : 'p-3'
                }`}>
                  <div className={`flex ${isMinimized ? 'space-x-2' : 'space-x-3'}`}>
                    {/* Minimize/Maximize Button */}
                    <button
                      onClick={toggleMinimize}
                      className={`bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110 ${
                        isMinimized ? 'w-8 h-8' : 'w-10 h-10'
                      }`}
                      title={isMinimized ? "Maximize" : "Minimize"}
                    >
                      {isMinimized ? (
                        // Maximize icon
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      ) : (
                        // Minimize icon
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      )}
                    </button>

                    {!isMinimized && (
                      <>
                        {/* Play/Pause Button - Only show when not minimized */}
                        <button
                          onClick={togglePlayPause}
                          className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110"
                        >
                          {isPlaying ? (
                            // Pause icon
                            <div className="flex space-x-1">
                              <div className="w-1.5 h-4 bg-gray-800"></div>
                              <div className="w-1.5 h-4 bg-gray-800"></div>
                            </div>
                          ) : (
                            // Play icon
                            <div className="w-0 h-0 ml-1" style={{
                              borderLeft: '12px solid #2d3748',
                              borderTop: '8px solid transparent',
                              borderBottom: '8px solid transparent'
                            }}></div>
                          )}
                        </button>

                        {/* Mute/Unmute Button */}
                        <button
                          onClick={toggleMute}
                          className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110"
                        >
                          {isMuted ? (
                            // Muted icon
                            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.814L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.797-3.814a1 1 0 011.617.076zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                              <path d="M13.293 7.293a1 1 0 011.414 0L16 8.586l1.293-1.293a1 1 0 111.414 1.414L17.414 10l1.293 1.293a1 1 0 01-1.414 1.414L16 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L14.586 10l-1.293-1.293a1 1 0 010-1.414z" />
                            </svg>
                          ) : (
                            // Unmuted icon
                            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.814L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.797-3.814a1 1 0 011.617.076zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      </>
                    )}

                    {/* Close Button - Only show when minimized */}
                    {isMinimized && (
                      <button
                        onClick={() => setShowVideo(false)}
                        className="w-8 h-8 bg-red-500 bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-red-600 hover:scale-110"
                        title="Close Video"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  {!isMinimized && (
                    <div className="text-white text-sm">
                      Research Funding Overview
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // Placeholder when video is hidden
              <div className="w-full h-full flex items-center justify-center relative overflow-hidden" style={{
                background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)'
              }}>
                <div className="absolute w-full h-full" style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                  animation: 'shimmer 3s infinite',
                  transform: 'translateX(-100%) translateY(-100%) rotate(45deg)'
                }}>
                </div>
                <div 
                  className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110 relative z-10"
                  onClick={() => setShowVideo(true)}
                >
                  <div className="w-0 h-0 ml-1" style={{
                    borderLeft: '20px solid #2d3748',
                    borderTop: '12px solid transparent',
                    borderBottom: '12px solid transparent'
                  }}></div>
                </div>
              </div>
            )}
          </div>
          {!isMinimized && (
            <>
              <h3 className="mt-8 text-2xl font-semibold text-gray-800">Research Funding: A Complete Overview</h3>
              <p className="mt-2 text-gray-600 text-lg">Learn about various funding opportunities and application processes for research projects</p>
            </>
          )}
        </div>

        {/* Content - Full Width */}
        <div className="py-12 px-8 w-full">
          {/* Introduction */}
          <div 
            ref={addToRefs}
            className="mb-12 opacity-0 transform translate-y-8 transition-all duration-800"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="p-8 rounded-2xl border-l-4" style={{
              background: 'linear-gradient(135deg, #e6fffa 0%, #f0fff4 100%)',
              borderLeftColor: '#38b2ac'
            }}>
              <p className="text-lg text-gray-800 mb-4">
                <strong>Welcome to the Research Funding Portal!</strong> Regular faculty of NIT Jamshedpur can approach or submit research proposals to any of the funding agencies listed below in their respective formats.
              </p>
              <p className="text-lg text-gray-800">
                Some funding agencies invite proposals through e-tender systems (e.g., NHPC, NTPC) which involve competitive selection processes. Faculty can also submit proposals for collaborative research with industries, reputed universities (with higher NIRF rank or good QS ranking), or research institutions.
              </p>
            </div>
          </div>

          {/* Major Funding Agencies */}
          <div 
            ref={addToRefs}
            className="mb-12 opacity-0 transform translate-y-8 transition-all duration-800"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-4 border-indigo-500 inline-block">
              Major Funding Agencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Government Agencies",
                  items: [
                    "Department of Science and Technology (DST)",
                    "DST- Science and Engineering Research Board",
                    "University Grants Commission (UGC)",
                    "All India Council for Technical Education (AICTE)",
                    "The Council of Scientific & Industrial Research (CSIR)",
                    "Defence Research and Development Organization (DRDO)"
                  ]
                },
                {
                  title: "Specialized Agencies",
                  items: [
                    "Board of Research in Nuclear Sciences (BRNS)",
                    "Department of Biotechnology",
                    "Ministry of Coal & Mines",
                    "Indian Council of Medical Research",
                    "Ministry of Earth Sciences",
                    "Indian Space Research Organisation (ISRO)"
                  ]
                },
                {
                  title: "Technology & Innovation",
                  items: [
                    "Ministry of Electronics and Information Technology (MEIT)",
                    "Ministry of New and Renewable Energy (MNRE)",
                    "Central Power Research Institute (CPRI)",
                    "Indian National Academy of Engineering (INAE)",
                    "Jharkhand Council On Science, Technology and Innovation (JCSTI)"
                  ]
                }
              ].map((agency, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500"
                  style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{agency.title}</h3>
                  <ul className="space-y-2">
                    {agency.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="p-4 rounded-lg border-l-4 border-indigo-500 transition-all duration-300 hover:text-white hover:translate-x-1 cursor-pointer"
                        style={{
                          background: 'linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)';
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Startup Grants */}
          <div 
            ref={addToRefs}
            className="mb-12 opacity-0 transform translate-y-8 transition-all duration-800"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-medium mb-4" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
              STARTUP & ENTREPRENEURSHIP
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-4 border-indigo-500 inline-block">
              Startup Grants & Innovation Programs 
            </h2>
            <div className="mt-4 bg-white rounded-xl overflow-hidden w-full" style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}>
              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}>
                      <th className="text-left p-4 text-white font-semibold">Program</th>
                      <th className="text-left p-4 text-white font-semibold">Ministry/Agency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        program: "Aspire Scheme for Innovation, Entrepreneurship and Agro-Industry",
                        ministry: "Ministry of MSME, Govt. of India"
                      },
                      {
                        program: "Promoting Innovations in Individuals, Startups And MSMEs (PRISM)",
                        ministry: "Council of Scientific & Industrial Research (CSIR)"
                      },
                      {
                        program: "Industry Innovation Programme On Medical Electronics (IIPME)",
                        ministry: "Department of Biotechnology (DBT)"
                      },
                      {
                        program: "BIRAC AcE Fund - Accelerating Entrepreneurs",
                        ministry: "Department of Biotechnology (DBT)"
                      },
                      {
                        program: "Promoting Academic Research Conversion to Enterprise (PACE)",
                        ministry: "Department of Biotechnology (DBT)"
                      }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-300">
                        <td className="p-4 border-b border-gray-200">{row.program}</td>
                        <td className="p-4 border-b border-gray-200">{row.ministry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>


          {/* International Programs */}
          <div 
            ref={addToRefs}
            className="mb-12 opacity-0 transform translate-y-8 transition-all duration-800"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-medium mb-4" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
              INTERNATIONAL COLLABORATION
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-4 border-indigo-500 inline-block">
              International Funding Opportunities
            </h2>
            <div className="mt-4 bg-white rounded-xl overflow-hidden w-full" style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}>
              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}>
                      <th className="text-left p-4 text-white font-semibold">Program</th>
                      <th className="text-left p-4 text-white font-semibold">Funding Agency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        program: "United States-India Science & Technology Endowment Fund (USISTEF)",
                        agency: "Indo-U.S. Science and Technology Forum (IUSSTF)"
                      },
                      {
                        program: "BIRAC-CEFIPRA Partnership",
                        agency: "BIRAC & Indo French Centre for Advanced Research (CEFIPRA)"
                      },
                      {
                        program: "Indo-U.S. Fellowship for Women in STEMM",
                        agency: "DST, Govt. of India & IUSSTF"
                      },
                      {
                        program: "Welcome Trust-DBT India Alliance",
                        agency: "Welcome Trust, UK & Department of Biotechnology (DBT)"
                      },
                      {
                        program: "Ramanujan Fellowship",
                        agency: "Science and Engineering Research Board (SERB), DST"
                      }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-300">
                        <td className="p-4 border-b border-gray-200">{row.program}</td>
                        <td className="p-4 border-b border-gray-200">{row.agency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Women in Science */}
          <div 
            ref={addToRefs}
            className="mb-12 opacity-0 transform translate-y-8 transition-all duration-800"
            style={{ animationDelay: '0.6s' }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-medium mb-4" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
              WOMEN IN SCIENCE
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-4 border-indigo-500 inline-block">
              Special Programs for Women Scientists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "Career Development",
                  items: [
                    "Biotechnology Career Advancement and Re-orientation Programme (Bio-CARe)",
                    "Knowledge Involvement in Research Advancement through Nurturing (KIRAN)",
                    "Science and Technology for Women"
                  ]
                },
                {
                  title: "Research Support",
                  items: [
                    "Biotechnology based Programme for Women",
                    "Indo-U.S. Fellowship for Women in STEMM"
                  ]
                }
              ].map((program, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500"
                  style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{program.title}</h3>
                  <ul className="space-y-2">
                    {program.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="p-4 rounded-lg border-l-4 border-indigo-500 transition-all duration-300 hover:text-white hover:translate-x-1 cursor-pointer"
                        style={{
                          background: 'linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)';
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default FundOpportunities;