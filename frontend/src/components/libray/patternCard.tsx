import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import type { PatternCognitive } from "@/types/patternCognitive";

interface PatternCardProps {
  pattern: PatternCognitive;

  onOpen: () => void;
}

export function PatternCard({ pattern, onOpen }: PatternCardProps) {
  return (
    <Card className="h-full pt-0">
      {pattern.urlImg ? (
        <img
          src={pattern.urlImg}
          alt=""
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="aspect-video w-full bg-primary/8" />
      )}
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          {pattern.name}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {pattern.definition}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button className="w-full" onClick={onOpen}>
          Explorar
        </Button>
      </CardFooter>
    </Card>
  );
}
