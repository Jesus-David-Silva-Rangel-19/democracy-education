
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-secondary text-primary overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-alegreya text-5xl md:text-7xl font-extrabold mb-6"
        >
          Entendiendo la Democracia 🗽
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-labrada text-xl md:text-2xl max-w-3xl mx-auto mb-12"
        >
          Una guía completa sobre los principios democráticos, sus desafíos y la importancia del compromiso cívico
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={scrollToContent}
          className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-light hover:text-primary transition-colors"
          aria-label="Desplazarse al contenido"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
