import CarouselReserchInstitute from "@/components/Collaboration/Reserch Institute/CarouselReserchInstitute"
import TableReserchInstitute from "@/components/Collaboration/Reserch Institute/TableReserchInstitute"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"

const ResearchInstitute = () => {
    return (
        <div className="w-[100vw] h-[100vh] ">
            <Navbar />
            <div >
                <CarouselReserchInstitute />
            </div>
            <div className="p-5 flex justify-center flex-col align-centre ">
                <div className='w-full  h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300'>
                    <div className=' font-bold text-2xl'>
                        Our Collaborations with Research Institute
                    </div>
                </div>
                <div className="p-5">
                    <TableReserchInstitute />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ResearchInstitute