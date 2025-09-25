import { useState } from "react";
import book from "../../assets/book.webp";
import { ArrowUpRight } from "lucide-react";

export default function BookSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen flex justify-center text-white px-6 py-10 md:px-20 md:py-20"
      style={{
        backgroundImage: `url(${book})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between w-full max-w-6xl">
        {/* Title */}
        <div>
          <p className="text-[56px] text-gray-300  font-bold text-left leading-snug">
            Capturing moments
            <br />
            that tell your story
            <br />
            and bring emotions,
            <br />
            to life.
          </p>
        </div>

        {/* Description - shifted right on md+ screens (like 'L' shape) */}
        <div className="mt-10 md:ml-48">
          <p className="text-[18px] text-gray-300  font-bold text-left leading-relaxed">
            My goal is to capture the real, raw
            <br />
            emotions behind every image, turning
            <br />
            fleeting moments into lasting memories.
            <br />
            Whether it’s the joy of a wedding, the love
            <br />
            between family members, or the laughter
            <br />
            shared among friends, I aim to freeze
            <br />
            those feelings in time.
          </p>
        </div>

        {/* Button + Arrow */}
        <div className="mt-10 md:ml-auto md:pr-6 flex items-center gap-3 underline w-fit">
          <a
            className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Book Session
          </a>
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Dialog */}
    
    </section>
  );
}
