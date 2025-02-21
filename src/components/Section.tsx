
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ title, children, className = "" }: SectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-alegreya text-4xl md:text-5xl font-extrabold mb-12 text-primary">
          {title}
        </h2>
        <div className="font-labrada text-lg leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </motion.section>
  );
};

export default Section;
