import React from "react";
import Section from "@/utils/components/Section";
import Reveal from "@/utils/components/Reveal";

const FACTS = [
  { label: "Experience", value: "3+ Years" },
  { label: "Location", value: "Bengaluru, India" },
  { label: "Education", value: "MCA, 8.79 CGPA" },
  { label: "Focus", value: "MERN + AI/RAG" },
];

const About = () => {
  return (
    <Section id="about">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">About Me</p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">Who I am</h2>
      </Reveal>

      <Reveal delayMs={100} className="mt-6 max-w-3xl">
        <p className="text-lg leading-relaxed text-neutral-400">
          Results-driven Full Stack Developer with 3+ years of experience building scalable web
          applications using the MERN stack. Proficient in React.js, Next.js, Node.js, Python,
          FastAPI, Express.js, GraphQL, PostgreSQL, Redis, AWS, Docker, and Kafka. Experienced in
          RAG (Retrieval-Augmented Generation) pipelines, LLM integration (OpenAI, Anthropic
          Claude), vector databases (Pinecone, pgvector), MCP (Model Context Protocol), text
          embeddings, and agentic AI workflows. Skilled in microservices architecture, REST/GraphQL
          API design, third-party integrations, and Agile/Scrum delivery.
        </p>
      </Reveal>

      <Reveal delayMs={200} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {FACTS.map((fact) => (
          <div key={fact.label} className="rounded-xl border border-border bg-surface p-5">
            <p className="text-sm text-neutral-500">{fact.label}</p>
            <p className="mt-1 font-semibold text-neutral-100">{fact.value}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
};

export default About;
