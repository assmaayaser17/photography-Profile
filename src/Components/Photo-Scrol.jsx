import ScrollStack, { ScrollStackItem } from "./ScrollStack";

import sport1 from "../assets/sports1.webp";
import sport2 from "../assets/sports2.webp";
import sport3 from "../assets/sports3.webp";
import sport4 from "../assets/sports4.webp";
import sport5 from "../assets/sports5.webp";
import sport6 from "../assets/sports6.webp";
import sport7 from "../assets/sports7.webp";
import sport8 from "../assets/sports8.webp";
import sport9 from "../assets/sports9.webp";
import sport10 from "../assets/sports10.webp";
import sport11 from "../assets/sports11.webp";
import sport12 from "../assets/sports12.webp";
import sport13 from "../assets/sports13.webp";
import sport14 from "../assets/sports14.webp";





const images = [
  sport1, sport2, sport3, sport4, sport5, sport6, sport7,
  sport8, sport9, sport10, sport11, sport12, sport13, sport14,
 
];

export default function PhotoScroll() {
   
  return (
    <section id="my-work" className="bg-black text-white min-h-screen py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">My Work</h2>
        <ScrollStack>
          {images.map((img, index) => (
            <ScrollStackItem key={index}>
              <img
                src={img}
                alt={`Work ${index + 1}`}
                 loading="lazy" 
                className="w-full h-auto rounded-3xl object-cover"
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
