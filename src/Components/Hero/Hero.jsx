// import hero from "../../assets/hero.webp";

// import TextType from "../Animations/Text-type.jsx";

// export default function Hero() {
//   return (
//     <section
//       id="Home"
//       className="h-screen group flex items-center justify-center  relative bg-black text-white"
//       style={{ fontFamily: `'Inter', 'Inter Placeholder', sans-serif` }}
//     >
//       <img
//         src={hero}
//         alt="Hero"
//         className=" absolute inset-0 w-full h-full object-cover opacity-90  top-0"
//       />

//       <div className="absolute inset-0 bg-black/40"></div>

//       <div className="relative z-10 text-center px-4">
       
//         <p className="text-[20px] sm:text-[85px] text-amber-500 !bg-clip-text italic mt-2 font-medium">
//   I Captured
// </p>



// <div className="flex items-center justify-center font-semibold tracking-[0.1em] uppercase text-white mt-4">
//   <span className="text-[28px] sm:text-[147px] whitespace-nowrap">
//     YOUR STORY
//   </span>
// </div>


//       </div>
//     </section>
//   );
// }


import hero from "../../assets/hero.webp";
import TextType from "../Animations/Text-type.jsx";

export default function Hero() {
  return (
    <section
      id="Home"
      className="relative bg-black text-white overflow-hidden"
      style={{ fontFamily: `'Inter', 'Inter Placeholder', sans-serif` }}
    >
      {/* Background image */}
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh] px-4 py-10">
        <p className="text-[20px] sm:text-[85px] text-amber-500 italic mt-2 font-medium">
          I Captured
        </p>

        <div className="mt-4">
          <span className="text-[28px] sm:text-[100px] md:text-[120px] lg:text-[147px] font-semibold tracking-[0.1em] uppercase whitespace-nowrap block">
            YOUR STORY
          </span>
        </div>
      </div>
    </section>
  );
}
