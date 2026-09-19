import type { PatternCognitive } from "@/types/patternCognitive";
import CardImage from "../CardImage";

interface PatternCardProps {
  pattern: PatternCognitive;
}

export function PatternCard({ pattern }: PatternCardProps) {
  return (
    <CardImage
      cardTitle={pattern.name}
      cardDescription={pattern.definition}
      textButton="Explorar"
      urlButton=""
    />
  );
}
