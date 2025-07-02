import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const SponsoredResearchDataComponent = ({
  index,
  title,
  principalInvestigator,
  fundingAgency,
  amount,
  year,
  department,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="w-[98%] m-auto mt-4 rounded-t-lg shadow-lg bg-amber-50 cursor-pointer"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-3 gap-2">
          <div className="flex items-start md:items-center gap-2 flex-1">
            <div className="font-semibold">{index + 1}.</div>
            <div className="text-base font-medium break-words leading-snug">
              {title}
            </div>
          </div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-md font-semibold whitespace-nowrap"
          >
            {year}
            <FaArrowDown
              size={16}
              className={`${
                isOpen ? "rotate-180 scale-110" : "rotate-0"
              } transition duration-300`}
            />
          </motion.div>
        </div>
      </div>

      {/* EXPANDABLE SECTION */}
      <div
        className={`${
          isOpen ? "h-auto py-4" : "h-0 overflow-hidden"
        } transition-all duration-300 bg-amber-100 rounded-b-lg w-[98%] m-auto shadow-lg`}
      >
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row justify-around items-start md:items-center gap-4 px-4`}
        >
          <div className="space-y-2 text-sm md:text-base w-full md:w-1/2">
            <div>
              <span className="font-semibold">Principal Investigator:</span>{" "}
              <span className="font-normal block md:inline text-center md:text-left">{principalInvestigator}</span>
            </div>
            <div>
              <span className="font-semibold">Funding Agency:</span>{" "}
              <span className="font-normal block md:inline text-center md:text-left">{fundingAgency}</span>
            </div>
          </div>
          <div className="space-y-2 text-sm md:text-base w-full md:w-1/2">
            <div>
              <span className="font-semibold">Department:</span>{" "}
              <span className="font-normal block md:inline text-center md:text-left">{department}</span>
            </div>
            <div>
              <span className="font-semibold">Amount:</span>{" "}
              <span className="font-normal block md:inline text-center md:text-left">₹{amount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsoredResearchDataComponent;
