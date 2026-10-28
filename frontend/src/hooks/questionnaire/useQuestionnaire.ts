import { useState } from "react";
import type { Question } from "../../types/question";

export function useQuestionnaire(questions: Question[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const isLastQuestion = currentIndex === questions.length - 1;

  function nextQuestion(selectedOptionId: string) {
    if (!selectedOptionId) {
      setError("Elige una respuesta para continuar.");
      return;
    }

    setError("");

    if (isLastQuestion) {
      setFinished(true);
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
  }

  return {
    currentIndex,
    currentQuestion,
    isLastQuestion,
    error,
    finished,
    nextQuestion,
  };
}
