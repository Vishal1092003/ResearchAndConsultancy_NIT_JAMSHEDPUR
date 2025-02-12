import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CollaborationData from "../Data/CollaborationData.json"
const Collaboration = () => {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <Navbar />
      <div className="p-5 flex justify-center flex-col align-centre ">
        <div className="w-full  h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
          <div className=" font-bold md:text-2xl text-xl">
            Our Collaborations with Academia
          </div>
        </div>
        <div className="p-5">
          {
            CollaborationData.sheet1.map((data, index) => {
              return (
                <div key={index} className="w-full mt-5 rounded-lg shadow-lg flex justify-center items-center bg-orange-100">
                  <div className="p-5 flex items-center justify-between w-full">
                    <div className="text-md">{index+1}.</div>
                  <div className="font-semibold md:text-xl text-lg">
                      {data.MoU_Institute}
                    </div>
                    <div className="text-lg">
                      {data.Date_of_MoU}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collaboration;
