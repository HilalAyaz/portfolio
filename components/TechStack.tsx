import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Marquee from "react-fast-marquee";

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
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: <SiReact className="h-6 w-6 text-cyan-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-black" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="h-6 w-6 text-green-600" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-6 w-6 text-blue-600" />,
    },
    { name: "Python", icon: <SiPython className="h-6 w-6 text-yellow-500" /> },
    { name: "Django", icon: <SiDjango className="h-6 w-6 text-green-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-green-500" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="h-6 w-6 text-blue-700" />,
    },
    { name: "MySQL", icon: <SiMysql className="h-6 w-6 text-sky-600" /> },
    {
      name: "Supabase",
      icon: <SiSupabase className="h-6 w-6 text-blue-400" />,
    },
    { name: "GraphQL", icon: <SiGraphql className="h-6 w-6 text-pink-500" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="h-6 w-6 text-cyan-400" />,
    },
    { name: "Express", icon: <SiExpress className="h-6 w-6 text-gray-700" /> },
    { name: "Git", icon: <SiGit className="h-6 w-6 text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="h-6 w-6 text-gray-900" /> },
    { name: "GitLab", icon: <SiGit className="h-6 w-6 text-orange-500" /> },
    { name: "Jira", icon: <SiJira className="h-6 w-6 text-blue-600" /> },
    { name: "Slack", icon: <SiSlack className="h-6 w-6 text-purple-600" /> },
    { name: "Docker", icon: <SiDocker className="h-6 w-6 text-blue-400" /> },
    { name: "AWS", icon: <SiAmazon className="h-6 w-6 text-orange-600" /> },
    { name: "Postman", icon: <SiPostman className="h-6 w-6 text-blue-600" /> },
    { name: "Figma", icon: <SiFigma className="h-6 w-6 text-orange-500" /> },
  ];

  const firstHalf = technologies.slice(0, Math.ceil(technologies.length / 2));
  const secondHalf = technologies.slice(Math.ceil(technologies.length / 2));

  const renderMarquee = (
    techs: typeof technologies,
    direction: "left" | "right"
  ) => (
    <Marquee
      gradient={false}
      speed={100}
      direction={direction}
      className="py-8"
    >
      {techs.map((tech) => (
        <motion.div
          key={tech.name}
          whileHover={{ scale: 1.4, y: -3 }}
          className="mx-6"
        >
          <Card className="bg-transparent w-auto h-16 shadow-none border-none ">
            <CardContent className="p-2  flex flex-row items-center gap-2">
              {tech.icon}
              <span className="font-semibold text-2xl">{tech.name}</span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Marquee>
  );

  return (
    <section className="py-8 px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Tech{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </motion.div>

        {renderMarquee(firstHalf, "right")}
        {renderMarquee(secondHalf, "left")}
      </div>
    </section>
  );
};

export default TechStack;
