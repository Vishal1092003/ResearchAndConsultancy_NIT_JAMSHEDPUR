import CarouselComponents from '../components/Carousel/CarouselComponents'
import { HashLink } from 'react-router-hash-link'
import Footer from '../components/Footer/Footer'
import Message from '../components/Message/Message'
import Navbar from '../components/Navbar/Navbar'
import Notice from '../components/Notice/Notice'

import Marquee from "react-fast-marquee";
import { DirectorSir, DeanSir, DrKanika, OmSir, AshokSir, Subhash, RahulMahato, ArunPandit,vikashMeena } from '../assets/index'
import DirectorMessage from "@/components/DirectorMessage/DirectorMessage";
import DeanMessage from "@/components/DeanMessage/DeanMessage";

const Home = () => {

  return (
    <>
      <div className="h-[100vh] w-[100vw]  ">
        <Navbar />
        <div className=" z-10 flex bg-yellow-50/50  justify-center items-center flex-col ">

          {/* director's message dean's message */}
          <div className="py-5 flex gap-5 flex-wrap justify-center ">
            <HashLink to={"./#directormessage"}>
              <div className="md:w-96 w-24 h-14  flex justify-center items-center  rounded-lg  align-centre gap-5 bg-slate-200 md:text-2xl text-md font-semibold md:font-medium border-y-2 hover:shadow-lg transition  duration-200 py-1 px-1   hover: bg-blue-50/50 cursor-pointer">
                <div>
                  {" "}
                  Director&apos;s{" "}
                  <span className=" hidden md:inline">Message</span>
                </div>
              </div>
            </HashLink>
            <div className=" flex justify-center items-center">
              <HashLink to={"./#Deanmessage"}>
                <div className="md:w-96 w-24 h-14   rounded-lg flex items-center justify-center align-centre bg-slate-200 gap-5  md:text-2xl text-md font-semibold md:font-medium border-y-2 hover:shadow-lg transition  duration-200 py-1 px-1   hover: bg-blue-50/50  cursor-pointer">
                  <div>
                    {" "}
                  Dean&apos;s{" "} <span className=" hidden md:inline">Message</span>{" "}
                  </div>
                </div>
              </HashLink>
            </div>
<HashLink to={"./#Associatedeans"}>
  <div className="md:w-96 w-24 h-14 rounded-lg flex items-center justify-center align-centre bg-slate-200 gap-5  md:text-2xl text-md font-semibold md:font-medium border-y-2 hover:shadow-lg transition  duration-200 py-1 px-1   hover: bg-blue-50/50  cursor-pointer">
                  <div>
                    {" "}
                  Associate{" "} <span className=" hidden md:inline">Deans</span>{" "}
                  </div>
                </div>
</HashLink>

          </div>
    {/* <div className='flex'>
      <div className='ml-5'>
         <h1 className='font-bold text-center'>Events: </h1>
      </div>
      <div className='ml-2'>
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
 
  

         
        


          <div className="md:p-x-12 md:pb-12 p-0 md:flex-row flex-col gap-x-2 shadow-md flex rounded-lg">
            <div className="w-96 md:w-full flex justify-center items-center flex-col">
              <CarouselComponents />
            </div>
            <div className="w-96 md:w-full ">
              <Notice />
            </div>
          </div>
        </div>

        <div id="directormessage" className="pt-5 px-4 w-full bg-yellow-50/50 ">
          <div className="min-h-[100vh]  flex flex-col justify-center items-center">
            <div className="flex bg-sky-200 w-full shadow-md p-2 mx-4 rounded-lg  font-medium text-3xl font-serif justify-center items-center">
              Director's Message
            </div>
            <DirectorMessage />
          </div>
        </div>
        <div className="pt-5 px-4 bg-yellow-50/50">
          <div className="min-h-[70vh]  flex md:flex-row flex-col p-3">
            <div
              id="Deanmessage"
              className="flex bg-sky-200 shadow-md text-center p-2 mx-4 rounded-lg  font-medium text-3xl font-serif justify-center items-center"
            >
              Dean's Message
            </div>

            <div>
              <div>
                <DeanMessage />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 bg-yellow-50/50">
          <div className="min-h-[20vh] flex-col flex justify-center items-center  ">
            <div
              id="Associatedeans"
              className="flex w-[97vw] bg-sky-200 shadow-md text-center p-2 mx-4 rounded-lg  font-medium text-3xl font-serif justify-center items-center"
            >
              Associate Deans
            </div>
            <div className="flex md:flex-row flex-col">
              <Message
                img={DrKanika}
                designation1={"Associate Dean"}
                designation2={"IPR Cell"}
                message1={null}
                message2=""
                name={"Dr. Kanika Prashad"}
              />
              <Message
                img={OmSir}
                designation1={"Associate Dean"}
                designation2={""}
                message1={null}
                message2=""
                name={"Dr. Omhari Gupta"}
              />
              <Message
                img={AshokSir}
                designation1={"Associate Dean"}
                designation2={"Collaboration and Entrepreneurship Development"}
                message1={null}
                message2=""
                name={"Dr. Ashok Mandal"}
              />
            </div>
          </div>
        </div>
        <div className="pt-5 bg-yellow-50/50">
          <div className="min-h-[20vh] flex justify-center items-center  ">
            <div className="flex md:flex-row flex-col">
              <Message
                img={ArunPandit}
                designation1={"Accountant"}
                designation2={""}
                message1={null}
                message2=""
                name={"Arun Pandit"}
              />
              <Message
                img={Subhash}
                designation1={"Juniour Assistant"}
                message1={null}
                message2=""
                name={"Subhash Kumar"}
              />
              <Message
                img={vikashMeena}
                designation1={"Juniour Assistant"}
                message1={null}
                message2=""
                name={"Vikas Meena"}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home