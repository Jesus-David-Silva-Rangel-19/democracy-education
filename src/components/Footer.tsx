
import { Heart, Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="font-labrada text-primary-light flex items-center justify-center gap-2">
          Desarrollado con <Heart className="text-red-500" size={16} /> por Jesús David Silva Rangel <Rocket className="text-blue-500" size={16} />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
