import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

/**
 * About section with two-column layout
 * Highlights skills and passion
 */
const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful user experiences",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimized for speed and efficiency",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Turning complex problems into simple, beautiful web solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-lg border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  I'm a dedicated full-stack developer specializing in the MERN
                  stack. With a passion for creating elegant solutions to
                  complex problems, I bring ideas to life through code.
                </p>
                <p className="text-muted-foreground">
                  My focus is on building scalable, performant applications that
                  provide exceptional user experiences. I'm constantly learning
                  and adapting to new technologies to stay at the forefront of
                  web development.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative group bg-card/50 backdrop-blur-lg border-border overflow-hidden hover:border-primary/50 transition-colors">
                  

                  <CardContent className="relative z-10 p-6 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
