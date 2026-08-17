"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown, HiDownload } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-20 pt-16 sm:px-10 lg:flex-row lg:justify-between lg:px-12 lg:pt-24"
    >
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">
          Hi, I&apos;m Sagar Sharma
        </p>
        <h1 className="text-4xl font-bold leading-tight text-neutral-50 sm:text-5xl lg:text-6xl">
          Full Stack Developer building{" "}
          <span className="text-gradient">AI-powered</span> web applications
        </h1>
        <div className="mt-4 h-8 text-lg text-neutral-400 sm:text-xl">
          <TypeAnimation
            sequence={[
              "React.js & Next.js",
              2000,
              "Node.js & FastAPI",
              2000,
              "RAG & LLM Agents",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="mt-6 max-w-xl text-neutral-400">
          Results-driven Full Stack Developer with 3+ years of experience building scalable web
          applications using the MERN stack, RAG pipelines, LLM integrations, and agentic AI
          workflows.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <a
            href="#contact"
            className="rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-neutral-950 transition-transform hover:scale-105"
          >
            Get in touch
          </a>
          <a
            href="/pdf/Sagar_Sharma_Resume.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-neutral-100 transition-colors hover:border-neutral-500"
          >
            <HiDownload size={16} />
            Download Resume
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <a
            href="https://github.com/Sagarsharma11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/sagar-sha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 -z-10 rounded-full bg-accent-gradient opacity-30 blur-3xl" />
        <div className="relative h-56 w-56 overflow-hidden rounded-full border border-border bg-surface sm:h-72 sm:w-72">
          <Image
            src="/image/bgremoveportfolio.png"
            alt="Sagar Sharma"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 animate-bounce text-neutral-500 lg:block"
      >
        <HiArrowDown size={22} />
      </a>
    </section>
  );
};

export default Hero;
