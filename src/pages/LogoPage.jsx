import { motion } from 'framer-motion'
import Dashboard from '../components/Dashboard/Dashboard'
const LogoPage = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <motion.div className='w-full h-full' initial={{ rotate: 180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 100 }}
      >
        <Dashboard />
      </motion.div>
    </div>
  )
}

export default LogoPage