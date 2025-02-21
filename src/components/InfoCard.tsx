
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

const InfoCard = ({ title, children }: InfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <h3 className="font-alegreya text-2xl font-extrabold mb-4 text-primary">
        {title}
      </h3>
      <div className="font-labrada text-lg text-primary-light">
        {children}
      </div>
    </motion.div>
  );
};

export default InfoCard;
