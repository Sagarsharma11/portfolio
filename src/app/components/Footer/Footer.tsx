import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:sagarsharmatech00@gmail.com", icon: FaEnvelope },
  { label: "Phone", href: "tel:+917366986973", icon: FaPhone },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sagar-sha/", icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/Sagarsharma11", icon: FaGithub },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between sm:px-10 lg:px-12">
        <p className="text-sm text-neutral-500">
          &copy; {year} Sagar Sharma. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-neutral-400 transition-colors hover:text-neutral-50"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
