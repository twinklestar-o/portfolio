import CAISImage from "../assets/images/projects/CAIS.webp";
import DashboardWaliImage from "../assets/images/projects/DashboardWali.webp";
import DMSImage from "../assets/images/projects/DMS.webp";
import DAMSImage from "../assets/images/projects/DAMS(2).webp";
import AutomationImage from "../assets/images/projects/automation.webp";
import StoryMapImage from "../assets/images/projects/StoryMap.webp";
import MediReviewImage from "../assets/images/projects/MedireviewHealth.webp";
import CyberDefenseImage from "../assets/images/projects/Morpheus.webp";

export interface Project {
  title: string;
  image?: string;
  role: string;
  period: string;
  problem: string;
  contribution: string;
  approach: string;
  stack: string[];
  result: string;
  repoUrl?: string; // TODO: Add repo link
  demoUrl?: string; // TODO: Add demo link
  isPrivate?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  details: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const portfolioData = {
  name: "Ruth Fidia Siregar",
  headline: "Informatics Undergraduate | Software Developer | Mobile & Full-Stack Developer",
  about: "Informatics undergraduate at Del Institute of Technology with experience in full-stack web and mobile development. Proficient in ReactJS, Flutter, and backend technologies such as C#, Node.js, and Laravel. Strong in REST API integration, system optimization, and performance tuning. Skilled in working within agile teams and translating business needs into technical solutions.",
  contact: {
    email: "ruth.siregar10@gmail.com",
    phone: "+6285270940336",
    linkedin: "https://www.linkedin.com/in/ruth-siregar",
    github: "https://github.com/twinklestar-o/",
    portfolio: "TODO: Add portfolio URL",
  },
  experience: [
    {
      company: "PT Tera Multi Wahana",
      role: "Software Developer & Program Analyst",
      location: "Bekasi, Indonesia",
      period: "August 2025 - Present",
      bullets: [
        "Developed and maintained applications using Flutter for the frontend and C# for the backend.",
        "Implemented REST API integrations and improved system performance and reliability.",
        "Collaborated across teams to deliver scalable and maintainable features.",
        "Serving as a Program Analyst, supporting system analysis and preparing structured Functional Specification Documents (FSD).",
      ],
    },
    {
      company: "Suzuki Finance Indonesia",
      role: "Mobile Developer",
      location: "Jakarta Timur, Indonesia",
      period: "June 2025 - August 2025",
      bullets: [
        "Contributed to the development of a corporate Super App using Flutter.",
        "Led the development of two major modules: SMILE and DAMS.",
        "Implemented offline-first data handling using SQFLite to reduce API dependency.",
        "Integrated mobile frontend with Laravel backend through REST APIs.",
        "Improved operational efficiency through a QR-based asset documentation system.",
      ],
    },
    {
      company: "Institut Teknologi Del",
      role: "Assistant Lecturer",
      location: "Sitoluama, Indonesia",
      period: "August 2023 - May 2025",
      bullets: [
        "Assisted in Computer Architecture and Basic Mathematics courses.",
        "Guided more than 100 students in laboratory and problem-solving sessions.",
        "Strengthened communication and mentoring capabilities.",
      ],
    },
  ] as Experience[],
  projects: [
    {
      title: "Distribution Management System",
      image: DMSImage,
      role: "System Analyst, Coder",
      period: "August 2025 - Present",
      problem: "Need for a scalable and efficient distribution tracking system to align with evolving business needs.",
      contribution: "Analyzed and documented functional requirements, creating comprehensive FSDs. Guided developers and maintained system goals.",
      approach: "Conducted system tuning and optimization for existing modules. Built and debugged critical features for stability.",
      stack: ["Flutter", "C#", "SQL Server", "Visual Studio"],
      result: "Ensured the system remained scalable and user-friendly while resolving implementation challenges promptly.",
      isPrivate: true,
    },
    {
      title: "MediReview Hub",
      image: MediReviewImage,
      role: "Full-Stack Developer",
      period: "2026",
      problem: "Clinical review workflows often require secure case tracking, reviewer assignment, SLA monitoring, and audit-ready documentation, but manual processes can make ownership, status visibility, and compliance traceability difficult to maintain.",
      contribution: "Developed a secure full-stack healthcare case review management system to simulate utilization management workflows, including authentication, role-based access control, case tracking, reviewer workflow, dashboard views, and audit-focused system structure.",
      approach: "Implemented a React + TypeScript frontend using Vite, Tailwind CSS, React Query, React Hook Form, Zod, and Recharts for a responsive healthcare SaaS dashboard experience. Built a FastAPI backend with SQLAlchemy, Alembic, JWT authentication, seeded demo users/cases, and PostgreSQL database support through Docker Compose.",
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Query", "React Hook Form", "Zod", "Recharts", "FastAPI", "SQLAlchemy", "Alembic", "JWT", "PostgreSQL", "Docker"],
      result: "Created a scalable and privacy-aware healthcare workflow application that showcases full-stack engineering, backend API design, secure access control, database modeling, dashboard analytics, and audit-ready case management for regulated healthcare-style environments.",
      repoUrl: "https://github.com/twinklestar-o/medireview-hub",
    },
    {
      title: "Multi-Agent AI-Based Cyber Defense System",
      image: CyberDefenseImage,
      role: "Researcher & System Developer",
      period: "2025 - 2026",
      problem: "Standalone LLM-based intrusion detection can be over-sensitive, produce high false positives, and suffer from latency when processing browser-based cyber threats directly without early filtering.",
      contribution: "Developed a collaborative cyber defense prototype that combines browser telemetry collection, heuristic specialist agents, asynchronous pipeline orchestration, LLM validation, automated response, and centralized monitoring for browser-level threat detection.",
      approach: "Implemented a hybrid IDS architecture with Layer 1 specialist agents for phishing, ransomware, and cryptojacking detection, followed by a Morpheus-like pipeline for contextual aggregation and Llama-3.1-8B validation. The system uses browser extension telemetry, REST-based inter-agent communication, Docker-based modular deployment, SQLite logging, and Streamlit dashboard visualization.",
      stack: ["Python", "Docker", "Docker Compose", "REST API", "Flask", "SQLite", "Streamlit", "Browser Extension", "Manifest V3", "Llama-3.1-8B", "Groq API"],
      result: "Reduced unnecessary LLM API calls by 38.75%, increased detection accuracy from 56.25% to 90.00%, maintained 100% recall for malicious events, and provided near real-time Explainable AI mitigation with automated browser-level blocking for phishing threats.",
      isPrivate: true,
    },
    {
      title: "SuFi One - DAMS and SMILE Modules",
      image: DAMSImage,
      role: "Mobile Developer, Scrum Master",
      period: "June 2025 - August 2025",
      problem: "Requirement for stable field operations with minimal API dependency in a corporate Super App.",
      contribution: "Led the development of core modules and implemented an offline-first architecture.",
      approach: "Used SQFLite for offline data handling and built a QR-based asset documentation system.",
      stack: ["Flutter", "SQFLite", "REST API", "Laravel", "SQL", "PHP"],
      result: "Reduced API dependency and supported stable field operations with real-time tracking.",
      repoUrl: "https://github.com/twinklestar-o/sufi-one-smile-api",
    },
    {
      title: "IT Del Alumni and Career Information System",
      image: CAISImage,
      role: "Full-Stack Developer, Scrum Master",
      period: "January 2025 - May 2025",
      problem: "Lack of a centralized platform for managing alumni relations and career opportunities at IT Del.",
      contribution: "Led agile development and designed the roadmap for future mobile expansion.",
      approach: "Developed a scalable backend using Laravel and MySQL. Coordinated cross-functional teams.",
      stack: ["Laravel", "MySQL", "PHP", "Postman", "Coda", "GitHub"],
      result: "Delivered a structured and maintainable platform with a clear path for future microservices architecture.",
      repoUrl: "https://github.com/mitsuha19/SI-PPKHA",
    },
    {
      title: "Dashboard Wali",
      image: DashboardWaliImage,
      role: "Scrum Master, UI/UX Designer, Front-End Developer",
      period: "October 2024 - December 2024",
      problem: "Parents needed a clear and accessible way to monitor academic and student activity data.",
      contribution: "Led the development and designed user-centered UI/UX for data visualization.",
      approach: "Implemented responsive frontend features using Laravel within an agile framework.",
      stack: ["Laravel", "SQL", "PHP", "Postman", "Coda", "GitHub"],
      result: "Created an intuitive dashboard that improved accessibility to critical student data.",
      isPrivate: true,
    },
    {
      title: "Story Map",
      image: StoryMapImage,
      role: "Front-End Developer",
      period: "November 2025",
      problem: "Users needed an interactive platform to share stories with location data and view them visually through a map-based interface.",
      contribution: "Developed the main SPA flow, including authentication, story listing, story submission, map visualization, favorite story management, and push notification support.",
      approach: "Implemented hash-based routing, integrated the Dicoding Story API, displayed story locations using Leaflet and OpenStreetMap, stored favorite stories with IndexedDB, and configured PWA features using service worker.",
      stack: ["JavaScript", "Vite", "Leaflet", "OpenStreetMap", "REST API", "IndexedDB", "PWA", "Service Worker"],
      result: "Delivered an interactive story-sharing web application that allows users to add stories with coordinates, explore stories on a map, save favorite stories offline, and access the app with PWA capabilities.",
      repoUrl: "https://github.com/twinklestar-o/Story-Map",
    },
    {
      title: "Automation Testing for SMA Negeri 1 Balige Website",
      image: AutomationImage,
      role: "Automation Tester",
      period: "December 2024",
      problem: "Need to ensure website functionality, performance, and usability through automated validation.",
      contribution: "Designed and implemented automated test scripts for critical workflows.",
      approach: "Used Selenium to conduct end-to-end testing and validate user interactions.",
      stack: ["Selenium"],
      result: "Validated critical user workflows and ensured consistent website performance.",
      isPrivate: true,
    },
  ] as Project[],
  skills: [
    {
      category: "Mobile",
      skills: ["Flutter", "Kotlin", "SQFLite"],
    },
    {
      category: "Frontend",
      skills: ["ReactJS", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Backend",
      skills: ["C#", "Node.js", "PHP", "Laravel"],
    },
    {
      category: "Data & APIs",
      skills: ["MySQL", "SQL Server", "REST APIs", "Postman"],
    },
    {
      category: "Testing",
      skills: ["Selenium"],
    },
    {
      category: "Product & Delivery",
      skills: ["System Analysis", "FSD Documentation", "Scrum", "UI/UX", "Figma", "Coda"],
    },
    {
      category: "Tools",
      skills: ["GitHub", "VS Code", "Visual Studio", "Android Studio", "IntelliJ IDEA"],
    },
  ] as SkillGroup[],
  education: [
    {
      school: "Institut Teknologi Del",
      degree: "Undergraduate in Informatics Engineering",
      location: "Laguboti, Indonesia",
      period: "July 2022 - September 2026 (Expected)",
      gpa: "3.79/4.00",
      details: [
        "Awarded a merit scholarship for three consecutive semesters.",
        "Leader of Student Welfare Commission, resolving 15+ student cases.",
      ],
    },
  ] as Education[],
  socials: {
    github: "https://github.com/twinklestar-o/",
    linkedin: "https://www.linkedin.com/in/ruth-siregar",
    email: "ruth.siregar10@gmail.com",
  },
};
