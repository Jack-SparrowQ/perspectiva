import type { Question as QuestionType } from "@/types/question";
import { QuestionOptions } from "./QuestionOptions";
import { Button } from "../ui/button";

interface QuestionProps {
  question: QuestionType;
  selectedOptionId: string;
  error: string;
  isLastQuestion: boolean;
  submitting: boolean;

  onSelectOption: (optionId: string) => void;
  onNext: () => void;
}

export function Question({
  question,
  selectedOptionId,
  error,
  isLastQuestion,
  submitting,
  onNext,
  onSelectOption,
}: QuestionProps) {
  return (
    <section aria-labelledby="question-title">
      <h3
        id="question-title"
        className="font-heading mb-6 text-xl leading-snug font-semibold text-foreground md:text-2xl">
        {question.title}
      </h3>
      <QuestionOptions
        options={question.options}
        value={selectedOptionId}
        onChange={onSelectOption}
      />
      <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
        {error && (
          <p role="alert" className="mr-auto text-sm text-destructive">
            {error}
          </p>
        )}
        <Button size="lg" onClick={onNext} disabled={submitting}>
          {submitting ? "Guardando…" : isLastQuestion ? "Ver mis resultados" : "Siguiente"}
        </Button>
      </div>
    </section>
  );
}
