import type { PatternCognitive } from "./patternCognitive";

export interface PatternResult extends PatternCognitive {
  raw: number;
  max: number;
  normalized: number;
  relative: number;
}
