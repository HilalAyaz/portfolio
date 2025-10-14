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
      duration: 0.6,
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

          {/* Hero Section */}
          <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-8">
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-background/70 backdrop-blur-md hover:text-accent transition-all rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm"
                  >
                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Back to Services</span>
                  </Button>
                </Link>
              </div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="text-center mb-12 sm:mb-20"
              >
                <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">
                  {service.icon}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent px-4">
                  {service.title}
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                  {service.longDescription}
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 bg-card/30 backdrop-blur-xl border border-border/50 p-4 sm:p-6 md:p-8 shadow-xl rounded-xl sm:rounded-2xl">
                <div className="relative space-y-6 sm:space-y-8 md:space-y-10">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex items-start gap-4 sm:gap-6"
                    >
                      <div className="relative flex flex-col items-center min-w-6">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary shadow-md border-2 border-background z-10" />

                        {index !== service.features.length - 1 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            whileInView={{ height: "100%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="w-[2px] flex-1 mt-1 sm:mt-1.5 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary via-purple-500 to-transparent opacity-60" />
                          </motion.div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        {" "}
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground leading-tight">
                          {feature}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {index % 2 === 0
                            ? "Designed with performance, scalability, and seamless interactivity in mind."
                            : "Crafted with precision, clean architecture, and modern design principles."}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="flex flex-col"
                >
                  <Card className="bg-card/30 backdrop-blur-xl border border-border/50 p-4 sm:p-6 md:p-8 shadow-2xl rounded-xl sm:rounded-2xl flex-1 mb-6 sm:mb-8">
                    <CardContent className="p-0">
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center"
                      >
                        Technologies I Use
                      </motion.h2>

                      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                        {service.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 whitespace-nowrap"
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
                    className="text-center py-4 sm:py-6"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                    >
                      <Link href="/contact">
                        Let's Collaborate{" "}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
