import { useState } from "react";
import { serviceGroups } from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";

export function ServicesSection({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const [active, setActive] = useState<string>(serviceGroups[0]!.id);
  const current =
    serviceGroups.find((group) => group.id === active) ?? serviceGroups[0]!;

  return (
    <section id="services" className="band border-t border-hairline">
      <div className="shell">
        {showHeader ? (
          <SectionHeader
            eyebrow="Capabilities"
            title={
              <>
                Everything digital.
                <br />
                Connected.
              </>
            }
            className="mb-[clamp(3.5rem,8vh,6rem)]"
          />
        ) : null}

        {/* Desktop: an index of disciplines; the detail column is the payoff. */}
        <div className="hidden md:grid md:grid-cols-[1.05fr_0.95fr] md:gap-20">
          <ul className="flex flex-col">
            {serviceGroups.map((group) => {
              const isActive = group.id === active;
              return (
                <li
                  key={group.id}
                  className="border-b border-hairline first:border-t"
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(group.id)}
                    onFocus={() => setActive(group.id)}
                    onClick={() => setActive(group.id)}
                    aria-pressed={isActive}
                    className="group flex w-full items-baseline gap-8 py-9 text-left"
                  >
                    <span
                      className={cn(
                        "eyebrow transition-colors duration-500",
                        isActive ? "text-accent" : "text-muted-foreground/70",
                      )}
                    >
                      {group.number}
                    </span>
                    <span
                      className={cn(
                        "text-headline font-bold uppercase transition-all duration-700",
                        isActive
                          ? "translate-x-1 text-foreground"
                          : "text-foreground/25 group-hover:text-foreground/50",
                      )}
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                    >
                      {group.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col justify-center">
            <p
              key={`${current.id}-summary`}
              className="reveal reveal-in max-w-[32ch] text-lead"
            >
              {current.summary}
            </p>
            <p
              key={current.id}
              className="mt-10 max-w-[38ch] text-sm leading-[1.9] text-muted-foreground"
            >
              {current.capabilities.map((capability, index) => (
                <span key={capability}>
                  {index > 0 ? (
                    <span className="text-hairline"> / </span>
                  ) : null}
                  {capability}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Mobile: full-width accordion with generous tap targets. */}
        <div className="md:hidden">
          {serviceGroups.map((group) => {
            const isOpen = group.id === active;
            return (
              <div
                key={group.id}
                className="border-b border-hairline first:border-t"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? "" : group.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-7 text-left"
                  >
                    <span className="flex flex-col gap-3">
                      <span
                        className={cn(
                          "eyebrow transition-colors",
                          isOpen ? "text-accent" : "text-muted-foreground/70",
                        )}
                      >
                        {group.number}
                      </span>
                      <span className="font-display text-[1.75rem] font-bold uppercase leading-none tracking-[-0.03em]">
                        {group.title}
                      </span>
                    </span>
                    {isOpen ? (
                      <Minus
                        className="size-5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        className="size-5 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </h3>
                {isOpen ? (
                  <div className="pb-8">
                    <p className="text-[0.9375rem] leading-relaxed">
                      {group.summary}
                    </p>
                    <p className="mt-5 text-sm leading-[1.9] text-muted-foreground">
                      {group.capabilities.map((capability, index) => (
                        <span key={capability}>
                          {index > 0 ? (
                            <span className="text-hairline"> / </span>
                          ) : null}
                          {capability}
                        </span>
                      ))}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <Reveal className="mt-14 text-xs text-muted-foreground">
          Need something not listed? It probably sits across two of these.
        </Reveal>
      </div>
    </section>
  );
}
