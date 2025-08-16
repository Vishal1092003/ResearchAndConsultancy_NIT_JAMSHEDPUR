import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
import {  Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, X, Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import Footer from '@/components/Footer/Footer';
const SectionHeader = ({ title, subtitle }) => (
  <div className="w-full px-2 sm:px-4">
    <div className="bg-blue-600 text-white rounded-xl shadow-lg px-4 sm:px-6 py-4 sm:py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">{title}</h2>
      {subtitle && <p className="opacity-90 text-xs sm:text-sm lg:text-base">{subtitle}</p>}
    </div>
  </div>
);

const FundCard = ({ title, items, color = "blue" }) => (
  <div className="rounded-xl border bg-white shadow-sm p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <h3 className={`text-lg sm:text-xl font-bold text-${color}-700 mb-4`}>{title}</h3>
    <div className="space-y-2">
      {items.map((item, index) => (
        <div 
          key={index}
          className={`p-3 sm:p-4 rounded-lg border-l-4 border-${color}-500 transition-all duration-300 hover:text-white hover:translate-x-1 cursor-pointer text-sm sm:text-base`}
          style={{ background: 'linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)' }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%)';
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const TableSection = ({ title, data, columns }) => (
  <div className="space-y-4 sm:space-y-6">
    <div className="mt-4 bg-white rounded-xl overflow-hidden w-full shadow-lg border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className="bg-blue-600">
              {columns.map((col, index) => (
                <th key={index} className="text-left p-3 sm:p-4 text-white font-semibold text-sm sm:text-base">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-300">
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-3 sm:p-4 border-b border-gray-200 text-sm sm:text-base">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);


const FundOpportunities = () => {
  const sectionsRef = useRef([]);
  const [showVideo, setShowVideo] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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
    if (videoRef.current && showVideo) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log("Auto-play was prevented:", error);
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          });
        });
      }

      // Add event listeners for video progress
      const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
      };

      const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
      };

      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
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

  const handleProgressClick = (e) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const progressWidth = rect.width;
      const newTime = (clickX / progressWidth) * duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const handleVideoClick = () => {
    togglePlayPause();
  };

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const governmentAgencies = [
    "Department of Science and Technology (DST)",
    "DST- Science and Engineering Research Board",
    "University Grants Commission (UGC)",
    "All India Council for Technical Education (AICTE)",
    "The Council of Scientific & Industrial Research (CSIR)",
    "Defence Research and Development Organization (DRDO)"
  ];

  const specializedAgencies = [
    "Board of Research in Nuclear Sciences (BRNS)",
    "Department of Biotechnology",
    "Ministry of Coal & Mines",
    "Indian Council of Medical Research",
    "Ministry of Earth Sciences",
    "Indian Space Research Organisation (ISRO)"
  ];

  const technologyAgencies = [
    "Ministry of Electronics and Information Technology (MEIT)",
    "Ministry of New and Renewable Energy (MNRE)",
    "Central Power Research Institute (CPRI)",
    "Indian National Academy of Engineering (INAE)",
    "Jharkhand Council On Science, Technology and Innovation (JCSTI)"
  ];

  const startupGrants = [
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
  ];

  const internationalPrograms = [
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
  ];

  const womenPrograms = [
    "Biotechnology Career Advancement and Re-orientation Programme (Bio-CARe)",
    "Knowledge Involvement in Research Advancement through Nurturing (KIRAN)",
    "Science and Technology for Women",
    "Biotechnology based Programme for Women",
    "Indo-U.S. Fellowship for Women in STEMM"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      {/* Video Section */}
      <div className="w-full mt-4 sm:mt-6 mb-6 sm:mb-8 px-2 sm:px-4">
        <div className={`relative mx-auto rounded-xl overflow-hidden bg-black transition-all duration-500 shadow-xl border-4 border-blue-600 ${
          isMinimized 
            ? 'w-80 h-48 fixed bottom-4 right-4 z-50' 
            : 'w-full max-w-6xl aspect-video'
        }`}>
          {showVideo ? (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                src="./FacultyOpportunity.mp4"
                loop
                playsInline
                onClick={handleVideoClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onVolumeChange={(e) => setIsMuted(e.target.muted)}
              />
              
              {/* Video Controls */}
              <div className={`absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 rounded-lg ${
                isMinimized ? 'p-2' : 'p-3'
              }`}>
                {/* Progress Bar */}
                {!isMinimized && duration > 0 && (
                  <div className="mb-3">
                    <div 
                      className="w-full bg-gray-600 rounded-full h-1 cursor-pointer hover:h-2 transition-all duration-200"
                      onClick={handleProgressClick}
                    >
                      <div 
                        className="bg-blue-500 h-full rounded-full transition-all duration-200"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-white mt-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div className={`flex ${isMinimized ? 'space-x-2' : 'space-x-3'}`}>
                    <button
                      onClick={toggleMinimize}
                      className={`bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110 ${
                        isMinimized ? 'w-8 h-8' : 'w-10 h-10'
                      }`}
                      title={isMinimized ? "Maximize" : "Minimize"}
                    >
                      {isMinimized ? (
                        <Maximize2 className="w-4 h-4 text-gray-800" />
                      ) : (
                        <Minimize2 className="w-5 h-5 text-gray-800" />
                      )}
                    </button>

                    {!isMinimized && (
                      <>
                        <button
                          onClick={togglePlayPause}
                          className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110"
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5 text-gray-800" />
                          ) : (
                            <Play className="w-5 h-5 text-gray-800 ml-1" />
                          )}
                        </button>

                        <button
                          onClick={toggleMute}
                          className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110"
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5 text-gray-800" />
                          ) : (
                            <Volume2 className="w-5 h-5 text-gray-800" />
                          )}
                        </button>
                      </>
                    )}

                    {isMinimized && (
                      <button
                        onClick={() => setShowVideo(false)}
                        className="w-8 h-8 bg-red-500 bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-red-600 hover:scale-110"
                        title="Close Video"
                      >
                        <X className="w-4 h-4 text-white" />
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
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <button 
                onClick={() => setShowVideo(true)}
                className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110"
              >
                <Play className="w-8 h-8 text-gray-800 ml-1" />
              </button>
            </div>
          )}
        </div>
        
        {!isMinimized && (
          <div className="text-center mt-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Research Funding: A Complete Overview</h3>
            <p className="mt-2 text-gray-600 text-base sm:text-lg">Learn about various funding opportunities and application processes for research projects</p>
          </div>
        )}
      </div>

      {/* Page Title */}
      <header className="w-full mt-4 sm:mt-6 mb-6 sm:mb-8 px-2 sm:px-4">
        <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-center">
          <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-5xl leading-tight">
            Research Funding Opportunities
          </h1>
          <p className="mt-2 text-base sm:text-lg lg:text-xl font-medium">
            Comprehensive Guide for Faculty at NIT JAMSHEDPUR
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4 space-y-8 sm:space-y-12 pb-16 sm:pb-24">
        
        {/* Introduction */}
        <section 
          ref={addToRefs}
          className="opacity-0 transform translate-y-8 transition-all duration-800 space-y-4 sm:space-y-6"
        >
          <div className="rounded-xl bg-green-50 border border-green-200 shadow p-4 sm:p-6 border-l-4 border-l-green-500">
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              <strong>Welcome to the Research Funding Portal!</strong> Regular faculty of NIT Jamshedpur can approach or submit research proposals to any of the funding agencies listed below in their respective formats.
            </p>
            <p className="text-base sm:text-lg text-gray-800">
              Some funding agencies invite proposals through e-tender systems (e.g., NHPC, NTPC) which involve competitive selection processes. Faculty can also submit proposals for collaborative research with industries, reputed universities (with higher NIRF rank or good QS ranking), or research institutions.
            </p>
          </div>
        </section>

        {/* Major Funding Agencies */}
        <section 
          ref={addToRefs}
          className="opacity-0 transform translate-y-8 transition-all duration-800 space-y-4 sm:space-y-6"
        >
          <SectionHeader title="Major Funding Agencies" />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            <FundCard 
              title="Government Agencies" 
              items={governmentAgencies}
              color="blue"
            />
            <FundCard 
              title="Specialized Agencies" 
              items={specializedAgencies}
              color="green"
            />
            <FundCard 
              title="Technology & Innovation" 
              items={technologyAgencies}
              color="purple"
            />
          </div>
        </section>

        {/* Startup Grants */}
        <section 
          ref={addToRefs}
          className="opacity-0 transform translate-y-8 transition-all duration-800 space-y-4 sm:space-y-6"
        >
          <SectionHeader 
            title="Startup Grants & Innovation Programs" 
            subtitle="STARTUP & ENTREPRENEURSHIP"
          />
          <TableSection 
            title="Startup Programs"
            data={startupGrants}
            columns={["Program", "Ministry/Agency"]}
          />
        </section>

        {/* International Programs */}
        <section 
          ref={addToRefs}
          className="opacity-0 transform translate-y-8 transition-all duration-800 space-y-4 sm:space-y-6"
        >
          <SectionHeader 
            title="International Funding Opportunities" 
            subtitle="INTERNATIONAL COLLABORATION"
          />
          <TableSection 
            title="International Programs"
            data={internationalPrograms}
            columns={["Program", "Funding Agency"]}
          />
        </section>

        {/* Women in Science */}
        <section 
          ref={addToRefs}
          className="opacity-0 transform translate-y-8 transition-all duration-800 space-y-4 sm:space-y-6"
        >
          <SectionHeader 
            title="Special Programs for Women Scientists" 
            subtitle="WOMEN IN SCIENCE"
          />
          <div className="grid xl:grid-cols-2 gap-4 sm:gap-6">
            <FundCard 
              title="Career Development & Research Support" 
              items={womenPrograms}
              color="pink"
            />
            <div className="rounded-xl bg-white border shadow p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-pink-700 mb-4">Program Benefits</h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-700">
                <div className="p-3 sm:p-4 rounded-lg bg-pink-50 border-l-4 border-pink-500">
                  <strong>Career Advancement:</strong> Support for women scientists to advance their careers in STEM fields
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-pink-50 border-l-4 border-pink-500">
                  <strong>Research Funding:</strong> Dedicated funding opportunities for women-led research projects
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-pink-50 border-l-4 border-pink-500">
                  <strong>International Exposure:</strong> Fellowships and exchange programs with global institutions
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-pink-50 border-l-4 border-pink-500">
                  <strong>Skill Development:</strong> Specialized training programs and workshops
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Guidelines */}
        <section 
          ref={addToRefs}
          className="opacity-0 transform translate-y-8 transition-all duration-800 space-y-4 sm:space-y-6"
        >
          <SectionHeader title="Application Guidelines & Best Practices" />
          <div className="grid xl:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-xl bg-white border shadow p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg text-orange-600">Proposal Preparation</h3>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>Clearly define research objectives and methodology</li>
                <li>Demonstrate novelty and significance of the proposed work</li>
                <li>Provide detailed budget justification</li>
                <li>Include realistic timeline and milestones</li>
                <li>Highlight expected outcomes and impact</li>
                <li>Ensure compliance with agency-specific guidelines</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border shadow p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg text-green-600">Success Tips</h3>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed">
                <li>Start preparation well before deadlines</li>
                <li>Collaborate with industry partners when applicable</li>
                <li>Seek mentorship from experienced faculty</li>
                <li>Review successful proposals from similar domains</li>
                <li>Focus on societal relevance and practical applications</li>
                <li>Maintain high standards of research ethics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section 
          ref={addToRefs}
          className="opacity-0 transform translate-y-8 transition-all duration-800 space-y-4 sm:space-y-6"
        >
          <SectionHeader title="Research & Consultancy Division Contact" />
          <div className="rounded-xl bg-gray-50 border shadow p-4 sm:p-6">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-700">Dean (Research & Consultancy)</h3>
                <p className="text-gray-600 text-sm sm:text-base">Prof. Satish Kumar</p>
                <div className="mt-3 space-y-1 text-sm sm:text-base text-gray-700">
                  <div>📧 dean.rc@nitjsr.ac.in</div>
                  <div>📞 +91-657-2373496</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-700">Associate Dean (Research & Consultancy)</h3>
                <p className="text-gray-600 text-sm sm:text-base">Dr. Ashok K Mandal</p>
                <div className="mt-3 space-y-1 text-sm sm:text-base text-gray-700">
                  <div>📧 associatedean.rc@nitjsr.ac.in</div>
                  <div>🌐 www.nitjsr.ac.in</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default FundOpportunities;