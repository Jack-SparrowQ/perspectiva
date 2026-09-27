import { Children } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
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
  urlButton: string;
}

export function CardImage(props: CardImageProps) {
  const navigate = useNavigate();

  return (
    <div className="h-">
      <Card className="relative mx-0 h-full w-full max-w-sm pt-0 ">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src={props.urlImg}
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardTitle className="text-left">{props.cardTitle}</CardTitle>
          <CardDescription className="text-left">
            {props.cardDescription}
          </CardDescription>
        </CardHeader>
        <CardFooter className="h-full">
          <Button className="w-full" onClick={() => navigate(props.urlButton)}>
            {props.textButton}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardImage;
