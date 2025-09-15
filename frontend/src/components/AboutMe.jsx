import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full flex justify-center py-20 px-6 bg-gray-900 text-left"
    >
      <div className="max-w-3xl font-mono">
        {/* Command Line */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-green-400 mb-4">
          $ whoami
        </h2>

        {/* Output */}
        <p className="text-indigo-200 text-lg sm:text-xl leading-relaxed">
          Hi, I’m <span className="text-green-400">Meghann Silagan</span> — a
          Cloud Engineer and DevOps enthusiast with a passion for automation,
          scalable infrastructure, and building clean processes. My work spans
          AWS, GCP, and modern cloud-native methodologies like Infrastructure as
          Code.
        </p>

        {/* Optional extra "commands" for flavor */}
        <div className="mt-8 space-y-2">
          <p className="text-green-400">$ pwd</p>
          <p className="text-indigo-200">/home/meghann/portfolio</p>

          <p className="text-green-400">$ ls skills/</p>
          <p className="text-indigo-200">
            cloud-engineering devops automation gcp aws
          </p>
        </div>
      </div>
    </section>
  );
}
