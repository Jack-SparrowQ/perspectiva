import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../../components/ui/dialog";

import type { PatternCognitive } from "@/types/patternCognitive";

interface PatternDrawerProps {
  pattern: PatternCognitive;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PatternDrawer({
  pattern,
  open,
  onOpenChange,
}: PatternDrawerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85svh] gap-0 overflow-y-auto p-0 text-left text-base sm:max-w-2xl [&_[data-slot=dialog-close]]:bg-background/85">
        {pattern.urlImg && (
          <img
            src={pattern.urlImg}
            alt=""
            className="aspect-[21/9] w-full object-cover"
          />
        )}
        <div className="p-6 md:p-8">
          <DialogTitle className="font-heading mb-3 text-3xl leading-tight font-semibold text-foreground">
            {pattern.name}
          </DialogTitle>
          <p className="leading-relaxed text-foreground/80">
            {pattern.definition}
          </p>

          <dl className="mt-8 grid gap-6 md:grid-cols-2">
            {pattern.example && (
              <div>
                <dt className="font-heading mb-1.5 font-semibold text-foreground">
                  Cómo se ve en el día a día
                </dt>
                <dd className="leading-relaxed text-muted-foreground">
                  {pattern.example}
                </dd>
              </div>
            )}
            {pattern.MethodOfRecognition && (
              <div>
                <dt className="font-heading mb-1.5 font-semibold text-foreground">
                  Cómo reconocerlo
                </dt>
                <dd className="leading-relaxed text-muted-foreground">
                  {pattern.MethodOfRecognition}
                </dd>
              </div>
            )}
          </dl>

          {pattern.ReflectionQuestions && (
            <figure className="mt-8 rounded-2xl bg-primary/8 p-5 md:p-6">
              <figcaption className="mb-2 text-sm font-medium text-primary">
                Preguntas para hacerte
              </figcaption>
              <blockquote className="font-heading text-xl leading-snug text-foreground">
                {pattern.ReflectionQuestions}
              </blockquote>
            </figure>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
