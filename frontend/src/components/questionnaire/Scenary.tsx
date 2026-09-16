import type { Scenary as ScenaryType } from "../../types/scenary";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

interface ScenaryProps {
  content: ScenaryType;
}

export function Scenary({ content }: ScenaryProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-left">{content.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-left text-base leading-relaxed">
          {content.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
