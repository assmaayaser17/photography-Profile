import Threads from "../Threads";

const Footer = () => {
  return (
    <footer className="relative w-full h-[600px] overflow-hidden text-white">
      {/* Threads background */}
      <div className="absolute inset-0 z-0 bg-black">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row gap-20 items-center md:items-start px-6 py-12 space-y-10 md:space-y-0">
        {/* Left Column */}
        <div className="text-center md:text-left md:w-1/3 space-y-2">
          <p className="text-[15px] text-gray-300">
            Ready to capture the moments that matter most?
          </p>
          <h3 className="text-[22px] font-bold">
            Let’s make it happen. <br />
            Contact me today!
          </h3>
        </div>

        {/* Middle Column */}
        <div className="text-center md:text-left md:w-1/3 space-y-4">
          <h4 className="text-xl uppercase tracking-widest text-gray-400">
            Let’s Talk
          </h4>
          <p className="text-[18px] font-semibold">0031684399384</p>
          <p className="text-[32px] font-bold underline underline-offset-4">
            ismailbakass9@gmail.com
          </p>
          <p className="text-[18px] text-gray-300">
            Photographer
            <br />
            (based in Eindhoven)
          </p>
        </div>

        {/* Right Column */}
        <div className="text-center md:text-left md:w-1/3 space-y-2">
          <ul className="space-y-1 text-lg font-medium">
            <li>
              <a href="#Home" className="hover:underline text-[30px]">
                Home
              </a>
            </li>
            <li>
              <a href="#PORTOFOLIO" className="hover:underline text-[30px]">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#WORK" className="hover:underline text-[30px]">
                Work
              </a>
            </li>
            <li>
              <a href="ABOUT" className="hover:underline text-[30px]">
                About Me
              </a>
            </li>
          </ul>

         
        </div>

        {/* الاسم الكبير تحت الشمال */}
        <div className="md:absolute md:bottom-12 md:left-6 w-full md:w-auto text-left mt-8 md:mt-0">
          <h1 className="text-9xl font-extrabold text-white select-none">
            Ismail Bakass
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
