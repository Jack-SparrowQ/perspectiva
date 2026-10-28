"use client";


import {
  Dialog,
  DialogContent,
} from "../../components/ui/dialog";

import type { PatternCognitive } from "@/types/patternCognitive";

interface PatternDrawerProps {
  pattern: PatternCognitive;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PatternDrawer({
  pattern,
  open,
  onOpenChange,
}: PatternDrawerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <p className="font-heading text-base font-medium text-left">
          {pattern.name}
        </p>
        <div>
          <p className="font-heading text-base font-medium text-left">
            Definición
          </p>
          {pattern.definition}
        </div>

        <div>
          <p className="font-heading text-base font-medium text-left">
            Ejemplo
          </p>
          {pattern.example}
        </div>
      </DialogContent>
    </Dialog>
  );
}
