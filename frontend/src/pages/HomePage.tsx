import { useState } from "react";
import { startEvaluation } from "../services/api";

function HomePage() {
  const [loading, setLoading] = useState(false);

  async function handleStart() {
    try {
      setLoading(true);

      const evaluation = await startEvaluation();

      console.log("Evaluation:", evaluation.id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>¿Cómo funciona mi mente?</h1>

      <p>
        Explora cómo interpretas diferentes situaciones de la vida cotidiana.
      </p>

      <button onClick={handleStart} disabled={loading}>
        {loading ? "Iniciando..." : "Comenzar"}
      </button>
    </main>
  );
}

export default HomePage;
