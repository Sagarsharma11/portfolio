import React from "react";
import Section from "@/utils/components/Section";
import Reveal from "@/utils/components/Reveal";

const SKILL_GROUPS = [
  { title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"] },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "Material UI", "d3.js", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "WebSocket", "FastAPI", "Microservices"],
  },
  {
    title: "AI & ML",
    items: [
      "RAG Pipelines",
      "LLM Integration (OpenAI, Claude)",
      "Text Embeddings",
      "Vector DBs (Pinecone, pgvector, Weaviate)",
      "MCP",
      "Semantic Search",
      "Multi-Agent AI",
    ],
  },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { title: "Cloud & DevOps", items: ["AWS (EC2, S3)", "Docker", "Kafka", "Nginx", "CI/CD"] },
  {
    title: "Testing & Tools",
    items: ["Jest", "Mocha", "Chai", "React Testing Library", "Git", "GitHub", "JIRA", "JWT", "Agile/Scrum"],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Stack</p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">Skills</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, index) => (
          <Reveal delayMs={index * 60} key={group.title}>
            <div className="h-full rounded-xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-neutral-50">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-neutral-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
