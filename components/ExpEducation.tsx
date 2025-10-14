"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/data/Education";

export const ExperienceEducation = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {" "}
      <div className="container mx-auto max-w-6xl">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12" 
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            {" "}
            Experience & Education
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {" "}
          <div className="flex-1">
            <div className="relative pl-6 sm:pl-8">
              {" "}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 border-b-2 border-primary w-fit">
                Experience
              </h3>
              <div className="absolute left-3 sm:left-2 top-0 h-full w-[2px] bg-primary/30"></div>{" "}
              <ul className="space-y-6 sm:space-y-8 relative ml-2 sm:ml-4">
                {" "}
                {experience.map((exp, index) => (
                  <motion.li
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 sm:pl-8 border-l-2 border-transparent hover:border-primary transition-all duration-300" 
                  >
                    <div className="absolute -left-4 sm:-left-5 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      {" "}
                      <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 text-white" />{" "}
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {" "}
                      <h2 className="font-bold text-base sm:text-lg leading-tight">
                        {" "}
                        {exp.title}
                      </h2>
                      <p className="text-muted-foreground text-sm sm:text-base leading-tight">
                        {" "}
                        {exp.platform}
                      </p>
                      <p className="text-sm text-muted-foreground leading-tight">
                        {" "}
                        {exp.date}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative pl-6 sm:pl-8">
              {" "}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 border-b-2 border-primary w-fit">
                Education
              </h3>
              <div className="absolute left-3 sm:left-2 top-0 h-full w-[2px] bg-accent/30"></div>{" "}
              <ul className="space-y-6 sm:space-y-8 relative ml-2 sm:ml-4">
                {" "}
                {education.map((edu, index) => (
                  <motion.li
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 sm:pl-8 border-l-2 border-transparent hover:border-primary transition-all duration-300" 
                  >
                    <div className="absolute -left-4 sm:-left-5 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      {" "}
                      <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-white" />{" "}
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {" "}
                      <h2 className="font-bold text-base sm:text-lg leading-tight">
                        {" "}
                        {edu.degree}
                      </h2>
                      <p className="text-muted-foreground text-sm sm:text-base leading-tight">
                        {" "}
                        {edu.university}
                      </p>
                      <p className="text-sm text-muted-foreground leading-tight mb-1">
                        {" "}
                        {edu.dates}
                      </p>
                      {edu.url !== "#" && (
                        <Link
                          href={edu.url}
                          target="_blank"
                          className="inline-block text-xs sm:text-sm text-primary hover:underline font-medium" 
                        >
                          View Certificate
                        </Link>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12" 
        >
          <Link
            href="/about-hilal"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300 text-sm sm:text-base font-medium" 
          >
            More About Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
