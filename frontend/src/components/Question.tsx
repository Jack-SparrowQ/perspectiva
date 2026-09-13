import type React from "react";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";

import {
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireTitle,
} from "./ui/questionnaire";

type questionProps = {
  title: string;
  description?: string;
  options: string[];
} & React.ComponentProps<typeof QuestionnairePrimitive.Item>;

export function QuestionUI({
  title,
  description,
  options,
  className,
  ...props
}: questionProps) {
  return (
    <QuestionnaireItem {...props}>
      <QuestionnaireTitle className="text-left">{title}</QuestionnaireTitle>
      <QuestionnaireDescription className="text-left">
        {description}
      </QuestionnaireDescription>
      <QuestionnaireChoices>
        {options.map((choice) => (
          <QuestionnaireChoice value="choice">{choice}</QuestionnaireChoice>
        ))}
      </QuestionnaireChoices>
      <QuestionnaireError />
    </QuestionnaireItem>
  );
}

export default QuestionUI;
