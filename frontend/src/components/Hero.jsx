import React from "react";
import TypingText from "./TypingText";
import Badge from "./Badge";
import ActionButton from "./ActionButton";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaWpexplorer,
} from "react-icons/fa";
import MyIcon from "../assets/meghann_icon.png";
import ScrollIndicator from "./Scroll";

const keySkills = ["Terraform", "AWS", "GCP", "Python", "Kubernetes"];
const heroHighlights = [
  "DevOps Diva",
  "Certified Snowboard Instructor",
  "Automation Addict",
  "Site Reliability Goddess",
  "Dedicated Dog Mom",
  "Cloud Infrastructure Champion",
  "Taco-Driven Developer 🌮",
  "React Rookie 🐣",
  "K8s Connoisseur",
  "Amateur Barista ☕️",
  "Hybrid Cloud Hype Woman",
  "Pipeline Perfectionist",
  "Bug Exterminator 🐛",
  "CI/CD Conjurer",
  "Log Whisperer 🕵️",
  "Video Game Virtuoso",
  "Scripting Sorcerer 🪄",
];

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center w-full text-center bg-transparent"
        style={{ height: "calc(100vh - 50px)" }} // full viewport minus navbar
      >
        {/* Profile Image */}
        <img
          src={MyIcon}
          alt="Meghann Silagan"
          className="w-40 h-40 sm:w-52 sm:h-52 rounded-full shadow-xl border-4 border-indigo-300 mb-6 hover:scale-110 transition-transform duration-300"
        />

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-light text-indigo-800 dark:text-indigo-50 mb-3 sm:mb-4">
          Meghann Silagan
        </h1>

        {/* Typing Highlights */}
        <p className="mb-4 sm:mb-6">
          <TypingText
            words={heroHighlights}
            speed={60}
            deleteSpeed={29}
            pause={1950}
            color="text-indigo-500 dark:text-indigo-300"
            fontSize="text-xl sm:text-3xl font-bold"
          />
        </p>

        {/* Key Skills Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-4 md:mb-8">
          {keySkills.map((skill, i) => (
            <Badge key={i} label={skill} size="sm" delay={i * 50} />
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-indigo-500 text-2xl md:text-3xl mb-2 md:mb-8 dark:text-indigo-300">
          <a
            href="https://linkedin.com/in/meghann-silagan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-800 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/msilagan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-800 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:meghannsilagan@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-800 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Resume / Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <ActionButton
            icon={FaWpexplorer}
            iconSize={25}
            text="Explore CV"
            to="/resume"
          />
          <ActionButton
            icon={FaDownload}
            text="Download Resume"
            to={`${import.meta.env.BASE_URL}Meghann_Silagan_Resume.pdf`}
            external
            download="Meghann_Silagan_Resume.pdf"
          />
        </div>

        <ScrollIndicator />

        {/* Edge circuit lines - wider horizontal spread */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Top-left line */}
          <line
            x1="5%"
            y1="2%"
            x2="40%"
            y2="2%"
            className="stroke-cyan-400/15 dark:stroke-cyan-300/10"
            strokeWidth="1"
          />

          {/* Bottom-right line */}
          <line
            x1="60%"
            y1="98%"
            x2="95%"
            y2="98%"
            className="stroke-cyan-400/15 dark:stroke-cyan-300/10"
            strokeWidth="1"
          />

          {/* Left vertical line */}
          <line
            x1="5%"
            y1="2%"
            x2="5%"
            y2="25%"
            className="stroke-cyan-400/15 dark:stroke-cyan-300/10"
            strokeWidth="1"
          />

          {/* Right vertical line */}
          <line
            x1="95%"
            y1="75%"
            x2="95%"
            y2="98%"
            className="stroke-cyan-400/15 dark:stroke-cyan-300/10"
            strokeWidth="1"
          />
        </svg>
      </section>
    </>
  );
}
