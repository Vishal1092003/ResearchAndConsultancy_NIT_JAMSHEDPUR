import { motion } from 'framer-motion'
import { useMediaQuery } from '@react-hook/media-query'
import Tab from '../Tab/Tab'
import Logo from './LogoNIT'
import LogoRC from './LogoR&C'
import Name from './Name'
import SideNavbar from '../sideNavbar/SideNavbar'
const Navbar = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  return (
    <div className='w-full sticky top-0 z-10 shadow-lg bg-yellow-50'>
      <div className="
    max-w-[2520px]
    mx-auto
    xl:px-20
    md:px-10
    sm:px-2
    px-4
    ">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className='h-full w-full'>
          <div className='flex flex-row justify-between items-center gap-3 md:gap-0'>
            <Logo />
            <Name />
            <LogoRC size={10} />
          </div>
          <hr />
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1.3 }}
          className='h-full w-full '>
          {
            isSmallScreen ? <SideNavbar  /> : <Tab />
          }

        </motion.div>
      </div>
    </div>
  )
}

export default Navbar