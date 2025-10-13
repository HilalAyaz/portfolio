import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div className="fixed h-screen w-screen inset-0 bg-background flex flex-col items-center justify-center z-50">
          {/* Cube Animation */}
          <motion.div
            className="w-16 h-16 md:w-24 md:h-24 relative"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          >
            <div className="absolute w-full h-full bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg animate-bounce"></div>
          </motion.div>

          {/* Loading Text */}
          <motion.p
            className="mt-6 text-lg md:text-xl font-semibold text-primary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 0], y: [10, 0, 10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Your Experience...
          </motion.p>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
