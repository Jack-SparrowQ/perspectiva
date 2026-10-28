import type { PatternCognitive } from "@/types/patternCognitive";
import { PatternCard } from "./patternCard";
import React from "react";
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
      <p className="text-muted-foreground">
        Todavía no hay patrones en la biblioteca.
      </p>
    );
  }

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <li key={pattern.id}>
            <PatternCard
              pattern={pattern}
              onOpen={() => {
                setSelectedItem(pattern);
                setOpen(true);
              }}
            />
          </li>
        ))}
      </ul>

      {selectedItem && (
        <PatternDrawer
          pattern={selectedItem}
          open={open}
          onOpenChange={setOpen}
        />
      )}
    </>
  );
}
