import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/ppt1b.png";
import img2 from "../../assets/ppt2b.png";
import img3 from "../../assets/ppt3.png";
import img4 from "../../assets/ppt4.png";
import img6 from "../../assets/ppt6.png";
import img7 from "../../assets/ppt7.png";
import img8 from "../../assets/ppt8b.png";
import img9 from "../../assets/ppt9b.png";
import img10 from "../../assets/ppt11b.png";
import { motion } from "framer-motion";

const images = [
  { src: img1, alt: "Slide 1" },
  { src: img2, alt: "Slide 2" },
  { src: img3, alt: "Slide 3" },
  { src: img4, alt: "Slide 4" },
  { src: img6, alt: "Slide 5" },
  { src: img7, alt: "Slide 6" },
  { src: img8, alt: "Slide 7" },
  { src: img9, alt: "Slide 8" },
  { src: img10, alt: "Slide 9" },
];

const CarouselComponents = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-gradient-to-b from-sky-50 via-white to-yellow-50 py-6"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Carousel
            useKeyboardArrows
            showArrows={true}
            showStatus={false}
            swipeable
            transitionTime={800}
            autoPlay
            interval={2800}
            showThumbs={false}
            infiniteLoop
            emulateTouch
          >
            {images.map((img, idx) => (
              <div key={idx} className="relative">
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[420px] md:h-[500px] object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
};

export default CarouselComponents;
