import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface CardImageProps {
  cardTitle: string;
  cardDescription: string;
  textButton: string;
  urlImg?: string;
}

export function CardImage(props: CardImageProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="relative mx-auto w-full max-w-sm pt-0 ">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src={props.urlImg}
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>{props.cardTitle}</CardTitle>
          <CardDescription>{props.cardDescription}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">{props.textButton}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardImage;
