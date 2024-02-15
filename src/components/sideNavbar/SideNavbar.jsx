import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import LogoRC from '../Navbar/LogoR&C'
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
                    <SheetTitle className='flex justify-center  items-center text-2xl font-bold'>
                        <LogoRC />
                        Research and Consultancy</SheetTitle>
                    <hr />
                    <div className='w-full h-full'>
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center  ' to="/">
                            <SheetDescription className='text-xl font-bold ml-5 hover:text-black'>
                                Home
                            </SheetDescription>
                        </Link>
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center ' to="/expertise">
                            <SheetDescription className='text-xl font-bold ml-5 hover:text-black'>
                                Expertise
                            </SheetDescription>
                        </Link>
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center' to="/sponsoredresearch">
                            <SheetDescription className='text-xl font-bold ml-5 hover:text-black'>
                                Sponsored Research
                            </SheetDescription>
                        </Link>
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center ' to="/consultancy">
                            <SheetDescription className='text-xl font-bold ml-5 hover:text-black'>
                                Consultancy
                            </SheetDescription>
                        </Link>
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center ' to="/facilities">
                            <SheetDescription className='text-xl font-bold ml-5  hover:text-black'>
                                Facilities
                            </SheetDescription>
                        </Link>
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center ' to="/patent">
                            <SheetDescription className='text-xl font-bold ml-5  hover:text-black'>
                                Patent(IPRCELL)
                            </SheetDescription>
                        </Link>
                        <hr />
                        
                            <SheetDescription className='w-full   rounded-s-full text-xl font-bold ml-5 flex justify-start text-center items-center  hover:text-black'>
                                <Scrolldown />
                            </SheetDescription>
                        
                        <hr />
                        <Link className='w-full h-12 rounded-s-full flex justify-start text-center items-center ' to="/interdisciplinary">
                            <SheetDescription className='text-xl font-bold ml-5  hover:text-black'>
                                Interdisciplinary
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