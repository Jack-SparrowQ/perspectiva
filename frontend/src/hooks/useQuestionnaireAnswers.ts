import { useState } from "react";

export function useQuestionnaireAnswers() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  function selectAnswer(questionId: string, optionId: string) {
    setAnswers((previousAnswer) => ({
      ...previousAnswer,
      [questionId]: optionId,
    }));
  }

  function getAnswer(questionId: string) {
    return answers[questionId] ?? "";
  }

  function clearAnswers() {
    setAnswers({});
  }

  return {
    answers,
    selectAnswer,
    getAnswer,
    clearAnswers,
  };
}
