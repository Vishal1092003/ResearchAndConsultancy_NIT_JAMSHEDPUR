
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
const Menu = () => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }
  const openNav = () => {

    document.getElementById("mySidenav").style.width = "250px";
  }
  return (
    <div>
      <div className='py-4'>
        <AiOutlineMenu onClick={openNav} size={30} />
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
          <a href="#">Projects</a>
          <a href="#">Research</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
      </div>
    </div>
  )
}

export default Menu