
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
            <p>Natural rights theory: life, liberty, and property</p>
          </div>
          <div className="flex items-start gap-3">
            <Scale className="mt-1 text-primary-light" />
            <p>Separation of powers and constitutional government</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Montesquieu 📚">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Users className="mt-1 text-primary-light" />
            <p>Separation of powers into executive, legislative, and judicial</p>
          </div>
          <div className="flex items-start gap-3">
            <Feather className="mt-1 text-primary-light" />
            <p>Checks and balances system</p>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Jean-Jacques Rousseau 🎭">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Users className="mt-1 text-primary-light" />
            <p>Social contract theory and popular sovereignty</p>
          </div>
          <div className="flex items-start gap-3">
            <Scale className="mt-1 text-primary-light" />
            <p>Concept of general will and direct democracy</p>
          </div>
        </div>
      </InfoCard>
    </div>
  );
};

export default EnlightenmentSection;
