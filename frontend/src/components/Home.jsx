import React from "react";
import Badge from "./Badge";
import TypingText from "./TypingText";
import MyIcon from "../assets/meghann_icon.png";
import ActionButton from "./ActionButton";
import Skills from "./Skills";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaWpexplorer,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const professionalHighlights = [
  "Engineered scalable cloud infrastructure for production workloads across AWS and GCP.",
  "Improved system reliability with automated SLOs/SLIs and proactive alerting frameworks.",
  "Optimized CI/CD pipelines with Jenkins and GitHub Actions to streamline deployments",
  "Designed hybrid cloud strategies supporting business-critical data analytics workloads.",
];



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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
  className="relative flex flex-col items-center justify-center w-full text-center bg-transparent"
  style={{ height: "calc(100vh - 80px)" }} // full viewport minus navbar
>
  {/* Profile Image */}
  <img
    src={MyIcon}
    alt="Meghann Silagan"
    className="w-40 h-40 sm:w-52 sm:h-52 rounded-full shadow-xl border-4 border-indigo-300 mb-6 hover:scale-110 transition-transform duration-300"
  />

  {/* Heading */}
  <h1 className="text-5xl sm:text-6xl font-light text-indigo-800 dark:text-indigo-100 mb-4">
    Hi, I'm Meghann
  </h1>

  {/* Typing Highlights */}
  <p className="mb-6">
    <TypingText
      words={heroHighlights}
      speed={60}
      deleteSpeed={29}
      pause={1950}
      color="text-indigo-500 dark:text-indigo-300"
      fontSize="text-2xl sm:text-3xl"
    />
  </p>

  {/* Key Skills Badges */}
  <div className="flex flex-wrap justify-center gap-3 mb-8">
    {keySkills.map((skill, i) => (
      <Badge key={i} label={skill} size="sm" delay={i * 50} />
    ))}
  </div>

  {/* Social Icons */}
  <div className="flex gap-6 text-indigo-500 text-3xl mb-8 dark:text-indigo-300">
    <a href="https://linkedin.com/in/meghann-silagan" target="_blank" rel="noreferrer" className="hover:text-indigo-800 transition-colors">
      <FaLinkedin />
    </a>
    <a href="https://github.com/msilagan" target="_blank" rel="noreferrer" className="hover:text-indigo-800 transition-colors">
      <FaGithub />
    </a>
    <a href="mailto:meghannsilagan@gmail.com" target="_blank" rel="noreferrer" className="hover:text-indigo-800 transition-colors">
      <FaEnvelope />
    </a>
  </div>

  {/* Resume / Action Buttons */}
  <div className="flex flex-wrap gap-4 justify-center mt-4">
    <ActionButton icon={FaWpexplorer} iconSize={25} text="Explore CV" to="/resume" />
    <ActionButton
      icon={FaDownload}
      text="Download Resume"
      to={`${import.meta.env.BASE_URL}Meghann_Silagan_Resume.pdf`}
      external
      download="Meghann_Silagan_Resume.pdf"
    />
  </div>
 {/* Edge node dots - wider horizontal spread
 {Array.from({ length: 20 }).map((_, i) => {
  const side = Math.random() < 0.5 ? 'top' : 'bottom';
  const horizontalSide = Math.random() < 0.5 ? 'left' : 'right';

  return (
    <div
      key={i}
      className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-float"
      style={{
        top: side === 'top'
          ? `${Math.random() * 15}%`
          : `${85 + Math.random() * 15}%`,
        left: horizontalSide === 'left'
          ? `${-10 + Math.random() * 50}%`
          : `${60 + Math.random() * 50}%`,
        animationDuration: `${5 + Math.random() * 7}s`, // randomize speed
        animationDelay: `${Math.random() * 5}s`,       // random start
      }}
    ></div>
  );
})} */}



{/* Edge circuit lines - wider horizontal spread */}
<svg className="absolute inset-0 w-full h-full pointer-events-none">
  {/* Top-left line */}
  <line x1="5%" y1="2%" x2="40%" y2="2%" stroke="rgba(0,255,255,0.1)" strokeWidth="1" />
  {/* Bottom-right line */}
  <line x1="60%" y1="98%" x2="95%" y2="98%" stroke="rgba(0,255,255,0.1)" strokeWidth="1" />
  {/* Left vertical line */}
  <line x1="5%" y1="2%" x2="5%" y2="25%" stroke="rgba(0,255,255,0.1)" strokeWidth="1" />
  {/* Right vertical line */}
  <line x1="95%" y1="75%" x2="95%" y2="98%" stroke="rgba(0,255,255,0.1)" strokeWidth="1" />
</svg>


</section>


      <Skills /> 
      {/* Professional Highlights Section
      <section className="mt-16 max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {professionalHighlights.map((highlight, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-gray-700 font-medium">{highlight}</p>
          </div>
        ))}
      </section> */}
    </>
  );
}
