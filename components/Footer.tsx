import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            © {currentYear}{" "}
            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hilal Ayaz
            </span>
            . All rights reserved.
          </p>
          <div className="mt-2 h-1 w-20 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
