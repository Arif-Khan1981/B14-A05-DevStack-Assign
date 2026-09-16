import type { ReactNode } from "react";
import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { Technology } from "../../src/types/technology";

export interface TechnologyWithIcon extends Technology {
  icon: ReactNode;
}

export const technologies: TechnologyWithIcon[] = [
  {
    id: "react",
    name: "React",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Popular",
    badgeClassName: "bg-sky-50 text-sky-600",
    iconClassName: "bg-sky-50 text-sky-500",
    icon: <SiReact />,
  },
  {
    id: "vuejs",
    name: "Vue.js",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
    badge: "Versatile",
    badgeClassName: "bg-emerald-50 text-emerald-600",
    iconClassName: "bg-emerald-50 text-emerald-500",
    icon: <SiVuedotjs />,
  },
  {
    id: "svelte",
    name: "Svelte",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Fast",
    badgeClassName: "bg-orange-50 text-orange-600",
    iconClassName: "bg-orange-50 text-orange-500",
    icon: <SiSvelte />,
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
    badge: "",
    badgeClassName: "",
    iconClassName: "bg-neutral-900 text-white",
    icon: <SiNextdotjs />,
  },
  {
    id: "nodejs",
    name: "Node.js",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Standard",
    badgeClassName: "bg-emerald-50 text-emerald-600",
    iconClassName: "bg-emerald-50 text-emerald-500",
    icon: <SiNodedotjs />,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
    badge: "Top SQL",
    badgeClassName: "bg-sky-50 text-sky-600",
    iconClassName: "bg-sky-50 text-sky-500",
    icon: <SiPostgresql />,
  },
  {
    id: "redis",
    name: "Redis",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
    badge: "Cache",
    badgeClassName: "bg-rose-50 text-rose-600",
    iconClassName: "bg-rose-50 text-rose-500",
    icon: <SiRedis />,
  },
  {
    id: "javascript",
    name: "JavaScript",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Ubiquitous",
    badgeClassName: "bg-yellow-50 text-yellow-700",
    iconClassName: "bg-yellow-400 text-neutral-900",
    icon: <SiJavascript />,
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
    badge: "Essential",
    badgeClassName: "bg-blue-50 text-blue-700",
    iconClassName: "bg-blue-500 text-white",
    icon: <SiTypescript />,
  },
  {
    id: "java",
    name: "Java",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
    badge: "Robust",
    badgeClassName: "bg-orange-50 text-orange-600",
    iconClassName: "bg-orange-50 text-orange-500",
    icon: <FaJava />,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Modern",
    badgeClassName: "bg-sky-50 text-sky-600",
    iconClassName: "bg-sky-50 text-sky-500",
    icon: <SiTailwindcss />,
  },
  {
    id: "docker",
    name: "Docker",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
    badge: "Containers",
    badgeClassName: "bg-sky-50 text-sky-600",
    iconClassName: "bg-sky-50 text-sky-500",
    icon: <SiDocker />,
  },
];
