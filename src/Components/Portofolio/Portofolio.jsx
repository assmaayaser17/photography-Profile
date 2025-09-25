import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import portofolio1 from "../../assets/portofolio1.webp";
import portofolio2 from "../../assets/portofolio2.webp";
import hockey from "../../assets/hockey.webp";
import hockey2 from "../../assets/hockey2.webp";
import hockey3 from "../../assets/hockey3.webp";
import hockey4 from "../../assets/hockey4.webp";
import hockey5 from "../../assets/hockey5.webp";
import hockey6 from "../../assets/hockey6.webp";
import hockey7 from "../../assets/hockey7.webp";
import hockey8 from "../../assets/hockey8.webp";
import hockey9 from "../../assets/hockey9.webp";
import gallary1 from "../../assets/gallary1.webp";
import gallary2 from "../../assets/gallary2.webp";
import gallary3 from "../../assets/gallary3.webp";
import gallary4 from "../../assets/gallary4.webp";
import gallary5 from "../../assets/gallary5.webp";
import gallary6 from "../../assets/gallary6.webp";
import gallary7 from "../../assets/gallary7.webp";
import gallary8 from "../../assets/gallary8.webp";
import gallary9 from "../../assets/gallary9.webp";
import event8 from "../../assets/event8.webp";
import event10 from "../../assets/event10.webp";
import event11 from "../../assets/event11.webp";
import event12 from "../../assets/event12.webp";
import event13 from "../../assets/event13.webp";
import event14 from "../../assets/event14.webp";
import event15 from "../../assets/event15.webp";
import event16 from "../../assets/event16.webp";
import event17 from "../../assets/event17.webp";
import event18 from "../../assets/event18.webp";
import event19 from "../../assets/event19.webp";
import event29 from "../../assets/event29.webp";
import event30 from "../../assets/event30.webp";
import event31 from "../../assets/event31.webp";
import event32 from "../../assets/event32.webp";
import event33 from "../../assets/event33.webp";
import event34 from "../../assets/event34.webp";

const AnimatedImage = ({ src, alt, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full object-contain rounded-lg shadow-md"
        loading="lazy"
      />
    </motion.div>
  );
};

const Portofolio = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  const items = [
    {
      title: "Hockey",
      img: hockey,
      gallery: [
        hockey,
        hockey2,
        hockey3,
        hockey4,
        hockey5,
        hockey6,
        hockey7,
        hockey8,
        hockey9,
      ],
    },
    {
      title: "Gala",
      img: portofolio1,
      gallery: [
        portofolio1,
        gallary1,
        gallary2,
        gallary3,
        gallary4,
        gallary5,
        gallary6,
        gallary7,
        gallary8,
        gallary9,
      ],
    },
    {
      title: "Event",
      img: portofolio2,
      gallery: [
        portofolio2,
        event29,
        event30,
        event31,
        event32,
        event33,
        event34,
      ],
    },
    {
      title: "Event",
      img: event8,
      gallery: [
        event8,
        event10,
        event11,
        event12,
        event13,
        event14,
        event15,
        event16,
        event17,
        event18,
        event19,
      ],
    },
  ];

  return (
    <section
      id="PORTOFOLIO"
      className="bg-gray-200 py-16 min-h-screen"
      style={{ fontFamily: `'Inter', 'Inter Placeholder', sans-serif` }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-[56px] font-bold tracking-tight text-gray-900 mb-12">
          See the magic for yourself
        </h2>

        {/* Main Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
            selectedGallery !== null ? "pointer-events-none blur-sm" : ""
          }`}
        >
          {items.map((item, i) => (
            <img
              key={i}
              src={item.img}
              alt={item.title}
              className="w-full object-contain rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedGallery(i)}
              loading="lazy"
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedGallery !== null && (
            <motion.div
              className="fixed inset-0 bg-white overflow-y-auto z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedGallery(null)}
                aria-label="Close gallery"
                className="fixed top-6 text-gray-700 hover:text-gray-900 text-4xl font-bold z-[60]"
              >
                &times;
              </button>

              {/* Sticky First Image */}
              <div className="sticky top-0 w-full  h-[50vh] shadow-lg overflow-hidden bg-cover mb-12 z-20">
                <img
                  src={items[selectedGallery].gallery[0]}
                  alt="Main Background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Animated Images */}
              <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 gap-4 px-6 pb-12">
                {items[selectedGallery].gallery.slice(1).map((imgSrc, idx) => (
                  <AnimatedImage
                    key={imgSrc + idx}
                    src={imgSrc}
                    alt={`${items[selectedGallery].title} - ${idx + 2}`}
                    delay={idx * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portofolio;
