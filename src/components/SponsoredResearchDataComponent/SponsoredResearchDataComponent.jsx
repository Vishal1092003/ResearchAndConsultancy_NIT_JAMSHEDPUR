import { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa6';
import { motion } from 'framer-motion'
const SponsoredResearchDataComponent = ({ index, title, principalInvestigator, fundingAgency, amount }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <div onClick={() => { setIsOpen(!isOpen) }} className='w-[98%] m-auto h-16 mt-4 rounded-t-lg shadow-lg flex justify-center items-center bg-amber-50'>
            <div className='flex justify-between mx-10 items-center w-full  '>
                <div className=' font-semibold text-xl flex justify-center items-center'>
                    <div className='mx-3'>
                        {index + 1}.
                    </div>
                    <div className=''>
                        {title}
                    </div>
                </div>
                <motion.div whileTap={{ scale: 0.8 }} >
                    <FaArrowDown size={20} className={`${isOpen ? `rotate-180 scale-110` : `rotate-0`} transition duration-300`} />
                </motion.div>
            </div>
        </div>
        <div className={`${isOpen ? 'h-[15vh] ' : 'h-0 '} shadow-lg rounded-b-lg w-[98%] m-auto  flex-col  transition-all duration-300  bg-amber-100`}>
            <div className={`${isOpen ? 'flex ' : 'hidden '} font-semibold text-xl justify-around items-center h-full w-full`}>
                <div className=' flex flex-col md:text-xl text-sm md:flex-row'>
                    <div className='mx-3 '>
                        Principal Investigator:
                    </div>
                    <div>
                        {principalInvestigator}
                    </div>
                </div>
                <div className=''>
                    Funding Agency: {fundingAgency}
                </div>
                <div className=''>
                    Amount: {amount}
                </div>
            </div>
        </div>
    </>
    )
}

export default SponsoredResearchDataComponent