export type QuestionType = "THOUGHT" | "EMOTION" | "REACTION";

export interface Answer {
  id: number;
  text: string;
  order: number;
}

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  order: number;
  required: boolean;
  answers: Answer[];
}

export interface Scenario {
  id: number;
  title: string;
  description: string;
  category: string;
  order: number;
  questions: Question[];
}
