"use client";

import * as React from "react";
import { cn } from "cn";

import { useMediaQuery } from "../../hooks/use-media-query";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";

import type { PatternCognitive } from "@/types/patternCognitive";
import { ScrollArea } from "../ui/scroll-area";

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
