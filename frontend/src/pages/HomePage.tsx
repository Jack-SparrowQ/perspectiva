import { useEffect, useState } from "react";

function HomePage() {
  const [backendStatus, setBackendStatus] = useState("Checking...");

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
