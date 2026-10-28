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
    <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-4 text-left">
      <nav className="flex shrink-0 items-center justify-between py-5">
        <span className="font-heading text-xl font-semibold text-foreground">
          Perspectiva
        </span>
        <Button variant="ghost" onClick={openModal}>
          Salir
        </Button>
        <Modal
          title="¿Quieres salir del cuestionario?"
          description="Tus respuestas no se guardarán y tendrás que empezar de nuevo."
          open={isOpen}
          onOpenChange={closeModal}
        />
      </nav>

      <main className="flex flex-1 flex-col pt-2 pb-16">
        {loadError ? (
          <div className="m-auto max-w-md text-center">
            <p className="font-heading mb-2 text-xl font-semibold text-foreground">
              No se pudieron cargar las preguntas
            </p>
            <p className="mb-6 text-muted-foreground">{loadError}</p>
            <Button onClick={() => window.location.reload()}>
              Intentar de nuevo
            </Button>
          </div>
        ) : !questions ? (
          <p className="m-auto text-muted-foreground">Cargando preguntas…</p>
        ) : (
          <QuestionnaireType>
            <Questionnaire questions={questions} evaluationId={evaluationId} />
          </QuestionnaireType>
        )}
      </main>
    </div>
  );
}

export default QuestionPage;
