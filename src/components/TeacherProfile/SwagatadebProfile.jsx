import React from "react";
import { SwagatadebSir } from "@/assets";
import { motion } from "framer-motion";
const SwagatadebProfile = () => {
  return (
    <div className="w-full h-[]">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="min-h-screen bg-gray-100">
          <header
            className="bg-cover bg-center h-64 relative"
            style={{ backgroundImage: "url('/assets/header.jpg')" }}
          >
            <div className="absolute inset-0 bg-slate-500 opacity-50"></div>
            <div className="relative flex justify-center items-center h-full">
              <h1 className="text-white text-4xl font-bold">
                Dr. Swagatadeb Sahoo
              </h1>
            </div>
          </header>

          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-white rounded-lg shadow-lg p-6 md:flex md:items-center">
              <div className="flex-shrink-0 flex justify-center">
                <img
                  className="w-32 h-32 rounded-full object-cover"
                  src={SwagatadebSir}
                  alt="Dr. Swagatadeb Sahoo"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800">
                  Dr. Swagatadeb Sahoo
                </h2>
                <p className="text-gray-600">
                  Assistant Professor (Gr-I),
                  <br /> Electronics and Communication Engineering,
                  <br /> NIT Jamshedpur
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <section className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Research Development Expertise
                </h3>
                <p className="text-gray-600">
                  Microwave Engineering, Metamaterial, Microwave sensor,
                  Material Characterization, Microwave Absorbing material,
                  Medical Implant, Environmental pollution detection,
                  Adulteration detection, Bio-electromagnetics, Microwave
                  material interaction, Broadband Dielectric Spectroscopy.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Research Facilities
                </h3>
                <p className="text-gray-600">
                  Vector Network Analyzer (ZNB 20, R &S made), DAK (Speag made),
                  Waveguide, Horn Antenna Setup, Anechoic Chamber, PCB Prototype
                  CNC Machine, CST Microwave Studio 2023, HFSS, Magnetic
                  Stirrer, Autoclave, Annealing Furnace, Laminar Flow Clean
                  Bench, Lab-grade Water, Hot Oven, Vacuum Pump, Sonicator.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Research Papers and Patents
                </h3>
                <p className="text-gray-600 mb-4">
                  Total Papers: 34, Patents: 02
                </p>
                <div className="grid grid-cols-1  gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-700 mb-2">
                      Recent Notable Publications:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        S. Ranjan and S.Sahoo, Six band metamaterial absorber
                        designed on twisted square and swastika-shaped resonator
                        for S, C, X, and Ku band frequency and sensing
                        applications, Physica Scripta,2025,100,015534.
                      </li>
                      <li>
                        S. Ranjan and S.Sahoo, Hexagon Enclosed Modified G-
                        Shaped Polarization and Incident Angle Independent
                        Metamaterial Absorber for S, C, X and Ku Band Frequency,
                        AEU - International Journal of Electronics and
                        Communications,2024,183,155348.
                      </li>
                      <li>
                        A.Rayon & S.Sahoo, Environmental pollution detection
                        from susceptibility and conductivity measurement under
                        microwave field: pollution detection under microwave
                        field, International Journal of Environmental Science &
                        Engineering, 2024,21,8535-8542.
                      </li>
                      <li>
                        S. Ranjan & S.Sahoo, Review of metamaterial based
                        microwave absorber and sensor, Journal of Electronic
                        Materials, 2023, 53(2), 571-595.
                      </li>
                      <li>
                        A. Pandey & S.Sahoo, Impact of zinc oxide on dielectric
                        properties of forsterite coated titanium based medical
                        implant, IEEE SENSORS JOURNAL,2023, 23(24), 31171-31177.
                      </li>
                      <li>
                        A. Pandey & S.Sahoo, Dielectric Performance of
                        forsterite coated titanium substrate based medical
                        implant, IEEE SENSORS JOURNAL,2023, 23(13), 14847-14853.
                      </li>
                      <li>
                        S.S.Pattanayak, S.H.Laskar, & S.Sahoo, Design from
                        waste: an eco-efficient microwave absorber using dried
                        banana leaves and charcoal leaves and charcoal based
                        composite, J. Mater. Sci: Materials in Electronics,
                        2022, 33, 13398-13407.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-700 mb-2">
                      Detail of patents:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        A system and a process for evaluating dielectric
                        relaxation in dipolar liquid, Patent no: 2020104029, IP
                        Australlia, Granted, 10.02.2021.
                      </li>
                      <li>
                        A Method for Developing Corn Husk-Based Microwave
                        Absorber, Patent no: 2021104490, IP Australlia, Granted,
                        30.03.2022.
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Details of Projects
                </h3>
                <p className="text-gray-600">
                  Shortlisted but not recommended in DST-SERB Extra Mural
                  Project Scheme(EMR-EECE); Cost: 61,56,000/- , File no:
                  EMR/2017/002927/EEC.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Research Collaborations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-700 mb-2">
                      National Research Collaboration:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        Dr. N.K.Dhal, Principal Scientist and HOD, Department of
                        Environment & Sustainability, CSIR-IMMT, Bhubaneswar,
                        Odisha .
                      </li>
                      <li>
                        Prof. Bhaskar Gupta, Vice Chancellor and Professor,
                        Department of Telecommunication Engineering, Jadavpur
                        University .
                      </li>
                      <li>
                        Prof. Santanu Paria, Professor, Department of Chemical
                        Engineering, National Institute of Technology Rourkela,
                        Orissa.
                      </li>
                      <li>
                        Dr. Rajaram Bal, Principal Scientist, Indian Institute
                        of Petroleum Engineering, Dehradun, Uttarakhand.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-700 mb-2">
                      International Research Collaboration:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        Dr. Mrs. Jasotha Prabagar, Senior Lecturer(Grade: I),
                        University of Jaffna, Sri Lanka, Dr. Subramaniam
                        Prabagar, Senior Research Scientist, Industrial
                        Technology Institute, Colombo, Sri Lanka .{" "}
                      </li>
                      <li>
                        Prof. Francesco Pepe, Prof. Vincenzo Galdi , Department
                        of Engineering, University of Sannio, Italy.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white text-center py-4">
            <p>
              &copy; {new Date().getFullYear()} Dr. Swagatadeb Sahoo. All rights
              reserved.
            </p>
          </footer>
        </div>
      </motion.div>
    </div>
  );
};

export default SwagatadebProfile;
