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
  const [open, setOpen] = useState(false); // Controls Sheet open state

  const handleItemClick = () => {
    setOpen(false); // Closes Sheet when an item is clicked
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b shadow-sm">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">ResearchApp</div>

        {/* Hamburger (visible on small screens) */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <BsThreeDotsVertical className="w-6 h-6 cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle className="text-center text-xl font-bold">
                  Research Areas
                </SheetTitle>
                <hr />
                <SheetDescription>
                  <div className="p-2">
                    {ReserchAreaData.resarchArea.map((item, index) => (
                      <Sidebar
                        Icon={AiFillProfile}
                        ResarchArea={item.RA}
                        key={index}
                        onClick={handleItemClick}
                      />
                    ))}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Permanent Sidebar for md+ screens */}
      <div className="hidden md:block w-64 border-r h-screen p-4">
        <h2 className="text-xl font-bold mb-4">Research Areas</h2>
        {ReserchAreaData.resarchArea.map((item, index) => (
          <Sidebar
            Icon={AiFillProfile}
            ResarchArea={item.RA}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSidebar;
