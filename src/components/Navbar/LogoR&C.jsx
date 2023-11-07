import { Link } from 'react-router-dom'
import logo from '../../assets/logoRC-removebg-preview.png'
const LogoRC = () => {
    return (
        <Link to={"/"}>
            <img src={logo} width={100} height={100} alt="Logo" className={` w-14  py-3 md:w-28`} />
        </Link>
    )
}

export default LogoRC