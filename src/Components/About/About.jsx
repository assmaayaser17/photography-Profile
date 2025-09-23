import React from "react";
import girls from "../../assets/girls.webp";
import profile from "../../assets/profile.webp";
import hockey from "../../assets/hockey.webp";
import { useState } from "react";
import PhotoScroll from "../Photo-Scrol";


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const [showGallery, setShowGallery] = useState(false);
  return (
    <>
      <div
        className="bg-white text-black px-6 py-20 md:px-20"
        style={{ fontFamily: `'Inter', 'Inter Placeholder', sans-serif` }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="mb-12 text-gray-700">
            <div className="text-right">
              <span className="text-6xl font-medium">
                ‘‘ I don’t just take photos
              </span>
            </div>

            {/* الجملة الثانية يسار */}
            <div className="text-left mt-4">
              <h1 className="text-4xl md:text-6xl font-medium leading-tight">
                I capture the raw emotions, the subtle moments, and the untold
                stories that make life so beautiful.
              </h1>
            </div>
          </div>

          {/* Subtext + Testimonial + Images */}
          <div className="mt-12 flex flex-col lg:flex-row gap-10">
            {/* Left side: Texts */}
            <div className="flex-1 space-y-6">
              {/* Subtext */}
              <div className="text-gray-600 text-xl font-bold">
                Whether you're celebrating love,
                <br />
                family, or personal milestones,
                <br />
                I’m here to help you capture
                <br />
                it all. Let’s tell your story
                <br />
                through timeless photography.
              </div>

              {/* Black & White Portrait */}
              <div className="flex-1">
                <img
                  src={hockey}
                  alt="hockey"
                  className="rounded-xl object-cover w-full"
                />
              </div>
            </div>

            <div className="flex-1 max-w-sm">
              <div>
                <div className="bg-white rounded-xl overflow-hidden p-2">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={girls}
                      alt="Model"
                      className="w-[90%] mx-auto rounded-lg object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 pr-3 pl-2 rounded-full flex items-center space-x-2">
                      <img
                        src={profile}
                        alt="Avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="text-base">Ismail bakass</span>
                    </span>
                    <div className="p-4">
                      <h3 className="text-2xl text-gray-700 font-bold mb-2">
                        Ready to capture your
                        <br />
                        moments?
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-base font-medium text-gray-500">
                          Book your photoshoot today and let’s turn your vision
                          into timeless art
                        </p>
                        <button className="ml-4 shrink-0 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 text-lg">
                          ↗
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-44">
                <button
                  className="text-3xl underline"
                  onClick={() => setShowGallery(true)}
                >
                  {" "}
                  Check out my work ↗
                </button>

                {showGallery && (
                  <div className="fixed inset-0 z-50 bg-black text-white overflow-y-auto">
                    <button
                      onClick={() => setShowGallery(false)}
                      className="absolute top-5 right-5 text-4xl z-50 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-300"
                    >
                      ✕
                    </button>

                    <PhotoScroll />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
