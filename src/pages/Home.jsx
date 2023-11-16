import CarouselComponents from '../components/Carousel/CarouselComponents'
import Footer from '../components/Footer/Footer'
import Message from '../components/Message/Message'
import Navbar from '../components/Navbar/Navbar'
import Notice from '../components/Notice/Notice'
import { motion } from 'framer-motion'
import { DirectorSir, DeanSir, DrKanika, OmSir, AshokSir, Subhash, RahulMahato, ArunPandit, } from '../assets/index'
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
            <div className='bg-sky-200 text-black mt-2 font-semibold text-2xl p-2 text-center'>
              Sponsored Research Projects
            </div>
            <Notice />
          </motion.div>
        </div>
      </div>
      <div
        className='pt-5 px-4 bg-yellow-50/50 '>
        <div className='min-h-[70vh] flex flex-col justify-center items-center'>
          <div className='flex bg-sky-200 w-full shadow-md p-2 mx-4 rounded-lg  font-medium text-3xl font-serif justify-center items-center'>
            Director Message
          </div>
          <Message img={DirectorSir} name={'Prof. (Dr.) Goutam Sutradhar'} message1={'It is a privilege and honour for me to have led the NIT Jamshedpur as a Director of the Institution. NIT Jamshedpur has a rich legacy of more than sixty dedicated years of service to the nation and its pride of Jharkhand. NIT Jamshedpur takes extreme pride in the fact that it has been occupying a unique position in imparting technological education to Indian youth. Since its inception, the institute has had a vision to provide quality technical education and to facilitate scientific and technological research, coupled with a mission to develop human potential to its zenith with excellence in teaching and high quality research.'} message2={'1. To build conducive environment for learning and creativity.  2.To train students to become technically competent professionals and socially responsible citizens. 3. To develop innovative products and technologies for the betterment of the society.'} />
        </div>
      </div>
      <div className='pt-5 px-4 bg-yellow-50/50'>
        <div className='min-h-[70vh] flex p-3'>
          <div className='flex bg-sky-200 shadow-md text-center p-2 mx-4 rounded-lg  font-medium text-3xl font-serif justify-center items-center'>
            Dean Message
          </div>
          <div>
            <div>
            </div>
            <Message img={DeanSir} message1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque pariatur reprehenderit dolor rem explicabo commodi nulla aliquam quis fugit adipisci delectus numquam non quaerat, similique nesciunt nam minima ea? Earum sequi deserunt modi consectetur? A fugiat cupiditate ut labore sunt accusamus ratione, omnis similique magni, obcaecati quaerat commodi? Dolore voluptatibus similique magnam animi consectetur molestias, nostrum eos facilis vitae! Aliquam, fugiat animi laborum saepe laboriosam, blanditiis ad fuga inventore quam repellendus culpa vitae recusandae officiis. Incidunt assumenda consequuntur magni, nostrum odit nemo. Neque itaque, cumque cupiditate exercitationem ab eligendi.Inventore nemincidunt aperiam perferendis! Minus.'} message2='' name={'Prof.MK Sinha'} />
          </div>
        </div>
      </div>
      <div className='pt-5 bg-yellow-50/50'>
        <div className='min-h-[20vh]  '>
          <div className='flex bg-sky-200 shadow-md text-center p-2 mx-4 rounded-lg  font-medium text-3xl font-serif justify-center items-center'>
            Associate Professor
          </div>
          <div className='flex'>
            <Message img={DrKanika} designation1={'Associate Dean'} designation2={'IPR Cell'} message1={null} message2='' name={'Dr. Kanika Prashad'} />
            <Message img={OmSir} designation1={'Associate Dean'} designation2={''} message1={null} message2='' name={'Dr. Omhari Gupta'} />
            <Message img={AshokSir} designation1={'Associate Dean'} designation2={'Collaboration and Entrepreneurship Development'} message1={null} message2='' name={'Dr. Ashok Mandal'} />
          </div>
        </div>
      </div>
      <div className='pt-5 bg-yellow-50/50'>
        <div className='min-h-[20vh]  '>
          <div className='flex'>
            <Message img={ArunPandit} designation1={'Accountant'} designation2={''} message1={null} message2='' name={'Arun Pandit'} />
            <Message img={Subhash} designation1={'Juniour Assistant'} message1={null} message2='' name={'Subhash Kumar'} />
            <Message img={RahulMahato} designation1={'Data Entry Operator'} message1={null} message2='' name={'Rahul Mahato'} />
          </div>
        </div>
      </div>
      {/* <div className='pt-5 bg-yellow-50/50'>
        <div className='min-h-[80vh] flex '>
          <div className=''>
            <Message img={DeanSir} message1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque pariatur reprehenderit dolor rem explicabo commodi nulla aliquam quis fugit adipisci delectus numquam non quaerat, similique nesciunt nam minima ea? Earum sequi deserunt modi consectetur? A fugiat cupiditate ut labore sunt accusamus ratione, omnis similique magni, obcaecati quaerat commodi? Dolore voluptatibus similique magnam animi consectetur molestias, nostrum eos facilis vitae! Aliquam, fugiat animi laborum saepe laboriosam, blanditiis ad fuga inventore quam repellendus culpa vitae recusandae officiis. Incidunt assumenda consequuntur magni, nostrum odit nemo. Neque itaque, cumque cupiditate exercitationem ab eligendi.Inventore nemincidunt aperiam perferendis! Minus.'} message2='' name={'Prof.MK Sinha'} />
            <Message img={DeanSir} message1={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque pariatur reprehenderit dolor rem explicabo commodi nulla aliquam quis fugit adipisci delectus numquam non quaerat, similique nesciunt nam minima ea? Earum sequi deserunt modi consectetur? A fugiat cupiditate ut labore sunt accusamus ratione, omnis similique magni, obcaecati quaerat commodi? Dolore voluptatibus similique magnam animi consectetur molestias, nostrum eos facilis vitae! Aliquam, fugiat animi laborum saepe laboriosam, blanditiis ad fuga inventore quam repellendus culpa vitae recusandae officiis. Incidunt assumenda consequuntur magni, nostrum odit nemo. Neque itaque, cumque cupiditate exercitationem ab eligendi.Inventore nemincidunt aperiam perferendis! Minus.'} message2='' name={'Prof.MK Sinha'} />
          </div>
          <div className='flex bg-sky-200 shadow-md text-center p-2 mx-4 rounded-lg  font-medium text-3xl font-serif justify-center items-center'>
            Assistance Professer
          </div>
        </div>
      </div> */}
      <Footer />
    </div >
  </>
  )
}

export default Home