import { useState } from "react";
import AnimatedContent from "../AnimatedContent";
import portofolio1 from "../../assets/portofolio1.webp";
import portofolio2 from "../../assets/portofolio2.webp";
import hockey from "../../assets/hockey.webp";
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

const Portofolio = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  const items = [
    {
      title: "Hockey",
      img: hockey,
      gallery: [
        hockey,
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
      title: "Gala",
      img: portofolio1,
      gallery: [portofolio1, gallary1, gallary2, gallary3, gallary4, gallary5, gallary6, gallary7, gallary8, gallary9],
    },
    {
      title: "Another Portrait",
      img: portofolio2,
      gallery: [portofolio2, event8, event1, event2, event3, event4, event5, event6, event7],
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
              className="w-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
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
