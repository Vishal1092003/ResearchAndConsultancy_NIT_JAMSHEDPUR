import React from 'react'

import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
const WorkshopsDataComponent = ({
    index,
    Subject,
    Department,
    Coordinators,
    Date,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
   
  return (
     <>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="w-[98%] m-auto h-16 mt-4 rounded-t-lg shadow-lg flex justify-center items-center bg-amber-50"
          >
            <div className="flex justify-between mx-10 items-center w-full  ">
              <div className=" w-full  flex justify-start items-center">
                <div className="mx-3">{index + 1}.</div>
                <div className="w-[90%]   flex justify-between">
                  <div className=" overflow-hidden flex md:items-center font-semibold items-start leading-tight  h-[50px]">
                  Co-ordinators: {Coordinators}
                  </div>
                  <div className=" overflow-hidden flex md:items-center font-semibold items-start leading-tight  h-[50px]">
                  Department: {Department}
                  </div>
                </div>
              </div>
    
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="flex justify-center items-center"
              >
                <div className=" font-semibold text-lg">{Date}</div>
                <FaArrowDown
                  size={20}
                  className={`${
                    isOpen ? `rotate-180 scale-110` : `rotate-0`
                  } transition duration-300`}
                />
              </motion.div>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "md:h-[15vh] h-[10vh] " : "h-0 "
            } shadow-lg rounded-b-lg w-[98%] m-auto  flex-col  transition-all duration-300  bg-amber-100`}
          >
            <div
              className={`${
                isOpen ? "flex " : "hidden "
              } font-semibold text-xl justify-around items-center h-full w-full`}
            >
              <div className=" space-y-2 w-full flex flex-wrap  justify-around items-center"> 
                <div className=" flex flex-col md:text-xl text-sm md:flex-row">
                  <div className="mx-3 ">Subject:</div>
                  <div className=" text-center font-normal">{Subject}</div>
                </div>
                
              </div>
              {/* <div className=" space-y-2">
                <div className="flex flex-col md:text-xl text-sm md:flex-row">
                  <div className="mx-3">Department:</div>
                  <div className=" text-center font-normal">{department}</div>
                </div>
                <div className="flex flex-col md:text-lg text-sm md:flex-row">
                  <div className="mx-3">Amount:</div>
                  <div className=" text-center font-normal">₹{amount}</div>
                </div>
              </div> */}
            </div>
          </div>
        </>
  )
}

export default WorkshopsDataComponent