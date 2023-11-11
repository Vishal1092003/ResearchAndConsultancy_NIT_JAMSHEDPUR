'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/ppt1.png'
import img2 from '../../assets/ppt2.png'
import { motion } from 'framer-motion'
const CarouselComponents = () => {

    return (
        <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", delay: ".2" }}>
            <Carousel className='' useKeyboardArrows showArrows={false} showStatus={false} swipeable transitionTime={800} autoPlay showThumbs={false} infiniteLoop>
                <div className="">
                    <img className="p-2 rounded-2xl" src={img1} alt='Photo' />
                </div>
                <div>
                    <img className="p-2 rounded-2xl" src={img2} alt='Photo' />
                </div>
            </Carousel>
        </motion.div>
    )
}

export default CarouselComponents