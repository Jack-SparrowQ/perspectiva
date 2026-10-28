import { Questionnaire } from "../components/questionnaire/Questionnaire";
import { questionService } from "../services/question.service";
import { Questionnaire as QuestionnaireType } from "../components/ui/questionnaire";
import { Button } from "../components/ui/button";

import Modal from "../components/modal";
import { useModal } from "../hooks/useModal";

export function QuestionPage() {
  const questions = questionService.getQuestions();

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <header className="flex justify-between mb-1">
          <p className="text-left mt-2 text-muted-foreground">
            Lee cada situación y selecciona la respuesta que más se acerque a lo
            que pensarías.
          </p>
          <Button onClick={openModal}>Salir</Button>

          <Modal
            title="¿Estás seguro de que quieres finalizar?"
            description="Si lo haces todo el progreso no se guardará"
            open={isOpen}
            onOpenChange={closeModal}
          />
        </header>

        <QuestionnaireType>
          <Questionnaire questions={questions} />
        </QuestionnaireType>
      </div>
    </main>
  );
}

export default QuestionPage;
