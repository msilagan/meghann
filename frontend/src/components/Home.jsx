import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import WhoAmI from "./WhoAmI";

const professionalHighlights = [
  "Engineered scalable cloud infrastructure for production workloads across AWS and GCP.",
  "Improved system reliability with automated SLOs/SLIs and proactive alerting frameworks.",
  "Optimized CI/CD pipelines with Jenkins and GitHub Actions to streamline deployments",
  "Designed hybrid cloud strategies supporting business-critical data analytics workloads.",
];

export default function Home() {
  return (
    <>
      <Hero />
      <WhoAmI />
      <Skills />
    </>
  );
}
