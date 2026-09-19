import { Library } from "../components/libray/library";
import { libraryService } from "../services/library.service";

export function LibraryPage() {
  const patterns = libraryService.getPatterns();

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <header className="mb-8">
          <p className="text-left mt-2 text-muted-foreground">
            Explora y conoce de algunos de los patranos cognitivos que hay.
          </p>
        </header>
        <Library patterns={patterns} />
      </div>
    </main>
  );
}
