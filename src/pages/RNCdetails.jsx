import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
import React from 'react'

const RNCdetails = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="overflow-x-hidden">
          <Navbar />
        </div>
        <div className="sticky top-0 z-10 bg-white shadow-md">
          <Tab />
        </div>
        <div className="flex flex-col items-center p-4 w-full">
          <div className="w-full  h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
            <h1 className="font-bold text-2xl">RNC Details</h1>
          </div>

          <div className="w-full  mt-8 space-y-4">
            {/* Content for RNC details will go here */}
            <div className="text-center text-4xl p-14 font-bold">Coming Soon...</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RNCdetails
