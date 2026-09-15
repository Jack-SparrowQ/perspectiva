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
import { Card, CardFooter } from "../ui/card";

interface QuestionProps {
  question: QuestionType;
  selectedOptionId: string;
  error: string;
  isLastQuestion: boolean;

  onSelectOption: (optionId: string) => void;
  onNext: () => void;
}

export function QuestionUI({
  question,
  selectedOptionId,
  error,
  isLastQuestion,
  onNext,
  onSelectOption,
}: QuestionProps) {
  return (
    <>
      <QuestionnaireItem name={question.id}>
        <QuestionnaireTitle className="text-left">
          {question.title}
        </QuestionnaireTitle>
        <QuestionOptions
          options={question.options}
          value={selectedOptionId}
          onChange={onSelectOption}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </QuestionnaireItem>
    </>
  );
}
