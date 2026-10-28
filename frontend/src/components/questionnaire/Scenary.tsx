import type { Scenary as ScenaryType } from "../../types/scenary";

interface ScenaryProps {
  content: ScenaryType;
}

export function Scenary({ content }: ScenaryProps) {
  return (
    <section
      aria-labelledby="scenario-title"
      className="rounded-3xl bg-primary/8 p-6 md:sticky md:top-6 md:p-8">
      <h2
        id="scenario-title"
        className="font-heading mb-3! text-2xl! leading-snug font-semibold! text-foreground!">
        {content.title}
      </h2>
      <p className="leading-relaxed text-foreground/80">
        {content.description}
      </p>
      {content.imgUrl && (
        <img
          src={content.imgUrl}
          alt=""
          className="mt-6 aspect-video w-full rounded-2xl object-cover"
        />
      )}
    </section>
  );
}
