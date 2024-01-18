import { Link } from 'react-router-dom'


import './card.scss'
const Card = ({name,photo,designation,department}) => {
    return (
        <Link to={"/teacher"}>
            <div className="faculties"  >
                <div className="card">
                    <div className="image">
                        <img src={photo} alt={name} />
                        <h2 className=' font-medium text-xl text-slate-600/90 '>{name}</h2>
                    </div>
                    <div className="content text-black">
                        <h2 className=' font-medium text-lg '>{name}</h2>
                        <p className= '  text-slate-800 font-medium'>{designation}</p>
                        <h3 className='text-slate-800 font-medium'>{department}</h3>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default Card