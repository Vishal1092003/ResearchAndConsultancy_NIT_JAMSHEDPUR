import React from 'react'
'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
const CarouselAcademia = () => {
  return (
    <motion.div
    initial={{ x: -500, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, type: "spring", delay: ".2" }}>
    <Carousel className='w-full h-96' useKeyboardArrows showArrows={false} showStatus={false} swipeable transitionTime={800} autoPlay showThumbs={false} infiniteLoop>
        <div className="">
            <img className=" w-full h-96 p-2 rounded-2xl" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1705946361~exp=1705946961~hmac=cbfb2c6fb9af02738d1a5bc14af55b39650e5287b2d652b0ac5cbd2d69154039" alt='Photo' />
        </div>
        <div>
            <img className="w-full h-96 p-2 rounded-2xl" src="https://img.freepik.com/premium-photo/christmas-winter-landscape-with-snow-drifts-3d-illustration_710973-1169.jpg" alt='Photo' />
        </div>
        <div>
            <img className="w-full h-96 p-2 rounded-2xl" src="https://img.freepik.com/premium-photo/magical-winter-snow-covered-tree_146671-4343.jpg" alt='Photo' />
        </div>
        <div>
            <img className="w-full h-96 p-2 rounded-2xl" src="https://img.freepik.com/free-photo/headlights-hood-black-luxury-car_146671-19732.jpg" alt='Photo' />
        </div>
        <div>
            <img className="w-full h-96 p-2 rounded-2xl" src="https://img.freepik.com/free-vector/modern-house-trees-by-lake-landscape_52683-29647.jpg?t=st=1705946445~exp=1705947045~hmac=47bac0ac4de65a8f6ba1f73139dc195e36d9c757c3cfacaa3bf4ebdaa9a971c9" alt='Photo' />
        </div>
        <div>
            <img className="w-full h-96 p-2 rounded-2xl" src="https://img.freepik.com/free-photo/challenger-stands-front-spooky-castle-illustration_456031-14.jpg?t=st=1705930045~exp=1705930645~hmac=b9495ebd347c732d62ab2754a1e6f08c5dd3f058829baae47663aa35a9bdddf9" alt='Photo' />
        </div>
       
    </Carousel>
 </motion.div>
  )
}

export default CarouselAcademia