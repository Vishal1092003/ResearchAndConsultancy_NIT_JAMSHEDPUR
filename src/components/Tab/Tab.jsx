import { FaArrowDown } from 'react-icons/fa6'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Tab = () => {
    return (
        <div className=' hidden md:flex justify-between h-10 px-5 py-6  items-center'>
            <motion.div whileHover={{ scale: 1.1 }}>
            <HashLink to={'/home'} className=' transition  duration-200  py-1 px-2 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold ' >
                Home
            </HashLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={'/expertise'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Expertise
                </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={'/sponsoredresearch'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Sponsored Research
                </Link></motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={'/consultancy'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Consultancy
                </Link></motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={'/facilities'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Facilities
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={'/patent'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Patent(IPRCELL)
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={'/collaboration'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
            Collaboration
                </Link>
            </motion.div>
            {/* <div className=' hover:rounded-md transition flex-row flex group duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 cursor-pointer text-slate-700/80 font-semibold '>
                <div>
                    Collaboration
                </div> */}
                {/* <div className='flex group-hover:-rotate-180 transition duration-500 justify-center items-center'>
                    <FaArrowDown />
                </div> */}
                {/* <div
                    className='  group-hover:flex flex-col bg-yellow-100  absolute top-[11.4rem] hidden'>
                    <Link to={'/academia'} className='hover:scale-105 py-2 px-5 hover:shadow-xl transition duration-100 hover:shadow-amber-200 font-medium text-md text-center rounded-lg hover:bg-amber-200 text-slate-600 hover:text-black cursor-pointer tracking-wide'>Academia</Link>
                    <Link to={'/industry'} className=' hover:scale-105 py-2 px-5 hover:shadow-xl transition duration-100 hover:shadow-amber-200 font-medium text-md text-center rounded-lg hover:bg-amber-200 text-slate-600 hover:text-black cursor-pointer tracking-wide'>Industry</Link>
                    <Link to={'/researchinstitute'} className=' hover:scale-105 hover:shadow-xl transition duration-100 hover:shadow-amber-200 py-2 px-5 font-medium text-md text-center rounded-lg hover:bg-amber-200 text-slate-600 hover:text-black cursor-pointer'>Research Institute</Link>
                </div> */}
            {/* </div> */}
            <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={'/workshops'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Workshops/Conferences
            </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={'/Events'} className=' transition  duration-200 py-1 px-1 hover:text-black/80  hover:bg-slate-200 rounded-md cursor-pointer text-slate-700/80 font-semibold '>
                Events
            </Link>
            </motion.div>
        </div>
    )
}

export default Tab