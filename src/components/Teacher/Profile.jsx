import React from 'react'
import Navbar from '../Navbar/Navbar'
import ashoksir from '../../assets/AshokSir.jpg'
import Footer from '../Footer/Footer'
import { AiFillPhone, AiFillMail, AiOutlineProfile, AiFillGolden, AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (<>
    <div className='w-[100vw] h-[100vh]'>
      <Navbar />
      <div className="  teacher flex justify-center flex-col items-center mt-4 ">
        <div className='profile md:w-[80%] w-90 md:h-80 h-[80vh] bg-slate-200 flex flex-col md:flex-row  items-center p-16 justify-around rounded shadow-md'>
          <div className='pht bg-slate-300 w-48 h-56 border-black flex justify-around  items-center shadow-md rounded'>
            <img className='w-40 h-48 shadow-md hover:scale-110' src={ashoksir} alt="Ashok sir" />
          </div>
          <div className='info md:w-[50%] w-full h-48 md:items-start flex justify-around flex-col items-center  '>
            <h2 className='text-4 font-bold  flex justify-center flex-col items-center '>ASHOK KUMAR MONDAL</h2>
            <p className='text-4 font-semibold'>Assistant Professor</p>
            <h3 className='text-4 font-semibold'>Mechanical Engineering</h3>
            <div className='flex justify-center  items-center text-4 font-semibold'>
              <AiFillPhone className='w-4 h-4'/>
              <div>91+62066XXXXXX</div>
            </div>
            <Link><div  className='flex justify-center  items-center text-4 font-semibold'>
              <AiFillMail className='w-4 h-4' />
              <div>lavkushraj1155@gmail.com</div>
            </div>
            </Link>

          </div>
          <div className='ppt w-60 flex justify-between flex-col  '>
            <Link  className='flex justify-center  items-center text-4 font-semibold' href="/"><AiFillGolden className='w-4 h-4' /> Achievements</Link>
            <Link  className='flex justify-center  items-center text-4 font-semibold' href="/"><AiOutlineProfile className='w-4 h-4' />Biodata</Link>
          </div>
        </div>
        <div className='Areas w-[90%] h-80 p-1 mt-20 flex flex-col justify-between  '>
          <h2 className='p-1 h-32 w-full font-bold text-xl pl-3 rounded-md bg-green-300'>Responsibilities</h2>
          <div className='w-[80%] h-80 flex justify-between p-4 flex-wrap'>
            <p className='ml-8 flex justify-center  items-center text-4 font-semibold'><AiFillCaretRight className='w-4 h-4' />Lorem ipsum dolor sit amet.</p>
            <p className='ml-8 flex justify-center  items-center text-4 font-semibold'><AiFillCaretRight className='w-4 h-4' />Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <h2 className='p-1 h-32 w-full font-bold text-xl pl-3 rounded-md bg-green-300'>Research Areas</h2>
          <div className='w-[80%] h-80 flex justify-between p-4 flex-wrap'>
            <p className='ml-8 flex justify-center  items-center text-4 font-semibold'><AiFillCaretRight className='w-4 h-4' />Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className='ml-8 flex justify-center  items-center text-4 font-semibold'><AiFillCaretRight className='w-4 h-4' />Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </div>
        </div>

      </div  >
      <Footer />
    </div>
  </>
  );
}

export default Profile