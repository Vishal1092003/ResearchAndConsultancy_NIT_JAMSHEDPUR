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
                    Sheet.map((item, index) => (<SponseredResearchCard index={index} year={item.Year_of_Sanction} department={item.Department} title={item.Name_of_Project} principalInvestigator={item.Name_of_PI} fundingAgency={item.Sponsoring_Agency} amount={item.Sanctioned_Amount} key={index} />))
                }
            </Carousel>
        </motion.div>
    )
}

export default Notice