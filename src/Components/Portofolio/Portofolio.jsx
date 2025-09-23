import { useState } from "react";
import AnimatedContent from "../AnimatedContent";
import portofolio1 from "../../assets/portofolio1.webp";
import portofolio2 from "../../assets/portofolio2.webp";
import hockey from "../../assets/hockey.webp";
import hockey2 from "../../assets/hockey2.webp"
import hockey3 from "../../assets/hockey3.webp"
import hockey4 from "../../assets/hockey4.webp"
import hockey5 from "../../assets/hockey5.webp"
import hockey6 from "../../assets/hockey6.webp"
import hockey7 from "../../assets/hockey7.webp"
import hockey8 from "../../assets/hockey8.webp"
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
import event29 from "../../assets/event29.webp";
import event30 from "../../assets/event30.webp";
import event31 from "../../assets/event31.webp";
import event32 from "../../assets/event32.webp";
import event33 from "../../assets/event33.webp";
import event34 from "../../assets/event34.webp";

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
        hockey9
       
      ],
    },
    {
      title: "Gala",
      img: portofolio1,
      gallery: [portofolio1, gallary1, gallary2, gallary3, gallary4, gallary5, gallary6, gallary7, gallary8, gallary9],
    },
    {
      title: "Event",
      img: portofolio2,
      gallery: [portofolio2, event29,event30,event31,event32,event33,event34],
    },
    {
      title: "Event",
      img: event8,
      gallery: [event8, event10, event11, event12, event13, event14, event15, event16, event17, event18, event19],
    },
  ];

  return (
    <section className="bg-gray-200 py-16 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-12">
          See the magic for yourself
        </h2>

        {/* Grid with 2 images per row, natural size, no card */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
            selectedGallery !== null ? "blur-sm pointer-events-none" : ""
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

        {/* Modal for selected gallery */}

        {selectedGallery !== null && (
  <div
    className="fixed inset-0 bg-white overflow-y-auto z-50"
    style={{ animation: "fadeSlideIn 0.4s ease forwards" }}
  >
    {/* زر إغلاق المعرض */}
    <button
      onClick={() => setSelectedGallery(null)}
      aria-label="Close gallery"
      className="fixed top-6 right-6 text-gray-700 hover:text-gray-900 text-4xl font-bold z-60"
    >
      &times;
    </button>

    {/* عنوان المعرض */}
    <h3 className="text-3xl font-bold mb-8 text-center">{items[selectedGallery].title}</h3>

    {/* صورة الخلفية مع تمويه */}
    <div
      className="w-screen h-full mb-12 shadow-lg relative overflow-hidden bg-cover"
      style={{
        backgroundImage: `url(${items[selectedGallery].gallery[0]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* يمكنك إضافة تمويه هنا إذا أردت */}
      <div className="absolute inset-0"></div>
    </div>

    {/* صور المعرض الأخرى مع تأثير الحركة */}
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 gap-2 relative z-10">
      {items[selectedGallery].gallery.slice(1).map((imgSrc, idx) => (
       <img
            src={imgSrc}
            alt={`${items[selectedGallery].title} - ${idx + 2}`}
            className="w-full object-contain rounded-lg shadow-md"
            loading="lazy"
          />
      ))}
    </div>
    </div>

)}

</div>




 

   
    </section>
  );
};

export default Portofolio;
