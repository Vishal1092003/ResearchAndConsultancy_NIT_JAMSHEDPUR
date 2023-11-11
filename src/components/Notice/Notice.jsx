'use client'
import { Carousel } from 'react-responsive-carousel'
import '../../App.css'
import { Sheet } from '../../Data/SponseredResearchData.json'
import SponseredResearchCard from '../SponseredResearchCard/SponseredResearchCard'
const Notice = () => {
    return (
        <div className='w-full'>
            <div className='bg-white overflow-hidden no-scrollbar'>
                <Carousel showIndicators={false} className='md:w-[700px] rounded-xl w-full' useKeyboardArrows showStatus={false} swipeable transitionTime={800} autoPlay showThumbs={false} infiniteLoop>
                    {
                        Sheet.map((item, index) => (<SponseredResearchCard title={item.TITLE} principalInvestigator={item.PRINCIPALINVESTIGATOR} fundingAgency={item.FUNDINGAGENCY} amount={item.AMOUNT} key={index} />))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Notice