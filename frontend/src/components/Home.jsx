import React from "react";
import Layout from "./Layout";
import Badge from "./Badge";
import MyIcon from "../assets/meghann_icon.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const professionalHighlights = [
  "Engineered autonomous monitoring for hundreds of services at Chewy.",
  "Led cloud adoption initiatives using Terraform, AWS, and GCP.",
  "Automated CI/CD pipelines to optimize deployments for enterprise teams.",
  "Mentored interns and guided team adoption of DORA metrics.",
];

const keySkills = ["Terraform", "AWS", "GCP", "Python", "Kubernetes", "CI/CD"];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 rounded-3xl shadow-lg mx-4 lg:mx-0">
        <img
          src={MyIcon}
          alt="Meghann Silagan"
          className="w-36 h-36 rounded-full shadow-xl border-4 border-indigo-200 mb-6 hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-2">
          MEGHANN C. SILAGAN
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          DevOps & Cloud Engineer | Automating the Cloud | Solving Technical Challenges
        </p>

        {/* Key Skills Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {keySkills.map((skill, i) => (
            <Badge key={i} label={skill} delay={i * 50} />
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-indigo-600 text-3xl mb-6">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>

        {/* Resume Link */}
        <a
          href="/resume"
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
