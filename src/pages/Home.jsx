import CarouselComponents from '../components/Carousel/CarouselComponents'
import { HashLink } from 'react-router-hash-link'
import Footer from '../components/Footer/Footer'
import Message from '../components/Message/Message'
import Navbar from '../components/Navbar/Navbar'
import Notice from '../components/Notice/Notice'

import { AbhishekSir, AakashSir, AkanshaMam, DrKanika, SwagatadebSir, AshokSir } from '../assets/index'
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

          <div className="md:p-x-12 md:pb-12 p-0 md:flex-row flex-col gap-x-2 shadow-md flex rounded-lg">
            <div className="w-96 md:w-full flex justify-center items-center flex-col">
              <CarouselComponents />
            </div>
            <div className="w-96 md:w-full ">
              <Notice />
            </div>
          </div>
        </div>

        <div id="directormessage" className="pt-5 px-4 w-full bg-yellow-50/50">
          <div className="min-h-[50vh] flex flex-col justify-start items-center py-8">
            <div className="flex bg-sky-200 w-full shadow-md p-2 mx-4 rounded-lg font-medium text-3xl font-serif justify-center items-center mb-4">
              Director&apos;s Message
            </div>
            <div className="w-full flex justify-center">
              <DirectorMessage />
            </div>
          </div>
        </div>
        <div className="pt-5 px-4 bg-yellow-50/50">
          <div className="min-h-[50vh] flex flex-col justify-start items-center py-8">
            <div
              id="Deanmessage"
              className="flex bg-sky-200 w-full shadow-md text-center p-2 mx-4 rounded-lg font-medium text-3xl font-serif justify-center items-center mb-4"
            >
              Dean&apos;s Message
            </div>
            <div className="w-full flex justify-center">
              <DeanMessage />
            </div>
          </div>
        </div>
        
        {/* Truly Uniform Associate Deans Section */}
        <div className="pt-8 pb-12 bg-yellow-50/50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div
              id="Associatedeans"
              className="bg-sky-200 shadow-lg text-center p-6 mb-12 rounded-xl font-medium text-3xl font-serif"
            >
              Associate Deans
            </div>
            
            {/* CSS Grid with enforced uniform sizing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {/* Uniform Card 1 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-full w-full flex flex-col items-center justify-center p-4">
                  <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                    <Message
                      img={DrKanika}
                      designation1={"Associate Dean"}
                      designation2={"IPR Cell"}
                      message1={null}
                      message2=""
                      name={"Dr. Kanika Prashad"}
                    />
                  </div>
                </div>
              </div>
              
              {/* Uniform Card 2 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-full w-full flex flex-col items-center justify-center p-4">
                  <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                    <Message
                      img={SwagatadebSir}
                      designation1={"Associate Dean"}
                      designation2={""}
                      message1={null}
                      message2=""
                      name={"Dr. Swagatadeb Sahoo"}
                    />
                  </div>
                </div>
              </div>
              
              {/* Uniform Card 3 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:col-span-2 lg:col-span-1 md:justify-self-center">
                <div className="h-full w-full flex flex-col items-center justify-center p-4">
                  <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
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
            </div>
          </div>
        </div>
        
        {/* Truly Uniform Staff Section */}
        <div className="pt-8 pb-12 bg-yellow-50/50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-sky-200 shadow-lg text-center p-6 mb-12 rounded-xl font-medium text-3xl font-serif">
              Administrative Staff
            </div>
            
            {/* CSS Grid with enforced uniform sizing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {/* Uniform Card 1 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-full w-full flex flex-col items-center justify-center p-4">
                  <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                    <Message
                      img={AbhishekSir}
                      designation1={"Accountant"}
                      designation2={""}
                      message1={null}
                      message2=""
                      name={"Abhishek Verma"}
                    />
                  </div>
                </div>
              </div>
              
              {/* Uniform Card 2 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                <div className="h-full w-full flex flex-col items-center justify-center p-4">
                  <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                    <Message
                      img={AakashSir}
                      designation1={"Senior Assistant"}
                      message1={null}
                      message2=""
                      name={"Aakash"}
                    />
                  </div>
                </div>
              </div>
              
              {/* Uniform Card 3 */}
              <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:col-span-2 lg:col-span-1 md:justify-self-center">
                <div className="h-full w-full flex flex-col items-center justify-center p-4">
                  <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                    <Message
                      img={AkanshaMam}
                      designation1={"DEO"}
                      message1={null}
                      message2=""
                      name={"Akansha Kumari"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Home