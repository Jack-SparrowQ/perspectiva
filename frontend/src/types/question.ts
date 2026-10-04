import type { PatternCognitive } from "./patternCognitive";
import type { Scenary } from "./scenary";

export type OptionWeights = Partial<Record<string, number>>;

export interface Option {
  id: string;
  label: string;
  weights: OptionWeights;
}

export interface Question {
  id: string;
  title: string;
  options: Option[];
  scenary: Scenary;
}
