
import Logo from './LogoNIT'
import LogoRC from './LogoR&C'
import Name from './Name'
const Navbar = () => {
  return (
    <div className='w-full sticky top-0 z-10 shadow-lg bg-white'>
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
          <Name />
          <LogoRC size={10} />
          </div>
        </div>
    </div>
  )
}

export default Navbar