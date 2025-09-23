// Footer.jsx
import Threads from "../Threads"; // ✅ استيراد Threads بدلاً من Galaxy

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
          <p className="text-xl text-gray-300">
            Ready to capture the moments that matter most?
          </p>
          <h3 className="text-2xl font-bold">
            Let’s make it happen. <br />
            Contact me today!
          </h3>
        </div>

        {/* Middle Column */}
        <div className="text-center md:text-left md:w-1/3 space-y-4">
          <h4 className="text-xl uppercase tracking-widest text-gray-400">
            Let’s Talk
          </h4>
          <p className="text-lg font-semibold">0031684399384</p>
          <p className="text-xl font-bold underline underline-offset-4">
            ismailbakass9@gmail.com
          </p>
          <p className="text-sm text-gray-300">
            Photographer
            <br />
            (based in Eindhoven)
          </p>
        </div>

        {/* Right Column */}
        <div className="text-center md:text-left md:w-1/3 space-y-2">
          <ul className="space-y-1 text-lg font-medium">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          {/* Social icons */}
          <div className="mt-4 text-sm text-gray-400 space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              X.com ↗
            </a>
          </div>
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
