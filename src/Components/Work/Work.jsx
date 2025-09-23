import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../../assets/background.webp";
import sport1 from "../../assets/sports1.webp";
import sport2 from "../../assets/sports2.webp";
import sport3 from "../../assets/sports3.webp";
import sport4 from "../../assets/sports4.webp";
import sport5 from "../../assets/sports5.webp";
import sport6 from "../../assets/sports6.webp";
import sport7 from "../../assets/sports7.webp";
import sport8 from "../../assets/sports8.webp";
import sport9 from "../../assets/sports9.webp";
import sport10 from "../../assets/sports10.webp";
import sport11 from "../../assets/sports11.webp";
import sport12 from "../../assets/sports12.webp";
import sport13 from "../../assets/sports13.webp";
import sport14 from "../../assets/sports14.webp";
import people1 from "../../assets/people1.webp";
import people2 from "../../assets/people2.webp";
import people3 from "../../assets/people3.webp";
import people4 from "../../assets/people4.webp";
import people5 from "../../assets/people5.webp";
import people6 from "../../assets/people6.webp";
import people7 from "../../assets/people7.webp";
import people8 from "../../assets/people8.webp";
import people9 from "../../assets/people9.webp";
import people10 from "../../assets/people10.webp";
import people12 from "../../assets/people12.webp";
import people13 from "../../assets/people13.webp";
import people14 from "../../assets/people14.webp";
import people15 from "../../assets/people15.webp";
import event1 from "../../assets/event1.webp";
import event2 from "../../assets/event2.webp";
import event3 from "../../assets/event3.webp";
import event4 from "../../assets/event4.webp";
import event5 from "../../assets/event5.webp";
import event6 from "../../assets/event6.webp";
import event7 from "../../assets/event7.webp";
import event8 from "../../assets/event8.webp";
import event9 from "../../assets/event9.webp";
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
import event20 from "../../assets/event20.webp";
import event21 from "../../assets/event21.webp";

export default function Work({
  categories = [
    {
      id: "Sports",
      title: "Sports",
      images: [
        sport1,
        sport2,
        sport3,
        sport4,
        sport5,
        sport6,
        sport7,
        sport8,
        sport9,
        sport10,
        sport11,
        sport12,
        sport13,
        sport14,
      ],
    },
    {
      id: "People",
      title: "People",
      images: [
        people1,
        people2,
        people3,
        people4,
        people5,
        people6,
        people7,
        people8,
        people9,
        people10,
        people12,
        people13,
        people14,
        people15,
      ],
    },
    {
      id: "events",
      title: "Events",
      images: [
        event1,
        event2,
        event3,
        event4,
        event5,
        event6,
        event7,
        event8,
        event9,
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
        event20,
        event21,
      ],
    },
    {
      id: "nature",
      title: "Nature",
      images: [
        "https://picsum.photos/600/800?random=10",
        "https://picsum.photos/600/800?random=11",
        "https://picsum.photos/600/800?random=12",
      ],
    },
  ],
}) {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] overflow-hidden"
     style={{ fontFamily: `'Inter', 'Inter Placeholder', sans-serif` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden
      />

      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-32 gap-y-12">
          <div className="text-white flex flex-col gap-8 max-w-lg">
            <h2 className="text-6xl  font-medium mb-4">What I can offer</h2>
            <p className="text-xl font-medium leading-relaxed animate-gradient">
              I provide a range of photography services, capturing moments that
              matter most to you. From intimate portraits and candid events to
              cinematic wedding coverage — every story is treated with care and
              a creative eye.
            </p>
          </div>

          {/* Right: 4 big category boxes */}
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setOpenCategory(cat)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group bg-white/10 rounded-xl overflow-hidden h-40 sm:h-48 lg:h-56 shadow-lg"
              >
                <img
                  src={cat.images[0]}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 transition"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                  <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                  <p className="text-sm text-white/80">
                    {cat.images.length} photos
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openCategory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/70"
              onClick={() => setOpenCategory(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto  bg-white rounded-2xl shadow-2xl p-6"
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{openCategory.title}</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setOpenCategory(null)}
                    className="text-sm text-gray-600 px-3 py-1 rounded hover:bg-gray-100"
                  >
                    Close
                  </button>
                </div>
              </div>

              <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {openCategory.images.map((src, i) => (
                  <motion.div
                    key={src + i}
                    className="rounded-lg overflow-hidden"
                    whileHover={
                      openCategory.id === "Sports"
                        ? { scale: 1.05, rotate: 2 }
                        : { scale: 1.02 }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src={src}
                      alt={`${openCategory.title} ${i + 1}`}
                      className="w-full h-auto max-h-[80vh] object-contain "
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
