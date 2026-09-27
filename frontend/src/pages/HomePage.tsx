import { useState } from "react";
import { startEvaluation } from "../services/api";
import CardImage from "../components/CardImage";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <header className="flex flex-row mb-3 items-center justify-between">
          <p className="font-heading text-base font-medium text-left">
            Explora y conoce de algunos de los patranos cognitivos que hay.
          </p>
          <div className="justify-center">
            <Button onClick={() => navigate("/biblioteca")}>Explorar</Button>
          </div>
        </header>
        <div className="flex justify-center">
          <CardImage
            cardTitle="Como funciona la mente?"
            cardDescription="Explora cómo interpretas diferentes situaciones de la vida cotidiana."
            textButton="Empezar"
            urlImg="src\assets\chillbro.jpg"
            urlButton="/questionnaire"
          />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
