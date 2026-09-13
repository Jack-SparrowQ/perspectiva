import { Questionnaire } from "../components/questionnaire/Questionnaire";
import { questionService } from "../services/question.service";

export function QuestionPage() {
  const questions = questionService.getQuestions();

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <header className="mb-8">
          <p className="text-left mt-2 text-muted-foreground">
            Lee cada situación y selecciona la respuesta que más se acerque a lo
            que pensarías.
          </p>
        </header>

        <Questionnaire questions={questions} />
      </div>
    </main>
  );
}

export default QuestionPage;
