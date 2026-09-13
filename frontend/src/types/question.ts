import type { Scenary } from "./scenary";

export interface Option {
  id: string;
  label: string;
  weight?: number;
}

export interface Question {
  id: string;
  title: string;
  options: Option[];
  scenary: Scenary;
}
