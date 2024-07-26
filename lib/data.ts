import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import timeSaverImg from "@/public/TimeSaver.png"
import investorPortalImg from "@/public/InvestorPortal.png"
import dataVaultImg from "@/public/DataVault.png"
import swif2PublicImg from "@/public/Swif2Public.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front End Developer",
    location: "Culver City, CA",
    description:
      "As a front end developer at Sony Pictures Entertainment, I created an innovative tool for the metadata team, significantly reducing their workload and enhancing efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-Present",
  },
  {
    title: "Front End JavaScript Developer",
    location: "Newport Beach, CA",
    description:
      "At a leading investment management company, I specialized in developing dynamic customer-facing web applications and transforming legacy sites with modern React frameworks.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2024",
  },
  {
    title: "Teaching Assistant",
    location: "Irvine, CA",
    description:
      "As a teaching assistant for the UCI Department of Continuing Education coding bootcamp, I mentored students and facilitated their learning journey in web development.",
    icon: React.createElement(FaReact),
    date: "2018 - 2019",
  },
  {
    title: "Graduated Bootcamp",
    location: "Irvine, CA",
    description:
      "After an intensive 6-month coding bootcamp, I quickly transitioned into a teaching assistant role, leveraging my fresh knowledge to support and guide new students.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
] as const;

export const projectsData = [
  {
    title: "Time Saver",
    description:
      "A search tool I built for the metadata team at Sony Pictures. It cut down the departments search time by 65%",
    tags: ["React", "CSS", "TV-API", "OMDB API", "ANT Design"],
    imageUrl: timeSaverImg,
  },
  {
    title: "Investor Portal",
    description:
      "I was the front-end developer of the project. It allowed investors to log in and get/request information on the product that was being sold.",
    tags: ["React", "Material UI", "React-Router", "Axios"],
    imageUrl: investorPortalImg,
  },
  {
    title: "Data Vault",
    description:
      "A private web app that investors can log in to to view product information. It shows fund highlights, investments, fund information, due diligence information and more.",
    tags: ["React", "React-router", "Bootstrap", "Redux", "Redux Thunk", "Axios"],
    imageUrl: dataVaultImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;