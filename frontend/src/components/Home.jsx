import React from "react";
import Layout from "./Layout";
import Badge from "./Badge";
import TypingText from "./TypingText";
import MyIcon from "../assets/meghann_icon.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const professionalHighlights = [
  "Engineered scalable cloud infrastructure for production workloads across AWS and GCP.",
  "Improved system reliability with automated SLOs/SLIs and proactive alerting frameworks.",
  "Optimized CI/CD pipelines with Jenkins and GitHub Actions to streamline deployments",
  "Designed hybrid cloud strategies supporting business-critical data analytics workloads.",
];

const keySkills = ["Terraform", "AWS", "GCP", "Python", "Kubernetes", "CI/CD"];
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
  "Amateur Barista",
  "Hybrid Cloud Hype Woman",
  "Pipeline Perfectionist",
  "Bug Exterminator 🐛",
  "CI/CD Conjurer",
  "Log Whisperer",
  "Video Game Virtuoso",
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-transparent">
        {/* Profile Image */}
        <img
          src={MyIcon}
          alt="Meghann Silagan"
          className="w-40 h-40 rounded-full shadow-xl border-4 border-indigo-300 mb-4 hover:scale-110 transition-transform duration-300"
        />

        {/* Heading */}
        <h1 className="text-6xl text-indigo-800 mb-5 font-light">
          Hi, I'm Meghann
        </h1>

        {/* Typing Text */}
        <p className="mb-4">
          <TypingText
            words={heroHighlights}
            speed={60}
            deleteSpeed={29}
            pause={2000}
            color="text-indigo-500"
            fontSize="text-3xl"
          />
        </p>

        {/* Key Skills Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {keySkills.map((skill, i) => (
            <Badge key={i} label={skill} size="sm" delay={i * 50} />
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-indigo-500 text-3xl mb-6">
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

        {/* Resume Buttons */}
        <section className="flex flex-wrap gap-4 justify-center mt-6">
          {/* View Full Resume */}
          <NavLink
            to="/resume"
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-semibold text-white bg-gradient-to-r from-indigo-400 to-pink-300 shadow-lg overflow-hidden group hover:from-pink-500 hover:to-indigo-600 transition-colors duration-300"
          >
            Explore CV
            <span className="absolute inset-0 bg-white opacity-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </NavLink>

          {/* Download Resume */}
          <a
            href={`${import.meta.env.BASE_URL}Meghann_Silagan_Resume.pdf`}
            download="Meghann_Silagan_Resume.pdf"
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-semibold text-white bg-gradient-to-r from-indigo-400 to-pink-300 shadow-lg overflow-hidden group hover:from-pink-500 hover:to-indigo-600 transition-colors duration-300"
          >
            <FaDownload className="w-5 h-5" />
            <span className="relative z-10">Download Resume PDF</span>
            <span className="absolute inset-0 bg-white opacity-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </a>
        </section>
      </section>

      {/* Professional Highlights Section */}
      <section className="mt-16 max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {professionalHighlights.map((highlight, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-gray-700 font-medium">{highlight}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
