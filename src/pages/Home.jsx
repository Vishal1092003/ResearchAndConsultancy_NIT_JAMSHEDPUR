import CarouselComponents from '../components/Carousel/CarouselComponents'
import Footer from '../components/Footer/Footer'
import Message from '../components/Message/Message'
import Navbar from '../components/Navbar/Navbar'
import Notice from '../components/Notice/Notice'
import { motion } from 'framer-motion'
const Home = () => {
  return (<>
    <Navbar />
    <div className='h-[80vh]  w-[100vw]'>
      <div className=' flex bg-yellow-50/50  justify-center items-center '>
        <div className='p-12 md:flex-row flex-col gap-x-2 shadow-md flex rounded-lg'>
          <CarouselComponents />
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", delay: ".2" }}
          >
            <div className='bg-yellow-300 mt-2 p-2 text-center'>
              Sponsored Research Projects
            </div>
            <Notice />
          </motion.div>
        </div>
      </div>
      <div
        className='pt-5 px-4 bg-yellow-50/50 '>
        <div className='min-h-[70vh]'>
          {/* <div className='flex bg-sky-200 shadow-md p-2 mx-4 rounded-lg font-extrabold text-3xl font-serif justify-center items-center'>
            Director Message
          </div> */}
          <div className='w-full bg-sky-200 px-2 py-4 text-center text-2xl underline underline-3'>
            Director Message
          </div>
          <Message />
        </div>
      </div>
      <div className='pt-5 px-4 bg-yellow-50/50'>
        <div className='min-h-[70vh] flex'>
          <div className='flex my-2 bg-sky-200 p-2 underline underline-2 text-2xl font-serif justify-center items-center text-center'>
            Dean Message
          </div>
          <div>
            <Message />
          </div>
        </div>
      </div>
      <div className='pt-5 bg-yellow-50/50'>
        <div className='min-h-[80vh]  '>
          <div className='flex my-2 bg-sky-200 px-2 py-4 mx-4 text-center text-2xl underline underline-2 font-serif justify-center items-center'>
            Professor
          </div>
          <div className='flex'>
            <Message />
            <Message />
          </div>
        </div>
      </div>
      <div className='pt-5 bg-yellow-50/50'>
        <div className='min-h-[80vh] flex '>
          <div className=''>
            <Message />
            <Message />
          </div>
          <div className='flex my-2 bg-sky-200 px-4 mx-4 text-center underline underline-2 text-3xl font-serif justify-center items-center'>
            Assistance Professer
          </div>
        </div>
      </div>
      <Footer />
    </div >
  </>
  )
}

export default Home