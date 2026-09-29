import type { Option } from "@/types/question";
import { QuestionnaireChoice, QuestionnaireChoices } from "../ui/questionnaire";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

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
    <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
      {options.map((option) => (
        <Label
          key={option.id}
          htmlFor={option.id}
          className="flex cursor-pointer items-center gap-3
            rounded-lg border p-4
            transition-colors
            hover:bg-muted m-0"
        >
          <RadioGroupItem value={option.id} id={option.id} />
          <span>{option.label}</span>
        </Label>
      ))}
    </RadioGroup>
  );
}
