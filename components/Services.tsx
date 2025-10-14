"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/data/Services";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.1, 0.3), 
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="flex"
            >
              <Card className="flex-1 bg-card/50 backdrop-blur-lg border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <div className="text-xl sm:text-2xl text-primary">
                      {service.icon}
                    </div>
                  </div>

                  <Link href={`/services/${service.slug}`} className="block">
                    <CardTitle className="text-lg sm:text-xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300 hover:underline">
                      {service.title}
                    </CardTitle>
                  </Link>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </CardDescription>

                  <div className="mt-4 transition-opacity duration-300 ">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-md text-primary hover:text-accent font-medium absolute bottom-2 sm:bottom-4 right-4"
                      prefetch
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3" />
                    </Link>
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
          className="text-center mt-10 sm:mt-12"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 px-8 py-3 text-base sm:text-lg font-semibold rounded-xl hover:shadow-lg hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
