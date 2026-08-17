import React from "react";
import Section from "@/utils/components/Section";
import Reveal from "@/utils/components/Reveal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  badge?: string;
};

const FLAGSHIP_PROJECT: Project = {
  title: "Secure Code Analyzer",
  description:
    "A multi-agent AI platform for real-time code vulnerability detection. Integrated LLM agents with a RAG pipeline to analyze codebases and surface security risks using context-aware semantic retrieval, with Redis caching and Temporal for workflow orchestration.",
  tags: ["Node.js", "Redis", "MongoDB", "Temporal", "Multi-Agent AI", "LLM", "RAG", "Vector Search"],
};

const STATIC_PROJECTS: Project[] = [
  {
    title: "My Bren",
    description:
      "Mobile app for Bren Corporation's Brain Homes platform, published on the Google Play Store.",
    tags: ["Mobile App"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.brencorp.play.mybren&hl=en_IN",
    liveLabel: "Play Store",
  },
  {
    title: "Hello Mentor Portal",
    description:
      "Student counseling, admissions and document management portal built for Hello Mentor, supporting 4,000+ users in production.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    liveUrl: "https://portal.hellomentor.in/",
  },
  {
    title: "Hello Mentor",
    description: "Hello Mentor's core platform for student counseling and career guidance.",
    tags: ["Next.js", "Node.js"],
    liveUrl: "https://hellomentor.ai/",
  },
  {
    title: "CloudGuardX",
    description: "A cloud security platform currently in active development.",
    tags: [],
    liveUrl: "https://cloudgaurdx.vercel.app/",
    badge: "In Progress",
  },
];

const FEATURED_REPOS: { slug: string; fallback: string; liveUrl?: string }[] = [
  {
    slug: "next-reticulumeducon",
    fallback: "Full-stack education platform built and shipped for a client, live in production.",
    liveUrl: "https://reticulumeducon.com/",
  },
];

async function getFeaturedProjects(): Promise<Project[]> {
  const results = await Promise.all(
    FEATURED_REPOS.map(async ({ slug, fallback, liveUrl }) => {
      try {
        const res = await fetch(`https://api.github.com/repos/Sagarsharma11/${slug}`, {
          next: { revalidate: 3600 },
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!res.ok) throw new Error("not ok");
        const repo: GithubRepo = await res.json();
        return {
          title: repo.name,
          description: repo.description || fallback,
          tags: repo.language ? [repo.language] : [],
          githubUrl: repo.html_url,
          liveUrl: liveUrl || repo.homepage || undefined,
        } satisfies Project;
      } catch {
        return {
          title: slug,
          description: fallback,
          tags: [],
          githubUrl: `https://github.com/Sagarsharma11/${slug}`,
          liveUrl,
        } satisfies Project;
      }
    })
  );
  return [FLAGSHIP_PROJECT, ...results, ...STATIC_PROJECTS];
}

const Projects = async () => {
  const projects = await getFeaturedProjects();

  return (
    <Section id="projects">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Work</p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">Projects</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal delayMs={index * 60} key={project.title} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-colors hover:border-neutral-600">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-neutral-50">{project.title}</h3>
                  {project.badge && (
                    <span className="flex-shrink-0 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-400">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{project.description}</p>
                {project.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {(project.githubUrl || project.liveUrl) && (
                <div className="mt-6 flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-50"
                    >
                      <FaGithub size={16} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-50"
                    >
                      <FaExternalLinkAlt size={13} /> {project.liveLabel || "Live"}
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
