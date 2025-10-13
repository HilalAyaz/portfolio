"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticleBackground";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Service } from "@/data/Services";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // 👈 type-safe override
    },
  },
};

export default function ServiceDetailClient({ service }: { service: Service }) {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />

          {/* Back Button */}
          <div className="absolute top-28 left-6 z-20">
            <Link href="/services">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-background/70 backdrop-blur-md hover:text-accent transition-all rounded-lg px-4 py-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Services</span>
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <section className="pt-32 pb-24 px-6">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="text-center mb-20"
              >
                <div className="text-7xl mb-6">{service.icon}</div>
                <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  {service.title}
                </h1>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  {service.longDescription}
                </p>
              </motion.div>

              {/* Features Timeline + Technologies */}
              <div className="grid lg:grid-cols-2 gap-10 bg-card/30 backdrop-blur-xl border border-border/50 p-8 shadow-xl rounded-2xl">
                {/* Left: Timeline */}
                <div className="relative pl-10 space-y-10">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Dot + Line */}
                      <div className="relative flex flex-col items-center">
                        {/* Dot */}
                        <div className="w-4 h-4 rounded-full bg-primary shadow-md border-2 border-background z-10" />

                        {/* Glowing Vertical Line (for all but last) */}
                        {index !== service.features.length - 1 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            whileInView={{ height: "100%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="w-[2px] flex-1 mt-1 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary via-purple-500 to-transparent animate-pulse-slow opacity-80" />
                          </motion.div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="ml-2">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {feature}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                          {index % 2 === 0
                            ? "Designed with performance, scalability, and seamless interactivity in mind."
                            : "Crafted with precision, clean architecture, and modern design principles."}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right: Tech Stack & CTA */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Card className="bg-card/30 backdrop-blur-xl border border-border/50 p-8 shadow-2xl rounded-2xl">
                    <CardContent className="p-0">
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold mb-6 text-center"
                      >
                        Technologies I Use
                      </motion.h2>

                      <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {service.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-sm py-2 px-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-10"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-8 py-4 text-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                    >
                      <Link href="/contact">
                        Let’s Collaborate <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
