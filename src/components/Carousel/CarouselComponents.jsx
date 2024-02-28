'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/ppt1.png'
import img2 from '../../assets/ppt2.png'
import img3 from '../../assets/ppt3.png'
import img4 from '../../assets/ppt4.png'
// import img5 from '../../assets/ppt5.png'
import img6 from '../../assets/ppt6.png'
import img7 from '../../assets/ppt7.png'
import img8 from '../../assets/ppt8.png'
import img9 from '../../assets/ppt9.png'
import img10 from '../../assets/ppt10.png'
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
                <div>
                    <img className="p-2 rounded-2xl" src={img3} alt='Photo' />
                </div>
                <div>
                    <img className="p-2 rounded-2xl" src={img4} alt='Photo' />
                </div>
                {/* <div>
                    <img className="p-2 rounded-2xl" src={img5} alt='Photo' />
                </div> */}
                <div>
                    <img className="p-2 rounded-2xl" src={img6} alt='Photo' />
                </div>
                <div>
                    <img className="p-2 rounded-2xl" src={img7} alt='Photo' />
                </div>
                <div>
                    <img className="p-2 rounded-2xl" src={img8} alt='Photo' />
                </div>
                <div>
                    <img className="p-2 rounded-2xl" src={img9} alt='Photo' />
                </div> 
                <div>
                    <img className="p-2 rounded-2xl" src={img10} alt='Photo' />
                </div>
            </Carousel>
        </motion.div>
    )
}

export default CarouselComponents