// import React from "react";
// import { SwagatadebSir } from "@/assets";
// import { motion } from "framer-motion";
// const SwagatadebProfile = () => {
//   return (
//     <div className="w-full h-[]">
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//       >
//         <div className="min-h-screen bg-gray-100">
//           <header
//             className="bg-cover bg-center h-64 relative"
//             style={{ backgroundImage: "url('/assets/header.jpg')" }}
//           >
//             <div className="absolute inset-0 bg-slate-500 opacity-50"></div>
//             <div className="relative flex justify-center items-center h-full">
//               <h1 className="text-white text-4xl font-bold">
//                 Dr. Swagatadeb Sahoo
//               </h1>
//             </div>
//           </header>

//           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//             <div className="bg-white rounded-lg shadow-lg p-6 md:flex md:items-center">
//               <div className="flex-shrink-0 flex justify-center">
//                 <img
//                   className="w-32 h-32 rounded-full object-cover"
//                   src={SwagatadebSir}
//                   alt="Dr. Swagatadeb Sahoo"
//                 />
//               </div>
//               <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Dr. Swagatadeb Sahoo
//                 </h2>
//                 <p className="text-gray-600">
//                   Assistant Professor (Gr-I),
//                   <br /> Electronics and Communication Engineering,
//                   <br /> NIT Jamshedpur
//                 </p>
//               </div>
//             </div>

//             <div className="mt-10 space-y-8">
//               <section className="bg-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                   Research Development Expertise
//                 </h3>
//                 <p className="text-gray-600">
//                   Microwave Engineering, Metamaterial, Microwave sensor,
//                   Material Characterization, Microwave Absorbing material,
//                   Medical Implant, Environmental pollution detection,
//                   Adulteration detection, Bio-electromagnetics, Microwave
//                   material interaction, Broadband Dielectric Spectroscopy.
//                 </p>

//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                   Research Facilities
//                 </h3>
//                 <p className="text-gray-600">
//                   Vector Network Analyzer (ZNB 20, R &S made), DAK (Speag made),
//                   Waveguide, Horn Antenna Setup, Anechoic Chamber, PCB Prototype
//                   CNC Machine, CST Microwave Studio 2023, HFSS, Magnetic
//                   Stirrer, Autoclave, Annealing Furnace, Laminar Flow Clean
//                   Bench, Lab-grade Water, Hot Oven, Vacuum Pump, Sonicator.
//                 </p>

//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                   Research Papers and Patents
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   Total Papers: 34, Patents: 02
//                 </p>
//                 <div className="grid grid-cols-1  gap-4">
//                   <div>
//                     <h4 className="text-lg font-bold text-gray-700 mb-2">
//                       Recent Notable Publications:
//                     </h4>
//                     <ul className="list-disc list-inside text-gray-600 space-y-1">
//                       <li>
//                         S. Ranjan and S.Sahoo, Six band metamaterial absorber
//                         designed on twisted square and swastika-shaped resonator
//                         for S, C, X, and Ku band frequency and sensing
//                         applications, Physica Scripta,2025,100,015534.
//                       </li>
//                       <li>
//                         S. Ranjan and S.Sahoo, Hexagon Enclosed Modified G-
//                         Shaped Polarization and Incident Angle Independent
//                         Metamaterial Absorber for S, C, X and Ku Band Frequency,
//                         AEU - International Journal of Electronics and
//                         Communications,2024,183,155348.
//                       </li>
//                       <li>
//                         A.Rayon & S.Sahoo, Environmental pollution detection
//                         from susceptibility and conductivity measurement under
//                         microwave field: pollution detection under microwave
//                         field, International Journal of Environmental Science &
//                         Engineering, 2024,21,8535-8542.
//                       </li>
//                       <li>
//                         S. Ranjan & S.Sahoo, Review of metamaterial based
//                         microwave absorber and sensor, Journal of Electronic
//                         Materials, 2023, 53(2), 571-595.
//                       </li>
//                       <li>
//                         A. Pandey & S.Sahoo, Impact of zinc oxide on dielectric
//                         properties of forsterite coated titanium based medical
//                         implant, IEEE SENSORS JOURNAL,2023, 23(24), 31171-31177.
//                       </li>
//                       <li>
//                         A. Pandey & S.Sahoo, Dielectric Performance of
//                         forsterite coated titanium substrate based medical
//                         implant, IEEE SENSORS JOURNAL,2023, 23(13), 14847-14853.
//                       </li>
//                       <li>
//                         S.S.Pattanayak, S.H.Laskar, & S.Sahoo, Design from
//                         waste: an eco-efficient microwave absorber using dried
//                         banana leaves and charcoal leaves and charcoal based
//                         composite, J. Mater. Sci: Materials in Electronics,
//                         2022, 33, 13398-13407.
//                       </li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold text-gray-700 mb-2">
//                       Detail of patents:
//                     </h4>
//                     <ul className="list-disc list-inside text-gray-600 space-y-1">
//                       <li>
//                         A system and a process for evaluating dielectric
//                         relaxation in dipolar liquid, Patent no: 2020104029, IP
//                         Australlia, Granted, 10.02.2021.
//                       </li>
//                       <li>
//                         A Method for Developing Corn Husk-Based Microwave
//                         Absorber, Patent no: 2021104490, IP Australlia, Granted,
//                         30.03.2022.
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                   Details of Projects
//                 </h3>
//                 <p className="text-gray-600">
//                   Shortlisted but not recommended in DST-SERB Extra Mural
//                   Project Scheme(EMR-EECE); Cost: 61,56,000/- , File no:
//                   EMR/2017/002927/EEC.
//                 </p>

