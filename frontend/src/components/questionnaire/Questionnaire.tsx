import { useState } from "react";
import { Navigate } from "react-router-dom";

import { Scenary } from "./Scenary";
import { ProgressBar } from "./ProgressBar";
import { Question } from "./Question";

import type { Question as QuestionType } from "../../types/question";
import { useQuestionnaire } from "../../hooks/questionnaire/useQuestionnaire";
import { useQuestionnaireAnswers } from "../../hooks/questionnaire/useQuestionnaireAnswers";
import useQuestionnaireEvaluator from "../../hooks/questionnaire/useQuestionnaireEvaluator";
import { submitAnswer } from "../../services/api";

interface QuestionnaireProps {
  questions: QuestionType[];
  evaluationId: string;
}

export function Questionnaire({ questions, evaluationId }: QuestionnaireProps) {
  const {
    currentIndex,
    currentQuestion,
    isLastQuestion,
    error,
    finished,
    nextQuestion,
  } = useQuestionnaire(questions);

  const { answers, selectAnswer } = useQuestionnaireAnswers();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const evaluation = useQuestionnaireEvaluator(answers, questions);

  if (questions.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No hay preguntas disponibles.
      </p>
    );
  }

  if (finished) {
    return <Navigate to="/resultados" state={{ evaluation }} replace />;
  }

  const selectedOptionId = answers[currentQuestion.id] ?? "";

  function handleSelectOption(optionId: string) {
    selectAnswer(currentQuestion.id, optionId);
  }

  async function handleNext() {
    // The backend rejects a second answer to the same question, so ignore double clicks
    if (submitting) return;

    if (selectedOptionId) {
      setSubmitting(true);
      setSubmitError("");

      try {
        await submitAnswer(
          evaluationId,
          Number(currentQuestion.id),
          Number(selectedOptionId),
        );
      } catch (submitFailure) {
        setSubmitError((submitFailure as Error).message);
        return;
      } finally {
        setSubmitting(false);
      }
    }

    nextQuestion(selectedOptionId);
  }

  return (
    <div className="space-y-6">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <div className="grid gap-6 md:grid-cols-2">
        <Scenary content={currentQuestion.scenary} />
        <Question
          question={currentQuestion}
          selectedOptionId={selectedOptionId}
          error={error || submitError}
          isLastQuestion={isLastQuestion}
          onSelectOption={handleSelectOption}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}
