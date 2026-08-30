const API_URL = "http://localhost:8080/api";

export async function checkBackend(): Promise<boolean> {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    return false;
  }

  return true;
}
