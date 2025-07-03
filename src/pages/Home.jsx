
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
      <div className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <div className="z-10 flex bg-yellow-50/50 justify-center items-center flex-col px-4">

          {/* director's message dean's message */}
          <div className="py-5 flex gap-5 flex-wrap justify-center max-w-7xl w-full">
            <HashLink to={"./#directormessage"}>
              <div className="md:w-96 w-24 h-14 flex justify-center items-center rounded-lg align-centre gap-5 bg-slate-200 md:text-2xl text-md font-semibold md:font-medium border-y-2 hover:shadow-lg transition duration-200 py-1 px-1 hover:bg-blue-50/50 cursor-pointer">
                <div>
                  Director&apos;s{" "}
                  <span className="hidden md:inline">Message</span>
                </div>
              </div>
            </HashLink>
            <div className="flex justify-center items-center">
              <HashLink to={"./#Deanmessage"}>
                <div className="md:w-96 w-24 h-14 rounded-lg flex items-center justify-center align-centre bg-slate-200 gap-5 md:text-2xl text-md font-semibold md:font-medium border-y-2 hover:shadow-lg transition duration-200 py-1 px-1 hover:bg-blue-50/50 cursor-pointer">
                  <div>
                    Dean&apos;s{" "} <span className="hidden md:inline">Message</span>
                  </div>
                </div>
              </HashLink>
            </div>
            <HashLink to={"./#Associatedeans"}>
              <div className="md:w-96 w-24 h-14 rounded-lg flex items-center justify-center align-centre bg-slate-200 gap-5 md:text-2xl text-md font-semibold md:font-medium border-y-2 hover:shadow-lg transition duration-200 py-1 px-1 hover:bg-blue-50/50 cursor-pointer">
                <div>
                  Associate{" "} <span className="hidden md:inline">Deans</span>
                </div>
              </div>
            </HashLink>
          </div>

          <div className="md:px-12 md:pb-12 p-0 md:flex-row flex-col gap-x-2 shadow-md flex rounded-lg max-w-7xl w-full">
            <div className="w-full md:w-1/2 flex justify-center items-center flex-col">
              <CarouselComponents />
            </div>
            <div className="w-full md:w-1/2">
              <Notice />
            </div>
          </div>
        </div>

        <div id="directormessage" className="pt-5 px-4 w-full bg-yellow-50/50">
          <div className="min-h-[50vh] flex flex-col justify-start items-center py-8 max-w-7xl mx-auto">
            <div className="flex bg-sky-200 w-full shadow-md p-2 rounded-lg font-medium text-3xl font-serif justify-center items-center mb-4">
              Director&apos;s Message
            </div>
            <div className="w-full flex justify-center">
              <DirectorMessage />
            </div>
          </div>
        </div>

        <div className="pt-5 px-4 bg-yellow-50/50">
          <div className="min-h-[50vh] flex flex-col justify-start items-center py-8 max-w-7xl mx-auto">
            <div
              id="Deanmessage"
              className="flex bg-sky-200 w-full shadow-md text-center p-2 rounded-lg font-medium text-3xl font-serif justify-center items-center mb-4"
            >
              Dean&apos;s Message
            </div>
            <div className="w-full flex justify-center">
              <DeanMessage />
            </div>
          </div>
        </div>

        <div className="pt-5 px-4 bg-yellow-50/50">
          <div className="min-h-[20vh] flex flex-col justify-center items-center py-8 max-w-7xl mx-auto">
            <div
              id="Associatedeans"
              className="flex w-full bg-sky-200 shadow-md text-center p-2 rounded-lg font-medium text-3xl font-serif justify-center items-center mb-6"
            >
              Associate Deans
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
              <Message
                img={DrKanika}
                designation1={"Associate Dean"}
                designation2={"IPR Cell"}
                message1={null}
                message2=""
                name={"Dr. Kanika Prashad"}
              />
              <Message
                img={SwagatadebSir}
                designation1={"Associate Dean"}
                designation2={"Research & Development"}
                message1={null}
                message2=""
                name={"Dr. Swagatadeb Sahoo"}
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

        <div className="pt-5 px-4 bg-yellow-50/50">
          <div className="min-h-[20vh] flex flex-col justify-center items-center py-8 max-w-7xl mx-auto">
            <div className="flex w-full bg-emerald-200 shadow-md text-center p-2 rounded-lg font-medium text-2xl font-serif justify-center items-center mb-6">
              Administrative Staff
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
              <Message
                img={AbhishekSir}
                designation1={"Accountant"}
                designation2={"Finance Department"}
                message1={null}
                message2=""
                name={"Abhishek Verma"}
              />
              <Message
                img={AakashSir}
                designation1={"Senior Assistant"}
                designation2={"Administrative Office"}
                message1={null}
                message2=""
                name={"Aakash"}
              />
              <Message
                img={AkanshaMam}
                designation1={"DEO"}
                designation2={"Data Entry Operations"}
                message1={null}
                message2=""
                name={"Akansha Kumari"}
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
