import React from "react";
import Card from "./Card";

export default function ExperienceTimeline() {
  // Professional experience
  const experience = [
    {
      title: "Site Reliability Engineer",
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

  return (
    // Professional Experience Timeline
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
        Professional Experience
      </h2>

      <div className="relative ml-4 pl-6 space-y-8">
        {/* Gradient timeline line */}
        <div className="absolute left-0 top-0 w-[1px] bg-gradient-to-b from-indigo-400 via-pink-300 to-purple-400 rounded animate-line-grow"></div>

        {experience.map((job, i) => (
          <div key={i} className="relative group">
            {/* Timeline bullet */}
            <div className="absolute -left-4 top-2 text-indigo-600 font-normal text-xl transition-transform duration-300 group-hover:translate-x-1">
              &gt;
            </div>

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
  );
}
