import TableAcademia from "@/components/Collaboration/Academia/TableAcademia";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Tab from "@/components/Tab/Tab"
const Academia = () => {
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
          <div className=" font-bold md:text-2xl text-xl">
            Our Collaborations with Academia
          </div>
        </div>
        <div className="p-5">
          <TableAcademia />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Academia;
