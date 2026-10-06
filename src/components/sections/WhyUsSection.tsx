import { differentiators } from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

export function WhyUsSection() {
  return (
    <section className="band border-t border-hairline">
      <div className="shell grid gap-[clamp(3rem,7vh,5rem)] lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <SectionHeader
          eyebrow="Why Clicks N Codes"
          title="Two disciplines. One accountability."
        />

        <div className="flex flex-col">
          {differentiators.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="grid gap-4 border-t border-hairline py-9 last:border-b sm:grid-cols-[0.7fr_1.3fr] sm:gap-10"
            >
              <h3 className="font-display text-[clamp(1.15rem,1.8vw,1.5rem)] font-bold uppercase leading-none tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
