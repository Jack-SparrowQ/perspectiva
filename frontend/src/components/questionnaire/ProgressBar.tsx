import { Progress } from "../ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          Pregunta {current} de {total}
        </span>

        <span>{Math.round(progress)}%</span>
      </div>

      <Progress value={progress} />
    </div>
  );
}
