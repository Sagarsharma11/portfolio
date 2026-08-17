import React from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, className = "", children }: SectionProps) => {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
