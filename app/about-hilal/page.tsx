"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Brain,
  PenTool,
  Code,
  Rocket,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  education as educationData,
  experience as experienceData,
} from "@/data/Education";
import ParticlesBackground from "@/components/ParticleBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutPage = () => {
  const steps = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Research",
      desc: "Understanding requirements & user needs deeply.",
    },
    {
      icon: <PenTool className="w-6 h-6 text-primary" />,
      title: "Plan",
      desc: "Structuring project roadmap & UI/UX flow.",
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Develop",
      desc: "Building scalable & maintainable systems.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary" />,
      title: "Deliver",
      desc: "Deploying and optimizing for performance.",
    },
  ];

  return (
    <>
      {" "}
      <Navbar />
      <div className="relative min-h-screen text-foreground overflow-hidden py-20">
        <ParticlesBackground />

        {/* Hero Section */}
        <section className="relative z-10 py-24 md:py-32">
          <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-xl space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_10px_var(--primary)]">
                  Hilal Ayaz
                </span>
              </h1>
              <p className="text-muted-foreground">
                I’m a passionate <strong>Full Stack Developer</strong> dedicated
                to crafting high-performance, animated, and scalable web
                applications. My goal is to build experiences that merge
                creativity, speed, and flawless design.
              </p>
              <p className="text-muted-foreground">
                With a focus on <strong>Next.js</strong> and{" "}
                <strong>modern web technologies</strong>, I aim to deliver
                intuitive digital solutions that empower businesses and create
                lasting impressions.
              </p>
              <p className="text-muted-foreground">
                Whether developing a SaaS platform, a portfolio system, or
                refining user experiences, I build with precision, performance,
                and purpose.
              </p>
              <div className="flex gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-10 py-3 border border-primary/50 bg-gradient-to-r from-primary to-accent hover:transition-all hover:bg-gradient-to-bl rounded-full text-background font-medium text-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition"
                >
                  Let’s Talk
                </Link>
                <Link
                  href="/projects"
                  className="px-10 py-3 border border-primary/50 text-primary font-medium text-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition hover:bg-primary/10 rounded-full "
                >
                  My Work
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mt-10 md:mt-0"
            >
              <Image
                src="/hilal.jpg"
                alt="Hilal Ayaz"
                width={320}
                height={320}
                className="w-100 h-100 object-cover rounded-full border-4 border-primary shadow-[0_0_30px_var(--primary)]"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="container max-w-7xl mx-auto py-20 px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-center text-4xl md:text-5xl font-bold mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mission
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed"
          >
            To craft seamless, visually captivating web experiences where
            design, interactivity, and performance blend into one. Every line of
            code I write is aimed at empowering creators, entrepreneurs, and
            digital innovators.
          </motion.p>
        </section>

        {/* Journey */}
        <section className="container max-w-7xl mx-auto py-20 px-6">
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
              <h3 className="text-3xl font-semibold mb-6 border-b-2 border-primary w-fit">
                Experience
              </h3>
              <div className="absolute left-2 top-0 h-full w-[2px] bg-primary/30"></div>
              <ul className="space-y-8 relative ml-4">
                {experienceData.map((exp, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-transparent hover:border-primary transition ease-in duration-500"
                  >
                    <div className="absolute -left-5 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <Briefcase className="h-4 w-4 text-background" />
                    </div>
                    <h2 className="font-bold text-lg">{exp.title}</h2>
                    <p className="text-muted-foreground">{exp.platform}</p>
                    <p className="text-sm text-gray-400">{exp.date}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="flex-1 relative pl-8">
              <h3 className="text-3xl font-semibold mb-6 border-b-2 border-accent w-fit">
                Education
              </h3>
              <div className="absolute left-2 top-0 h-full w-[2px] bg-accent/30"></div>
              <ul className="space-y-8 relative ml-4">
                {educationData.map((edu, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-transparent hover:border-accent transition ease-in duration-500"
                  >
                    <div className="absolute -left-5 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-4 w-4 text-background" />
                    </div>
                    <h2 className="font-bold text-lg">{edu.degree}</h2>
                    <p className="text-muted-foreground">{edu.university}</p>
                    <p className="text-sm text-gray-400">{edu.dates}</p>
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
        </section>

        {/* How I Work */}
        <section className="container max-w-7xl mx-auto py-20 px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-center text-4xl md:text-5xl font-bold mb-4"
          >
            How I{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Work
            </span>
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="w-56 bg-background/30 backdrop-blur-md border border-primary/30 hover:bg-background/50 transition shadow-md">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="flex justify-center">{step.icon}</div>
                    <h4 className="font-semibold text-primary">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 left-full w-16 h-[2px] bg-gradient-to-r from-primary to-accent"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
