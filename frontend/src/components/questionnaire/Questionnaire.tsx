import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
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
    <MotionConfig reducedMotion="user">
      <div className="space-y-8">
        <ProgressBar current={currentIndex + 1} total={questions.length} />

        <div className="grid items-start gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
          <Scenary content={currentQuestion.scenary} />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}>
              <Question
                question={currentQuestion}
                selectedOptionId={selectedOptionId}
                error={error || submitError}
                isLastQuestion={isLastQuestion}
                submitting={submitting}
                onSelectOption={handleSelectOption}
                onNext={handleNext}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}
