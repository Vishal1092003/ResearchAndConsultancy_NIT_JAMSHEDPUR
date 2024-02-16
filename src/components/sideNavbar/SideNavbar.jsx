import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import logo from '../../assets/logoRC-removebg-preview.png'
import LogoNIT from '../../assets/National_Institute_of_Technology,_Jamshedpur_Logo.png'
import {FaHome,FaLightbulb,FaMicroscope} from 'react-icons/fa'
import {FaUserTie} from 'react-icons/fa6'
import {HiMiniUserGroup} from 'react-icons/hi2'
import {TbUniverse} from 'react-icons/tb'
import {BsFillSignIntersectionFill} from 'react-icons/bs'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Scrolldown from './Scrolldown';

const SideNavbar = () => {
    return (
        <div className='w-full h-12 flex justify-end'>
        <Sheet>
            <SheetTrigger ><AiOutlineMenu className='w-12 h-8' /></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className='flex justify-center  items-center text-md font-bold gap-4'>
                    <img src={logo} width={100} height={100} alt="Logo" className={` w-14  py-3 md:w-28`} />
                        Research and Consultancy 
                        <img src={LogoNIT} alt="Logo" width={100} height={100} className='w-10 py-3 md:w-24' />
                        </SheetTitle>
                    <hr />
                    <div className='w-full h-full'>
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center  ' to="/home">
                            <SheetDescription className='text-lg flex gap-1 justify-center items-center font-semibold ml-5 hover:text-black'>
                               <FaHome /> Home
                            </SheetDescription>
                        </Link>
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center ' to="/expertise">
                            <SheetDescription className='text-lg flex gap-1 justify-center items-center font-semibold ml-5 hover:text-black'>
                               <FaUserTie /> Expertise
                            </SheetDescription>
                        </Link>
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center' to="/sponsoredresearch">
                            <SheetDescription className='text-lg flex gap-1 justify-center items-center font-semibold ml-5 hover:text-black'>
                              <FaMicroscope />  Sponsored Research
                            </SheetDescription>
                        </Link>
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center ' to="/consultancy">
                            <SheetDescription className='text-lg flex gap-1 justify-center items-center font-semibold ml-5 hover:text-black'>
                               <HiMiniUserGroup /> Consultancy
                            </SheetDescription>
                        </Link>
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center ' to="/facilities">
                            <SheetDescription className='text-lg flex gap-1 justify-center items-center font-semibold ml-5  hover:text-black'>
                              <TbUniverse />  Facilities
                            </SheetDescription>
                        </Link>
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center ' to="/patent">
                            <SheetDescription className='text-lg flex gap-1 justify-center items-center  font-semibold ml-5  hover:text-black'>
                               <FaLightbulb /> Patent(IPRCELL)
                            </SheetDescription>
                        </Link>
                        <hr />
                        
                            <SheetDescription className='w-full   rounded-s-full text-xl font-bold ml-5 flex justify-start text-center items-center  hover:text-black'>
                                <Scrolldown />
                            </SheetDescription>
                        
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center ' to="/interdisciplinary">
                            <SheetDescription className='text-lg flex gap-1 justify-center items-center font-semibold ml-5  hover:text-black'>
                               <BsFillSignIntersectionFill /> Interdisciplinary
                            </SheetDescription>
                        </Link>
                        <hr />
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
        </div>

    )
}

export default SideNavbar