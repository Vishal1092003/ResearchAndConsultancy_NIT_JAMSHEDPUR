import Navbar from "@/components/Navbar/Navbar";
import Tab from "@/components/Tab/Tab";

const Facilities = () => {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>
      <div className="flex justify-center flex-col align-centre text-center ">
        <div className="w-[98%]  h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
          <div className=" font-bold text-2xl">Facilities</div>
        </div>
        <div className="  flex justify-center">
          <div className=" text-4xl p-14 font-bold">Coming Soon...</div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
