import { getScenarios } from "./api";
import type { Question } from "../types/question";

export const questionService = {
  async getQuestions(): Promise<Question[]> {
    const scenarios = await getScenarios();

    // Each backend question is one step, shown with its scenario as context
    return scenarios.flatMap((scenario) =>
      scenario.questions.map((question) => ({
        id: String(question.id),
        title: question.text,
        options: question.answers.map((answer) => ({
          id: String(answer.id),
          label: answer.text,
          weights: answer.weights,
        })),
        scenary: {
          title: scenario.title,
          description: scenario.description,
          imgUrl: scenario.imgUrl ?? undefined,
        },
      })),
    );
  },
};
