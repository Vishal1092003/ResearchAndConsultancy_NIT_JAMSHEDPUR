
import React from 'react'
import Logo from './Logo'
import Name from './Name'
import Menu from './Menu'
const Navbar = () => {
  return (
    <div className='w-full sticky top-0 z-10 shadow-sm bg-white'>
      <div className="
    max-w-[2520px]
    mx-auto
    xl:px-20
    md:px-10
    sm:px-2
    px-4
    ">
          <div className='flex flex-row justify-between items-center gap-3 md:gap-0'>
            <Logo />
            <Name/>
            <Menu/> 
          </div>
        </div>
    </div>
  )
}

export default Navbar