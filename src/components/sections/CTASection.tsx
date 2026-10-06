import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const prompts = [
  "Need more clicks?",
  "Need better code?",
  "Need smarter automation?",
];

export function CTASection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % prompts.length),
      2800,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="band border-t border-hairline bg-ink text-ink-foreground">
      <div className="shell">
        <Reveal className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          <span
            key={prompts[index]}
            className="eyebrow reveal reveal-in text-accent"
          >
            {prompts[index]}
          </span>
        </Reveal>

        <h2 className="mt-[clamp(2.5rem,6vh,4rem)] text-mega uppercase">
          <Reveal className="mask-rise">
            <span className="mask-rise-inner font-light opacity-50">
              Got an idea?
            </span>
          </Reveal>
          <Reveal delay={90} className="mask-rise">
            <span className="mask-rise-inner font-bold">
              Let&apos;s build it.
            </span>
          </Reveal>
        </h2>

        <Reveal
          delay={180}
          className="mt-[clamp(3rem,8vh,5rem)] flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-12"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-accent px-8 py-5 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground transition-transform duration-500 hover:-translate-y-0.5"
          >
            Start a Project
            <ArrowUpRight
              className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
          <span className="text-sm opacity-50">Let&apos;s talk.</span>
        </Reveal>
      </div>
    </section>
  );
}
