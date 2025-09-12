import React from "react";
import Layout from "./Layout";
import Badge from "./Badge";
import TypingText from "./TypingText";
import MyIcon from "../assets/meghann_icon.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const professionalHighlights = [
  "Engineered scalable cloud infrastructure for production workloads across AWS and GCP.",
  "Improved system reliability with automated SLOs/SLIs and proactive alerting frameworks.",
  "Optimized CI/CD pipelines with Jenkins and GitHub Actions to streamline deployments",
  "Designed hybrid cloud strategies supporting business-critical data analytics workloads.",
];

const keySkills = ["Terraform", "AWS", "GCP", "Python", "Kubernetes", "CI/CD"];
const heroHighlights = ["DevOps Engineer", "Cloud Engineer", "Problem Solver"];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-w-full bg-gradient-to-b from-indigo-50 via-white to-indigo-100">
        <img
          src={MyIcon}
          alt="Meghann Silagan"
          className="w-36 h-36 rounded-full shadow-xl border-4 border-indigo-600 mb-6 hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-2">
          MEGHANN C. SILAGAN
        </h1>
        <p>
        <TypingText 
          words={heroHighlights} 
          speed={50}       
          deleteSpeed={25} 
          pause={800} 
          color="text-indigo-600"
        />
        </p>

        {/* Key Skills Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {keySkills.map((skill, i) => (
            <Badge key={i} label={skill} delay={i * 50} />
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-indigo-600 text-3xl mb-6">
          <a
            href="https://linkedin.com/in/meghann-silagan"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/msilagan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        {/* Resume Link */}
        <a
          href="#/resume"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300"
        >
          View Full Resume
        </a>
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
