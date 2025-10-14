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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ParticlesBackground from "@/components/ParticleBackground";
import OptimizedImage from "@/components/OptimizedImage";
import { ExperienceEducation } from "@/components/ExpEducation";

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

        <section className="relative z-10 py-24 md:py-32">
          <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mt-10 md:mt-0 order-first md:order-last"
            >
              <OptimizedImage
                src="/hilal.jpg"
                alt="Hilal Ayaz"
                className="w-80 h-80 sm:w-100 sm:h-100 rounded-full border-4 border-primary shadow-[0_0_30px_var(--primary)] "
                priority={true}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-xl space-y-6 order-last md:order-first" 
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_10px_var(--primary)]">
                  Hilal Ayaz
                </span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg">
                I'm a passionate <strong>Full Stack Developer</strong> dedicated
                to crafting high-performance, animated, and scalable web
                applications. My goal is to build experiences that merge
                creativity, speed, and flawless design.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg">
                With a focus on <strong>Next.js</strong> and{" "}
                <strong>modern web technologies</strong>, I aim to deliver
                intuitive digital solutions that empower businesses and create
                lasting impressions.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg">
                Whether developing a SaaS platform, a portfolio system, or
                refining user experiences, I build with precision, performance,
                and purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:gap-6 sm:pt-6 sm:items-center sm:justify-start text-center">
                <Link
                  href="/contact"
                  className="px-8 sm:px-10 py-3 border border-primary/50 bg-gradient-to-r from-primary to-accent hover:transition-all hover:bg-gradient-to-bl rounded-full text-background font-medium text-sm sm:text-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition"
                >
                  Let’s Talk
                </Link>
                <Link
                  href="/projects"
                  className="px-8 sm:px-10 py-3 border border-primary/50 text-primary font-medium text-sm sm:text-md shadow-lg hover:shadow-[0_0_20px_var(--primary)] transition hover:bg-primary/10 rounded-full"
                >
                  My Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="container max-w-6xl mx-auto py-20 px-6">
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
        <section className="container max-w-6xl mx-auto py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" mb-12"
          >
            <ExperienceEducation />
          </motion.div>
        </section>

        {/* How I Work */}
        <section className="container max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16"
          >
            How I{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Work
            </span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-6 xl:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center w-full lg:w-auto"
              >
                {index < steps.length - 1 && (
                  <motion.div
                    className="block lg:hidden absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/60 to-accent/60 -translate-x-1/2 rounded-full"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  
                )}

                <Card className="w-full max-w-sm sm:max-w-md lg:w-56 xl:w-64 bg-background/50 backdrop-blur-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl group">
                  <CardContent className="p-6 sm:p-7 lg:p-6 xl:p-7 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                        <div className="text-2xl text-primary">{step.icon}</div>
                      </div>
                    </div>

                    <h4 className="font-bold text-primary text-lg sm:text-xl lg:text-lg xl:text-xl group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:flex absolute top-1/2 left-full w-8 xl:w-12 -translate-y-1/2 items-center"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-1" />
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                    <div className="w-1.5 h-1.5 bg-accent rounded-full ml-1" />
                  </motion.div>
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
