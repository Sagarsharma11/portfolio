import React from "react";
import Section from "@/utils/components/Section";
import Reveal from "@/utils/components/Reveal";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "sagarsharmatech00@gmail.com",
    href: "mailto:sagarsharmatech00@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+91 73669 XXXX3",
    href: "tel:+917366986973",
    icon: FaPhone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sagar-sha",
    href: "https://www.linkedin.com/in/sagar-sha/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Sagarsharma11",
    href: "https://github.com/Sagarsharma11",
    icon: FaGithub,
  },
];

const Contact = () => {
  return (
    <Section id="contact">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Contact</p>
        <h2 className="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">Let&apos;s work together</h2>
        <p className="mt-4 max-w-xl text-neutral-400">
          I&apos;m always open to discussing new opportunities, interesting projects, or just
          talking tech. Reach out through any of the channels below.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {CONTACT_LINKS.map(({ label, value, href, icon: Icon }, index) => (
          <Reveal delayMs={index * 60} key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-neutral-600"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent-gradient text-neutral-950">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-sm text-neutral-500">{label}</p>
                <p className="font-medium text-neutral-100">{value}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
