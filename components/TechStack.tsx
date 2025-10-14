import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Marquee from "react-fast-marquee";
import { technologies } from "@/data/TechIcons";

const TechStack = () => {
  const firstHalf = technologies.slice(0, Math.ceil(technologies.length / 2));
  const secondHalf = technologies.slice(Math.ceil(technologies.length / 2));

  const renderMarquee = (
    techs: typeof technologies,
    direction: "left" | "right"
  ) => (
    <Marquee
      gradient={false}
      speed={100}
      direction={direction}
      className="py-8 px-8"
    >
      {techs.map((tech) => {
        const IconComponent = tech.icon; 
        return (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.2, y: -3 }}
            className="mx-6"
          >
            <Card className="bg-transparent w-auto h-16 shadow-none border-none">
              <CardContent className="p-2 flex flex-row items-center gap-2">
                <IconComponent className={tech.className} />
                <span className="font-semibold text-2xl">{tech.name}</span>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </Marquee>
  );

  return (
    <section className="py-8 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Tech{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </motion.div>

        {renderMarquee(firstHalf, "right")}
        {renderMarquee(secondHalf, "left")}
      </div>
    </section>
  );
};

export default TechStack;
