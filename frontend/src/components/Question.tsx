import {
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireTitle,
} from "./ui/questionnaire";

interface questionProps {
  title: string;
  description?: string;
  options: string[];
}

export function QuestionUI(props: questionProps) {
  return (
    <QuestionnaireItem name="">
      <QuestionnaireTitle>{props.title}</QuestionnaireTitle>
      <QuestionnaireDescription>{props.description}</QuestionnaireDescription>
      <QuestionnaireChoices>
        {props.options.map((choice) => (
          <QuestionnaireChoice value="choice">{choice}</QuestionnaireChoice>
        ))}
      </QuestionnaireChoices>
      <QuestionnaireError />
    </QuestionnaireItem>
  );
}

export default QuestionUI;
