import { useState } from "react";
import { testimonials } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index]!;

  return (
    <section className="band border-t border-hairline">
      <div className="shell">
        <Reveal className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          <span className="eyebrow text-muted-foreground">Testimonials</span>
        </Reveal>

        <Reveal delay={80}>
          <blockquote
            key={current.name}
            className="mt-[clamp(3rem,7vh,5rem)] max-w-[30ch] font-display text-quote font-light"
          >
            <span className="text-accent">“</span>
            {current.quote}
            <span className="text-accent">”</span>
          </blockquote>
        </Reveal>

        <Reveal
          delay={140}
          className="mt-[clamp(3rem,7vh,4.5rem)] flex flex-wrap items-end justify-between gap-10 border-t border-hairline pt-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em]">
              {current.name}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {current.role}, {current.company}
            </p>
            {current.isPlaceholder ? (
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground/80">
                Placeholder testimonial
              </p>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-4 text-xs tabular-nums text-muted-foreground">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setIndex(
                  (i) => (i - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="inline-flex size-12 items-center justify-center border border-hairline transition-colors duration-500 hover:border-accent hover:text-accent"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="inline-flex size-12 items-center justify-center border border-hairline transition-colors duration-500 hover:border-accent hover:text-accent"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
