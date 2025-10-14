"use client";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const downloadCv = () => {
    const cvUrl = "/HilalA_webdeveloper.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row  text-5xl md:text-7xl font-bold mb-4 text-muted-foreground justify-center items-center gap-2"
          >
            Hi, I'm
            <motion.span
              style={{
                backgroundImage: `linear-gradient(60deg, var(--primary), var(--accent), var(--secondary), var(--accent))`,
                backgroundSize: "600% 600%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
              animate={{
                backgroundPosition: [
                  "10% 50%",
                  "100% 50%",
                  "10% 50%",
                  "100% 50%",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
             
              Hilal Ayaz
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold mb-6 text-foreground"
          >
            Full Stack / MERN Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground"
          >
            I build high-quality, efficient, and visually stunning web
            applications that turn ideas into results let's create something
            exceptional together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="default"
              className="bg-gradient-to-r from-primary to-accent hover:transition-all hover:bg-gradient-to-bl "
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="from-primary to-accent hover:transition-all hover:bg-gradient-to-bl "
              onClick={downloadCv}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl mt-8 max-w-2xl mx-auto text-muted-foreground"
          >
            💼 Available for Freelance and Full Time Roles
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
