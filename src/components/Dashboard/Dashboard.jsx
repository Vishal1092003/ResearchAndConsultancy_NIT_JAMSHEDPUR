import { Link } from 'react-router-dom'
import logo from '../../assets/logoRC.png'
import './style.css'
import { motion } from 'framer-motion'
const Dashboard = () => {
    return (<>
        <div className='  w-full h-full flex justify-center items-center '>
            <div className="wrap">
                {/* Office Dean */}
                <Link className=' logoTab flex justify-center group items-center hover:invert ' to={'/home'}>
                </Link>
                {/* Research Expertise */}
                <Link className='  logoTab bg-blue-300 group  flex justify-center items-center  hover:invert' to='/home'>
                </Link>
                {/* Area of Research */}
                <Link className=' logoTab flex group justify-center items-center hover:invert' to='/home'>
                </Link>
                {/* Sponsored Research */}
                <Link className=' logoTab flex group justify-center items-center hover:invert' to='/home'>
                </Link>
                {/* Research Consultancy */}
                <Link className=' logoTab group flex justify-center items-center hover:invert' to='/home'>
                </Link>
                {/* Collaboration */}
                <Link className=' logoTab group bg-blue-300 hover:invert' to='/home'>
                </Link>
                {/* Patent */}
                <Link to='/home' className=' logoTab group bg-blue-300 hover:invert' >
                </Link>
                {/* Research Facilities */}
                <Link to='/home' className=' logoTab group bg-blue-300 hover:invert'>
                    {/* Center logo */}
                </Link>
                <div className='logoTab '>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    </>
    )
}

export default Dashboard