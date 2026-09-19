import { patternsMock } from "../data/patterns.mock";
import type { PatternCognitive } from "../types/patternCognitive";

export const libraryService = {
  getPatterns(): PatternCognitive[] {
    return patternsMock;
  },
};
