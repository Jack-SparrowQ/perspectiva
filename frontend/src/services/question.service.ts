import { questionsMock } from "../data/questions.mock";
import type { Question } from "../types/question";

export const questionService = {
  getQuestions(): Question[] {
    return questionsMock;
  },
};
