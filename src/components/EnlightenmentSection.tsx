
import { motion } from "framer-motion";
import { Book, Feather, Scale, Users } from "lucide-react";
import InfoCard from "./InfoCard";

const EnlightenmentSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <InfoCard title="John Locke 🤔">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Book className="mt-1 text-primary-light" />
            <p>Teoría de derechos naturales: vida, libertad y propiedad</p>
          </div>
          <div className="flex items-start gap-3">
            <Scale className="mt-1 text-primary-light" />
            <p>Separación de poderes y gobierno constitucional</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Montesquieu 📚">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Users className="mt-1 text-primary-light" />
            <p>Separación de poderes en ejecutivo, legislativo y judicial</p>
          </div>
          <div className="flex items-start gap-3">
            <Feather className="mt-1 text-primary-light" />
            <p>Sistema de controles y equilibrios</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Jean-Jacques Rousseau 🎭">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Users className="mt-1 text-primary-light" />
            <p>Teoría del contrato social y soberanía popular</p>
          </div>
          <div className="flex items-start gap-3">
            <Scale className="mt-1 text-primary-light" />
            <p>Concepto de voluntad general y democracia directa</p>
          </div>
        </div>
      </InfoCard>
    </div>
  );
};

export default EnlightenmentSection;
