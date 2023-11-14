import { Link } from 'react-router-dom'
import { } from 'react-icons/ri'
const Tab = () => {
    return (
        <div className='flex justify-between h-10 px-5 py-6  items-center'>
            <Link className=' transition  duration-200  py-1 px-2 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold ' >
               Office Dean
            </Link>
            <Link className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Area of Research  
            </Link>
            <Link className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Sponsored Research
            </Link>
            <Link className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
             Consultancy
            </Link>
            <Link className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold 'to={'/Profile'}>
             Expertise
            </Link>
            <Link className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
             Facilities
            </Link>
            <Link className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Patent(IPRCELL)
            </Link>
            <Link className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Collaboration
            </Link>
            <Link className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
               Interdisciplinary Action 
            </Link>
           
        </div>
    )
}

export default Tab