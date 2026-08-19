import introFrontend from "../assets/certificates/MetaCertificates/intro-to-frontend-dev.png";
import programmingJS from "../assets/certificates/MetaCertificates/programming-with-javascript.png";
import versionControl from "../assets/certificates/MetaCertificates/version-control.png";
import htmlCss from "../assets/certificates/MetaCertificates/html-css-in-depth.png";
import reactBasics from "../assets/certificates/MetaCertificates/react-basics.png";
import advancedReact from "../assets/certificates/MetaCertificates/advanced-react.png";
import uiux from "../assets/certificates/MetaCertificates/principles-of-uiux-design.png";
import capstone from "../assets/certificates/MetaCertificates/frontend-developer-capstone.png";
import codingInterview from "../assets/certificates/MetaCertificates/coding-interview.png";

// LinkedIn (Import these after adding the images)
import introAI from "../assets/certificates/LinkedInCertificates/intro-to-ai.JPG";
import generativeAI from "../assets/certificates/LinkedInCertificates/gen-ai.PNG";
import thoughtfulSearch from "../assets/certificates/LinkedInCertificates/online-search.PNG";
import dataAnalytics from "../assets/certificates/LinkedInCertificates/career-skills-in-data-analytics.JPG";

// Coursera (Import later)
// import jsCoursera from "../assets/certificates/CourseraCertificates/introduction-to-javascript.png";

export const certificationIntro = {
  title: "Certifications",
  subtitle: "Courses, certifications and continuous learning.",
};

export const certificationItems = [
  // ===========================
  // META
  // ===========================

  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    category: "Meta",
    description:
      "Learned the fundamentals of frontend development, web technologies and responsive websites.",
    date: "2025",
    verified: true,
    image: introFrontend,
  },

  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    category: "Meta",
    description:
      "Covered JavaScript fundamentals including ES6+, DOM, objects, arrays, functions and async programming.",
    date: "2025",
    verified: true,
    image: programmingJS,
  },

  {
    title: "Version Control",
    issuer: "Meta",
    category: "Meta",
    description:
      "Learned Git, GitHub, branching strategies and collaborative development workflows.",
    date: "2025",
    verified: true,
    image: versionControl,
  },

  {
    title: "HTML & CSS in Depth",
    issuer: "Meta",
    category: "Meta",
    description:
      "Advanced layouts, Flexbox, CSS Grid, animations, responsive design and semantic HTML.",
    date: "2025",
    verified: true,
    image: htmlCss,
  },

  {
    title: "React Basics",
    issuer: "Meta",
    category: "Meta",
    description:
      "Built React applications using JSX, Components, Props, State and Hooks.",
    date: "2025",
    verified: true,
    image: reactBasics,
  },

  {
    title: "Advanced React",
    issuer: "Meta",
    category: "Meta",
    description:
      "Focused on Context API, advanced Hooks, optimization and scalable React architecture.",
    date: "2025",
    verified: true,
    image: advancedReact,
  },

  {
    title: "Principles of UX/UI Design",
    issuer: "Meta",
    category: "Meta",
    description:
      "Learned user-centered design, wireframing, prototyping and usability principles.",
    date: "2025",
    verified: true,
    image: uiux,
  },

  {
    title: "Front-End Developer Capstone",
    issuer: "Meta",
    category: "Meta",
    description:
      "Completed a real-world frontend project applying React, UI development and deployment workflows.",
    date: "2025",
    verified: true,
    image: capstone,
  },

  {
    title: "Coding Interview Preparation",
    issuer: "Meta",
    category: "Meta",
    description:
      "Practiced algorithms, data structures and technical interview problem solving.",
    date: "2025",
    verified: true,
    image: codingInterview,
  },

  // ===========================
  // LINKEDIN
  // Uncomment after importing images
  // ===========================

  {
    title: "Introduction to AI",
    issuer: "LinkedIn Learning",
    category: "LinkedIn",
    description:
      "Learned AI fundamentals, machine learning concepts and real-world applications.",
    date: "2025",
    verified: true,
    image: introAI,
  },

  {
    title: "What is Generative AI",
    issuer: "LinkedIn Learning",
    category: "LinkedIn",
    description:
      "Explored Large Language Models, Generative AI and modern AI tools.",
    date: "2025",
    verified: true,
    image: generativeAI,
  },

  {
    title: "Generative AI: The Evolution of Thoughtful Online Search",
    issuer: "LinkedIn Learning",
    category: "LinkedIn",
    description:
      "Learned how Generative AI is transforming search experiences and information retrieval.",
    date: "2025",
    verified: true,
    image: thoughtfulSearch,
  },

  {
    title: "Career Skills in Data Analytics",
    issuer: "LinkedIn Learning",
    category: "LinkedIn",
    description:
      "Developed professional communication and analytical thinking skills for data analytics careers.",
    date: "2025",
    verified: true,
    image: dataAnalytics,
  },
];
