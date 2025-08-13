import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "/caraouselImages/img1.png";
import img2 from "/caraouselImages/img2.png";
import img3 from "/caraouselImages/img3.png";
import img4 from "/caraouselImages/img4.png";
import img5 from "/caraouselImages/img5.png";
import img6 from "/caraouselImages/img6.png";
import img7 from "/caraouselImages/img7.png";
import img8 from "/caraouselImages/img8.png";
import img9 from "/caraouselImages/img9.png";
import img10 from "/caraouselImages/img10.png";
import { motion } from "framer-motion";

const images = [
  { src: img1, alt: "Slide 1" },
  { src: img2, alt: "Slide 2" },
  { src: img3, alt: "Slide 3" },
  { src: img4, alt: "Slide 4" },
  { src: img5, alt: "Slide 5" },
  { src: img6, alt: "Slide 6" },
  { src: img7, alt: "Slide 7" },
  { src: img8, alt: "Slide 8" },
  { src: img9, alt: "Slide 9" },
  { src: img10, alt: "Slide 10" },
];

const CarouselComponents = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-gradient-to-b from-sky-50 via-white to-yellow-50 py-6"
    >
      <div className="max-w-4xl mx-auto px-4"> {/* Reduced from max-w-7xl to max-w-4xl */}
        <div className="overflow-hidden rounded-xl shadow-md"> {/* Reduced shadow-lg to shadow-md */}
          <div className="aspect-w-16 aspect-h-9 w-full"> {/* 16:9 aspect ratio container */}
            <Carousel
              useKeyboardArrows
              showArrows={true}
              showStatus={false}
              swipeable
              transitionTime={800}
              autoPlay
              interval={2200}
              showThumbs={false}
              infiniteLoop
              emulateTouch
              className="h-full"
            >
              {images.map((img, idx) => (
                <div key={idx} className="relative h-full">
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CarouselComponents;