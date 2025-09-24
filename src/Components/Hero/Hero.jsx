import hero from "../../assets/hero.webp";

import TextType from "../Animations/Text-type.jsx";

export default function Hero() {

 
  return (
    <section
      id="Home"
      className="h-screen group flex items-center justify-center  relative bg-black text-white"
      style={{ fontFamily: `'Inter', 'Inter Placeholder', sans-serif` }}
    >
      {/* صورة الخلفية */}
      <img
        src={hero}
        alt="Hero"
        className=" absolute inset-0 w-full h-full object-cover opacity-90  top-0"
      />

      {/* Overlay شفاف فوق الصورة */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* النص */}
      <div className="relative z-10 text-center px-4">
        <p className="text-5xl sm:text-4xl text-amber-500   !bg-clip-text md:text-6xl italic  mt-2 font-medium">
          I Captured
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center font-extrabold text-5xl sm:text-7xl md:text-9xl tracking-[0.1em] uppercase text-white mt-4">
  <span>Y</span>

  <svg
    viewBox="0 0 507 185"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[120px] h-[60px] sm:w-[180px] sm:h-[100px] md:w-[250px] md:h-[150px] mx-2"
  >
    <rect
      x="10"
      y="10"
      rx="90"
      ry="90"
      width="487"
      height="165"
      stroke="white"
      strokeWidth="30"
      fill="none"
    />
  </svg>

  <span className="block text-center mt-2 sm:mt-0 sm:inline-block">
    <TextType
      text={["UR STORY", "UR MOMENTS", "UR MEMORIES"]}
      typingSpeed={80}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    />
  </span>
</div>


      </div>
    </section>
  );
}
