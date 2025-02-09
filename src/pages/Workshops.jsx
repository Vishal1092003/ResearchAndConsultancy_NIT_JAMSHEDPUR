import Navbar from '@/components/Navbar/Navbar'
import WorkshopData from '../Data/WorkshopData.json';
import WorkshopsDataComponent from '@/components/Workshops/WorkshopsDataComponent';

const Workshops = () => {
    return (
        <>
            <div className="min-h-screen w-full">
                <Navbar />
                <div className="flex flex-col items-center p-4 w-full">
                   
                    <div className='w-full  h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300'>
                        <h1 className='font-bold text-2xl'>
                        Workshops/Conferences/STC/STTP/FDP to be held in 2025
                        </h1>
                    </div>

                
                    <div className="w-full  mt-8 space-y-4">
                        {WorkshopData.Sheet1.map((item, index) => (
                            <WorkshopsDataComponent
                                key={item.sl_no}
                                index={index}
                                Subject={item.subject}
                                Department={item.department}
                                Coordinators={item.coordinators}
                                Date={item.date} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Workshops;