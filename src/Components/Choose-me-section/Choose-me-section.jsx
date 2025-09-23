import React from "react";
import party from "../../assets/party.webp";
import PhotoStatsCard from "../Photo-Card";
import profile from "../../assets/profile.webp";
import hockey2 from "../../assets/hockey2.webp";
import sport2 from "../../assets/sports2.webp";
import sport9 from "../../assets/sports9.webp";

export default function ChooseMe() {
  return (
    <div className="container mx-auto px-5 p-5">
      {/* العنوان والوصف */}
      <div className="text-center flex flex-col gap-8 mt-20">
        <h2 className="text-gray-700 text-4xl md:text-6xl font-bold leading-tight">
          Why choose me as your <br /> Photographer?
        </h2>
        <p className="text-lg md:text-2xl font-medium text-gray-500">
          From expert guidance to a stress-free experience, I’m here to capture
          <br className="hidden md:block" />
          your most memorable moments with quality and care.
        </p>
      </div>

      {/* كارد الصور + صورة ثابتة */}
      <div className="flex flex-col lg:flex-row gap-5 mt-12">
        <PhotoStatsCard />
        <div className="w-full lg:w-1/2">
          <img
            src={party}
            alt="party"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* سكشن البروفايل والجانب */}
      <div className="flex flex-col lg:flex-row gap-8 mt-16 items-start">
        {/* عمود البروفايل */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-1/3">
          <div className="relative w-full">
            <img
              src={profile}
              alt="profile"
              className="object-cover rounded-xl shadow-md w-full h-64 md:h-96"
            />
            <a
              href="https://www.instagram.com/livwsi?igsh=bHlud3duamVvcnVk"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-xl text-sm md:text-base hover:underline flex items-center gap-2"
            >
              Check my Instagram
              <span className="ml-1">↗</span>
            </a>
          </div>

          <div className="w-full max-w-xs md:max-w-md h-[120px] md:h-[150px] flex flex-col justify-center items-center gap-2 border border-gray-200 text-white px-4 py-4 rounded-2xl shadow-md text-center">
            <p className="text-2xl md:text-3xl font-bold text-black">100+</p>
            <p className="text-base md:text-xl text-gray-400">
              satisfied clients
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <img
            src={hockey2}
            alt="side-1"
            className="object-cover rounded-2xl shadow-sm w-full h-52 md:h-72"
          />
          <img
            src={sport2}
            alt="side-2"
            className="object-cover rounded-2xl shadow-sm w-full h-52 md:h-72"
          />
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          {/* <div className="grid grid-cols-2 gap-4">
            <div className="w-full max-w-xs md:max-w-md  md:h-[150px] flex flex-col justify-center items-center gap-2 border border-gray-200 text-white px-4 py-4 rounded-2xl shadow-md text-center">
              <p className="text-xl md:text-3xl font-bold text-gray-700 text-center">30%</p>
              <p className="text-xs md:text-sm text-gray-500 text-center">
                Clients book another<br />session within a year
              </p>
            </div>
            {/* <div className="bg-gray-100 rounded-xl aspect-square p-4 flex justify-center items-center shadow-md">
              
            </div> */}
          {/* </div>  */}
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full h-auto flex flex-col justify-center items-center gap-2 border border-gray-200 bg-white px-4 py-6 rounded-2xl shadow-md text-center">
              <p className="text-xl md:text-3xl font-bold text-gray-700 text-center">
                30%
              </p>
              <p className="text-xs md:text-sm text-gray-500 text-center">
                Clients book another
                <br />
                session within a year
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <img
              src={sport9}
              alt="extra-1"
              className="object-cover rounded-2xl shadow-md w-full h-52 md:h-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
