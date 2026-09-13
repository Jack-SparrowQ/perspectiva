import { useState } from "react";

import { Scenary } from "./Scenary";
import { ProgressBar } from "./ProgressBar";
import { QuestionUI } from "./Question";
import { Questionnaire as Questionnaire1 } from "../ui/questionnaire";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import type { Question as QuestionType } from "../../types/question";

interface QuestionnaireProps {
  questions: QuestionType[];
}

export function Questionnaire({ questions }: QuestionnaireProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [error, setError] = useState("");

  const [finished, setFinished] = useState(false);

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
            <strong>{Object.keys(answers).length}</strong>
          </p>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = questions[currentIndex];

  const selectedOptionId = answers[currentQuestion.id] ?? "";

  const isLastQuestion = currentIndex === questions.length - 1;

  function handleSelectOption(optionId: string) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: optionId,
    }));

    setError("");
  }

  function handleNext() {
    if (!selectedOptionId) {
      setError("Selecciona una respuesta antes de continuar.");

      return;
    }

    setError("");

    if (isLastQuestion) {
      setFinished(true);
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
  }

  return (
    <div className="space-y-6">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <div className="grid gap-6 md:grid-cols-2">
        <Scenary content={currentQuestion.scenary} />

        <Questionnaire1>
          <QuestionUI
            question={currentQuestion}
            selectedOptionId={selectedOptionId}
            error={error}
            isLastQuestion={isLastQuestion}
            onSelectOption={handleSelectOption}
            onNext={handleNext}
          />
        </Questionnaire1>
      </div>
    </div>
  );
}
