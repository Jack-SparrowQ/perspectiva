import type { scenary } from "./scenary";

export interface Option {
  id: string;
  label: string;
  weight?: number;
}

export interface Question {
  id: string;
  title: string;
  options: Option[];
  scenary: scenary;
}
