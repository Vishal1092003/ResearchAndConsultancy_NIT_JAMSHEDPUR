import logo from '../../assets/logoRC-removebg-preview.png'
import './style.css'
const Dashboard = () => {
    return (<>
        <div className=' w-full h-full flex justify-center items-center '>
            <div className=' shadow-2xl shadow-gray-400 rounded-full w-[70%] md:w-[20%] logo flex justify-center items-center'>
                <img src={logo} alt="" />
            </div>
        </div>
    </>
    )
}

export default Dashboard