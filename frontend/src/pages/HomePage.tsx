import { useState } from "react";
import { startEvaluation } from "../services/api";
import CardImage from "../components/CardImage";

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
      <CardImage
        cardTitle="Como funciona la mente?"
        cardDescription="Explora cómo interpretas diferentes situaciones de la vida cotidiana."
        textButton="Empezar"
        urlImg="src\assets\chillbro.jpg"
      />

      {/* <button onClick={handleStart} disabled={loading}>
        {loading ? "Iniciando..." : "Comenzar"}
      </button> */}
    </main>
  );
}

export default HomePage;
