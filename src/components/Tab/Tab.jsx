import React from 'react'
import { Link } from 'react-router-dom'
import { } from 'react-icons/ri'
const Tab = () => {
    return (
        <div className='flex justify-between h-10 px-5 py-6  items-center'>
            <Link className=' cursor-pointer text-slate-700/80 font-semibold '>
                Area of Research
            </Link>
            <Link className=' cursor-pointer text-slate-700/80 font-semibold'>
                Office Dean
            </Link>
            <Link className=' cursor-pointer text-slate-700/80 font-semibold'>
                Sponsored Research
            </Link>
            <Link className=' cursor-pointer text-slate-700/80 font-semibold'>
                Research Consultancy
            </Link>
            <Link className=' cursor-pointer text-slate-700/80 font-semibold'>
                Research Expertise
            </Link>
            <Link className=' cursor-pointer text-slate-700/80 font-semibold'>
                Research Facilities
            </Link>
            <Link className=' cursor-pointer text-slate-700/80 font-semibold'>
                Patent(IPRCELL)
            </Link>
            <Link className=' cursor-pointer text-slate-700/80 font-semibold'>
                Collaboration
            </Link>
        </div>
    )
}

export default Tab