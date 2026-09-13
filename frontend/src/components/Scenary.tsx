import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface ScenaryCardProps {
  id?: number;
  title: string;
  description?: string;
  text: string;
}

export function Scenary(props: ScenaryCardProps) {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-left">{props.title}</CardTitle>
        <CardDescription className="text-left">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="-mb-(--card-spacing)">
        <div className="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
          <p className="text-left">{props.text}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default Scenary;
