import React from "react";
import LogoLoop from "../LogoLoop";
import logo1 from "../../assets/logo1.webp";
import logo2 from "../../assets/logo2.webp";
import logo3 from "../../assets/logo3.webp";
import logo4 from "../../assets/logo4.webp";
import logo5 from "../../assets/logo5.webp";
import logo6 from "../../assets/logo6.webp";
import logo7 from "../../assets/logo7.webp";
import logo8 from "../../assets/logo8.webp";
import logo9 from "../../assets/logo9.webp";
import logo10 from "../../assets/logo10.webp";
import logo11 from "../../assets/logo11.webp";
import logo12 from "../../assets/logo12.webp";
import logo13 from "../../assets/logo13.webp";
import logo14 from "../../assets/logo14.webp";
import logo15 from "../../assets/logo15.webp";
import logo16 from "../../assets/logo16.webp";
import logo17 from "../../assets/logo17.webp";

const clientLogos = [
  { src: logo1, alt: "Client 1" },
  { src: logo2, alt: "Client 2" },
  { src: logo3, alt: "Client 3" },
  { src: logo4, alt: "Client 4" },
  { src: logo5, alt: "Client 5" },
  { src: logo6, alt: "Client 6" },
  { src: logo7, alt: "Client 7" },
  { src: logo8, alt: "Client 8" },
  { src: logo9, alt: "Client 9" },
  { src: logo10, alt: "Client 10" },
  { src: logo11, alt: "Client 11" },
  { src: logo12, alt: "Client 12" },
  { src: logo13, alt: "Client 13" },
  { src: logo14, alt: "Client 14" },
  { src: logo15, alt: "Client 15" },
  { src: logo16, alt: "Client 16" },
  { src: logo17, alt: "Client 17" },
];

const ClientsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-8">They Trust Us</h2>

        <div className="relative h-28">
          <LogoLoop
            logos={clientLogos}
            speed={100}
            direction="left"
            logoHeight={100} 
            gap={48}       
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#f9fafb"
            ariaLabel="Client logos"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
