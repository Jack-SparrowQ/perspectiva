import { Button } from "../components/ui/button";
import { Library } from "../components/libray/library";
import { libraryService } from "../services/library.service";
import { Navigate, useNavigate } from "react-router-dom";

export function LibraryPage() {
  const patterns = libraryService.getPatterns();

  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <header className="flex flex-row mb-3 items-center justify-between">
          <p className="font-heading text-base font-medium text-left">
            Explora y conoce de algunos de los patranos cognitivos que hay.
          </p>
          <div className="justify-center">
            <Button onClick={() => navigate("/home")}>Home</Button>
          </div>
        </header>
        <Library patterns={patterns} />
      </div>
    </main>
  );
}
