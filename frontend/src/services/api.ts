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
