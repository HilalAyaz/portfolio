"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticleBackground";
import { projects } from "@/data/Projects";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

// Animation variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.25, ease: "easeIn" } },
};

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Unique categories
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filteredProjects = useMemo(() => {
    let temp = projects;

    if (category !== "All") {
      temp = temp.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      temp = temp.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase()) ||
          p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      );
    }

    return temp;
  }, [search, category]);
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Header Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Explore my projects—filter by category or search to find what
            interests you.
          </p>

          {/* Search & Categories */}
          <div className="flex flex-col items-center gap-4 justify-center mb-10 w-full">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-1/3 px-4 py-2 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-full">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={cat === category ? "default" : "outline"}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 pb-24">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              className="grid gap-6"
              style={{
                // Auto-fit responsive grid with min/max card width
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 350px))",
                justifyContent: "center", // centers cards if row isn't full
              }}
              layout
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    layout
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Card className="group relative h-full w-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg shadow-[0_0_30px_4px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_10px_rgba(0,149,255,0.25)] transition-all duration-300">
                      {/* Project Image */}
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

                      {/* Card Content */}
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

                        {/* Tech Tags */}
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

                        {/* Buttons */}
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
                              <ExternalLink className="mr-2 h-4 w-4" /> Live
                              Demo
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

                      {/* Glow on hover */}
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
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
