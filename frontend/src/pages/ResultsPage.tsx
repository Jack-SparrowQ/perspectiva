import { MotionConfig, motion } from "motion/react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { Button } from "../components/ui/button";
import type { EvaluationOutput } from "../types/envaluationOutput";

export function ResultsPage() {
  const navigate = useNavigate();
  const evaluation = (
    useLocation().state as { evaluation?: EvaluationOutput } | null
  )?.evaluation;

  // Results only exist right after finishing the questionnaire
  if (!evaluation) {
    return <Navigate to="/questionnaire" replace />;
  }

  const { predominant, secondaries, results } = evaluation;
  const secondaryIds = new Set(secondaries.map((s) => s.id));

  return (
    <MotionConfig reducedMotion="user">
      <main className="mx-auto w-full max-w-3xl px-4 py-12 text-left md:py-20">
        {predominant ? (
          <section aria-labelledby="predominant">
            <p className="text-muted-foreground">
              El patrón que más apareció en tus respuestas
            </p>
            <h1
              id="predominant"
              className="font-heading mt-2! mb-6! text-5xl! leading-[1.05] font-semibold! tracking-tight! text-foreground! md:text-7xl!"
            >
              {predominant.name}
            </h1>
            <p className="max-w-[60ch] text-lg leading-relaxed text-foreground/80">
              {predominant.definition}
            </p>

            {predominant.ReflectionQuestions && (
              <figure className="mt-10 rounded-2xl bg-primary/8 p-6 md:p-8">
                <figcaption className="mb-3 text-sm font-medium text-primary">
                  Una pregunta para la próxima vez que te pase
                </figcaption>
                <blockquote className="font-heading text-2xl leading-snug text-foreground md:text-3xl">
                  {predominant.ReflectionQuestions}
                </blockquote>
              </figure>
            )}

            <dl className="mt-10 grid gap-8 md:grid-cols-2">
              {predominant.example && (
                <div>
                  <dt className="font-heading mb-2 font-semibold text-foreground">
                    Cómo se ve en el día a día
                  </dt>
                  <dd className="leading-relaxed text-muted-foreground">
                    {predominant.example}
                  </dd>
                </div>
              )}
              {predominant.MethodOfRecognition && (
                <div>
                  <dt className="font-heading mb-2 font-semibold text-foreground">
                    Cómo reconocerlo
                  </dt>
                  <dd className="leading-relaxed text-muted-foreground">
                    {predominant.MethodOfRecognition}
                  </dd>
                </div>
              )}
            </dl>
          </section>
        ) : (
          <section>
            <h1 className="font-heading mt-0! mb-4! text-4xl! font-semibold! tracking-tight! text-foreground! md:text-6xl!">
              No apareció ningún patrón marcado
            </h1>
            <p className="max-w-[60ch] text-lg leading-relaxed text-foreground/80">
              Tus respuestas no se inclinaron hacia ninguna distorsión
              cognitiva. Puedes explorar la biblioteca para conocerlas de todos
              modos.
            </p>
          </section>
        )}

        <section aria-labelledby="all-patterns" className="mt-20">
          <h2
            id="all-patterns"
            className="font-heading mb-2! text-2xl! font-semibold! text-foreground!"
          >
            Todos tus patrones
          </h2>
          <p className="mb-8 text-muted-foreground">
            Qué tanto apareció cada uno, sobre el máximo posible en este
            cuestionario.
          </p>

          <ul className="space-y-5">
            {results.map((item, i) => {
              const isTop = item.id === predominant?.id;
              const isSecondary = secondaryIds.has(item.id);
              return (
                <li key={item.id}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-4">
                    <span
                      className={
                        isTop || isSecondary
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {item.name}
                      {isSecondary && (
                        <span className="ml-2 text-sm text-primary">
                          también presente
                        </span>
                      )}
                    </span>
                    <span className="text-sm text-muted-foreground tabular-nums">
                      {Math.round(item.normalized)}%
                    </span>
                  </div>
                  <div
                    role="meter"
                    aria-label={item.name}
                    aria-valuenow={item.normalized}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2 overflow-hidden rounded-full bg-muted"
                  >
                    <motion.div
                      className={`h-full rounded-full ${
                        isTop
                          ? "bg-primary"
                          : isSecondary
                            ? "bg-primary/55"
                            : "bg-muted-foreground/35"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.normalized}%` }}
                      transition={{
                        duration: 0.7,
                        delay: 0.2 + i * 0.06,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <p className="mt-12 max-w-[60ch] text-sm text-muted-foreground">
          Este resultado describe tus respuestas a unas situaciones concretas.
          No es un diagnóstico; si algo de esto te preocupa, hablarlo con un
          profesional puede ayudarte.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button size="lg" onClick={() => navigate("/biblioteca")}>
            Explorar la biblioteca
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/questionnaire")}
          >
            Repetir el cuestionario
          </Button>
        </div>
      </main>
    </MotionConfig>
  );
}

export default ResultsPage;
