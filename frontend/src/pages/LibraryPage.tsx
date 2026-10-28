import { Button } from "../components/ui/button";
import { Library } from "../components/libray/library";
import { libraryService } from "../services/library.service";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { buttonReveal } from "../../lib/animation";

export function LibraryPage() {
  const patterns = libraryService.getPatterns();

  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <header className="flex flex-row mb-3 items-center justify-between">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
            {"Biblioteca.".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.div
            className="justify-center"
            variants={buttonReveal}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.35,
              delay: 0.3,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Button onClick={() => navigate("/home")}>Home</Button>
          </motion.div>
        </header>
        <Library patterns={patterns} />
      </div>
    </main>
  );
}
