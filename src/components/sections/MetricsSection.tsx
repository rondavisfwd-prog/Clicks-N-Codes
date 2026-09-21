import { metrics } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function MetricsSection() {
  return (
    <section className="band-tight border-t border-hairline">
      <div className="shell">
        {/* No cards: one baseline of numbers, separated by hairlines only. */}
        <dl className="grid grid-cols-2 gap-y-12 sm:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 70}
              className="px-0 sm:border-l sm:border-hairline sm:first:border-l-0 sm:pl-8"
            >
              <dd className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.045em]">
                {metric.value}
              </dd>
              <dt className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {metric.label}
              </dt>
            </Reveal>
          ))}
        </dl>
        <p className="mt-12 text-xs uppercase tracking-[0.16em] text-muted-foreground/80">
          Placeholder figures — to be replaced with verified numbers
        </p>
      </div>
    </section>
  );
}
