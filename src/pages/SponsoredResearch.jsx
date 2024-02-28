import Navbar from '../components/Navbar/Navbar'
import Marquee from "react-fast-marquee";
import SponseredResearchData from '../Data/SponseredResearchData.json'
import SponsoredResearchDataComponent from '../components/SponsoredResearchDataComponent/SponsoredResearchDataComponent'
const SponsoredResearch = () => {
    return (
        <div>
        
        <div className='w-[100vw] h-[100vh]'>
            <Navbar />
               <div className='flex mt-2'>
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
    </div>
            <div className='w-[98%] m-auto h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300'>
                <div className=' font-bold text-2xl'>
                    Sponsored Research
                </div>
            </div>
            <div className=' pb-10'>
                {SponseredResearchData.Sheet.map((item, index) => (<SponsoredResearchDataComponent title={item.TITLE} principalInvestigator={item.PRINCIPALINVESTIGATOR} fundingAgency={item.FUNDINGAGENCY} amount={item.AMOUNT} index={index} key={index} />))}
            </div>
        </div>
        </div>
       
    )
}

export default SponsoredResearch