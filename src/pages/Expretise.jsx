
import Card from "../components/Teacher/CardExpretise"
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"
// import Profile from "../components/Teacher/Profile"
import CarouselComponents from "../components/Carousel/CarouselComponents"
import { AiFillProfile } from "react-icons/ai"
import ReserchAreaData from "../Data/ReserchAreaData.json"
import TeacherData from "../Data/TeacherData.js";
import Footer from "@/components/Footer/Footer"
import ExpertiseNavbar from "@/components/Expertise/ExpertiseNavbar"

const Expretise = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh]">
        
         <ExpertiseNavbar />  
        
      

        <div className="md:flex  bg-yellow-50/50 mt-5 md:mt-0 ">       
        
          <div className="w-[20%] m-3 hidden md:block ">
            <div className="w-full text-center p-3   font-medium text-xl rounded-xl bg-sky-300">
              Research Area
            </div>
            
              
            <div className="p-4 ">
              {ReserchAreaData.resarchArea.map((item, index) => (
                <Sidebar
                  Icon={AiFillProfile}
                  ResarchArea={item.RA}
                  key={index}
                />
              ))}
            </div>
            
            
          </div>
          
          <div className=" border-l-2 border-sky-100 m-2"></div>
          <div className="w-full pl-8 pr-8 md:w-[80%] m-3">
          <div className="md:p-12  w-80 md:w-full flex justify-center items-center flex-col">
               {/* <CarouselComponents />  */}
            </div>
            <div className="w-full text-center p-3 font-semibold text-2xl rounded-xl bg-sky-300 ">
              Professors
            </div>
            <div className="flex justify-center items-center flex-col md:flex-row mt-5 pl-5 gap-10 md:gap-20  flex-wrap  ">
              {TeacherData.DataSheet.map((item, id) => (
                <Card
                  name={item.NAME}
                  photo={item.PHOTO}
                  designation={item.DESIGNATION}
                  department={item.DEPARTMENT}
                  key={id}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Expretise