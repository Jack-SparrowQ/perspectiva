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
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle className="text-left">{content.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-left text-base leading-relaxed">
          {content.description}
        </CardDescription>
        <div className="m-5">
          <img
            src={content.imgUrl}
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-md"
          />
        </div>
      </CardContent>
    </Card>
  );
}
