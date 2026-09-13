import { Questionnaire } from "../components/ui/questionnaire";
import QuestionUI from "../components/Question";
import Scenary from "../components/Scenary";

export function QuestionnairePage() {
  const options = ["option 1", "option 2", "option 2"];

  return (
    <>
      <div>Hola</div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative mx-auto w-full max-w-sm pt-0">
          <Scenary
            text="In modern software development, mocking plays a crucial role in achieving test coverage and ensuring high-quality code. This blog will walk you through a hands-on example of implementing mock testing in a React project. The process involves creating a reusable component, identifying a testing challenge, and applying mocks to solve it."
            description="aqui va la el contexto"
            title="Aqui el titulo"
          />
        </div>
        <div className="relative mx-auto w-full max-w-sm pt-0">
          <Questionnaire className="mx-auto max-w-md">
            <QuestionUI
              title="titulo de la preguna"
              description="descripcion"
              options={options}
            />
          </Questionnaire>
        </div>
      </div>
    </>
  );
}

export default QuestionnairePage;
