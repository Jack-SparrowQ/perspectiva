import { Progress } from "../ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;
  return (
    <div className="flex items-center gap-4">
      <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
        Pregunta {current} de {total}
      </span>
      <Progress
        value={progress}
        aria-label="Progreso del cuestionario"
        className="flex-1 [&_[data-slot=progress-track]]:h-1.5"
      />
    </div>
  );
}
