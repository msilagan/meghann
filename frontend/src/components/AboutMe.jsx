import React from "react";
import TypingText from "./TypingText";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full min-h-screen text-left bg-transparent"
    >
      <div className="max-w-3xl font-mono">
      {/* Typing Highlights */}
        <h2>
          <TypingText
            words={["whoami"]}
            beginChar="$"
            speed={100}
            deleteSpeed={29}
            pause={3500}
            color="text-green-400 dark:text-indigo-300"
            fontSize="text-2xl sm:text-3xl md:text-4xl mb-4"
          />
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
