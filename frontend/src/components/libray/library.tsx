import type { PatternCognitive } from "@/types/patternCognitive";
import { PatternCard } from "./patternCard";

interface LibraryProps {
  patterns: PatternCognitive[];
}

export function Library({ patterns }: LibraryProps) {
  if (patterns.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No hay patrones cognitivos para mostrar
      </p>
    );
  }

  return (
    <div className="w-full p-6">
      <div
        className=" grid
      grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
      gap-66"
      >
        {patterns.map((elemet) => (
          <PatternCard pattern={elemet} key={elemet.id} />
        ))}
      </div>
    </div>
  );
}
