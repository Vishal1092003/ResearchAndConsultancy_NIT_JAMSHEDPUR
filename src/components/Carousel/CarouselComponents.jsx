'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/sky.png'
import img2 from '../../assets/tiger.png'
import img3 from '../../assets/tree.jpg'
import { motion } from 'framer-motion'
const CarouselComponents = () => {

    return (
        <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", delay: ".2" }}
            className='pb-10 md:pt-10'>
            <Carousel className='md:w-[700px] rounded-xl w-full px-4' showStatus={false} swipeable useKeyboardArrows transitionTime={800} autoPlay showThumbs={false} infiniteLoop>
                <div className="">
                    <img className=" rounded-2xl" src={img1} alt='Photo' />
                </div>
                <div>
                    <img className=" rounded-2xl" src={img2} alt='Photo' />
                </div>
                <div>
                    <img className=" rounded-2xl" src={img3} alt='Photo' />
                </div>
            </Carousel>
        </motion.div>
    )
}

export default CarouselComponents