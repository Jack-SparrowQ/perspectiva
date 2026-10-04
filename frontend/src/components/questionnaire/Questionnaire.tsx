import { useState } from "react";

import { Scenary } from "./Scenary";
import { ProgressBar } from "./ProgressBar";
import { Question } from "./Question";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { Question as QuestionType } from "../../types/question";
import { useQuestionnaire } from "../../hooks/questionnaire/useQuestionnaire";
import { useQuestionnaireAnswers } from "../../hooks/questionnaire/useQuestionnaireAnswers";
import useQuestionnaireEvaluator from "../../hooks/questionnaire/useQuestionnaireEvaluator";

interface QuestionnaireProps {
  questions: QuestionType[];
}

export function Questionnaire({ questions }: QuestionnaireProps) {
  const {
    currentIndex,
    currentQuestion,
    isLastQuestion,
    error,
    finished,
    nextQuestion,
  } = useQuestionnaire(questions);

  const { answers, selectAnswer } = useQuestionnaireAnswers();

  const evaluation = useQuestionnaireEvaluator(answers);

  if (questions.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No hay preguntas disponibles.
      </p>
    );
  }

  if (finished) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-2xl border border-gray-100 my-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Informe de Perfil Cognitivo
          </h2>
          <p className="text-gray-500 mt-2">
            Análisis de patrones de procesamiento de información
          </p>
        </div>

        {/* Patrón Predominante */}
        {evaluation.predominant ? (
          <div className="mb-8 p-6 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Patrón Predominante
            </span>
            <h3 className="text-2xl font-bold text-indigo-900 mt-1">
              {evaluation.predominant.name} ({evaluation.predominant.id})
            </h3>
            <p className="text-indigo-700 mt-2">
              {evaluation.predominant.definition}
            </p>
            <div className="mt-4 flex gap-6 text-sm font-medium text-indigo-900">
              <div>
                Intensidad Normalizada:{" "}
                <span className="font-bold">
                  {evaluation.predominant.normalized}%
                </span>
              </div>
              <div>
                Carga Cognitiva Relativa:{" "}
                <span className="font-bold">
                  {evaluation.predominant.relative}%
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-600 rounded-r-xl text-green-800">
            No se detectaron sesgos cognitivos significativos. Tus respuestas
            reflejan un enfoque adaptativo.
          </div>
        )}

        {/* Distribución por Patrones */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Desglose por Distorsión Cognitiva
        </h3>
        <div className="space-y-4 mb-8">
          {evaluation.results.map((item) => (
            <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="font-bold text-gray-800">{item.name}</span>
                  <span className="text-xs text-gray-500 ml-2">
                    ({item.id})
                  </span>
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  {item.normalized}% ({item.raw}/{item.max} pts)
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    item.normalized > 70
                      ? "bg-red-500"
                      : item.normalized > 40
                        ? "bg-amber-500"
                        : "bg-indigo-500"
                  }`}
                  style={{ width: `${item.normalized}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-900 transition-all">
            Reiniciar Evaluador
          </button>
        </div>
      </div>
    );
  }

  const selectedOptionId = answers[currentQuestion.id] ?? "";

  function handleSelectOption(optionId: string) {
    selectAnswer(currentQuestion.id, optionId);
  }

  function handleNext() {
    nextQuestion(selectedOptionId);
  }

  return (
    <div className="space-y-6">
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <div className="grid gap-6 md:grid-cols-2">
        <Scenary content={currentQuestion.scenary} />
        <Question
          question={currentQuestion}
          selectedOptionId={selectedOptionId}
          error={error}
          isLastQuestion={isLastQuestion}
          onSelectOption={handleSelectOption}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}
