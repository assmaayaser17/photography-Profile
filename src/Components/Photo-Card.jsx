import React from "react";
import event11 from "../assets/event11.webp";
import event12 from "../assets/event12.webp";
import people7 from "../assets/people7.webp";
import people8 from "../assets/people8.webp";
import people9 from "../assets/people9.webp";

const images = [event11, event12, people7, people8, people9];

const PhotoStatsCard = () => {
  return (
    <div className="relative w-full lg:w-1/2 bg-white p-8 rounded-3xl shadow-sm overflow-hidden min-h-[420px]">
      {/* خلفية منقطة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:20px_20px] z-0 rounded-3xl" />

      {/* الصور في الركن العلوي الأيمن */}
      <div className="absolute top-6 right-6 z-10">
        <div className="relative w-[320px] h-[320px]">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`polaroid-${index}`}
              className={`w-44 h-44 object-cover rounded-xl shadow-xl border-4 border-white
                absolute transition-all
                ${index === 0 ? "rotate-[-10deg] top-0 left-0" : ""}
                ${index === 1 ? "rotate-[8deg] top-0 left-28" : ""}
                ${index === 2 ? "rotate-[-5deg] top-20 left-6" : ""}
                ${index === 3 ? "rotate-[12deg] top-16 left-40" : ""}
                ${index === 4 ? "rotate-[-3deg] top-36 left-28" : ""}
              `}
            />
          ))}
        </div>
      </div>

      {/* الرقم والوصف في الركن السفلي الأيسر */}
      <div className="absolute bottom-8 left-8 z-10 text-left">
        <h2 className="text-5xl font-bold text-gray-900">
          10,000<span className="text-4xl align-top">+</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Photos taken, each telling a unique story
        </p>
      </div>
    </div>
  );
};

export default PhotoStatsCard;
