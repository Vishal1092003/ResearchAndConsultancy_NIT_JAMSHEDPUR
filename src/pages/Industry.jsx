import TableIndustry from "@/components/Collaboration/Industry/TableIndustry";
import Navbar from "@/components/Navbar/Navbar";
import Tab from "@/components/Tab/Tab";
import Footer from "@/components/Footer/Footer";
const Industry = () => {
  return (
    <div className="w-[100vw] h-[100vh] ">
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      <div className="p-5 flex justify-center flex-col align-centre ">
        <div className="w-full  h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300">
          <div className=" font-bold text-xl md:text-2xl">
            Our Collaborations with Industry
          </div>
        </div>
        <div className="p-5">
          <TableIndustry />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Industry;
