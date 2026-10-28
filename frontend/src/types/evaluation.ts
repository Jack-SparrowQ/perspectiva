// Mirrors StartEvaluationResponse in mindworks-api
export interface Evaluation {
  id: string;
  startedAt: string;
  status: "IN_PROGRESS" | "COMPLETED";
}
