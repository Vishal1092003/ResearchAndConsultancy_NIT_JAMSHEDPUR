import Navbar from '../components/Navbar/Navbar'
import SponseredResearchData from '../Data/SponseredResearchData.json'
import SponsoredResearchDataComponent from '../components/SponsoredResearchDataComponent/SponsoredResearchDataComponent'
const SponsoredResearch = () => {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <Navbar />
            <div className='w-[98%] m-auto h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300'>
                <div className=' font-bold text-2xl'>
                    Sponsored Research
                </div>
            </div>
            <div className=' pb-10'>
                {SponseredResearchData.Sheet.map((item, index) => (<SponsoredResearchDataComponent title={item.TITLE} principalInvestigator={item.PRINCIPALINVESTIGATOR} fundingAgency={item.FUNDINGAGENCY} amount={item.AMOUNT} index={index} key={index} />))}
            </div>
        </div>
    )
}

export default SponsoredResearch