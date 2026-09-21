import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
}) {
  return (
    <section className="shell pb-[clamp(4rem,9vh,7rem)] pt-[clamp(8rem,18vh,12rem)]">
      <Reveal className="flex items-center gap-4">
        <span className="h-px w-10 bg-accent" aria-hidden="true" />
        <span className="eyebrow text-muted-foreground">{eyebrow}</span>
      </Reveal>
      <Reveal delay={60}>
        <h1 className="mask-rise mt-[clamp(2rem,5vh,3.5rem)] max-w-[16ch] text-display font-bold uppercase">
          <span className="mask-rise-inner">{title}</span>
        </h1>
      </Reveal>
      {copy ? (
        <Reveal delay={140}>
          <p className="mt-10 max-w-[42ch] text-lead text-muted-foreground">{copy}</p>
        </Reveal>
      ) : null}
    </section>
  );
}
