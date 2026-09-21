import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

/**
 * Signature interaction: a field of hairline crosses. The cursor pulls the
 * nearest marks into the accent and gives them weight — attention becoming
 * structure. Pointer-driven only (no timers, no layout thrash).
 */
function ClickField() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const cols = 14;
  const rows = 7;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPointer({
          x: ((event.clientX - rect.left) / rect.width) * cols,
          y: ((event.clientY - rect.top) / rect.height) * rows,
        });
      }}
      onPointerLeave={() => setPointer(null)}
      className="relative h-full w-full"
    >
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: cols * rows }).map((_, index) => {
          const cx = index % cols;
          const cy = Math.floor(index / cols);
          const distance = pointer
            ? Math.hypot(pointer.x - cx - 0.5, pointer.y - cy - 0.5)
            : Number.POSITIVE_INFINITY;
          const near = distance < 2.4;
          const strength = near ? 1 - distance / 2.4 : 0;
          return (
            <span key={index} className="relative block">
              <span
                className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
                style={{
                  width: 7 + strength * 7,
                  height: 1,
                  backgroundColor: near ? "var(--accent)" : "var(--hairline)",
                  opacity: near ? 0.35 + strength * 0.65 : 0.75,
                }}
              />
              <span
                className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
                style={{
                  width: 1,
                  height: 7 + strength * 7,
                  backgroundColor: near ? "var(--accent)" : "var(--hairline)",
                  opacity: near ? 0.35 + strength * 0.65 : 0.75,
                }}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-[clamp(4rem,9vh,7rem)] pt-[clamp(8rem,20vh,13rem)]">
      <div className="pointer-events-none absolute inset-x-0 top-1/4 bottom-0 -z-10 hidden md:block">
        <div className="shell pointer-events-auto h-full">
          <ClickField />
        </div>
      </div>

      <div className="shell">
        <Reveal className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          <span className="eyebrow text-muted-foreground">
            Marketing · Technology · AI Automation
          </span>
        </Reveal>

        {/* Typographic hierarchy carries the story: light setup, heavy payload. */}
        <h1 className="mt-[clamp(2.5rem,6vh,4.5rem)] text-mega uppercase">
          <Reveal className="mask-rise">
            <span className="mask-rise-inner font-light text-muted-foreground">We create</span>
          </Reveal>
          <Reveal delay={90} className="mask-rise">
            <span className="mask-rise-inner font-bold">the clicks.</span>
          </Reveal>
          <Reveal delay={180} className="mask-rise">
            <span className="mask-rise-inner font-light text-muted-foreground">We write</span>
          </Reveal>
          <Reveal delay={270} className="mask-rise">
            <span className="mask-rise-inner font-bold">
              the <span className="text-accent">code.</span>
            </span>
          </Reveal>
        </h1>

        <div className="mt-[clamp(3rem,7vh,5.5rem)] grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-20">
          <Reveal delay={140}>
            <p className="max-w-[42ch] text-lead text-muted-foreground">
              Clicks N Codes is a digital agency combining marketing, technology and AI to build
              brands, products and systems designed for growth.
            </p>
          </Reveal>

          <Reveal delay={220} className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-ink px-8 py-5 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground transition-transform duration-500 hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowUpRight
                className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/work"
              className="group relative py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-accent"
            >
              Explore Our Work
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left bg-foreground transition-transform duration-500 group-hover:scale-x-0"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
