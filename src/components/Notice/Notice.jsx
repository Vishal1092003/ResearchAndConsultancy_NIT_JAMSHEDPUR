'use client'
import { Carousel } from 'react-responsive-carousel'
import '../../App.css'
import { Sheet } from '../../Data/SponseredResearchData.json'
import SponseredResearchCard from '../SponseredResearchCard/SponseredResearchCard'
import { motion } from 'framer-motion'
const Notice = () => {
    return (
        <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", delay: ".2" }}
        >
            <div className='bg-sky-200 text-black mt-2 font-semibold text-lg md:text-2xl p-2 text-center'>
                Sponsored Research Projects
            </div>
            <Carousel showIndicators={false} className='md:max-w-[700px] rounded-xl' useKeyboardArrows showStatus={false} swipeable transitionTime={800} autoPlay showThumbs={false} infiniteLoop>
                    {
                        Sheet.map((item, index) => (<SponseredResearchCard title={item.TITLE} principalInvestigator={item.PRINCIPALINVESTIGATOR} fundingAgency={item.FUNDINGAGENCY} amount={item.AMOUNT} key={index} />))
                    }
            </Carousel>
        </motion.div>
    )
}

export default Notice