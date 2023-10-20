'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/sky.png'
import img2 from '../../assets/tiger.png'
import img3 from '../../assets/tree.jpg'
const CarouselComponents = () => {

    return (
        <div className='pb-10 md:pt-10'>
        <Carousel className='md:w-[700px] w-full px-4' showStatus={false} swipeable useKeyboardArrows transitionTime={800} autoPlay showThumbs={false} infiniteLoop>
            <div>
                <img src={img1} alt='Photo'/>
            </div>
            <div>
                <img src={img2} alt='Photo' />
            </div>
            <div>
                <img src={img3} alt='Photo' />
            </div>
        </Carousel>
        </div>
    )
}

export default CarouselComponents