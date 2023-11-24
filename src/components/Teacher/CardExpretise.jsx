import { Link } from 'react-router-dom'
import pht from "../../assets/AshokSir.png";
import './card.scss'
const Card = () => {
    return (
        <Link to={"/Biodata"} className="link  text-black">
            <div className="faculties"  >
                <div className="card">
                    <div className="image">
                        <img src={pht} alt="ashoksir" />
                        <h2 className=' font-medium text-xl text-slate-600/90'>Ashok Kumar Mandal</h2>
                    </div>
                    <div className="content text-black">
                        <h2 className='text-lg '>Ashok Kumar Mandal</h2>
                        <p className='text-slate-800 font-medium'>Assistant Professor</p>
                        <h3 className='text-slate-800 font-medium'>Mechanical Engineering</h3>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default Card