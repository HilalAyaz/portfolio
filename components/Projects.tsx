"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/Projects";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const projects = getFeaturedProjects(3);

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                transform:
                  hoveredIndex === index
                    ? "perspective(1000px) rotateY(5deg)"
                    : "none",
                transition: "transform 0.3s ease",
              }}
            >
              <Card className="group relative h-full w-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg shadow-[0_0_30px_4px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_10px_rgba(0,149,255,0.25)] transition-all duration-300">
                <motion.div
                  className="h-52 w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                <CardContent className="p-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-2xl font-semibold mb-3 block group-hover:text-primary transition-colors duration-300"
                  >
                    {project.title}
                  </Link>

                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 justify-between">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 text-sm group-hover:border-primary transition-all"
                    >
                      <a
                        href={project.demo || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 text-sm group-hover:border-primary transition-all"
                    >
                      <a
                        href={project.source || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiGithub className="mr-2 h-4 w-4" /> View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>

                {hoveredIndex === index && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 rounded-2xl shadow-[0_0_60px_10px_rgba(0,149,255,0.2)] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
