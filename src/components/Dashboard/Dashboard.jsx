import { Link } from 'react-router-dom'
import logo from '../../assets/logoRC.png'
import './style.css'
const Dashboard = () => {
    return (<>
        <div className='  w-full h-full flex justify-center items-center '>
            <div className="wrap">
                <Link className=' logoTab flex justify-center group items-center ' to={'/home'}>
                    <div className='w-[220px] h-[100px]  flex justify-center items-center text-2xl text-white font-bold absolute top-[28%] left-[10%]'>
                        <div className=' -rotate-45 flex gap-1 tracking-wider group-hover:text-white text-slate-600 '>
                            Office Dean
                        </div>
                    </div>
                </Link>
                <Link className='  logoTab bg-blue-300 group  flex justify-center items-center' to='/home'>
                    <div className='w-[300px] h-[100px] flex justify-center items-center text-2xl text-white font-bold  absolute top-[28%] -left-[6%]'>
                        <div className=' -rotate-45 tracking-wider group-hover:text-white text-slate-600 '>
                            Research Expertise
                        </div>
                    </div>
                </Link>
                <Link className=' logoTab flex group justify-center items-center' to='/home'>
                    <div className='w-[220px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute top-[28%] right-[12%]'>
                        <div className=' rotate-45  group-hover:text-white text-slate-600 '>
                            Area of Research
                        </div>
                    </div>
                </Link>
                <Link className=' logoTab flex group justify-center items-center' to='/home'>
                    <div className='w-[240px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute bottom-[30%] left-[6%]'>
                        <div className=' rotate-45  group-hover:text-white text-slate-600 '>
                            Sponsored Research
                        </div>
                    </div>
                </Link>
                <Link className=' logoTab group flex justify-center items-center' to='/home'>
                    <div className='w-[260px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute bottom-[30%] right-[4%]'>
                        <div className=' -rotate-45  group-hover:text-white text-slate-600 '>
                            Research Consultancy
                        </div>
                    </div>
                </Link>
                <Link className=' logoTab group bg-blue-300' to='/home'>
                    <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute bottom-[25%] left-[25%]'>
                        <div className=' rotate-45  group-hover:text-white text-slate-600 '>
                            Collaboration
                        </div>
                    </div>
                </Link>
                <Link to='/home' className=' logoTab group bg-blue-300' >
                    <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute bottom-[25%] right-[25%]'>
                        <div className=' -rotate-45  group-hover:text-white text-slate-600 '>
                            Patent(IPRCELL)
                        </div>
                    </div>
                </Link>
                <Link to='/home' className=' logoTab group bg-blue-300'>
                    <div className='w-[220px] h-[100px] flex justify-center items-center text-2xl text-white font-bold absolute top-[28%] left-[23%]'>
                        <div className=' rotate-45  group-hover:text-white text-slate-600 '>
                            Research Facilities
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