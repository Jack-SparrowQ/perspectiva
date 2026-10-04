import type { PatternCognitive } from "@/types/patternCognitive";
import { PatternCard } from "./patternCard";
import { motion } from "motion/react";
import React from "react";
import { PatternDrawer } from "./patternDrawer";

import { fadeUp } from "../../../lib/animation";

interface LibraryProps {
  patterns: PatternCognitive[];
}

export function Library({ patterns }: LibraryProps) {
  const [selectedItem, setSelectedItem] =
    React.useState<PatternCognitive | null>(null);
  const [open, setOpen] = React.useState(false);

  if (patterns.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No hay patrones cognitivos para mostrar
      </p>
    );
  }

  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-3 gap-5">
        {patterns.map((elemet, index) => (
          <motion.div
            key={elemet.id}
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
            <PatternCard
              pattern={elemet}
              key={elemet.id}
              onOpen={() => {
                setSelectedItem(elemet);
                setOpen(true);
              }}
              urlImg={elemet.urlImg}
            />
          </motion.div>
        ))}
      </div>

      {selectedItem && (
        <PatternDrawer
          pattern={selectedItem}
          open={open}
          onOpenChange={setOpen}
        />
      )}
    </div>
  );
}
