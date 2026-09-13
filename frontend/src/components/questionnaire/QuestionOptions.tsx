import type { Option } from "@/types/question";
import { QuestionnaireChoice, QuestionnaireChoices } from "../ui/questionnaire";
import { RadioGroup } from "../ui/radio-group";

interface QuestionOptionsProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export function QuestionOptions({
  options,
  value,
  onChange,
}: QuestionOptionsProps) {
  return (
    <RadioGroup value={value} onValueChange={onChange}>
      <QuestionnaireChoices>
        {options.map((option) => (
          <QuestionnaireChoice value={option.id} key={option.id}>
            {option.label}
          </QuestionnaireChoice>
        ))}
      </QuestionnaireChoices>
    </RadioGroup>
  );
}
