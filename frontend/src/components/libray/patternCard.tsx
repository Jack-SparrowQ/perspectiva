import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import type { PatternCognitive } from "@/types/patternCognitive";

interface CardImageProps {
  pattern: PatternCognitive;
  urlImg?: string;

  onOpen: () => void;
}

export function PatternCard(props: CardImageProps) {
  return (
    <div className="h-full">
      <Card className="relative mx-0 h-full w-full max-w-sm pt-0 ">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src={props.urlImg}
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="text-left">{props.pattern.name}</CardTitle>
          <CardDescription className="text-left">
            {props.pattern.definition}
          </CardDescription>
        </CardHeader>
        <CardFooter className="h-full">
          <Button className="w-full" onClick={props.onOpen}>
            Explorar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
