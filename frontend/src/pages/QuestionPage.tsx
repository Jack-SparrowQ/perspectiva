import { Questionnaire } from "../components/questionnaire/Questionnaire";
import { questionService } from "../services/question.service";
import { Questionnaire as QuestionnaireType } from "../components/ui/questionnaire";
import { Button } from "../components/ui/button";
import React from "react";
import Modal from "../components/modal";

export function QuestionPage() {
  const questions = questionService.getQuestions();
  const [open, setOpen] = React.useState(false);

  const openComfirmModal = () => {
    setOpen(true);
  };

  const closeConfirmModa = () => {
    setOpen(false);
  };

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <header className="flex justify-between mb-8">
          <p className="text-left mt-2 text-muted-foreground">
            Lee cada situación y selecciona la respuesta que más se acerque a lo
            que pensarías.
          </p>
          <Button onClick={openComfirmModal}>Salir</Button>

          <Modal
            title="¿Estas seguro de que quieres finalizar?"
            description="Si lo haces todo el progreso no se guardara"
            open={open}
            onOpenChange={closeConfirmModa}
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