//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                   Research Collaborations
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <h4 className="text-lg font-bold text-gray-700 mb-2">
//                       National Research Collaboration:
//                     </h4>
//                     <ul className="list-disc list-inside text-gray-600 space-y-1">
//                       <li>
//                         Dr. N.K.Dhal, Principal Scientist and HOD, Department of
//                         Environment & Sustainability, CSIR-IMMT, Bhubaneswar,
//                         Odisha .
//                       </li>
//                       <li>
//                         Prof. Bhaskar Gupta, Vice Chancellor and Professor,
//                         Department of Telecommunication Engineering, Jadavpur
//                         University .
//                       </li>
//                       <li>
//                         Prof. Santanu Paria, Professor, Department of Chemical
//                         Engineering, National Institute of Technology Rourkela,
//                         Orissa.
//                       </li>
//                       <li>
//                         Dr. Rajaram Bal, Principal Scientist, Indian Institute
//                         of Petroleum Engineering, Dehradun, Uttarakhand.
//                       </li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold text-gray-700 mb-2">
//                       International Research Collaboration:
//                     </h4>
//                     <ul className="list-disc list-inside text-gray-600 space-y-1">
//                       <li>
//                         Dr. Mrs. Jasotha Prabagar, Senior Lecturer(Grade: I),
//                         University of Jaffna, Sri Lanka, Dr. Subramaniam
//                         Prabagar, Senior Research Scientist, Industrial
//                         Technology Institute, Colombo, Sri Lanka .{" "}
//                       </li>
//                       <li>
//                         Prof. Francesco Pepe, Prof. Vincenzo Galdi , Department
//                         of Engineering, University of Sannio, Italy.
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </section>
//             </div>
//           </main>

//           {/* Footer */}
//           <footer className="bg-gray-800 text-white text-center py-4">
//             <p>
//               &copy; {new Date().getFullYear()} Dr. Swagatadeb Sahoo. All rights
//               reserved.
//             </p>
//           </footer>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SwagatadebProfile;

import React, { useState } from "react";
import { Award, BookOpen, Users, FileText, Mail, MapPin, ChevronDown, ChevronUp, Trophy, Globe, Calendar, Microscope } from "lucide-react";
import { SwagatadebSir } from "@/assets";

