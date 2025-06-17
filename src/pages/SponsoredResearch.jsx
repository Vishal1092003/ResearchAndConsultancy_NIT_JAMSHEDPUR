import Navbar from '../components/Navbar/Navbar'
import SponseredResearchData from '../Data/SponseredResearchData.json'
import SponsoredResearchDataComponent from '../components/SponsoredResearchDataComponent/SponsoredResearchDataComponent'
const SponsoredResearch = () => {
    return (
        <div>

            <div className=''>
                <Navbar />
                {/* <div className='flex mt-2'>
      <div className='ml-5  '>
         <h1 className='font-bold text-center'>Events: </h1>
      </div>
      <div className='ml-1'>
        <Marquee>

   <div className='ml-5'>
       <p>
      Upcoming: Workshop of Educational Outreach Program of Bureau of Indian Standards on 21/02/2024 
            <a href='' className='text-blue-500'> view</a>
    </p>
    
   </div>
   
    <div className='ml-5'>
     <p>
      Past-Events: Workshop of Educational Outreach Program of Bureau of Indian Standards on 21/02/2024 
      <a href='' className='text-blue-500'> view</a>
    </p>
    </div>
    
  

 </Marquee>
 
      </div>
    </div> */}
                <div className='m-auto p-12 shadow-lg flex justify-center items-center bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 text-white'>
                    <div className='font-bold text-5xl text-center'>
                        Sponsored Research
                    </div>
                </div>
                <div className='pb-12 px-12'>
                    {SponseredResearchData.Sheet.map((item, index) => (<SponsoredResearchDataComponent index={index} year={item.Year_of_Sanction} department={item.Department} title={item.Name_of_Project} principalInvestigator={item.Name_of_PI} fundingAgency={item.Sponsoring_Agency} amount={item.Sanctioned_Amount} key={index} />))}
                </div>
            </div>
        </div>

    )
}

export default SponsoredResearch