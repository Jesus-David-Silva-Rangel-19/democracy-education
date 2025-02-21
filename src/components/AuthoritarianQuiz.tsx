
// ... Update the AuthoritarianQuiz component with Spanish translations
import { useState } from "react";
import { Check, X, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

interface Question {
  id: number;
  text: string;
  weight: number;
  icon: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "¿El líder rechaza o muestra un débil compromiso con las reglas democráticas?",
    weight: 25,
    icon: "⚖️"
  },
  {
    id: 2,
    text: "¿Niega la legitimidad de sus oponentes?",
    weight: 25,
    icon: "🚫"
  },
  {
    id: 3,
    text: "¿Tolera o fomenta la violencia?",
    weight: 25,
    icon: "⚔️"
  },
  {
    id: 4,
    text: "¿Muestra disposición a restringir las libertades civiles o la libertad de prensa?",
    weight: 25,
    icon: "📢"
  }
];

const AuthoritarianQuiz = () => {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: number, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateRisk = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id]) {
        score += q.weight;
      }
    });
    return score;
  };

  const getRiskLevel = (score: number) => {
    if (score >= 75) return { text: "Riesgo Alto", color: "text-red-600", icon: <AlertTriangle className="inline" /> };
    if (score >= 50) return { text: "Riesgo Moderado", color: "text-orange-500", icon: <AlertTriangle className="inline" /> };
    return { text: "Riesgo Bajo", color: "text-green-600", icon: <Check className="inline" /> };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8"
    >
      <h3 className="font-alegreya text-2xl font-bold mb-6 text-primary">
        🔍 Evaluación de Tendencias Autoritarias
      </h3>
      <div className="space-y-6">
        {questions.map(q => (
          <motion.div
            key={q.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: q.id * 0.1 }}
            className="border-b pb-4"
          >
            <p className="font-labrada mb-3">
              <span className="mr-2">{q.icon}</span>
              {q.text}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer(q.id, true)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  answers[q.id] === true ? 'bg-red-100 text-red-700' : 'bg-gray-100 hover:bg-red-50'
                }`}
              >
                <X size={16} /> Sí
              </button>
              <button
                onClick={() => handleAnswer(q.id, false)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  answers[q.id] === false ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-green-50'
                }`}
              >
                <Check size={16} /> No
              </button>
            </div>
          </motion.div>
        ))}

        {Object.keys(answers).length === questions.length && !showResult && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowResult(true)}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Analizar Resultados
          </motion.button>
        )}

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 bg-gray-50 rounded-lg"
          >
            <h4 className="font-alegreya text-xl mb-3">Resultados del Análisis</h4>
            <div className={`font-labrada text-lg ${getRiskLevel(calculateRisk()).color}`}>
              {getRiskLevel(calculateRisk()).icon}
              <span className="ml-2">{getRiskLevel(calculateRisk()).text}</span>
            </div>
            <p className="mt-4 text-gray-600">
              Esta evaluación se basa en los cuatro indicadores clave de comportamiento 
              autoritario identificados por Steven Levitsky y Daniel Ziblatt en 
              "Cómo Mueren las Democracias."
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AuthoritarianQuiz;
