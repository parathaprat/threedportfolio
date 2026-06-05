import { smarkt, indexinfo, astrotechlabs, pay3, jio } from "../assets/images";

import {
  css,
  contact,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  redux,
  tailwindcss,
  typescript,
  python,
  java,
  kotlin,
  androidstudio,
  clogo,
  csharp,
  openai,
  three,
  unity,
  solidity,
  summiz,
  // newly added
  aws,
  docker,
  springboot,
  vue,
  vuetify,
  podman,
  fastapi,
  pytorch,
  azure,
  jetpackcompose,
  redis,
  langchain,
  vite,
  amazon,
  virginiatech,
  nitk,
  keyframes,
  clinicalqueue,
  agent16z,
  nokia3310,
} from "../assets/icons";

/* -------------------------------------------------------------------------- */
/*                                   SKILLS                                    */
/* -------------------------------------------------------------------------- */
export const skills = [
  // Languages
  { imageUrl: clogo, name: "C", type: "Languages" },
  { imageUrl: csharp, name: "C#", type: "Languages" },
  { imageUrl: java, name: "Java", type: "Languages" },
  { imageUrl: python, name: "Python", type: "Languages" },
  { imageUrl: kotlin, name: "Kotlin", type: "Languages" },
  { imageUrl: typescript, name: "TypeScript", type: "Languages" },
  { imageUrl: javascript, name: "JavaScript", type: "Languages" },
  { imageUrl: solidity, name: "Solidity", type: "Languages" },

  // Web
  { imageUrl: html, name: "HTML", type: "Web" },
  { imageUrl: css, name: "CSS", type: "Web" },
  { imageUrl: react, name: "React", type: "Web" },
  { imageUrl: vue, name: "VueJS", type: "Web" },
  { imageUrl: vuetify, name: "Vuetify", type: "Web" },
  { imageUrl: nextjs, name: "Next.js", type: "Web" },
  { imageUrl: nodejs, name: "Node.js", type: "Web" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Web" },
  { imageUrl: redux, name: "Redux", type: "Web" },
  { imageUrl: three, name: "Three.js", type: "Web" },
  { imageUrl: vite, name: "Vite", type: "Web" },

  // Mobile
  { imageUrl: androidstudio, name: "Android", type: "Mobile" },
  { imageUrl: jetpackcompose, name: "Jetpack Compose", type: "Mobile" },

  // AI / ML
  { imageUrl: openai, name: "OpenAI / LLMs", type: "AI / ML" },
  { imageUrl: pytorch, name: "PyTorch", type: "AI / ML" },
  { imageUrl: fastapi, name: "FastAPI", type: "AI / ML" },
  { imageUrl: langchain, name: "LangChain", type: "AI / ML" },

  // Cloud / DevOps
  { imageUrl: aws, name: "AWS", type: "Cloud / DevOps" },
  { imageUrl: azure, name: "Azure", type: "Cloud / DevOps" },
  { imageUrl: docker, name: "Docker", type: "Cloud / DevOps" },
  { imageUrl: podman, name: "Podman", type: "Cloud / DevOps" },
  { imageUrl: springboot, name: "Spring Boot", type: "Cloud / DevOps" },

  // Databases & Tools
  { imageUrl: mongodb, name: "MongoDB", type: "Databases & Tools" },
  { imageUrl: redis, name: "Redis", type: "Databases & Tools" },
  { imageUrl: git, name: "Git", type: "Databases & Tools" },
  { imageUrl: github, name: "GitHub", type: "Databases & Tools" },
  { imageUrl: unity, name: "Unity", type: "Databases & Tools" },
];

// The order in which skill categories are displayed on the About page.
export const skillCategories = [
  "Languages",
  "Web",
  "Mobile",
  "AI / ML",
  "Cloud / DevOps",
  "Databases & Tools",
];

/* -------------------------------------------------------------------------- */
/*                                 EDUCATION                                  */
/* -------------------------------------------------------------------------- */
export const education = [
  {
    school: "Virginia Tech",
    degree: "Master of Science, Computer Engineering",
    location: "Virginia, USA",
    date: "2024 - 2026",
    icon: virginiatech,
    iconBg: "#630031",
  },
  {
    school: "National Institute of Technology Karnataka",
    degree: "B.Tech, Computer Science & Engineering · Minor in Management",
    location: "Surathkal, India",
    date: "2020 - 2024",
    icon: nitk,
    iconBg: "#0b2a5b",
  },
];

/* -------------------------------------------------------------------------- */
/*                                EXPERIENCES                                 */
/*            (most recent first, matching the resume timeline)               */
/* -------------------------------------------------------------------------- */
export const experiences = [
  {
    title: "Software Development Engineer (Graduate Assistant)",
    company_name: "Virginia Tech Graduate School, IT Dept.",
    location: "Virginia, USA · On-Site",
    icon: virginiatech,
    iconBg: "#630031",
    date: "August 2025 - May 2026",
    tags: ["Java", "TypeScript", "AWS", "Spring Boot", "VueJS", "Docker", "Podman"],
    points: [
      "Migrating critical applications serving 8,000+ enrolled graduate students from AWS to on-premises servers, cutting server costs by up to 90%.",
      "Collaborated with the Director of IT and the System Administrator to plan and execute the migration, optimizing application architecture and workflows.",
      "Technologies used - Java, TypeScript, JavaScript, AWS (EC2, S3, ECR, CloudFormation), RedHat, Docker, Spring Boot, VueJS, Vuetify, Podman, Tomcat.",
    ],
  },
  {
    title: "Software Development Engineering Intern",
    company_name: "Amazon",
    location: "San Francisco, CA, USA · On-Site",
    icon: amazon,
    iconBg: "#ffffff",
    date: "May 2025 - August 2025",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Dagger", "REST APIs"],
    points: [
      "Engineered a client-facing feature for the Eero Android app, delivering production-ready code to 1M+ users while managing the full feature lifecycle.",
      "Merged 21 PRs and contributed 2,500+ lines of code, achieving 7 out-of-scope goals ahead of schedule using MVVM and Jetpack Compose.",
      "Technologies used - Android Studio, Kotlin, Java, XML, Jetpack Compose, REST APIs, Dagger, Git, Unit & Mock Testing, MVVM, nowinAndroid.",
    ],
  },
  {
    title: "Security Researcher",
    company_name: "Virginia Tech, Bradley Dept. of ECE",
    location: "Virginia, USA · On-Site",
    icon: virginiatech,
    iconBg: "#630031",
    date: "September 2024 - May 2025",
    tags: ["Blockchain", "Veramo", "React", "TypeScript", "MongoDB"],
    points: [
      "Developed and deployed a Decentralized Identity (DID) management system for trustworthy identity management in academia.",
      "Collaborated with a team of 3 researchers and 2 advisors to integrate decentralized technologies with existing academic workflows.",
      "Technologies used - Blockchain, Veramo, HTML, CSS, JavaScript, TypeScript, React, MongoDB, AngularJS, Git, Overleaf, LaTeX.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Jio Platforms Limited",
    location: "Hyderabad, India · On-Site",
    icon: jio,
    iconBg: "#FFFFFF",
    date: "May 2023 - July 2023",
    tags: ["Python", "NumPy", "SciPy", "PyTorch", "Pandas"],
    points: [
      "Developed a tool to reduce emissions in power plants by up to 70% using Multi-Pareto graphs obtained through Multi-Objective Optimization.",
      "Modified the moment matching algorithm to approximate scenarios along with their probabilities, reducing computation time by up to 90%.",
      "Technologies used - Python, Anaconda, NumPy, SciPy, Pandas, PyTorch, Matplotlib.",
    ],
  },
  {
    title: "Technical Research Analyst",
    company_name: "Astrotech Labs",
    location: "Remote",
    icon: astrotechlabs,
    iconBg: "#091549",
    date: "January 2023 - March 2023",
    tags: ["GPT", "Cosmos", "Web3", "Research"],
    points: [
      "Curated and delivered tailored, industry-grade research on various blockchain technologies for the development of future web3 products.",
      "Technologies used - GPT, MARS protocol, Cosmos, Vela, Gains Network, and other web3 protocols.",
    ],
  },
  {
    title: "Product Team (Part-Time)",
    company_name: "Pay3",
    location: "Bangalore, India · Remote",
    icon: pay3,
    iconBg: "#000000",
    date: "September 2022 - December 2023",
    tags: ["Web3", "Blockchain", "Simplex", "Transak", "GameFi"],
    points: [
      "Developed a blockchain-based decentralized payment solution through rigorous testing and research to improve transaction efficiency by 30%.",
      "Integrated cryptocurrency on-ramps and off-ramps, major wallet integrations, and formed partnerships with leading industry stakeholders.",
      "Technologies used - Payments Infrastructure, Blockchain, Web3, GameFi, Simplex, Transak, Microsoft Office Suite.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Index Infotech",
    location: "Dubai, UAE · On-Site",
    icon: indexinfo,
    iconBg: "#05AAEC",
    date: "June 2022 - July 2022",
    tags: ["C#", "Xamarin.Forms", ".NET", "Azure", "SQL Server"],
    points: [
      "Deployed enterprise ERP software with and without cloud implementation using Epicor and Microsoft Azure.",
      "Designed and built a cross-platform ERP app using Xamarin.Forms, serving 150+ users.",
      "Technologies used - C#, Xamarin.Forms, .NET, HTML, CSS, Tailwind, JavaScript, React, SQL Server, MongoDB, Git, Microsoft Azure.",
    ],
  },
  {
    title: "Application Development Intern",
    company_name: "SMARKT",
    location: "Bangalore, India · Remote",
    icon: smarkt,
    iconBg: "#13213D",
    date: "October 2021 - December 2021",
    tags: ["Android", "Kotlin", "Retrofit", "MVVM", "Dagger"],
    points: [
      "Implemented APIs using Retrofit REST in Android Studio following MVVM architecture, improving service speed by up to 50%.",
      "Worked with cross-functional teams to develop an MVP that was used to attract VC investment and raise funding.",
      "Technologies used - Android Studio, Java, Kotlin, Retrofit, REST APIs, Dagger, Git, Unit & Mock Testing, MVVM.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  SOCIALS                                   */
/* -------------------------------------------------------------------------- */
export const resumeUrl =
  "https://drive.google.com/file/d/1Zznpe_iNCJOuf5ttAr3wMxWkuQ2J3b1E/view?usp=sharing";

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/parathaprat",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/prathamesh-dongritot-8b7575211/",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 PROJECTS                                   */
/* -------------------------------------------------------------------------- */
export const projects = [
  {
    iconUrl: keyframes,
    theme: "btn-back-blue",
    featured: true,
    name: "KeyFrames",
    tagline: "AI-Powered YouTube Chapter Summarizer",
    date: "May 2026",
    description:
      "An end-to-end AI pipeline injected into the YouTube sidebar that compresses multi-hour transcripts into interactive chapters and summaries with 90%+ efficiency. Features clickable timestamps, multilingual support, cosine-similarity and LLM-as-a-judge quality scores, and summary exports.",
    tags: ["JavaScript", "Chrome Extension APIs", "Manifest V3", "Claude API", "Node.js", "Shadow DOM"],
    link: "https://github.com/parathaprat/keyFrame",
  },
  {
    iconUrl: clinicalqueue,
    theme: "btn-back-green",
    featured: true,
    name: "ClinicalQueue",
    tagline: "Clinical Outreach Prioritization Tool",
    date: "April 2026",
    description:
      "A focus-first outreach queue for clinical and ops staff with deterministic rule-based priority scoring (tiers and sort keys), keyboard shortcuts, and plain-language reasoning labels, designed for zero training for non-technical clinical staff.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "CSV Parsing", "Vercel"],
    link: "https://github.com/parathaprat/clinicalQueue",
  },
  {
    iconUrl: agent16z,
    theme: "btn-back-pink",
    featured: true,
    name: "Agent16z",
    tagline: "AI-Driven UI Workflow Automation Agent",
    date: "November 2025",
    description:
      "A generalizable LLM-powered agent that automates complex multi-step UI workflows across 3+ web apps, capturing 30+ UI states through DOM analysis and browser automation.",
    tags: ["Python", "Playwright", "Groq API", "Llama 3.1", "FastAPI", "DOM Analysis"],
    link: "https://github.com/parathaprat/agent16z",
  },
  {
    iconUrl: nokia3310,
    theme: "btn-back-blue",
    name: "Nokia 3310 Emulator",
    tagline: "Browser-Based Retro Phone Emulator",
    date: "December 2025",
    description:
      "A browser-based Nokia 3310 emulator that faithfully recreates the iconic handset, with a monochrome green LCD, T9 text input, softkey navigation, a working phonebook and SMS, and the legendary Snake game with high-score tracking.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Docker"],
    link: "https://github.com/parathaprat/nokiaEmulator",
  },
  {
    iconUrl: three,
    theme: "btn-back-black",
    name: "Personal Portfolio Website",
    tagline: "Interactive 3D Developer Portfolio",
    date: "2024",
    description:
      "A 3D personal developer portfolio built with React and Three.js, showcasing skills, projects, and experience through an interactive, animated, and visually engaging interface.",
    tags: ["React", "Three.js", "React Three Fiber", "Tailwind CSS", "Vite"],
    link: "https://github.com/parathaprat/threedportfolio",
  },
  {
    iconUrl: openai,
    theme: "btn-back-yellow",
    name: "AI Summary Generator",
    tagline: "Article & Blog Summarizer",
    date: "2024",
    description:
      "An app that leverages AI to automatically generate concise and informative summaries from lengthy text content, articles, or blogs.",
    tags: ["React", "Redux", "OpenAI", "RapidAPI", "Tailwind CSS"],
    link: "https://github.com/parathaprat/aiSummaryGenerator",
  },
  {
    iconUrl: solidity,
    theme: "btn-back-red",
    name: "Decentralist",
    tagline: "Decentralized Music Playlist DApp",
    date: "2023",
    description:
      "A DApp deployed on the Rinkeby network that lets users around the world add songs to a fully decentralized, on-chain playlist.",
    tags: ["Solidity", "Ethereum", "Hardhat", "Web3", "React"],
    link: "https://github.com/parathaprat/Decentralist---Backend",
  },
  {
    iconUrl: unity,
    theme: "btn-back-orange",
    name: "Kaggle's Creed",
    tagline: "CycleGAN Pixel-Art 2D Platformer",
    date: "2023",
    description:
      "A CycleGAN was designed and optimally trained to convert images into pixelated formats; the generated pixel art was then used to build a 2D platformer game in Unity, called Kaggle's Creed.",
    tags: ["Python", "PyTorch", "CycleGAN", "Unity", "C#"],
    link: "https://github.com/parathaprat/cycleGAN-PixelArt-KagglesCreed",
  },
  {
    iconUrl: unity,
    theme: "btn-back-blue",
    name: "Raging Raptors",
    tagline: "Casual Puzzle Game (4 Levels)",
    date: "2022",
    description:
      "A casual puzzle video game for PC with 4 levels, developed in Unity and inspired by the popular multiplatform game Angry Birds.",
    tags: ["Unity", "C#", "Game Physics", "2D"],
    link: "https://github.com/parathaprat/RagingRaptors",
  },
  {
    iconUrl: pytorch,
    theme: "btn-back-pink",
    name: "Recommendation Systems",
    tagline: "Two-Tower Model Performance Research",
    date: "2024",
    description:
      "Used negative mining, negative sampling, and cross-batch negative sampling strategies to enhance the performance of two-tower recommendation models.",
    tags: ["Python", "PyTorch", "Recommender Systems", "Research"],
    link: "https://github.com/parathaprat/majorproject",
  },
];

/* -------------------------------------------------------------------------- */
/*                                PUBLICATIONS                                */
/* -------------------------------------------------------------------------- */
export const publications = [
  {
    title:
      "The Rise and Fall of High APY Decentralized Autonomous Organizations in the Blockchain Ecosystem",
    venue:
      "International Journal for Research in Applied Science and Engineering Technology (IJRASET)",
    date: "June 2022",
    tags: ["Blockchain", "DAOs", "DeFi"],
  },
  {
    title: "Budget-Constrained Emission Reduction in Economic and Environmental Dispatch",
    venue: "IEEE Power Electronics, Smart Grid, and Renewable Energy (PESGRE) 2023",
    date: "December 2023",
    tags: ["Optimization", "Smart Grid", "IEEE"],
  },
];
