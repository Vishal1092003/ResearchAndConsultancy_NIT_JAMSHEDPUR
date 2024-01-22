import CarouselIndustry from "@/components/Collaboration/Industry/CarouselIndustry"
import TableIndustry from "@/components/Collaboration/Industry/TableIndustry"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
const Industry = () => {
    return (
        <div className="w-[100vw] h-[100vh] ">
            <Navbar />
            <div className="w-full ">
                <CarouselIndustry />
            </div>
            <div className="p-5 flex justify-center flex-col align-centre ">
                <div className='w-full  h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300'>
                    <div className=' font-bold text-2xl'>
                        Our Collaborations with Industry
                    </div>
                </div>
                <div className="p-5">
                    <TableIndustry />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Industry