import { motion } from 'framer-motion'
import Dashboard from '../components/Dashboard/Dashboard'
const LogoPage = () => {
  return (
    <div className='w-[100vw] bg-yellow-50/50 h-[100vh]'>
      <motion.div className='w-full h-full' initial={{ y: -100, rotate: 180, scale: 0 }}
        animate={{ y: 0, rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 50 }}
      >
        <Dashboard />
      </motion.div>
    </div>
  )
}

export default LogoPage