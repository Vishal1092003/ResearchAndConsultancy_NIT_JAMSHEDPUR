// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// const Tab = () => {
//   return (
//     <div
//       className="hidden md:flex justify-around max-w-8xl mx-auto h-10 px-4 py-6 items-center 
//                 sticky top-0 bg-white z-50"
//     >
//       <motion.div whileHover={{ scale: 1.1 }} >
//         <HashLink
//           to={"/home"}
//           className=" transition  duration-200  py-1 px-2 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           Home
//         </HashLink>
//       </motion.div>
//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/expertise"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           Expertise
//         </Link>
//       </motion.div>

//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/sponsoredresearch"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base"
//         >
//           Sponsored Research
//         </Link>
//       </motion.div>

//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/consultancy"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           Consultancy
//         </Link>
//       </motion.div>

//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/facilities"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           Facilities
//         </Link>
//       </motion.div>
//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/patent"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           Patent(IPRCELL)
//         </Link>
//       </motion.div>
//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/collaboration"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           Collaboration
//         </Link>
//       </motion.div>
//       {/* <div className=' hover:rounded-md transition flex-row flex group duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 cursor-pointer text-slate-700/80 font-semibold '>
//                 <div>
//                     Collaboration
//                 </div> */}
//       {/* <div className='flex group-hover:-rotate-180 transition duration-500 justify-center items-center'>
//                     <FaArrowDown />
//                 </div> */}
//       {/* <div
//                     className='  group-hover:flex flex-col bg-yellow-100  absolute top-[11.4rem] hidden'>
//                     <Link to={'/academia'} className='hover:scale-105 py-2 px-5 hover:shadow-xl transition duration-100 hover:shadow-amber-200 font-medium text-md text-center rounded-lg hover:bg-amber-200 text-slate-600 hover:text-black cursor-pointer tracking-wide'>Academia</Link>
//                     <Link to={'/industry'} className=' hover:scale-105 py-2 px-5 hover:shadow-xl transition duration-100 hover:shadow-amber-200 font-medium text-md text-center rounded-lg hover:bg-amber-200 text-slate-600 hover:text-black cursor-pointer tracking-wide'>Industry</Link>
//                     <Link to={'/researchinstitute'} className=' hover:scale-105 hover:shadow-xl transition duration-100 hover:shadow-amber-200 py-2 px-5 font-medium text-md text-center rounded-lg hover:bg-amber-200 text-slate-600 hover:text-black cursor-pointer'>Research Institute</Link>
//                 </div> */}
//       {/* </div> */}
//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/workshops"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           Workshops/Conferences
//         </Link>
//       </motion.div>
//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/events"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           Events
//         </Link>
//       </motion.div>
//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/events"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           RNC Details
//         </Link>
//       </motion.div>
//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/events"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           Information / Notices / Circulars
//         </Link>
//       </motion.div>
//       <motion.div whileHover={{ scale: 1.1 }}>
//         <Link
//           to={"/events"}
//           className=" transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-base "
//         >
//           Achievements
//         </Link>
//       </motion.div>
//     </div>
//   );
// };

// export default Tab;





// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

// const Tab = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="hidden md:flex justify-center max-w-8xl mx-auto h-10 px-4 py-6 items-center sticky top-0 bg-white z-50 overflow-x-auto">
//       <div className="flex items-center gap-6 min-w-max">
//         <motion.div whileHover={{ scale: 1.05 }}>
//           <HashLink
//             to={"/home"}
//             className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
//           >
//             Home
//           </HashLink>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Link
//             to={"/expertise"}
//             className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
//           >
//             Expertise
//           </Link>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Link
//             to={"/sponsoredresearch"}
//             className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
//           >
//             Research
//           </Link>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Link
//             to={"/consultancy"}
//             className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
//           >
//             Consultancy
//           </Link>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Link
//             to={"/facilities"}
//             className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
//           >
//             Facilities
//           </Link>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Link
//             to={"/patent"}
//             className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
//           >
//             IPR Cell
//           </Link>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Link
//             to={"/collaboration"}
//             className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
//           >
//             Collaboration
//           </Link>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }}>
//           <Link
//             to={"/workshops"}
//             className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
//           >
//             Events
//           </Link>
//         </motion.div>

//         {/* Dropdown for additional items */}
//         <div className="relative">
//           <motion.div whileHover={{ scale: 1.05 }}>
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center gap-1 transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
//             >
//               More
//               <FaChevronDown className={`text-xs transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
//             </button>
//           </motion.div>

//           {/* Dropdown Menu */}
//           {dropdownOpen && (
//             <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[200px] z-50">
//               <Link
//                 to={"/rncDetails"}
//                 className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-black transition duration-200"
//                 onClick={() => setDropdownOpen(false)}
//               >
//                 RNC Details
//               </Link>
//               <Link
//                 to={"/informationCirculars"}
//                 className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-black transition duration-200"
//                 onClick={() => setDropdownOpen(false)}
//               >
//                 Notices & Circulars
//               </Link>
//               <Link
//                 to={"/achievements"}
//                 className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-black transition duration-200"
//                 onClick={() => setDropdownOpen(false)}
//               >
//                 Achievements
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tab;










import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Tab = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="hidden md:flex justify-center max-w-8xl mx-auto h-10 px-4 py-6 items-center sticky top-0 bg-white z-50 overflow-visible">
      <div className="flex items-center gap-6 min-w-max">
        <motion.div whileHover={{ scale: 1.05 }}>
          <HashLink
            to={"/home"}
            className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
          >
            Home
          </HashLink>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to={"/expertise"}
            className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
          >
            Expertise
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to={"/sponsoredresearch"}
            className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
          >
            Research
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to={"/consultancy"}
            className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
          >
            Consultancy
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to={"/facilities"}
            className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
          >
            Facilities
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to={"/patent"}
            className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
          >
            IPR Cell
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to={"/collaboration"}
            className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
          >
            Collaboration
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to={"/workshops"}
            className="transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
          >
            Events
          </Link>
        </motion.div>

        {/* Dropdown for additional items */}
        <div className="relative">
          <motion.div whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 transition duration-200 py-2 px-3 hover:text-black/80 hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-medium whitespace-nowrap"
            >
              More
              <FaChevronDown className={`text-xs transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
          </motion.div>

          {/* Dropdown Menu - Fixed positioning to appear over content */}
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-xl py-2 min-w-[200px] z-[999]">
              <Link
                to={"/rncdetails"}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-black transition duration-200"
                onClick={() => setDropdownOpen(false)}
              >
                RNC Details
              </Link>
              <Link
                to={"/informationCirculars"}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-black transition duration-200"
                onClick={() => setDropdownOpen(false)}
              >
                Notices & Circulars
              </Link>
              <Link
                to={"/achievements"}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-black transition duration-200"
                onClick={() => setDropdownOpen(false)}
              >
                Achievements
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {dropdownOpen && (
        <div 
          className="fixed inset-0 z-[998]" 
          onClick={() => setDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default Tab;