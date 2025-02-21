
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";
import AuthoritarianQuiz from "@/components/AuthoritarianQuiz";
import EnlightenmentSection from "@/components/EnlightenmentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Hero />
      
      <Section title="¿Qué es la Democracia? 🏛️">
        <p>
          La democracia es un sistema de gobierno donde el poder deriva del pueblo, 
          que ejerce sus derechos políticos a través de elecciones libres y justas. 
          Abarca principios fundamentales como las libertades civiles, el estado de 
          derecho y la separación de poderes.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <InfoCard title="Principios Democráticos Clave ✨">
            <ul className="list-disc list-inside space-y-2">
              <li>Elecciones libres y justas 🗳️</li>
              <li>Protección de derechos humanos 🤝</li>
              <li>Estado de derecho ⚖️</li>
              <li>Separación de poderes 🏛️</li>
              <li>Libertad de expresión 📢</li>
            </ul>
          </InfoCard>
          <InfoCard title="Lo que NO es Democracia ❌">
            <ul className="list-disc list-inside space-y-2">
              <li>Gobierno de mayoría sin derechos de minorías</li>
              <li>Ausencia de ley y orden 🚫</li>
              <li>Populismo puro 📢</li>
              <li>Autocracia electoral 👑</li>
              <li>Gobierno de las masas 👥</li>
            </ul>
          </InfoCard>
        </div>
      </Section>

      <Section title="La Ilustración y la Democracia 📚" className="bg-white">
        <p className="mb-8">
          Los cimientos de la democracia liberal moderna se establecieron durante la 
          Ilustración, cuando los filósofos desarrollaron conceptos clave sobre derechos 
          individuales, separación de poderes y el contrato social. 🌟
        </p>
        <EnlightenmentSection />
      </Section>

      <Section title="Cómo Mueren las Democracias ⚠️" className="bg-white">
        <p className="mb-8">
          Basado en el trabajo innovador de Steven Levitsky y Daniel Ziblatt, las 
          democracias suelen morir no por golpes violentos, sino por una erosión 
          gradual de las instituciones y normas.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard title="Señales de Advertencia 🚨">
            <ul className="list-disc list-inside space-y-2">
              <li>Rechazo de reglas democráticas</li>
              <li>Negación de legitimidad de oponentes</li>
              <li>Tolerancia a la violencia</li>
              <li>Disposición a restringir libertades civiles</li>
            </ul>
          </InfoCard>
          <InfoCard title="Erosión Democrática 📉">
            <ul className="list-disc list-inside space-y-2">
              <li>Debilitamiento de instituciones</li>
              <li>Polarización de la sociedad</li>
              <li>Ataque a la libertad de prensa</li>
              <li>Interferencia judicial</li>
            </ul>
          </InfoCard>
          <InfoCard title="Protegiendo la Democracia 🛡️">
            <ul className="list-disc list-inside space-y-2">
              <li>Instituciones democráticas fuertes</li>
              <li>Sociedad civil activa</li>
              <li>Medios independientes</li>
              <li>Educación cívica</li>
            </ul>
          </InfoCard>
        </div>
      </Section>

      <Section title="Evaluación de Liderazgo Autoritario 🔍">
        <p className="mb-8 text-center max-w-3xl mx-auto">
          Basado en la investigación de Levitsky y Ziblatt, esta evaluación ayuda a 
          identificar tendencias autoritarias potenciales en líderes políticos. Responde 
          las siguientes preguntas sobre el comportamiento y la retórica de un líder: 
        </p>
        <AuthoritarianQuiz />
      </Section>

      <Section title="Desafíos Globales a la Democracia 🌍">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <InfoCard title="Campañas de Desinformación 📱">
            <p>
              Actores extranjeros, particularmente Rusia, China e Irán, participan en 
              sofisticadas campañas de desinformación para socavar las instituciones 
              democráticas y sembrar discordia en las sociedades democráticas.
            </p>
          </InfoCard>
          <InfoCard title="Regresión Democrática 📊">
            <p>
              Los factores que contribuyen al retroceso democrático incluyen el populismo 
              creciente, la desigualdad económica, la manipulación en redes sociales y 
              la erosión de las normas democráticas.
            </p>
          </InfoCard>
        </div>
      </Section>

      <Section title="Tipos de Regímenes Autoritarios 👑" className="bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard title="Democracia Iliberal 🏛️">
            <p>
              Mantiene elecciones democráticas pero erosiona gradualmente las libertades 
              civiles y los controles institucionales.
            </p>
          </InfoCard>
          <InfoCard title="Régimen Híbrido 🔄">
            <p>
              Combina elementos democráticos y autoritarios, con instituciones débiles 
              y competencia política limitada.
            </p>
          </InfoCard>
          <InfoCard title="Autocracia Absolutista 👑">
            <p>
              Concentración completa del poder, ausencia de derechos políticos y 
              represión sistemática de la oposición.
            </p>
          </InfoCard>
        </div>
      </Section>

      <Section title="Guía del Ciudadano 📋">
        <div className="space-y-8">
          <InfoCard title="Ciudadanía Informada 📚">
            <ul className="list-disc list-inside space-y-2">
              <li>Verificar fuentes de información 🔍</li>
              <li>Buscar perspectivas diversas 🌈</li>
              <li>Comprender procesos democráticos 📊</li>
              <li>Participar en el diálogo civil 🗣️</li>
              <li>Apoyar el periodismo independiente 📰</li>
            </ul>
          </InfoCard>
          <InfoCard title="Protegiendo la Democracia 🛡️">
            <ul className="list-disc list-inside space-y-2">
              <li>Ejercer el derecho al voto responsablemente 🗳️</li>
              <li>Participar en la sociedad civil 🤝</li>
              <li>Apoyar instituciones democráticas 🏛️</li>
              <li>Resistir tendencias autoritarias ✊</li>
              <li>Promover educación cívica 📖</li>
            </ul>
          </InfoCard>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
