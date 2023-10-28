import { Link } from 'react-router-dom'
import logo from '../../assets/logoRC.png'
import './style.css'
const Dashboard = () => {
    return (<>
        <div className='  w-full h-full flex justify-center items-center '>
            <div className="wrap">
                <Link href="#"></Link>
                <Link className=' bg-blue-300' href="#"></Link>
                <Link href="#"></Link>
                <Link href="#"></Link>
                <Link href="#"></Link>
                <Link className=' bg-blue-300' href="#"></Link>
                <Link className=' bg-blue-300' href="#"></Link>
                <Link className=' bg-blue-300' href="#"></Link>
                <Link href="">
                    <img src={logo} alt="" />
                </Link>
            </div>
        </div>
    </>
    )
}

export default Dashboard