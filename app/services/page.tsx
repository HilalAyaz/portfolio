"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticleBackground";
import { services } from "@/data/Services";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 15,
      duration: 0.6,
    },
  },
};

const ServicesPage = () => {
  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              My{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed"
            >
              From elegant UI/UX to full-stack development, I help brands and
              creators transform ideas into interactive, high-performance
              digital experiences.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="flex justify-center"
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary hover:brightness-110 text-primary-foreground rounded-full transition font-medium shadow-lg"
              >
                Let’s Work Together
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-28 px-6">
          <div className="container mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.1}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="group h-full bg-background/40 backdrop-blur-xl border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_var(--primary)] transition-all cursor-pointer overflow-hidden relative">
                    <CardContent className="p-8 flex flex-col h-full justify-between">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-6xl mb-4"
                      >
                        {service.icon}
                      </motion.div>

                      <div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <motion.div
                        className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform"
                        whileHover={{ x: 5 }}
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border/20 backdrop-blur-lg">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Amazing
              </span>
              ?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              custom={0.2}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              Whether it’s a complete web app, a stunning design system, or a
              powerful API, I’ll bring your ideas to life with precision and
              creativity.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              custom={0.3}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="px-10 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:brightness-110 transition"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
