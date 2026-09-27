import type { PatternCognitive } from "@/types/patternCognitive";
import { PatternCard } from "./patternCard";
import React from "react";
import type { Session } from "react-router-dom";
import { PatternDrawer } from "./patternDrawer";

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
        {patterns.map((elemet) => (
          <PatternCard
            pattern={elemet}
            key={elemet.id}
            onOpen={() => {
              setSelectedItem(elemet);
              setOpen(true);
            }}
            urlImg={elemet.urlImg}
          />
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
