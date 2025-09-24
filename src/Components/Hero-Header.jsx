import { useState } from "react";
import { Menu } from "lucide-react";
import portofolio1 from "../../assets/portofolio1.webp"; // الصورة الخلفية

const HeroHeader = ({ setIsOpen }) => {
  return (
    <div className="relative w-full h-screen">
      {/* خلفية الصورة */}
      <img
        src={portofolio1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay (لون غامق خفيف فوق الصورة لتحسين الوضوح) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* المحتوى فوق الصورة */}
      <div className="relative z-20 flex justify-between items-center px-6 py-6">
        {/* Left - الاسم واللوجو */}
        <div className="flex items-center space-x-4">
          <div className="border-t border-l border-white opacity-100 mb-8 w-5 h-5"></div>
          <div className="text-2xl md:text-3xl font-bold tracking-wide text-white">
            Ismail Bakass
          </div>
        </div>

        {/* Right - زرار المينيو */}
        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} color="white" />
        </button>
      </div>
    </div>
  );
};

export default HeroHeader;
