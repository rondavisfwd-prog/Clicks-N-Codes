import { automationCapabilities, workflowStages } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function AISection() {
  return (
    <section className="band border-t border-hairline bg-ink text-ink-foreground">
      <div className="shell grid gap-[clamp(3.5rem,9vh,6rem)] md:grid-cols-[1.1fr_0.9fr] md:gap-24">
        <div>
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="eyebrow opacity-50">AI &amp; Automation</span>
          </Reveal>

          <h2 className="mt-[clamp(2rem,5vh,3.5rem)] text-headline uppercase">
            <Reveal className="mask-rise">
              <span className="mask-rise-inner font-bold">Automate the busywork.</span>
            </Reveal>
            <Reveal delay={90} className="mask-rise">
              <span className="mask-rise-inner font-light opacity-60">
                <span className="font-bold text-accent opacity-100">Amplify</span> the human work.
              </span>
            </Reveal>
          </h2>

          <Reveal delay={140}>
            <p className="mt-12 max-w-[42ch] text-lead opacity-70">
              We map the repetitive processes inside your business, then build intelligent automation
              around them — so your team spends its hours where judgment pays.
            </p>
          </Reveal>

          {/* Capabilities as one typographic run, not a wall of chips. */}
          <Reveal delay={200}>
            <p className="mt-12 max-w-[46ch] border-t border-white/10 pt-8 text-sm leading-[2] opacity-60">
              {automationCapabilities.map((capability, index) => (
                <span key={capability}>
                  {index > 0 ? <span className="text-accent/60"> / </span> : null}
                  {capability}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        <ol className="flex flex-col md:pt-4">
          {workflowStages.map((stage, index) => (
            <Reveal
              key={stage.label}
              as="li"
              delay={index * 80}
              className="group relative border-t border-white/10 py-7 last:border-b"
            >
              <div className="flex items-baseline gap-6">
                <span className="eyebrow shrink-0 tabular-nums opacity-40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-lg font-bold uppercase tracking-[-0.02em]">
                    {stage.label}
                  </p>
                  <p className="mt-2 max-w-[34ch] text-sm opacity-55">{stage.note}</p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px bg-accent transition-all duration-1000"
                style={{ width: `${((index + 1) / workflowStages.length) * 100}%` }}
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
