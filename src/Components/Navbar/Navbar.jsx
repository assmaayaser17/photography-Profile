"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import piano from "../../assets/piano.webp";
import group from "../../assets/group.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-transparent text-white z-50 px-6 py-4 flex  "
      style={{ fontFamily: `'Inter', 'Inter Placeholder', sans-serif` }}
    >
      <div className="flex justify-between w-full mx-auto px-6">
        {/* Left - الاسم واللوجو */}
        <div className="flex items-center space-x-4">
          <div className="border-t border-l border-white opacity-100 mb-8 w-5 h-5"></div>
          <div className="text-2xl md:text-3xl font-bold tracking-wide">
            Ismail Bakass
          </div>
        </div>

        {/* Center Info (Desktop only) */}
        <div className="hidden md:flex w-full max-w-3xl justify-around items-center">
          {/* Photographer */}
          <div className="text-md text-gray-300">
            Photographer
            <br />
            (based in Eindhoven)
          </div>

          {/* Email & phone */}
          <div className="flex flex-col items-center text-center">
            <a className="text-md hover:text-gray-300" href="tel:+31684399384">
              0031684399384
            </a>
            <a
              href="mailto:ismailbakass9@gmail.com"
              className="text-sm hover:text-gray-300"
            >
              ismailbakass9@gmail.com
            </a>
          </div>

          {/* Instagram */}
          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md hover:text-gray-300"
            >
              Instagram ↗
            </a>
          </div>
        </div>

        {/* Right - Menu Button */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
          <div className="border-t border-r border-white opacity-100 mb-8 w-5 h-5"></div>
        </div>
      </div>

      {/* Fullscreen Mobile/Desktop Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 text-white flex flex-col items-center z-50 overflow-y-auto py-12 px-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={32} />
            </button>

            {/* Links + صور */}
            <div className="flex gap-9">
              <div className="grid grid-cols-2 gap-4 mt-12">
                <motion.img
                  src={piano}
                  alt="piano"
                  className="rounded-lg w-80 h-80 object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img
                  src={group}
                  alt="group"
                  className="rounded-lg w-80 h-80 object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>

              <div className="flex flex-col items-center space-y-8 mt-12">
                <a href="#home" className="text-2xl hover:text-gray-300">
                  Home
                </a>
                <a href="#about" className="text-2xl hover:text-gray-300">
                  About
                </a>
                <a href="#contact" className="text-2xl hover:text-gray-300">
                  Contact
                </a>
                <a
                  href="mailto:ismailbakass9@gmail.com"
                  className="text-2xl hover:text-gray-300"
                >
                  Email
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-2xl hover:text-gray-300"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Photographer name at bottom-right */}
            <div className="absolute bottom-20 left-6 text-6xl font-medium text-white">
              Ismail Bakass — Photographer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
