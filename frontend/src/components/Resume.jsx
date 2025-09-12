import React from "react";
import Layout from "./Layout";
import Card from "./Card";
import Badge from "./Badge";
import MyIcon from "../assets/meghann_icon.png";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// Core skills for badges
const coreSkills = [
  "Terraform",
  "AWS",
  "GCP",
  "Python",
  "Golang",
  "Kubernetes",
  "Jenkins",
];

// Skill categories for additional skills
const skillCategories = {
  Certifications: [
    "HashiCorp Cloud Engineer Certification - Terraform Associate",
  ],
  Languages: ["Terraform", "Golang", "Python"],
  Monitoring: ["Datadog", "Dynatrace"],
  "Build & Deploy": [
    "Jenkins",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "Git",
    "Artifactory",
    "Ansible",
  ],
  Other: [
    "Terraform Enterprise",
    "GitHub Enterprise",
    "Ruby on Rails",
    "Agile Project Management",
  ],
};

// Professional experience
const experience = [
  {
    title: "Relevant Site Reliability Engineer",
    company: "Chewy, Seattle, WA",
    period: "Nov 2021 – Jul 2025",
    points: [
      "Engineered autonomous monitoring as code to bootstrap alerts, SLOs/SLIs, and more for hundreds of services.",
      "Automated application scaling processes for over 140 services during peak season traffic periods.",
      "Devised deployment strategies for internationalization and migration, optimizing CICD rollouts.",
      "Mentored interns on DORA metrics project delivery.",
    ],
  },
  {
    title: "Cloud Engineer",
    company: "General Mills, Minneapolis, MN",
    period: "Jul 2021 – Oct 2021",
    points: [
      "Accelerated hybrid cloud adoption through scalable infrastructure as code.",
      "Led architecture for Data & Analytics teams’ cloud infrastructure.",
      "Provisioned Azure Kubernetes clusters, subscriptions, projects, IAM policies for evaluation of multiple cloud platforms.",
    ],
  },
  {
    title: "Associate Platform Engineer",
    company: "General Mills, Minneapolis, MN",
    period: "Aug 2019 – Jul 2021",
    points: [
      "Established cloud migration framework with Terraform Enterprise, Sentinel Policy, and Ansible.",
      "Transformed team to Agile with Kanban boards, scrum meetings, git repos, Jenkins pipelines.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Software for Good, Minneapolis, MN",
    period: "Sep 2018 – May 2019",
    points: [
      "Designed & developed full-stack application for a mission-driven client using Ruby on Rails & Javascript/JQuery.",
    ],
  },
];

// Leadership
const leadership = [
  {
    title: "Certified Snowboard Instructor",
    org: "Ski and Snowboard School, Stevens Pass",
    period: "Nov 2022 – Present",
    points: [
      "Provides personalized instruction to diverse groups in a safe and fun environment.",
    ],
  },
  {
    title: "Cultural Pillar Lead",
    org: "Asian Leadership Network, General Mills",
    period: "Jan 2021 – Oct 2021",
    points: [
      "Planned inclusive events for hundreds of employees and families.",
    ],
  },
  {
    title: "Engagement Pillar Lead",
    org: "Women in Digital and Technology, General Mills",
    period: "Aug 2020 – Oct 2021",
    points: [
      "Organized events to empower women in technology and amplify their voices.",
    ],
  },
];

export default function Resume() {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Hero + Core Skills + Social */}
        <div className="lg:w-1/3 flex flex-col items-center gap-8 bg-gradient-to-b from-indigo-50 via-white to-pink-50 p-8 rounded-3xl shadow-lg relative">
          {/* Accent background behind name */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-indigo-100 rounded-full -z-10 opacity-30"></div>

          {/* Hero */}
          <section className="flex flex-col items-center gap-4 w-full">
            <img
              src={MyIcon}
              alt="Meghann Silagan"
              className="w-36 h-36 rounded-full shadow-xl border-4 border-indigo-200 hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-5xl font-extrabold text-indigo-600 text-center leading-tight">
              MEGHANN C. SILAGAN
            </h1>
            <p className="text-xl text-gray-600 font-medium text-center mt-2">
              DevOps Engineer
            </p>
            <p className="text-gray-500 text-center mt-1">
              Lover of Things | Technical Problem Solver
            </p>
          </section>

          {/* Social Links */}
          <section className="flex gap-6 text-indigo-600 text-3xl mt-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </section>

          {/* Core Skills Badges */}
          <section className="w-full text-center mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Core Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {coreSkills.map((skill, i) => (
                <Badge key={skill} label={skill} delay={i * 50} />
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Timeline + Leadership + Additional Skills + Education */}
        <div className="lg:w-2/3 flex flex-col gap-12">
          {/* Professional Experience Timeline */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              Professional Experience
            </h2>
            <div className="relative border-l-2 border-indigo-200 ml-4 pl-6 space-y-8">
              {experience.map((job, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-4 top-2 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-lg transition-transform duration-300 group-hover:scale-110"></div>
                  <Card
                    title={job.title}
                    subtitle={`${job.company} | ${job.period}`}
                    className="bg-white hover:bg-indigo-50 transition-colors duration-300"
                  >
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                      {job.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership & Certifications */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              Leadership & Certifications
            </h2>
            <div className="space-y-6">
              {leadership.map((lead, i) => (
                <Card
                  key={i}
                  title={lead.title}
                  subtitle={`${lead.org} | ${lead.period}`}
                  className="bg-white hover:bg-indigo-50 transition-colors duration-300"
                >
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                    {lead.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          {/* Additional Skills */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              Additional Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(skillCategories).map(([category, skills]) => {
                const filtered = skills.filter((s) => !coreSkills.includes(s));
                if (filtered.length === 0) return null;
                return (
                  <div
                    key={category}
                    className="bg-indigo-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-gray-700 font-semibold mb-1">
                      {category}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {filtered.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Education Section */}
          <section className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Education</h2>
            <div className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg">
                  🎓
                </div>
              </div>

              {/* Education Info */}
              <div className="text-left flex-1">
                <h3 className="text-xl font-semibold text-indigo-600">
                  Bachelor of Computer Engineering
                </h3>
                <p className="text-gray-700 mt-1">
                  University of Minnesota – Twin Cities
                </p>
                <p className="text-gray-500 mt-1">
                  Minneapolis, MN | Class of 2019
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
