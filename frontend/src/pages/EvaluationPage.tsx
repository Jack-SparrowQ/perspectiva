import { useEffect, useState } from "react";
import { getScenario } from "../services/api";
import type { Scenario } from "../types/scenario";

function EvaluationPage() {
  const [scenario, setScenario] = useState<Scenario | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getScenario(1)
      .then(setScenario)
      .catch(() => setError("No se pudo cargar el escenario"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!scenario) {
    return <p>No hay escenario disponible.</p>;
  }

  return (
    <main>
      <h1>{scenario.title}</h1>

      <p>{scenario.description}</p>

      {scenario.questions.map((question) => (
        <section key={question.id}>
          <h2>{question.text}</h2>

          {question.answers.map((answer) => (
            <button key={answer.id}>{answer.text}</button>
          ))}
        </section>
      ))}
    </main>
  );
}

export default EvaluationPage;
