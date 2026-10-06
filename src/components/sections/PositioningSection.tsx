import { Reveal } from "@/components/Reveal";

export function PositioningSection() {
  return (
    <section className="band border-t border-hairline bg-ink text-ink-foreground">
      <div className="shell">
        <Reveal className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          <span className="eyebrow opacity-50">Positioning</span>
        </Reveal>

        {/* The brand line, set as a single typographic statement. */}
        <h2 className="mt-[clamp(2.5rem,6vh,4rem)] text-headline uppercase">
          <Reveal className="mask-rise">
            <span className="mask-rise-inner font-bold">One agency.</span>
          </Reveal>
          <Reveal delay={90} className="mask-rise">
            <span className="mask-rise-inner font-light opacity-50">
              From click to{" "}
              <span className="font-bold text-accent opacity-100">code.</span>
            </span>
          </Reveal>
        </h2>

        <Reveal
          delay={160}
          className="mt-[clamp(3rem,8vh,5.5rem)] grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[1fr_1fr] md:gap-20"
        >
          <p className="max-w-[36ch] text-lead opacity-80">
            Most agencies specialise in either marketing or technology. We bring
            strategy, marketing, design, development and automation into one
            team.
          </p>
          <p className="max-w-[36ch] text-lead opacity-50">
            We help businesses attract attention, convert audiences, build
            digital products and automate what happens behind the scenes.
          </p>
        </Reveal>

        {/* Clicks to Codes, drawn as one continuous line. */}
        <Reveal
          delay={220}
          className="mt-[clamp(3rem,7vh,5rem)] flex items-center gap-6"
        >
          <span className="eyebrow shrink-0 text-accent">Clicks</span>
          <span aria-hidden="true" className="relative h-px flex-1 bg-white/15">
            <span className="rule-draw absolute inset-0 bg-gradient-to-r from-accent to-white/25" />
          </span>
          <span className="eyebrow shrink-0 opacity-70">Codes</span>
        </Reveal>
      </div>
    </section>
  );
}
