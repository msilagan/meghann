import React from "react";
import MyIcon from "../assets/meghann_icon.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative">
    {/* Gradient line fading at ends with pink → blue in the center */}
      <div
        className="h-px w-full mx-auto"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0), rgba(249,168,212,0.6), rgba(96,165,250,0.6), rgba(255,255,255,0))"
        }}
      ></div>



      <footer className="mt-0 bg-white/25 backdrop-blur-sm py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-16">

          {/* Left: Photo + Name + Icons */}
          <div className="flex items-center gap-6">
            {/* Photo */}
            <div>
              <img
                src={MyIcon}
                alt="Logo"
                className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-indigo-200 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Name + Icons stacked vertically */}
            <div className="flex flex-col items-start justify-center gap-2">
              <span className="text-xl lg:text-2xl text-indigo-700 leading-snug">
                Meghann C. <br /> Silagan
              </span>

              {/* Icons in a row */}
              <div className="flex flex-row gap-3 text-xl lg:text-2xl">
                <a
                  href="https://github.com/msilagan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-500/85 hover:text-indigo-800 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/meghann-silagan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-500/85 hover:text-indigo-800 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:meghannsilagan@gmail.com"
                  className="text-indigo-500/85 hover:text-indigo-800 transition-colors"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col sm:flex-row gap-12 text-sm text-center lg:text-left">
            <div className="flex flex-col gap-1 items-center lg:items-start">
              <h3 className="font-bold uppercase text-gray-400 pb-1">Explore</h3>
              <a href="#features" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">Features</a>
              <a href="#docs" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">Docs</a>
              <a href="#pricing" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">Pricing</a>
              <a href="#security" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">Security</a>
            </div>

            <div className="flex flex-col gap-1 items-center lg:items-start">
              <h3 className="font-bold uppercase text-gray-400 pb-1">Company</h3>
              <a href="#about" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">About Us</a>
              <a href="#contact" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">Contact</a>
              <a href="#support" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">Support</a>
              <a href="#news" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">News</a>
            </div>

            <div className="flex flex-col gap-1 items-center lg:items-start">
              <h3 className="font-bold uppercase text-gray-400 pb-1">Legal</h3>
              <a href="#imprint" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">Imprint</a>
              <a href="#privacy" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-600 hover:underline hover:text-indigo-700 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center text-gray-400 text-sm mt-6">
          &copy; {new Date().getFullYear()} Made with 💗 by Meghann Silagan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
