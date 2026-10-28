// Mirrors ScenarioResponse / QuestionResponse / AnswerResponse in mindworks-api
export interface ScenarioAnswer {
  id: number;
  text: string;
  order: number;
}

export interface ScenarioQuestion {
  id: number;
  text: string;
  type: "THOUGHT" | "EMOTION" | "REACTION";
  order: number;
  required: boolean;
  answers: ScenarioAnswer[];
}

export interface Scenario {
  id: number;
  title: string;
  description: string;
  category: string;
  order: number;
  questions: ScenarioQuestion[];
}