const SwagatadebProfile = () => {
  const [expandedSections, setExpandedSections] = useState({
    expertise: true,
    facilities: false,
    publications: false,
    patents: false,
    projects: false,
    collaborations: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-600 text-white rounded-2xl p-8 mb-8 text-center">
        <Award className="mx-auto mb-4 h-12 w-12 opacity-90" />
        <h1 className="text-4xl font-bold mb-2">Dr. Swagatadeb Sahoo</h1>
      </div>

      {/* Profile Info Section */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
          <img src={SwagatadebSir} alt="Dr. Swagatadeb Sahoo" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dr. Swagatadeb Sahoo</h2>
          <p className="text-gray-600 font-medium">Assistant Professor (Gr-I)</p>
          <p className="text-gray-600">Electronics and Communication Engineering</p>
          <p className="text-blue-600 font-semibold">NIT Jamshedpur</p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>swagatadeb@nitjsr.ac.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Jamshedpur, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
          <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">34</div>
          <div className="text-gray-600">Research Papers</div>
        </div>
        <div className="bg-purple-50 rounded-xl p-6 text-center border border-purple-100">
          <Trophy className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">02</div>
          <div className="text-gray-600">Patents Granted</div>
        </div>
        <div className="bg-green-50 rounded-xl p-6 text-center border border-green-100">
          <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">6+</div>
          <div className="text-gray-600">Collaborations</div>
        </div>
      </div>

      {/* Expand Sections */}
      <div className="space-y-6">
        {/* Research Expertise */}
        <div className="bg-white rounded-xl border border-blue-100">
          <button
            onClick={() => toggleSection('expertise')}
            className="w-full p-4 flex items-center justify-between text-gray-800 font-semibold hover:bg-blue-50 rounded-t-xl"
          >
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span>Research Development Expertise</span>
            </div>
            {expandedSections.expertise ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {expandedSections.expertise && (
            <div className="p-4 text-gray-700">
              Microwave Engineering, Metamaterial, Microwave sensor, Material Characterization, Microwave Absorbing material, Medical Implant, Environmental pollution detection, Adulteration detection, Bio-electromagnetics, Microwave material interaction, Broadband Dielectric Spectroscopy.
            </div>
          )}
        </div>

        {/* Research Facilities */}
        <div className="bg-white rounded-xl border border-orange-100">
          <button
            onClick={() => toggleSection('facilities')}
            className="w-full p-4 flex items-center justify-between text-gray-800 font-semibold hover:bg-orange-50 rounded-t-xl"
          >
            <div className="flex items-center space-x-3">
              <Microscope className="h-6 w-6 text-orange-600" />
              <span>Research Facilities</span>
            </div>
            {expandedSections.facilities ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {expandedSections.facilities && (
            <div className="p-4 text-gray-700">
              Vector Network Analyzer (ZNB 20, R &S made), DAK (Speag made), Waveguide, Horn Antenna Setup, Anechoic Chamber, PCB Prototype CNC Machine, CST Microwave Studio 2023, HFSS, Magnetic Stirrer, Autoclave, Annealing Furnace, Laminar Flow Clean Bench, Lab-grade Water, Hot Oven, Vacuum Pump, Sonicator.
            </div>
          )}
        </div>

        {/* Publications */}
        <div className="bg-white rounded-xl border border-purple-100">
          <button
            onClick={() => toggleSection('publications')}
            className="w-full p-4 flex items-center justify-between text-gray-800 font-semibold hover:bg-purple-50 rounded-t-xl"
          >
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-purple-600" />
              <span>Recent Notable Publications </span>
            </div>
            {expandedSections.publications ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {expandedSections.publications && (
            <div className="p-4 text-gray-700 space-y-2">
              <p>S. Ranjan and S.Sahoo, Six band metamaterial absorber designed on twisted square and swastika-shaped resonator for S, C, X, and Ku band frequency and sensing applications - Physica Scripta, 2025.</p>
              <p>S. Ranjan and S.Sahoo, Hexagon Enclosed Modified G-Shaped Polarization and Incident Angle Independent Metamaterial Absorber for S, C, X and Ku Band Frequency - AEU International Journal of Electronics and Communications, 2024.</p>
              <p>A.Rayon & S.Sahoo, Environmental pollution detection from susceptibility and conductivity measurement under microwave field - International Journal of Environmental Science & Engineering, 2024.</p>
              <p>S. Ranjan & S.Sahoo, Review of metamaterial based microwave absorber and sensor - Journal of Electronic Materials, 2023.</p>
              <p>A. Pandey & S.Sahoo, Impact of zinc oxide on dielectric properties of forsterite coated titanium based medical implant - IEEE SENSORS JOURNAL, 2023.</p>
              <p>A. Pandey & S.Sahoo, Dielectric Performance of forsterite coated titanium substrate based medical implant - IEEE SENSORS JOURNAL, 2023.</p>
              <p>S.S.Pattanayak, S.H.Laskar, & S.Sahoo, Design from waste: an eco-efficient microwave absorber using dried banana leaves and charcoal based composite - J. Mater. Sci: Materials in Electronics, 2022.</p>
            </div>
          )}
        </div>

        {/* Patents */}
        <div className="bg-white rounded-xl border border-yellow-100">
          <button
            onClick={() => toggleSection('patents')}
            className="w-full p-4 flex items-center justify-between text-gray-800 font-semibold hover:bg-yellow-50 rounded-t-xl"
          >
            <div className="flex items-center space-x-3">
              <Trophy className="h-6 w-6 text-yellow-600" />
              <span>Detail of Patents</span>
            </div>
            {expandedSections.patents ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {expandedSections.patents && (
            <div className="p-4 text-gray-700 space-y-2">
              <p>A system and a process for evaluating dielectric relaxation in dipolar liquid, Patent no: 2020104029, IP Australia, Granted, 10.02.2021.</p>
              <p>A Method for Developing Corn Husk-Based Microwave Absorber, Patent no: 2021104490, IP Australia, Granted, 30.03.2022.</p>
            </div>
          )}
        </div>

        {/* Projects */}
        <div className="bg-white rounded-xl border border-indigo-100">
          <button
            onClick={() => toggleSection('projects')}
            className="w-full p-4 flex items-center justify-between text-gray-800 font-semibold hover:bg-indigo-50 rounded-t-xl"
          >
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-indigo-600" />
              <span>Details of Projects</span>
            </div>
            {expandedSections.projects ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {expandedSections.projects && (
            <div className="p-4 text-gray-700">
              Shortlisted but not recommended in DST-SERB Extra Mural Project Scheme(EMR-EECE); Cost: 61,56,000/- , File no: EMR/2017/002927/EEC.
            </div>
          )}
        </div>

        {/* Collaborations */}
        <div className="bg-white rounded-xl border border-teal-100">
          <button
            onClick={() => toggleSection('collaborations')}
            className="w-full p-4 flex items-center justify-between text-gray-800 font-semibold hover:bg-teal-50 rounded-t-xl"
          >
            <div className="flex items-center space-x-3">
              <Globe className="h-6 w-6 text-teal-600" />
              <span>Research Collaborations</span>
            </div>
            {expandedSections.collaborations ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {expandedSections.collaborations && (
            <div className="p-4 text-gray-700 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">National Research Collaboration</h4>
                <p className="text-sm">Dr. N.K.Dhal, Principal Scientist and HOD, Department of Environment & Sustainability, CSIR-IMMT, Bhubaneswar, Odisha.</p>
                <p className="text-sm">Prof. Bhaskar Gupta, Vice Chancellor and Professor, Department of Telecommunication Engineering, Jadavpur University.</p>
                <p className="text-sm">Prof. Santanu Paria, Professor, Department of Chemical Engineering, National Institute of Technology Rourkela, Orissa.</p>
                <p className="text-sm">Dr. Rajaram Bal, Principal Scientist, Indian Institute of Petroleum Engineering, Dehradun, Uttarakhand.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">International Research Collaboration</h4>
                <p className="text-sm">Dr. Mrs. Jasotha Prabagar, Senior Lecturer(Grade: I), University of Jaffna, Sri Lanka, Dr. Subramaniam Prabagar, Senior Research Scientist, Industrial Technology Institute, Colombo, Sri Lanka.</p>
                <p className="text-sm">Prof. Francesco Pepe, Prof. Vincenzo Galdi, Department of Engineering, University of Sannio, Italy.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwagatadebProfile;