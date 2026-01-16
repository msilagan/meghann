import React from "react";
import TypingText from "./TypingText";

export default function WhoAmI() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-screen h-screen 
      bg-gradient-to-br
        from-indigo-100 via-indigo-100/20 to-pink-100/75
        dark:from-indigo-950 dark:via-gray-900 dark:to-pink-900/10
        transition-colors duration-700
        backdrop-blur-sm"
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
            color="text-green-400"
            fontSize="text-2xl sm:text-3xl md:text-4xl mb-4"
          />
        </h2>

        {/* Output */}
        <p className="text-indigo-800 dark:text-indigo-200 text-lg sm:text-xl leading-relaxed">
          Hi, I’m <span className="text-green-400 dark:text-green-400">Meghann Silagan</span> — A
          Site Reliability Engineer specializing in resilient systems and
          automation at scale. I’ve led reliability and infrastructure efforts
          across AWS and GCP, leveraging comprehensive observability and
          cloud-native practices like Infrastructure as Code to build
          sustainable, high-impact platforms.
        </p>

        {/* Optional extra "commands" for flavor
        <div className="mt-8 space-y-2">
          <p className="text-green-400">$ pwd</p>
          <p className="text-indigo-200">/home/meghann/portfolio</p>

          <p className="text-green-400">$ ls skills/</p>
          <p className="text-indigo-200">
            cloud-engineering devops automation gcp aws
          </p>
        </div> */}
      </div>
    </section>
  );
}
