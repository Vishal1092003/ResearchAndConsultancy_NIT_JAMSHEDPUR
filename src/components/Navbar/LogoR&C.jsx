import { Link } from 'react-router-dom'
import logo from '../../assets/logoRC.png'
const LogoRC = () => {
    return (
        <Link to={"/"}>
            <img src={logo} alt="Logo" className={` w-14  py-3 md:w-24`} />
        </Link>
    )
}

export default LogoRC