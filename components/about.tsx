"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from the UCI coding{" "}
        <span className="font-medium">Bootcamp</span>, I embarked on a rewarding
        career in <span className="font-medium">front-end development</span>.{" "}
        With six years of experience, I've honed my skills in building dynamic
        websites and applications, specializing in React.
        <span className="italic"> My favorite aspect of programming</span> is
        the creative outlet it provides. I{" "}
        <span className="underline">love</span> the feeling of seeing my code
        come to life! My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, and I continually seek to expand
        my knowledge and adopt new technologies. Currently, I am looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy spending
        time with my wife and 2 children, playing video games, and going to the
        gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        pursuing an{" "}
        <span className="font-medium">
          AWS Cloud Practitioner Certification
        </span>
        .
      </p>
    </motion.section>
  );
}
