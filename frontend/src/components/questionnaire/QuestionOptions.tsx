import type { Option } from "@/types/question";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

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
    <RadioGroup value={value} onValueChange={onChange} className="gap-2">
      {options.map((option) => (
        <label
          key={option.id}
          htmlFor={option.id}
          className="m-0 flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-background px-4 py-3.5 leading-snug text-foreground/85 transition-colors hover:border-primary/40 has-data-checked:border-primary has-data-checked:bg-primary/8 has-data-checked:text-foreground">
          <RadioGroupItem value={option.id} id={option.id} className="mt-0.5" />
          <span>{option.label}</span>
        </label>
      ))}
    </RadioGroup>
  );
}
