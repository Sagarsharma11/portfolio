import React from "react";
import Section from "@/utils/components/Section";
import Reveal from "@/utils/components/Reveal";

const EXPERIENCE = [
  {
    company: "Bren Corporation",
    role: "Full Stack Engineer",
    duration: "May 2026 — Present",
    location: "Bengaluru, India · Hybrid",
    bullets: [
      "Developing and enhancing Bren Homes by building scalable, reliable, and user-centric features.",
      "Customizing and extending ERPNext 16 to streamline internal business processes and improve operational efficiency.",
      "Designing and developing scalable backend services using Node.js and FastAPI following microservices architecture.",
      "Building responsive and maintainable web applications using React.js with a focus on performance and usability.",
      "Optimizing application performance using Redis and event-driven architectures with Kafka where appropriate.",
      "Leveraging AI-assisted development tools to accelerate delivery, improve code quality, and automate repetitive tasks.",
    ],
  },
  {
    company: "Hello Mentor Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "Sep 2023 — May 2026",
    location: "Bengaluru, India",
    bullets: [
      "Built RESTful and GraphQL APIs using Node.js and Express.js for student counseling, admissions, and document management workflows — improving system reliability by 25%.",
      "Developed React.js and Next.js UIs with Redux state management, achieving 20% faster page loads; integrated AWS S3 for secure file storage, reducing upload times by 30%.",
      "Implemented JWT-based authentication; designed optimized data models across PostgreSQL and MongoDB; applied Redis caching to improve API response times.",
      "Integrated Zoho APIs, JODO payment gateway, and SpeedLabs APIs; built Python/Puppeteer scraping pipelines for counseling data and exam results.",
      "Integrated MCP servers to expose tools to LLM agents; built a RAG pipeline with vector databases (pgvector/Pinecone) for semantic search-powered recommendations.",
      "Containerized services with Docker; followed structured Git branching in Agile/Scrum sprints.",
    ],
  },
  {
    company: "Alpha World Tech",
    role: "Junior Full Stack Developer",
    duration: "Jan 2023 — Aug 2023",
    location: "India",
    bullets: [
      "Built and maintained full-stack features using React.js, Node.js, Express.js, and MongoDB; developed reusable UI component libraries that reduced frontend development time by 30%.",
      "Designed and consumed REST APIs for multiple client-facing modules; wrote unit and integration tests using Jest and Mocha achieving 80%+ code coverage.",
      "Implemented role-based access control (RBAC), form validations, and dynamic data rendering across web applications.",
      "Collaborated in a team of 5 engineers to deliver client projects end-to-end within deadline using Agile methodology, JIRA, and Git version control.",
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Career</p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">Work Experience</h2>
      </Reveal>

      <div className="mt-12 space-y-10 border-l border-border pl-8">
        {EXPERIENCE.map((job, index) => (
          <Reveal delayMs={index * 100} key={job.company} className="relative">
            <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-accent-gradient" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold text-neutral-50">{job.role}</h3>
              <span className="text-sm text-neutral-500">{job.duration}</span>
            </div>
            <p className="mt-1 text-indigo-400">{job.company}</p>
            <p className="text-sm text-neutral-500">{job.location}</p>
            <ul className="mt-4 space-y-2">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-neutral-400">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
