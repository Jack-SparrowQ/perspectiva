import { useState } from "react";

import { Scenary } from "./Scenary";
import { ProgressBar } from "./ProgressBar";
import { Question } from "./Question";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { Question as QuestionType } from "../../types/question";
import { useQuestionnaire } from "../../hooks/useQuestionnaire";
import { useQuestionnaireAnswers } from "../../hooks/useQuestionnaireAnswers";

interface QuestionnaireProps {
  questions: QuestionType[];
}

export function Questionnaire({ questions }: QuestionnaireProps) {
  const {
    currentIndex,
    currentQuestion,
    isLastQuestion,
    error,
    finished,
    nextQuestion,
  } = useQuestionnaire(questions);

  const { answers, selectAnswer } = useQuestionnaireAnswers();

  if (questions.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No hay preguntas disponibles.
      </p>
    );
  }

  if (finished) {
    return (
      <Card className="mx-auto max-w-xl text-center">
        <CardHeader>
          <CardTitle>Evaluación completada</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground">
            Has respondido todas las preguntas.
          </p>

          <p className="mt-4">
            Respuestas registradas:{" "}
            <strong>
              {Object.keys(answers).map((element) => (
                <p>{element}</p>
              ))}
            </strong>
          </p>
        </CardContent>
      </Card>
    );
  }

  const selectedOptionId = answers[currentQuestion.id] ?? "";

  function handleSelectOption(optionId: string) {
    selectAnswer(currentQuestion.id, optionId);
  }

  function handleNext() {
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
          error={error}
          isLastQuestion={isLastQuestion}
          onSelectOption={handleSelectOption}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}
