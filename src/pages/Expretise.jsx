
import Card from "../components/Teacher/CardExpretise"
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"
import Profile from "../components/Teacher/Profile"
import { AiFillProfile } from "react-icons/ai"
const resarchArea = [
    { "RA": "Robotics" },
    { "RA": "Energy" },
    { "RA": "Material Scince" },
    { "RA": "Biological science" },
    { "RA": "Engineering" },
    { "RA": "Chemistry" },
    { "RA": "Psycology" },
    { "RA": "Artificial Inteligence" },
    { "RA": "Computer Science" },
    { "RA": "Micro biology" },
    { "RA": "Data science" },
    { "RA": "Earth science" },
    { "RA": "Technology" },
    { "RA": "Microbiology" },
]
const Expretise = () => {
    return (
        <>
            <div className="w-[100vw] h-[100vh]">
                <Navbar />
                <div className="flex bg-yellow-50/50">
                    <div className="w-[20%] m-3">
                        <div className="w-full text-center p-3  font-medium text-xl rounded-xl bg-sky-300">
                            Resarch Area
                        </div>
                        <div className="p-4 ">
                            {
                                resarchArea.map((item, index) => (<Sidebar Icon={AiFillProfile} ResarchArea={item.RA} key={index} />))
                            }</div>
                    </div>
                    <div className=" border-l-2 border-sky-100 m-2">

                    </div>
                    <div className="w-[80%] m-3">
                        <div className="w-full text-center p-3 font-semibold text-2xl rounded-xl bg-sky-300">
                            Professors
                        </div>
                        <div className="flex mt-5 gap-5 flex-wrap">
                            {
                                resarchArea.map((item, index) => (<div key={index} className="w-[20%] m-3"><Card /></div>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expretise