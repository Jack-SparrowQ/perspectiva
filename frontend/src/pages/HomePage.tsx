import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/ui/button";

// A sample of what the questionnaire does: one situation, several readings
const sampleReadings = [
  {
    thought: "Seguro está molesto conmigo.",
    pattern: "Lectura de mente",
    note: "suponer lo que el otro piensa sin tener pruebas.",
  },
  {
    thought: "Algo grave le debió pasar.",
    pattern: "Catastrofización",
    note: "saltar directo al peor desenlace posible.",
  },
  {
    thought: "Estará ocupado, ya me responderá.",
    pattern: null,
    note: "Una lectura flexible: deja abierta más de una explicación.",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [picked, setPicked] = useState<number | null>(null);
  const reading = picked === null ? null : sampleReadings[picked];

  return (
    <MotionConfig reducedMotion="user">
      <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-4 text-left">
        <nav className="flex shrink-0 items-center justify-between py-5">
          <span className="font-heading text-xl font-semibold text-foreground">
            Perspectiva
          </span>
          <Button variant="ghost" onClick={() => navigate("/biblioteca")}>
            Biblioteca de patrones
          </Button>
        </nav>

        <main className="grid flex-1 content-center items-center gap-12 pt-4 pb-16 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <section>
            <h1 className="font-heading mt-0! mb-6! text-4xl! leading-[1.08] font-semibold! tracking-tight! text-foreground! md:text-6xl!">
              Explora cómo interpretas las situaciones de tu día a día.
            </h1>
            <p className="max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
              Responde a escenas cotidianas y descubre qué patrones de
              pensamiento aparecen más en tu forma de verlas.
            </p>
            <Button
              size="lg"
              className="mt-8 h-12 px-6 text-base"
              onClick={() => navigate("/questionnaire")}
            >
              Comenzar el cuestionario
            </Button>
          </section>

          <section
            aria-labelledby="sample"
            className="rounded-3xl bg-primary/8 p-6 md:p-8"
          >
            <h2
              id="sample"
              className="font-heading mb-1! text-xl! leading-snug font-semibold! text-foreground! md:text-2xl!"
            >
              Tu amigo no ha respondido tu mensaje en todo el día.
            </h2>
            <p className="mb-5 text-muted-foreground">
              ¿Qué es lo primero que piensas?
            </p>

            <div className="flex flex-col gap-2">
              {sampleReadings.map((r, i) => (
                <button
                  key={r.thought}
                  type="button"
                  aria-pressed={picked === i}
                  onClick={() => setPicked(i)}
                  className={`rounded-xl border px-4 py-3 text-left transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 ${
                    picked === i
                      ? "border-primary bg-background text-foreground"
                      : "border-transparent bg-background/60 text-foreground/80 hover:bg-background"
                  }`}
                >
                  {r.thought}
                </button>
              ))}
            </div>

            <div aria-live="polite" className="mt-5 min-h-18">
              <AnimatePresence mode="wait">
                {reading && (
                  <motion.p
                    key={picked}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="leading-relaxed text-foreground/80"
                  >
                    {reading.pattern ? (
                      <>
                        Esto se parece a{" "}
                        <strong className="font-semibold text-primary">
                          {reading.pattern}
                        </strong>
                        : {reading.note}
                      </>
                    ) : (
                      reading.note
                    )}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              El cuestionario hace esto con varias situaciones y te muestra qué
              patrones aparecen más.
            </p>
          </section>
        </main>
      </div>
    </MotionConfig>
  );
}
