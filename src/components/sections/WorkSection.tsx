import { projects } from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

export function WorkSection({
  showHeader = true,
  detailed = false,
}: {
  showHeader?: boolean;
  detailed?: boolean;
}) {
  return (
    <section className="band border-t border-hairline">
      <div className="shell">
        {showHeader ? (
          <SectionHeader
            eyebrow="Selected work"
            title="Selected work"
            copy="Sample case studies, structured so real engagements drop straight in."
            className="mb-[clamp(3.5rem,8vh,6rem)]"
          />
        ) : null}

        <div className="flex flex-col gap-[clamp(4.5rem,11vh,9rem)]">
          {projects.map((project, index) => {
            const flip = index % 2 === 1;
            return (
              <Reveal key={project.slug} as="article" className="group">
                {/* Editorial masthead: index and credits on one hairline, then the name. */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-hairline pt-6">
                  <span className="eyebrow tabular-nums text-accent">{project.number}</span>
                  <span className="eyebrow text-muted-foreground">
                    {project.client} · {project.industry} · {project.year}
                  </span>
                </div>
                <h3 className="mask-rise mt-8 text-display font-bold uppercase">
                  <span className="mask-rise-inner">{project.name}</span>
                </h3>

                {/* Visual and narrative alternate sides down the page. */}
                <div
                  className={`mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16 ${
                    flip ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[16/9] lg:aspect-[5/4]">
                    <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]">
                      <span
                        aria-hidden="true"
                        className="absolute bottom-6 left-6 right-6 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-ink-foreground/10"
                      >
                        {project.name}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className="rule-draw absolute inset-x-0 bottom-0 h-px bg-accent"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-10">
                    <div className="flex flex-col gap-6">
                      <p className="text-lead">{project.challenge}</p>
                      {detailed ? (
                        <>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {project.solution}
                          </p>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {project.outcome}
                          </p>
                        </>
                      ) : null}
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {project.services.join(" / ")}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-hairline pt-7">
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <p className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.03em]">
                              {metric.value}
                            </p>
                            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                      {project.isPlaceholder ? (
                        <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground/80">
                          Sample content — figures are placeholders, not verified results
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
