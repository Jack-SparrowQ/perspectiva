import { useEffect, useState } from "react";
import { checkBackend } from "../services/api";

function HomePage() {
  const [backendStatus, setBackendStatus] = useState("Checking...");

  useEffect(() => {
    checkBackend()
      .then(() => setBackendStatus("Backend conectado"))
      .catch(() => setBackendStatus("Backend no disponible"));
  }, []);

  return (
    <main>
      <h1>Como funciona mi mente?</h1>

      <p>
        Explora cómo interpretas diferentes situaciones de la vida cotidiana.
      </p>

      <p>{backendStatus}</p>

      <button>Comenzar</button>
    </main>
  );
}

export default HomePage;
