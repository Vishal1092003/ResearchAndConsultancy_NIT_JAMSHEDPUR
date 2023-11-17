import { FaArrowDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Tab = () => {
    return (
        <div className=' hidden md:flex justify-between h-10 px-5 py-6  items-center'>
            <Link to={'/home'} className=' transition  duration-200  py-1 px-2 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold ' >
                Home
            </Link>
            <Link to={'/expertise'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Expertise
            </Link>
            <Link to={'/sponsoredresearch'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Sponsored Research
            </Link>
            <Link to={'/consultancy'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Consultancy
            </Link>
            <Link to={'/facilities'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Facilities
            </Link>
            <Link to={'/patent'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Patent(IPRCELL)
            </Link>
            <div className=' hover:rounded-md transition flex-row flex group duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 cursor-pointer text-slate-700/80 font-semibold '>
                <div>
                    Collaboration
                </div>
                <div className='flex group-hover:-rotate-180 transition duration-500 justify-center items-center'>
                    <FaArrowDown />
                </div>
                <div
                    className='  group-hover:flex flex-col bg-yellow-100  absolute top-[11.4rem] hidden'>
                    <Link to={'/industry'} className='py-2 px-5 font-medium text-md text-center rounded-lg hover:bg-amber-200 text-slate-600 hover:text-black cursor-pointer tracking-wide'>Industry</Link>
                    <Link to={'/academia'} className='py-2 px-5 font-medium text-md text-center rounded-lg hover:bg-amber-200 text-slate-600 hover:text-black cursor-pointer tracking-wide'>Academia</Link>
                    <Link to={'/researchinstitute'} className='py-2 px-5 font-medium text-md text-center rounded-lg hover:bg-amber-200 text-slate-600 hover:text-black cursor-pointer'>Research Institute</Link>
                </div>
            </div>
            <Link to={'/interdisciplinary'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Interdisciplinary
            </Link>

        </div>
    )
}

export default Tab