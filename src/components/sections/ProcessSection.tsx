import { processSteps } from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

export function ProcessSection() {
  return (
    <section className="band border-t border-hairline">
      <div className="shell grid gap-[clamp(3rem,7vh,5rem)] lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <SectionHeader
          eyebrow="Process"
          title="How we turn ideas into impact"
        />

        {/* Rows, not cards: the number carries the hierarchy. */}
        <ol className="flex flex-col">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              as="li"
              delay={index * 90}
              className="group grid gap-4 border-t border-hairline py-9 last:border-b sm:grid-cols-[auto_1fr] sm:gap-10"
            >
              <span className="font-display text-sm font-medium tabular-nums text-muted-foreground/70 transition-colors duration-500 group-hover:text-accent">
                {step.number}
              </span>
              <div>
                <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-bold uppercase leading-none tracking-[-0.025em]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
