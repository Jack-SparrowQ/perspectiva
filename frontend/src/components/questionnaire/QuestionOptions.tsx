import type { Option } from "@/types/question";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { motion } from "motion/react";
import { fadeUp } from "../../../lib/animation";

interface QuestionOptionsProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export function QuestionOptions({
  options,
  value,
  onChange,
}: QuestionOptionsProps) {
  return (
    <RadioGroup value={value} onValueChange={onChange} className="space-y-3">
      {options.map((option, index) => (
        <motion.label
          key={option.id}
          htmlFor={option.id}
          className="flex cursor-pointer items-center gap-3
            rounded-lg border-1 p-4
            transition-colors
            hover:bg-muted m-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        >
          <RadioGroupItem value={option.id} id={option.id} />
          <span>{option.label}</span>
        </motion.label>
      ))}
    </RadioGroup>
  );
}
