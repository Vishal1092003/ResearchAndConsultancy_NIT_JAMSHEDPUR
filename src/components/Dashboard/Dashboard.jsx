import { Link } from 'react-router-dom'
import logo from '../../assets/logoRC.png'
import './style.css'
import { FaUserAlt } from 'react-icons/fa'
const Dashboard = () => {
    return (<>
        <div className='  w-full h-full flex justify-center items-center '>
            <div className="wrap">
                <Link className=' logoTab flex justify-center items-center ' to={'/home'}>
                    <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute top-[30%] left-[25%]'>
                        <div className=' text-slate-600 hover:text-slate-200'>
                            Home
                        </div>
                    </div>
                </Link>
                <Link className='  logoTab bg-blue-300 flex justify-center items-center' to='/home'>
                    <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute top-[25%] left-[20%]'>
                        <div>
                            <FaUserAlt />
                        </div>
                    </div>
                </Link>
                <Link className=' logoTab flex justify-center items-center' to='/home'>
                    <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute top-[30%] right-[25%]'>
                        <div>
                            <FaUserAlt />
                        </div>
                    </div>
                </Link>
                <Link className=' logoTab flex justify-center items-center' to='/home'>
                    <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute bottom-[30%] left-[25%]'>
                        <div>
                            <FaUserAlt />
                        </div>
                    </div>
                </Link>
                <Link className=' logoTab flex justify-center items-center' to='/home'>
                    <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute bottom-[25%] right-[25%]'>
                        <div>
                            <FaUserAlt />
                        </div>
                    </div>
                </Link>
                <Link className=' logoTab bg-blue-300' to='/home'>
                    <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute bottom-[25%] left-[25%]'>
                        <div>
                            <FaUserAlt />
                        </div>
                    </div>
                </Link>
                <Link to='/home' className=' logoTab bg-blue-300' >
                    <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute bottom-[25%] right-[25%]'>
                        <div>
                            <FaUserAlt />
                        </div>
                    </div>
                </Link>
                <Link to='/home' className=' logoTab bg-blue-300'>
                    <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute top-[25%] left-[45%]'>
                        <div>
                            <FaUserAlt />
                        </div>
                    </div>
                </Link>
                <Link to='/home' className='logoTab'>
                    <img src={logo} alt="" />
                </Link>
            </div>
        </div>
    </>
    )
}

export default Dashboard