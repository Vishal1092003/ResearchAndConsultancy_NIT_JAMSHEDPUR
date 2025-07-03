import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import ReserchAreaData from "../../Data/ReserchAreaData.json";
import { AiFillProfile } from 'react-icons/ai';
import Sidebar from '../Sidebar/Sidebar';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ExpertiseSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false); // Close the sheet on item click
  };

  return (
    <>
      {/* Mobile View: Hamburger menu with Sheet */}
      <div className="block md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center p-2 ml-2 mt-2 hover:bg-gray-100 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open research areas menu"
            >
              <BsThreeDotsVertical className="w-5 h-5 text-gray-600" />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0 overflow-hidden bg-white">
            <SheetHeader className="px-4 py-6 border-b bg-gray-50">
              <SheetTitle className="text-lg sm:text-xl font-bold text-center text-gray-800">
                Research Areas
              </SheetTitle>
            </SheetHeader>

            <SheetDescription className="sr-only">
              Browse through different research areas and select one
            </SheetDescription>

            <div className="flex flex-col h-full overflow-y-auto bg-white">
              <div className="p-4 space-y-1">
                {ReserchAreaData?.researchArea?.length > 0 ? (
                  ReserchAreaData.researchArea.map((item, index) => (
                    <Sidebar
                      key={index}
                      Icon={AiFillProfile}
                      ResarchArea={item.RA}
                      onClick={handleItemClick}
                    />
                  ))
                ) : (
                  <div className="text-gray-500 text-center py-4">
                    No research areas available
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 border-r p-4 bg-white h-full">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Research Areas</h2>
        <div className="space-y-2">
          {ReserchAreaData?.researchArea?.map((item, index) => (
            <Sidebar
              key={index}
              Icon={AiFillProfile}
              ResarchArea={item.RA}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExpertiseSidebar;
