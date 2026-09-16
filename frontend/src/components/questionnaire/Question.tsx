import type { Question as QuestionType } from "@/types/question";

import {
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "../ui/questionnaire";
import { QuestionOptions } from "./QuestionOptions";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface QuestionProps {
  question: QuestionType;
  selectedOptionId: string;
  error: string;
  isLastQuestion: boolean;

  onSelectOption: (optionId: string) => void;
  onNext: () => void;
}

export function Question({
  question,
  selectedOptionId,
  error,
  isLastQuestion,
  onNext,
  onSelectOption,
}: QuestionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="tex-xl leading-relaxed">
          {question.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <QuestionOptions
          options={question.options}
          value={selectedOptionId}
          onChange={onSelectOption}
        />
        {error && <p className="text-ms text-destructive">{error}</p>}
      </CardContent>
      <CardFooter className="justify-end">
        <Button onClick={onNext}>
          {isLastQuestion ? "Terminar" : "Siguiente"}
        </Button>
      </CardFooter>
    </Card>
  );
}
