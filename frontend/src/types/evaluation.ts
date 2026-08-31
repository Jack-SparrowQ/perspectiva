export type EvaluationStatus = "IN_PROGRESS" | "COMPLETED";

export interface Evaluation {
  id: string;
  startedAt: string;
  status: EvaluationStatus;
}
