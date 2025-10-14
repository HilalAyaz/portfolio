import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiGraphql,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiGithub,
  SiSlack,
  SiDocker,
  SiJira,
  SiAmazon,
  SiPostman,
  SiFigma,
  SiGitlab,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface Technology {
  name: string;
  icon: IconType;
  className: string;
}

export const technologies: Technology[] = [
  {
    name: "React",
    icon: SiReact,
    className: "h-6 w-6 text-cyan-500",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    className: "h-6 w-6 text-black",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    className: "h-6 w-6 text-green-600",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    className: "h-6 w-6 text-blue-600",
  },
  {
    name: "Python",
    icon: SiPython,
    className: "h-6 w-6 text-yellow-500",
  },
  {
    name: "Django",
    icon: SiDjango,
    className: "h-6 w-6 text-green-700",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    className: "h-6 w-6 text-green-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    className: "h-6 w-6 text-blue-700",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    className: "h-6 w-6 text-sky-600",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    className: "h-6 w-6 text-blue-400",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    className: "h-6 w-6 text-pink-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    className: "h-6 w-6 text-cyan-400",
  },
  {
    name: "Express",
    icon: SiExpress,
    className: "h-6 w-6 text-gray-700",
  },
  {
    name: "Git",
    icon: SiGit,
    className: "h-6 w-6 text-orange-500",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    className: "h-6 w-6 text-gray-900",
  },
  {
    name: "GitLab",
    icon: SiGitlab,
    className: "h-6 w-6 text-orange-500",
  },
  {
    name: "Jira",
    icon: SiJira,
    className: "h-6 w-6 text-blue-600",
  },
  {
    name: "Slack",
    icon: SiSlack,
    className: "h-6 w-6 text-purple-600",
  },
  {
    name: "Docker",
    icon: SiDocker,
    className: "h-6 w-6 text-blue-400",
  },
  {
    name: "AWS",
    icon: SiAmazon,
    className: "h-6 w-6 text-orange-600",
  },
  {
    name: "Postman",
    icon: SiPostman,
    className: "h-6 w-6 text-blue-600",
  },
  {
    name: "Figma",
    icon: SiFigma,
    className: "h-6 w-6 text-orange-500",
  },
];