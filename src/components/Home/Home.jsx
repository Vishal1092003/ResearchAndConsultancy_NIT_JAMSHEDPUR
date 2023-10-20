
import React from 'react'
import CarouselComponents from '../Carousel/Carousel'
import Notice from './Notice'

const Home = () => {
    return (
        <div className='w-full pt-11 md:h-[83vh] h-[120vh] bg-slate-100'>
            <div className="
    max-w-[2520px]
    mx-auto
    xl:px-20
    md:px-10
    sm:px-2
    px-4
    ">
                <div className=' py-10 rounded-xl  justify-center items-center shadow-2xl  bg-white flex md:flex-row flex-col'>
                    <CarouselComponents />
                    <div className='flex flex-col'>
                    <div className='text-center text-3xl pb-3 flex justify-center '><p className='border-b-[4px] border-slate-300 w-40'>Achivement</p></div>
                    <Notice />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home