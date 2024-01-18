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
      <div className="teacher">
        <div className='profile'>
          <div className='pht'>
            <img src={ashoksir} alt="Ashok sir" />
          </div>
          <div className='info'>
            <h2>ASHOK KUMAR MONDAL</h2>
            <p>Assistant Professor</p>
            <h3>Mechanical Engineering</h3>
            <div className='flex'>
              <AiFillPhone />
              <div>91+62066XXXXXX</div>
            </div>
            <Link><div className='flex'>
              <AiFillMail />
              <div>lavkushraj1155@gmail.com</div>
            </div>
            </Link>

          </div>
          <div className='ppt'>
            <a href="/"><AiFillGolden /> Achievements</a>
            <a href="/"><AiOutlineProfile />Biodata</a>
          </div>
        </div>
        <div className='Areas'>
          <h2>Responsibilities</h2>
          <div>
            <p><AiFillCaretRight />Lorem ipsum dolor sit amet.</p>
            <p><AiFillCaretRight />Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <h2>Research Areas</h2>
          <div>
            <p><AiFillCaretRight />Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p><AiFillCaretRight />Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </div>
        </div>

      </div  >
      <Footer />
    </div>
  </>
  );
}

export default Profile