{/*responisveness not fixed */}
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import ReserchAreaData from "../../Data/ReserchAreaData.json"
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
const ExpertiseSidebar = ({ ResarchArea, Icon }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger><BsThreeDotsVertical className='w-10 h-6 ml-4 mt-3 md:hidden' /></SheetTrigger>
        <SheetContent side='left' >
          <SheetHeader>
            <SheetTitle className='flex justify-center  items-center text-xl font-bold gap-4'>
              Research Areas
            </SheetTitle>
            <hr />
            <SheetDescription>
              <div className="p-4">
                {ReserchAreaData.resarchArea.map((item, index) => (
                  <Sidebar
                    Icon={AiFillProfile}
                    ResarchArea={item.RA}
                    key={index}
                  />
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default ExpertiseSidebar;