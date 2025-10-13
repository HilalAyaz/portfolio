"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/data/Education";

export const ExperienceEducation = () => {
  return (
    <section className="py-20 px-30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience & Education
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Experience */}
          <div className="flex-1 relative pl-8">
            <h3 className="text-4xl font-semibold mb-4 border-b-2 border-primary w-fit">
              Experience
            </h3>
            <div className="absolute left-2 top-0 h-full w-[2px] bg-primary/30"></div>
            <ul className="space-y-8 relative ml-4">
              {experience.map((exp, index) => (
                <motion.li
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-transparent hover:border-primary transition ease-in duration-500"
                >
                  <div className="absolute -left-5 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                  <h2 className="font-bold text-lg">{exp.title}</h2>
                  <p className="text-muted-foreground text-md">
                    {exp.platform}
                  </p>
                  <p className="text-md text-muted-foreground">{exp.date}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="flex-1 relative pl-8">
            <h3 className="text-4xl font-semibold mb-4 border-b-2 border-primary w-fit ">
              Education
            </h3>
            <div className="absolute left-2 top-0 h-full w-[2px] bg-accent/30"></div>
            <ul className="space-y-8 relative ml-4">
              {education.map((edu, index) => (
                <motion.li
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-transparent hover:border-primary transition ease-in duration-500"
                >
                  <div className="absolute -left-5 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <h2 className="font-bold text-lg">{edu.degree}</h2>
                  <p className="text-muted-foreground text-md">
                    {edu.university}
                  </p>
                  <p className="text-md text-muted-foreground">{edu.dates}</p>
                  {edu.url !== "#" && (
                    <Link
                      href={edu.url}
                      target="_blank"
                      className="text-sm text-primary hover:underline"
                    >
                      View Certificate
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/about-hilal"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition"
          >
            More About Me
          </Link>
        </div>
      </div>
    </section>
  );
};
