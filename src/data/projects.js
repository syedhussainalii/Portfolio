import bankImg from "../assets/websites/HooBank_Cover.png";
import imaginexImg from "../assets/websites/Imaginex_LandingPage.png";
import iphone16Img from "../assets/websites/Iphone16_LandingPage.png";
import iphone17Img from "../assets/websites/Ipone17_LandingPage.png";
import mercedesImg from "../assets/websites/Mercedes_LandingPage.png";
import travelFranceImg from "../assets/websites/Travel_LandingPage_France.png";
import travelLPImg from "../assets/websites/Travel_LandingPage.png";
import travelAgencyImg from "../assets/websites/Travel_Cover.png";

import analyticsDashImg from "../assets/dashboards/Analytics_Dashboard.png";
import dashSphereImg from "../assets/dashboards/Dashboard_Cover.png";
import expenseTrackerImg from "../assets/dashboards/Expense_Cover.png";

import coffeeMobImg from "../assets/mobileapps/Coffee_Mob_App.png";
import smartWatchMobImg from "../assets/mobileapps/SmartWatch_Mob_App.png";

export const projectFilters = [
  { label: "UI/UX Designs", value: "ui-ux" },
  { label: "Web Apps", value: "webapp" },
  { label: "Mobile Apps", value: "mobileapp" },
];

