import { Link, useNavigate } from "react-router-dom";

import { Button } from "../components/ui/button";
import { Library } from "../components/libray/library";
import { libraryService } from "../services/library.service";

export function LibraryPage() {
  const patterns = libraryService.getPatterns();
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-4 text-left">
      <nav className="flex shrink-0 items-center justify-between py-5">
        <Link
          to="/home"
          className="font-heading rounded-md text-xl font-semibold text-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
          Perspectiva
        </Link>
        <Button variant="ghost" onClick={() => navigate("/questionnaire")}>
          Hacer el cuestionario
        </Button>
      </nav>

      <main className="pt-6 pb-20">
        <h1 className="font-heading mt-0! mb-4! text-4xl! leading-[1.08] font-semibold! tracking-tight! text-foreground! md:text-6xl!">
          Biblioteca de patrones
        </h1>
        <p className="mb-12 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
          Las distorsiones cognitivas son formas habituales de interpretar lo
          que nos pasa. Elige una para ver cómo se ve y cómo reconocerla.
        </p>
        <Library patterns={patterns} />
      </main>
    </div>
  );
}
