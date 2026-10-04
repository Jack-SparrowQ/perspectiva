import type { PatternResult } from "./patternResult";

export interface EvaluationOutput {
  totalRawSum: number;
  results: PatternResult[];
  predominant: PatternResult | null;
  secondaries: PatternResult[];
  isComplete: boolean;
}
