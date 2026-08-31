import type { Evaluation } from "../types/evaluation";
import type { Scenario } from "../types/scenario";

const API_URL = "/api";

export async function getScenarios(): Promise<Scenario[]> {
  const response = await fetch(`${API_URL}/scenarios`);

  if (!response.ok) {
    throw new Error("No se pudieron obtener los escenarios");
  }

  return response.json();
}

export async function getScenario(id: number): Promise<Scenario> {
  const response = await fetch(`${API_URL}/scenarios/${id}`);

  if (!response.ok) {
    throw new Error("No se pudo obtener el escenario");
  }
  return response.json();
}

export async function startEvaluation(): Promise<Evaluation> {
  const response = await fetch(`${API_URL}/evaluations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("No se pudo iniciar la evaluación");
  }

  return response.json();
}

export async function submitAnswer(
  evaluationId: string,
  questionId: number,
  answerId: number,
): Promise<void> {
  const response = await fetch(
    `${API_URL}/evaluations/${evaluationId}/answers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questionId,
        answerId,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("No se pudo guardar la respuesta");
  }
}