export const projects = [
  // ==========================================================================
  // UI/UX DESIGNS
  // ==========================================================================
  {
    id: "imaginex-landing-page",
    title: "Imaginex Landing Page",
    category: "ui-ux",
    thumbnail: imaginexImg,
    images: [imaginexImg],

    description:
      "A modern AI product landing page designed to showcase an intelligent image generation platform. The interface focuses on clear content hierarchy, engaging visuals, and a clean user experience.",

    technologies: ["Figma", "Auto Layout", "Components", "Prototype"],

    role: "UI/UX Designer",

    features: [
      "Modern hero section with strong visual hierarchy",
      "Responsive landing page layout",
      "Reusable UI components and design system",
      "Interactive prototype with smooth navigation",
    ],

    github: "#",
    live: "#",
    liveUrl: "https://dribbble.com/shots/26345661-Imaginex-AI-Image-Generator-Landing-Page-UI",
    figma: "",
    featured: true,
  },
  {
    id: "iphone-16-landing-page",
    title: "iPhone 16 Landing Page",
    category: "ui-ux",
    thumbnail: iphone16Img,
    images: [iphone16Img],

    description:
      "A premium Apple-inspired landing page concept highlighting the iPhone 16 with bold typography, immersive imagery, and elegant product storytelling.",

    technologies: ["Figma", "Auto Layout", "Components", "Prototype"],

    role: "UI/UX Designer",

    features: [
      "Premium Apple-inspired interface",
      "Product-focused visual storytelling",
      "Responsive layout structure",
      "High-fidelity prototype",
    ],

    github: "#",
    live: "#",
    liveUrl: "https://dribbble.com/shots/26349528-iPhone-16-Pro-MAX-Product-Landing-UI",
    figma: "",
    featured: true,
  },

  {
    id: "iphone-17-landing-page",
    title: "iPhone 17 Landing Page",
    category: "ui-ux",
    thumbnail: iphone17Img,
    images: [iphone17Img],

    description:
      "A futuristic product launch concept designed for the iPhone 17, featuring minimalist layouts, immersive visuals, and smooth user interaction.",

    technologies: ["Figma", "Auto Layout", "Components", "Prototype"],

    role: "UI/UX Designer",

    features: [
      "Minimal and elegant product presentation",
      "Balanced typography and spacing",
      "Interactive user flow",
      "Responsive design concept",
    ],

    github: "#",
    live: "#",
    liveUrl: "https://dribbble.com/shots/26541467-iPhone-17-Pro-Concept-Design",
    figma: "",
    featured: true,
  },
  {
    id: "mercedes-landing-page",
    title: "Mercedes Landing Page",
    category: "ui-ux",
    thumbnail: mercedesImg,
    images: [mercedesImg],

    description:
      "A luxury automotive landing page concept designed to reflect the premium identity of Mercedes-Benz through refined layouts, elegant typography, and immersive visuals.",

    technologies: ["Figma", "Auto Layout", "Components", "Prototype"],

    role: "UI/UX Designer",

    features: [
      "Luxury-inspired visual design",
      "Premium typography and spacing",
      "Responsive landing page",
      "Interactive prototype",
    ],

    github: "#",
    live: "#",
    liveUrl: "https://dribbble.com/shots/26253470-Mercedes-Benz-Landing-Page-UI",
    figma: "",
    featured: true,
  },
  {
    id: "travel-landing-page",
    title: "Travel Landing Page",
    category: "ui-ux",
    thumbnail: travelLPImg,
    images: [travelLPImg],

    description:
      "A modern travel booking landing page created to inspire users with destination highlights, attractive visuals, and a simple booking experience.",

    technologies: ["Figma", "Auto Layout", "Components", "Prototype"],

    role: "UI/UX Designer",

    features: [
      "Destination-focused interface",
      "Clean booking experience",
      "Responsive page layout",
      "Interactive navigation prototype",
    ],

    github: "#",
    live: "#",
    liveUrl: "https://dribbble.com/shots/26512963-Travel-Agency-UI-Landing-Page-UI-Concept",
    figma: "",
    featured: true,
  },
  {
    id: "travel-landing-page-france",
    title: "Travel Landing Page – France",
    category: "ui-ux",
    thumbnail: travelFranceImg,
    images: [travelFranceImg],

    description:
      "A destination-specific landing page showcasing France through immersive imagery, curated travel information, and an engaging user experience.",

    technologies: ["Figma", "Auto Layout", "Components", "Prototype"],

    role: "UI/UX Designer",

    features: [
      "Country-specific travel experience",
      "Visual storytelling layout",
      "Modern responsive design",
      "Interactive prototype",
    ],

    github: "#",
    live: "#",
    liveUrl: "https://dribbble.com/shots/26502039-Travel-WebPage-UI-Design",
    figma: "",
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "ui-ux",
    thumbnail: analyticsDashImg,
    images: [analyticsDashImg],

    description:
      "A modern analytics dashboard designed to present business insights through clean layouts, intuitive navigation, and easy-to-read data visualization.",

    technologies: ["Figma", "Auto Layout", "Components", "Dashboard Design"],

    role: "UI/UX Designer",

    features: [
      "Data-driven dashboard interface",
      "Card-based analytics layout",
      "Clean navigation system",
      "Responsive dashboard design",
    ],

    github: "#",
    live: "#",
    figma: "",
    featured: true,
  },

  // ==========================================================================
  // WEB APPS
  // ==========================================================================
  {
    id: "hoobank-website",
    title: "HooBank Website",
    category: "webapp",
    thumbnail: bankImg,
    images: [bankImg],
    description:
      "A modern digital banking landing page built with React and Tailwind CSS, featuring responsive layouts, smooth animations, reusable components, and a premium user interface.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    role: "Frontend Developer",
    features: [
      "Responsive banking landing page",
      "Reusable React components",
      "Smooth animations and modern UI",
    ],
    github: "#",
    live: "#",
    liveUrl: "https://banking-app-eight-gamma.vercel.app/",
    figma: "",
    featured: true,
  },
  {
    id: "putuk-trano-website",
    title: "Putuk Truno Travel Website",
    category: "webapp",
    thumbnail: travelAgencyImg,
    images: [travelAgencyImg],
    description:
      "A travel agency website focused on destination discovery, engaging visuals, and responsive layouts to provide an immersive browsing experience.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    role: "Frontend Developer",
    features: [
      "Interactive destination sections",
      "Responsive modern interface",
      "Performance-optimized pages",
    ],
    github: "#",
    live: "#",
    liveUrl: "https://hilink-travel-website-next-js.vercel.app/",
    figma: "",
    featured: true,
  },
  {
    id: "dashsphere-dashboard",
    title: "DashSphere Dashboard",
    category: "webapp",
    thumbnail: dashSphereImg,
    images: [dashSphereImg],
    description:
      "An analytics dashboard concept designed to visualize business insights through charts, KPI cards, and a clean dashboard interface.",
    technologies: ["React", "Chart.js", "TypeScript"],
    role: "Frontend Developer",
    features: [
      "Interactive analytics dashboard",
      "Dynamic charts and statistics",
      "Clean admin UI design",
    ],
    github: "#",
    live: "#",
    liveUrl: "https://dash-sphere-admin-dashboard.vercel.app/",
    figma: "",
    featured: true,
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    category: "webapp",
    thumbnail: expenseTrackerImg,
    images: [expenseTrackerImg],
    description:
      "A personal finance application that helps users manage income and expenses with intuitive tracking, categorized transactions, and visual summaries.",
    technologies: ["React", "Node.js", "Chart.js"],
    role: "Full-Stack Developer",
    features: [
      "Income and expense management",
      "Transaction categorization",
      "Visual spending analytics",
    ],
    github: "#",
    live: "#",
    liveUrl: "https://expense-tracker-web-app-zeta.vercel.app/",
    figma: "",
    featured: true,
  },

  // ==========================================================================
  // MOBILE APPS
  // ==========================================================================
  {
    id: "coffee-app",
    title: "Coffee App",
    category: "mobileapp",
    thumbnail: coffeeMobImg,
    images: [coffeeMobImg],
    description:
      "A mobile coffee ordering application featuring a modern interface, product browsing, personalized recommendations, and a seamless ordering experience.",
    technologies: ["React Native", "Expo", "Firebase"],
    role: "Mobile App Developer",
    features: [
      "Coffee menu and product catalog",
      "Modern mobile user interface",
      "Smooth ordering experience",
    ],
    github: "#",
    live: "#",
    figma: "",
    featured: true,
  },
  {
    id: "smartwatch-app",
    title: "SmartWatch App",
    category: "mobileapp",
    thumbnail: smartWatchMobImg,
    images: [smartWatchMobImg],
    description:
      "A smartwatch companion application designed for health tracking, activity monitoring, and an intuitive mobile experience with clean UI components.",
    technologies: ["React Native", "Expo", "Firebase"],
    role: "Mobile App Developer",
    features: [
      "Health and activity tracking",
      "Modern mobile interface",
      "Responsive user experience",
    ],
    github: "#",
    live: "#",
    figma: "",
    featured: true,
  },
];
