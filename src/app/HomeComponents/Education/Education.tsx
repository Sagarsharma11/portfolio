import React from "react";
import Section from "@/utils/components/Section";
import Reveal from "@/utils/components/Reveal";
import { HiAcademicCap } from "react-icons/hi";

const Education = () => {
  return (
    <Section id="education" className="!py-12">
      <Reveal>
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-gradient text-neutral-950">
              <HiAcademicCap size={24} />
            </span>
            <div>
              <h3 className="font-semibold text-neutral-50">Master of Computer Applications (MCA)</h3>
              <p className="text-sm text-neutral-400">
                New Horizon College of Engineering, Bengaluru, Karnataka
              </p>
            </div>
          </div>
          <div className="flex flex-col text-sm text-neutral-500 sm:text-right">
            <span>2021 — 2023</span>
            <span>CGPA: 8.79 / 10</span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default Education;
