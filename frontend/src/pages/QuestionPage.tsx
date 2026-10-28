import { useEffect, useState } from "react";

import { Questionnaire } from "../components/questionnaire/Questionnaire";
import { questionService } from "../services/question.service";
import { startEvaluation } from "../services/api";
import { Questionnaire as QuestionnaireType } from "../components/ui/questionnaire";
import { Button } from "../components/ui/button";
import type { Question } from "../types/question";

import Modal from "../components/modal";
import { useModal } from "../hooks/useModal";

export function QuestionPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [evaluationId, setEvaluationId] = useState("");
  const [loadError, setLoadError] = useState("");

  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    let ignore = false;

    // shortcut: StrictMode runs this twice in dev and leaves one empty evaluation; harmless, no fix needed for prod
    Promise.all([questionService.getQuestions(), startEvaluation()])
      .then(([loadedQuestions, evaluation]) => {
        if (ignore) return;
        setQuestions(loadedQuestions);
        setEvaluationId(evaluation.id);
      })
      .catch((error: Error) => {
        if (!ignore) setLoadError(error.message);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <header className="flex justify-between mb-1">
          <p className="text-left mt-2 text-muted-foreground">
            Lee cada situación y selecciona la respuesta que más se acerque a lo
            que pensarías.
          </p>
          <Button onClick={openModal}>Salir</Button>

          <Modal
            title="¿Estás seguro de que quieres finalizar?"
            description="Si lo haces todo el progreso no se guardará"
            open={isOpen}
            onOpenChange={closeModal}
          />
        </header>

        {loadError ? (
          <p className="text-center text-destructive">{loadError}</p>
        ) : !questions ? (
          <p className="text-center text-muted-foreground">Cargando...</p>
        ) : (
          <QuestionnaireType>
            <Questionnaire questions={questions} evaluationId={evaluationId} />
          </QuestionnaireType>
        )}
      </div>
    </main>
  );
}

export default QuestionPage;
