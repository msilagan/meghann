import React from "react";
import Card from "./Card";
import Badge from "./Badge";
import Layout from "./Layout";
import MyIcon from "../assets/meghann_icon.png";

export default function Home() {
  const skills = ["AWS", "Terraform", "Python", "Golang", "Kubernetes", "CI/CD", "React & Vite"];
  const experiences = [
    {
      title: "Costco Wholesale",
      subtitle: "Cloud Engineer | 2023 – Present",
      points: [
        "Drove cloud-native application deployments on GCP using Terraform and Infrastructure as Code.",
        "Optimized CI/CD pipelines, reducing deployment time by 30%.",
        "Implemented scalable monitoring and logging solutions for cloud infrastructure.",
      ],
    },
    {
      title: "Previous Company",
      subtitle: "Software Engineer | 2020 – 2023",
      points: [
        "Developed front-end applications using React and Vite.",
        "Collaborated with designers to deliver user-focused features.",
        "Maintained backend APIs and cloud deployments.",
      ],
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <header className="text-center mb-12" data-aos="fade-down">
        <img
            src={MyIcon}
            alt="Meghann Silagan"
            className="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-indigo-100 mb-4"
        />
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-2">Meghann Silagan</h1>
        <p className="text-gray-600 text-lg">DevOps Engineer | Lover of Things | Technical Problem Solver</p>
        <p className="text-gray-500 mt-1">meghannsilagan@gmail.com • Seattle, WA • (123) 456-7890</p>
      </header>

      {/* Skills */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4" data-aos="fade-up">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <Badge key={skill} label={skill} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center" data-aos="fade-up">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.title} title={exp.title} subtitle={exp.subtitle}>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
        <Card title="Bachelors of Computer Engineering — University of Minnesota, Twin Cities, 2019" />
      </section>
    </Layout>
  );
}
