
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";

const Index = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Hero />
      
      <Section title="What is Democracy?">
        <p>
          Democracy is a system of government where power derives from the people, 
          who exercise their political rights through free and fair elections. It encompasses 
          fundamental principles such as civil liberties, rule of law, and separation of powers.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <InfoCard title="Key Democratic Principles">
            <ul className="list-disc list-inside space-y-2">
              <li>Free and fair elections</li>
              <li>Protection of human rights</li>
              <li>Rule of law</li>
              <li>Separation of powers</li>
              <li>Freedom of expression</li>
            </ul>
          </InfoCard>
          <InfoCard title="What Democracy is Not">
            <ul className="list-disc list-inside space-y-2">
              <li>Majority rule without minority rights</li>
              <li>Absence of law and order</li>
              <li>Pure populism</li>
              <li>Electoral autocracy</li>
              <li>Mob rule</li>
            </ul>
          </InfoCard>
        </div>
      </Section>

      <Section title="How Democracies Die" className="bg-white">
        <p className="mb-8">
          Based on Steven Levitsky and Daniel Ziblatt's groundbreaking work, democracies often 
          die not through violent coups, but through a gradual erosion of institutions and norms.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard title="Warning Signs">
            <ul className="list-disc list-inside space-y-2">
              <li>Rejection of democratic rules</li>
              <li>Denial of opponents' legitimacy</li>
              <li>Tolerance of violence</li>
              <li>Readiness to curtail civil liberties</li>
            </ul>
          </InfoCard>
          <InfoCard title="Democratic Erosion">
            <ul className="list-disc list-inside space-y-2">
              <li>Weakening of institutions</li>
              <li>Polarization of society</li>
              <li>Assault on media freedom</li>
              <li>Judiciary interference</li>
            </ul>
          </InfoCard>
          <InfoCard title="Protecting Democracy">
            <ul className="list-disc list-inside space-y-2">
              <li>Strong democratic institutions</li>
              <li>Active civil society</li>
              <li>Independent media</li>
              <li>Civic education</li>
            </ul>
          </InfoCard>
        </div>
      </Section>

      <Section title="Global Challenges to Democracy">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <InfoCard title="Disinformation Campaigns">
            <p>
              Foreign actors, particularly Russia, China, and Iran, engage in sophisticated 
              disinformation campaigns to undermine democratic institutions and sow discord 
              in democratic societies.
            </p>
          </InfoCard>
          <InfoCard title="Democratic Regression">
            <p>
              Factors contributing to democratic backsliding include rising populism, 
              economic inequality, social media manipulation, and the erosion of 
              democratic norms.
            </p>
          </InfoCard>
        </div>
      </Section>

      <Section title="Types of Authoritarian Regimes" className="bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard title="Illiberal Democracy">
            <p>
              Maintains democratic elections but gradually erodes civil liberties and 
              institutional checks and balances.
            </p>
          </InfoCard>
          <InfoCard title="Hybrid Regime">
            <p>
              Combines democratic and authoritarian elements, with weak institutions 
              and limited political competition.
            </p>
          </InfoCard>
          <InfoCard title="Absolutist Autocracy">
            <p>
              Complete concentration of power, absence of political rights, and 
              systematic repression of opposition.
            </p>
          </InfoCard>
        </div>
      </Section>

      <Section title="Citizen's Guide">
        <div className="space-y-8">
          <InfoCard title="Informed Citizenship">
            <ul className="list-disc list-inside space-y-2">
              <li>Verify information sources</li>
              <li>Seek diverse perspectives</li>
              <li>Understand democratic processes</li>
              <li>Engage in civil discourse</li>
              <li>Support independent journalism</li>
            </ul>
          </InfoCard>
          <InfoCard title="Protecting Democracy">
            <ul className="list-disc list-inside space-y-2">
              <li>Exercise voting rights responsibly</li>
              <li>Participate in civil society</li>
              <li>Support democratic institutions</li>
              <li>Resist authoritarian tendencies</li>
              <li>Promote civic education</li>
            </ul>
          </InfoCard>
        </div>
      </Section>
    </div>
  );
};

export default Index;
