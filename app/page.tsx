"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { ExperienceEducation } from "@/components/ExpEducation";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticleBackground";
import Projects from "@/components/Projects";
import { Services } from "@/components/Services";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
const Home = () => {
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Projects />
      <ExperienceEducation />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
