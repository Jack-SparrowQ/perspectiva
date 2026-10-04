import type { Scenary as ScenaryType } from "../../types/scenary";
import { motion } from "motion/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { fadeUp } from "../../../lib/animation";

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
        <motion.div
          className="m-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: "easeInOut",
          }}
        >
          <img
            src={content.imgUrl}
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-md"
          />
        </motion.div>
      </CardContent>
    </Card>
  );
}
