import React from "react";
import { FaDocker, FaAws, FaGoogle } from "react-icons/fa";
import { SiTerraform, SiAnsible, SiKubernetes } from "react-icons/si";

const skills = [
  { name: "Docker", category: "Containers", icon: <FaDocker size={48} /> },
  {
    name: "Kubernetes",
    category: "Containers",
    icon: <SiKubernetes size={48} />,
  },
  {
    name: "Terraform",
    category: "Infrastructure",
    icon: <SiTerraform size={48} />,
  },
  { name: "AWS", category: "Cloud", icon: <FaAws size={48} /> },
  { name: "GCP", category: "Cloud", icon: <FaGoogle size={48} /> },
  { name: "Ansible", category: "Automation", icon: <SiAnsible size={48} /> },
];

export default function Skills() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 bg-transparent relative">
      {/* Terminal-style Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono text-indigo-300 mb-12 text-center">
        <span className="text-green-400">$</span> kubectl describe skills
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 w-full max-w-6xl">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-transparent border border-indigo-500/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="text-cyan-400 mb-6">{skill.icon}</div>
            <h3 className="text-indigo-400 text-2xl font-semibold mb-2">
              {skill.name}
            </h3>
            <p className="text-gray-400 text-sm">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
