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
        className="m-auto p-4 mt-4 rounded flex justify-between items-center bg-blue-200"
      >
        <div className="flex justify-between mx-10 items-center">
          <div className="flex justify-center items-center">
            <div className="mx-3">{index + 1}.</div>
            <div className=" overflow-hidden flex md:items-center items-start leading-tight h-[50px]">
              {title}
            </div>
          </div>
          </div>

          <motion.div
            whileTap={{ scale: 0.8 }}
            className="flex bg-blue-600 p-2 rounded justify-center items-center text-white cursor-pointer"
          >
            <div className=" font-semibold text-sm mr-1">{year}</div>
            <FaArrowDown
              size={18}
              className={`${
                isOpen ? `rotate-180 scale-110` : `rotate-0`
              } transition duration-300`}
            />
          </motion.div>
      </div>
      <div
        className={`${
          isOpen ? "h-auto p-4 " : "h-0 "
        } rounded m-auto  flex-col  transition-all duration-300 bg-blue-100`}
      >
        <div
          className={`${
            isOpen ? "flex " : "hidden "
          } font-semibold justify-around items-center h-full w-full`}
        >
          <div className=" space-y-2">
            <div className=" flex flex-col md:flex-row">
              <div className="mx-3 ">Principal Investigator:</div>
              <div className=" text-center font-normal">
                {principalInvestigator}
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="mx-3">Funding Agency:</div>
              <div className=" text-center font-normal">{fundingAgency}</div>
            </div>
          </div>
          <div className=" space-y-2">
            <div className="flex flex-col md:flex-row">
              <div className="mx-3">Department:</div>
              <div className=" text-center font-normal">{department}</div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="mx-3">Amount:</div>
              <div className=" text-center font-normal">₹{amount}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsoredResearchDataComponent;
