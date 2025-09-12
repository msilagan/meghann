import React from "react";
import MyIcon from "../assets/meghann_icon.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#011d4b] text-[#e5e7eb] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">
        {/* Left: Logo and Social */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          <div className="flex items-center gap-4">
            <img src={MyIcon} alt="Logo" className="w-25 h-25 rounded" />
            <span className="text-2xl lg:text-3xl font-bold uppercase">
              Meghann C. Silagan
            </span>
          </div>

          <div className="flex gap-4 text-xl lg:text-2xl mt-2">
            <a
              href="https://github.com/msilagan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/meghann-silagan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:meghannsilagan@gmail.com"
              className="hover:text-gray-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-20 text-sm lg:w-2/3">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold uppercase text-[#9ca3af] pb-1">Explore</h3>
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#docs" className="hover:underline">
              Docs
            </a>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
            <a href="#security" className="hover:underline">
              Security
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-bold uppercase text-[#9ca3af] pb-1">Company</h3>
            <a href="#about" className="hover:underline">
              About Us
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a href="#support" className="hover:underline">
              Support
            </a>
            <a href="#news" className="hover:underline">
              News
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-bold uppercase text-[#9ca3af] pb-1">Legal</h3>
            <a href="#imprint" className="hover:underline">
              Imprint
            </a>
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:underline">
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center text-[#9ca3af] text-sm">
        &copy; {new Date().getFullYear()} Meghann Silagan. All rights reserved.
      </div>
    </footer>
  );
}
