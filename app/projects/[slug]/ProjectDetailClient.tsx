"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { Project } from "@/data/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticleBackground";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  return (
    <>
      <div className="relative min-h-screen bg-background text-foreground">
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />

          {/* Main Container */}
          <div className="container mx-auto max-w-7xl py-24 px-6">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-background/70 backdrop-blur-md hover:text-accent transition-all rounded-lg px-4 py-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Projects</span>
                </Button>{" "}
              </Link>
            </div>

            {/* Grid Layout: Left Text + Right Image */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              {/* Left: Title, short description, tech, CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {project.title}
                </h1>

                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs md:text-sm rounded-full bg-primary/20 text-primary backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 sm:flex-none"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 sm:flex-none"
                  >
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiGithub className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Right: Project Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Huge Long Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="prose prose-lg max-w-none text-foreground"
            >
              <h2 className="text-3xl font-bold mb-4">Project Details</h2>
              <p>{project.longDescription}</p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
