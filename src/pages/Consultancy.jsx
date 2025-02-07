import Navbar from '../components/Navbar/Navbar'
import SponseredResearchData from '../Data/SponseredResearchData.json'
import SponsoredResearchDataComponent from '../components/SponsoredResearchDataComponent/SponsoredResearchDataComponent'
const Consultancy = () => {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <Navbar />
            <div className='w-[98%] m-auto h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300'>
                <div className=' font-bold text-2xl'>
                    Consultancy
                </div>
            </div>
            <div className=' pb-10'>
                {SponseredResearchData.Sheet.map((item, index) => (<SponsoredResearchDataComponent index={index} year={item.Year_of_Sanction} department={item.Department} title={item.Name_of_Project} principalInvestigator={item.Name_of_PI} fundingAgency={item.Sponsoring_Agency} amount={item.Sanctioned_Amount} key={index} />))}
            </div>
        </div>
    )
}

export default Consultancy