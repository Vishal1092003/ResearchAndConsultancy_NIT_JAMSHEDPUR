import React from 'react'
import Navbar from '../Navbar/Navbar'
import ashoksir from '../../assets/Teacher/Ashoksir.png'
import Footer from '../Footer/Footer'
import { AiFillPhone, AiOutlineMail, AiOutlineProfile, AiFillGolden, AiFillCaretRight } from 'react-icons/ai'

const Profile = () => {
  return (<>
  <Navbar/>
    <div className="teacher">
      <div className='profile'>

        <div className='pht'>
          <img src={ashoksir} alt="Ashok sir" />
        </div>
        <div className='info'>
          <h2>ASHOK KUMAR MONDAL</h2>
          <p>Assistant Professor</p>
          <h3>Mechanical Engineering</h3>
          <p> <AiFillPhone />91+6206676494</p>
          <a href="https://www.flipkart.com/"><AiOutlineMail /> lavkushraj1155@gmail.com</a>
        </div>
        <div className='ppt'>
          <a href="https://www.flipkart.com/"><AiFillGolden /> Achievements</a>
          <a href="https://www.flipkart.com/"><AiOutlineProfile />Biodata</a>

        </div>
      </div>
      <div className='Areas'>

        <h2>Responsibilities</h2>
        <div>
          <p><AiFillCaretRight />jdhvbwue feyjflvdjhs lfhvjlshvl</p>
          <p><AiFillCaretRight />dvkshfl h lgj</p>
        </div>



        <h2>Research Areas</h2>
        <div>
          <p><AiFillCaretRight />kkfjgb f kb</p>
          <p><AiFillCaretRight />fvndkvfigkbfgb</p>
        </div>


      </div>



      <div className='sections'>
        <div class="dropdown">
          <button class="dropbtn">Research section
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>

          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Publications
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Current publications</a>
            <a href="#">Published Books</a>

          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Projects
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Current projects</a>
            <a href="#">Completed projects</a>

          </div>
        </div>

      </div>


    </div  >
    <Footer/>

  </>
  );
}

export default Profile