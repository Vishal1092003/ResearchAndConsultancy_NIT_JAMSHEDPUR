
import logo from '../../assets/National_Institute_of_Technology,_Jamshedpur_Logo.png'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <Link to={"https://nitjsr.ac.in/"}>
      <img
        src={logo}
        alt="Logo"
        width={100}
        height={100}
        className="w-10 py-3 md:w-24"
      />
    </Link>
  );
}

export default Logo