import { useMemo } from "react";
import { patternsMock as PATTERNS } from "../../data/patterns.mock";
import type { UserAnswers } from "@/types/userAnswers";
import type { EvaluationOutput } from "@/types/envaluationOutput";
import type { PatternResult } from "@/types/patternResult";
import type { Question } from "@/types/question";

export const useQuestionnaireEvaluator = (
  userAnswers: UserAnswers,
  questions: Question[],
): EvaluationOutput => {
  return useMemo(() => {
    // 1. Inicializar mapa de máximos posibles por patrón
    const maxScores: Record<string, number> = PATTERNS.reduce(
      (acc, p) => {
        acc[p.id] = 0;
        return acc;
      },
      {} as Record<string, number>,
    );

    // Calcular máximo alcanzable dinámicamente
    PATTERNS.forEach((pattern) => {
      questions.forEach((q) => {
        let maxWeightInQ = 0;

        q.options.forEach((opt) => {
          const weight = opt.weights[pattern.id] ?? 0;

          if (weight > maxWeightInQ) maxWeightInQ = weight;
        });
        maxScores[pattern.id] += maxWeightInQ;
      });
    });

    // 2. Inicializar y calcular puntaje bruto (S_p) del usuario
    const rawScores: Record<string, number> = PATTERNS.reduce(
      (acc, p) => {
        acc[p.id] = 0;
        return acc;
      },
      {} as Record<string, number>,
    );

    Object.entries(userAnswers).forEach(([questionId, optionId]) => {
      const question = questions.find((q) => q.id === questionId);

      const option = question?.options.find((opt) => opt.id === optionId);

      if (!option?.weights) return;

      Object.entries(option.weights).forEach(([patternId, weight]) => {
        if (weight === undefined) return;

        rawScores[patternId] = (rawScores[patternId] ?? 0) + weight;
      });
    });

    const totalRawSum = Object.values(rawScores).reduce(
      (acc, curr) => acc + curr,
      0,
    );

    // 3. Normalizar y estructurar resultados
    const patternResults: PatternResult[] = PATTERNS.map((pattern) => {
      const raw = rawScores[pattern.id] || 0;
      const max = maxScores[pattern.id] || 1;
      const normalized = (raw / max) * 100;
      const relative = totalRawSum > 0 ? (raw / totalRawSum) * 100 : 0;

      return {
        ...pattern,
        raw,
        max,
        normalized: Number(normalized.toFixed(1)),
        relative: Number(relative.toFixed(1)),
      };
    });

    const sortedResults = [...patternResults].sort(
      (a, b) => b.normalized - a.normalized,
    );

    const predominant =
      sortedResults[0] && sortedResults[0].normalized > 0
        ? sortedResults[0]
        : null;
    const secondaries = sortedResults
      .slice(1)
      .filter((p) => p.normalized >= 30);

    return {
      totalRawSum,
      results: sortedResults,
      predominant,
      secondaries,
      isComplete: Object.keys(userAnswers).length === questions.length,
    };
  }, [userAnswers, questions]);
};

export default useQuestionnaireEvaluator;
