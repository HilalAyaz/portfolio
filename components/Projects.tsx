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
              <Card className="h-full bg-card/50 backdrop-blur-lg border-border hover:border-primary/50 transition-all overflow-hidden flex flex-col">
                {/* Image / top section */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-7xl">
                  {project.image}
                </div>

                {/* Content section */}
                <CardContent className="p-6 flex-1 flex flex-col">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 flex-1 overflow-hidden text-ellipsis">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons fixed at bottom */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      onClick={
                        project.demo
                          ? () => window.open(project.demo, "_blank")
                          : undefined
                      }
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:text-primary "
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:text-primary"
                    >
                      <SiGithub className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
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
