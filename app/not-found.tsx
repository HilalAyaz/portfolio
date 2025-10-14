"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LucideAlertCircle, LucideRocket, LucideStars } from "lucide-react";

const FloatingIcon = ({ icon: Icon, size = 24, x, y, delay = 0 }: any) => (
  <motion.div
    className="absolute text-primary/40"
    style={{ top: y, left: x }}
    animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
    transition={{ repeat: Infinity, duration: 6, delay, ease: "easeInOut" }}
  >
    <Icon size={size} />
  </motion.div>
);

const NotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted px-6 text-center overflow-hidden relative">
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full top-10 -left-20 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full bottom-0 right-0 blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <FloatingIcon
        icon={LucideAlertCircle}
        size={48}
        x={100}
        y={150}
        delay={0}
      />
      <FloatingIcon icon={LucideRocket} size={36} x={250} y={50} delay={1} />
      <FloatingIcon icon={LucideStars} size={28} x={200} y={300} delay={2} />

      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
      />

      <motion.h1
        className="text-9xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-5xl font-bold mt-4 text-muted-foreground z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground max-w-xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Looks like you’ve entered a black hole 🌌. Redirecting you home in{" "}
        <span className="font-bold">{countdown}</span> second
        {countdown !== 1 ? "s" : ""}...
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition font-semibold"
        >
          Go Home Now
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition font-semibold"
        >
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
