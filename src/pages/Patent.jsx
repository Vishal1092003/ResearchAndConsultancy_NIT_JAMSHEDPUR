import Cardpatent from '@/components/Patent/Cardpatent'
import Navbar from '@/components/Navbar/Navbar'
import { Link } from 'react-router-dom'
const Patent = () => {
    return (<>
        <div className="w-[100vw] h-[100vh] ">
        <Navbar />
        <div className="flex justify-center flex-col align-centre text-center ">
        <div className='w-[98%]  h-16 mt-5 rounded-lg shadow-lg flex justify-center items-center bg-sky-300'>
            <div className=' font-bold text-2xl'>
            Patent(IPRCELL)
            </div>
        </div>
        

    </div>
    <div className='w-full h-full p-8 flex flex-wrap gap-10 '>
        <Cardpatent />
        <Cardpatent />
        <Cardpatent />
        <Cardpatent />
        <Cardpatent />
        <Cardpatent />
        

        </div>
        </div>
        </>
    )
}

export default Patent