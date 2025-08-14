// import Navbar from "@/components/Navbar/Navbar";
// import Tab from "@/components/Tab/Tab";

// const Facilities = () => {
//   return (
//     <div className="w-[100vw] h-[100vh] ">
//       <div className="overflow-x-hidden">
//         <Navbar />
//       </div>
//       <div className="sticky top-0 z-10 bg-white shadow-md">
//         <Tab />
//       </div>
//       <div className="flex justify-center flex-col align-centre text-center ">
//         <div className="w-[98%]  h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
//           <div className=" font-bold text-2xl">Facilities</div>
//         </div>
//         <div className="  flex justify-center">
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Facilities;



// import Navbar from "@/components/Navbar/Navbar";
// import Tab from "@/components/Tab/Tab";

// const Facilities = () => {
//   const facilities = [
//     {
//       id: 1,
//       title: "",
//       description: "State-of-the-art research facilities equipped with modern instruments and equipment for cutting-edge research across various engineering disciplines.",
//       image: "/facilities1.jpg",
//     },
//     {
//       id: 2,
//       title: "", 
//       description: "High-performance computing clusters, advanced software licenses, and dedicated server rooms supporting computational research and data analysis.",
//       image: "/facilities2.jpg",
//     },
//     {
//       id: 3,
//       title: "",
//       description: "Modern conference rooms, innovation hubs, and collaborative workspaces designed to foster interdisciplinary research and industry partnerships.",
//       image: "/facilities3.jpg",
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="overflow-x-hidden">
//         <Navbar />
//       </div>
//       <div className="sticky top-0 z-10 bg-white shadow-md">
//         <Tab />
//       </div>
      
//       {/* Header */}
//       <div className="flex justify-center px-4 mt-5 mb-8">
//         <div className="w-full max-w-6xl h-16 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
//           <h1 className="font-bold text-2xl text-gray-800">Research & Consultancy Facilities</h1>
//         </div>
//       </div>

//       {/* Facilities Section */}
//       <div className="space-y-12 pb-12 px-4">
//         {facilities.map((facility, index) => (
//           <div key={facility.id} className="max-w-5xl mx-auto">
//             {/* Title above image */}
//             <div className="text-center mb-6">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//                 {facility.title}
//               </h2>
//             </div>

//             {/* Image container with reduced size */}
//             <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg shadow-lg">
//               <img 
//                 src={facility.image} 
//                 alt={facility.title}
//                 className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
//                 onError={(e) => {
//                   console.log(`Failed to load image: ${facility.image}`);
//                   e.target.style.border = "2px solid #red";
//                   e.target.style.backgroundColor = "#f0f0f0";
//                 }}
//                 onLoad={(e) => {
//                   console.log(`Successfully loaded: ${facility.image}`);
//                 }}
//               />
//             </div>

//             {/* Description below image */}
//             <div className="max-w-3xl mx-auto px-6 mt-6">
//               <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
//                 {facility.description}
//               </p>
//             </div>

//             {/* Decorative separator */}
//             {index < facilities.length - 1 && (
//               <div className="flex justify-center my-10">
//                 <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Additional Info Section */}
//       <div className="bg-white py-12">
//         <div className="max-w-5xl mx-auto px-6">
//           <div className="text-center">
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//               World-Class Infrastructure
//             </h3>
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
//               Our facilities are designed to support groundbreaking research and foster innovation. 
//               From advanced laboratories to cutting-edge computing infrastructure, we provide 
//               researchers with the tools they need to push the boundaries of knowledge and 
//               create solutions for tomorrow's challenges.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Facilities;






import Navbar from "@/components/Navbar/Navbar";
import Tab from "@/components/Tab/Tab";
import { useState } from "react";
import { X } from "lucide-react";

const Facilities = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const facilities = [
    {
      id: 1,
      description: "State-of-the-art research facilities equipped with modern instruments and equipment for cutting-edge research across various engineering disciplines.",
      image: "/facilities1.jpg",
    },
    {
      id: 2,
      description: "High-performance computing clusters, advanced software licenses, and dedicated server rooms supporting computational research and data analysis.",
      image: "/facilities2.jpg",
    },
    {
      id: 3,
      description: "Modern conference rooms, innovation hubs, and collaborative workspaces designed to foster interdisciplinary research and industry partnerships.",
      image: "/facilities3.jpg",
    }
  ];

  const openModal = (facility) => {
    setSelectedImage(facility);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>
      
      {/* Header */}
      <div className="flex justify-center px-4 mt-5 mb-8">
        <div className="w-full max-w-6xl h-16 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
          <h1 className="font-bold text-2xl text-gray-800">Research & Consultancy Facilities</h1>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="space-y-12 pb-12 px-4">
        {facilities.map((facility, index) => (
          <div key={facility.id} className="max-w-5xl mx-auto">
            {/* Title above image */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {facility.title}
              </h2>
            </div>

            {/* Clickable Image container */}
            <div 
              className="w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg shadow-lg bg-gray-200 cursor-pointer relative group"
              onClick={() => openModal(facility)}
            >
              <img 
                src={facility.image} 
                alt={facility.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay hint */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                  Click to view full image
                </div>
              </div>
            </div>

            {/* Description below image */}
            <div className="max-w-3xl mx-auto px-6 mt-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
                {facility.description}
              </p>
            </div>

            {/* Decorative separator */}
            {index < facilities.length - 1 && (
              <div className="flex justify-center my-10">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-7xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-60 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            
            {/* Modal content */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
              {/* Image */}
              <div className="flex-1 overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>
              
              {/* Image info */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          ></div>
        </div>
      )}

      {/* Additional Info Section */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              World-Class Infrastructure
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our facilities are designed to support groundbreaking research and foster innovation. 
              From advanced laboratories to cutting-edge computing infrastructure, we provide 
              researchers with the tools they need to push the boundaries of knowledge and 
              create solutions for tomorrow's challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;