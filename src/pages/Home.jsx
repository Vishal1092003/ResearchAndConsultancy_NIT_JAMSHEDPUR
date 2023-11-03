import CarouselComponents from '../components/Carousel/CarouselComponents'
import Footer from '../components/Footer/Footer'
import Message from '../components/Message/Message'
import Navbar from '../components/Navbar/Navbar'
import Notice from '../components/Notice/Notice'
const Home = () => {
  return (<>

    <Navbar />
    <div className='h-[80vh] w-[100vw]'>
      <div className=' flex bg-slate-50 justify-center items-center '>
        <div className=' min-h-[74vh] md:flex-row flex-col shadow-md flex shadow-blue-300 rounded-lg m-3'>
          <CarouselComponents />
          <div>
            <div className='py-5 flex justify-center font-bold text-2xl'>
              Notice
            </div>
            <Notice />
          </div>
        </div>
      </div>
      <div className='pt-5'>
        <div className='min-h-[80vh] '>
          <div className='flex bg-sky-300 shadow-md p-2 mx-4 rounded-lg font-extrabold text-3xl font-serif justify-center items-center'>
            Director Message
          </div>
          <Message />
          <Message />
        </div>
      </div>
      <div className='pt-5'>
        <div className='min-h-[80vh] flex'>
          <div className='flex my-2 bg-sky-300 shadow-md p-2 mx-4 text-center rounded-lg font-extrabold text-3xl font-serif justify-center items-center'>
            Dean Message
          </div>
          <div>
            <Message />
            <Message />
          </div>
        </div>
      </div>
      <div className='pt-5'>
        <div className='min-h-[80vh]  '>
          <div className='flex my-2 bg-sky-300 shadow-md p-2 mx-4 text-center rounded-lg font-extrabold text-3xl font-serif justify-center items-center'>
            Professor
          </div>
          <div className='flex'>
            <Message />
            <Message />
          </div>
        </div>
      </div>
      <div className='pt-5'>
        <div className='min-h-[80vh] flex '>
          <div className=''>
            <Message />
            <Message />
          </div>
          <div className='flex my-2 bg-sky-300 shadow-md p-2 mx-4 text-center rounded-lg font-extrabold text-3xl font-serif justify-center items-center'>
            Assistance Professer
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
  )
}

export default Home