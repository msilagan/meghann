import React from "react";
import Layout from "./Layout";
import Badge from "./Badge";
import Card from "./Card";
import MyIcon from "../assets/meghann_icon.png";

export default function Home() {
  // Skills grouped by category
  const skillCategories = {
    Certifications: ["HashiCorp Cloud Engineer Certification - Terraform Associate"],
    Languages: ["Terraform", "Python", "Golang"],
    Cloud: ["AWS", "Google Cloud Platform"],
    Monitoring: ["Datadog", "Dynatrace"],
    "Build/Deploy": ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Git", "Artifactory", "Ansible"],
    Other: ["Terraform Enterprise", "GitHub Enterprise", "Ruby on Rails", "Agile", "Scrum", "Project Management"],
  };

  // Professional experience
  const experience = [
    {
      title: "Relevant Site Reliability Engineer",
      company: "Chewy, Seattle, WA",
      period: "Nov 2021 – Jul 2025",
      points: [
        "Engineered autonomous monitoring as code to bootstrap alerts, SLOs/SLIs, and more for hundreds of services.",
        "Automated application scaling processes to enhance performance for over 140 services during peak season traffic periods.",
        "Devised deployment strategies for internationalization and migration, optimizing CICD for seamless rollouts.",
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
      points: ["Provides personalized instruction to diverse groups in a safe and fun environment."],
    },
    {
      title: "Cultural Pillar Lead",
      org: "Asian Leadership Network, General Mills",
      period: "Jan 2021 – Oct 2021",
      points: ["Planned inclusive events for hundreds of employees and families."],
    },
    {
      title: "Engagement Pillar Lead",
      org: "Women in Digital and Technology, General Mills",
      period: "Aug 2020 – Oct 2021",
      points: ["Organized events to empower women in technology and amplify their voices."],
    },
  ];

  // Core skills to highlight as badges
  const coreSkills = ["Terraform", "AWS", "Google Cloud Platform", "Python", "Golang", "Kubernetes", "Jenkins"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row items-center gap-8 mb-12 bg-gradient-to-b from-indigo-50 via-white to-pink-50 p-8 rounded-3xl shadow-lg">
        <img
          src={MyIcon}
          alt="Meghann Silagan"
          className="w-32 h-32 rounded-full shadow-lg border-4 border-indigo-100"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-5xl font-extrabold text-indigo-600">MEGHANN C. SILAGAN</h1>
          <p className="text-gray-600 mt-2">SEATTLE WA 98112 | (847) 902 6867 | MEGHANNSILAGAN@GMAIL.COM</p>
          <p className="text-gray-500 mt-1">DevOps Engineer | Lover of Things | Technical Problem Solver</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Skills</h2>

        {/* Core Skills Badges */}
        <div className="mb-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Core Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {coreSkills.map((skill, i) => (
              <Badge key={skill} label={skill} delay={i * 50} />
            ))}
          </div>
        </div>

        {/* Additional Skills by Category */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(skillCategories).map(([category, skills]) => {
            const additionalSkills = skills.filter((s) => !coreSkills.includes(s));
            if (additionalSkills.length === 0) return null;
            return (
              <div key={category}>
                <h4 className="text-gray-700 font-semibold">{category}</h4>
                <ul className="list-disc list-inside text-gray-600 mt-1">
                  {additionalSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Professional Experience</h2>
        <div className="relative border-l-2 border-indigo-200 ml-4 pl-6 space-y-8">
          {experience.map((job, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-4 top-2 w-3 h-3 bg-indigo-600 rounded-full"></div>
              <Card title={job.title} subtitle={`${job.company} | ${job.period}`}>
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

      {/* Leadership Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {leadership.map((lead, i) => (
            <Card key={i} title={lead.title} subtitle={`${lead.org} | ${lead.period}`}>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                {lead.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Education</h2>
        <Card title="Bachelor of Computer Engineering — University of Minnesota, Twin Cities, Minneapolis, MN" />
      </section>
    </Layout>
  );
}
