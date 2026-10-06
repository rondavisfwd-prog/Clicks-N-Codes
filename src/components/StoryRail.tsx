import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const stages = ["Click", "Conversion", "Code", "Automation"];

/**
 * Signature brand device: a hairline at the foot of the viewport that tracks
 * the homepage story from CLICK through CONVERSION and CODE to AUTOMATION.
 * Decorative and duplicated by the section headings, so hidden from assistive
 * tech; desktop only, and rAF-throttled.
 */
export function StoryRail() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        scrollable > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollable))
          : 0,
      );
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activeIndex = Math.min(
    stages.length - 1,
    Math.floor(progress * stages.length),
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-30 hidden lg:block"
    >
      <div className="border-t border-hairline bg-background/70 backdrop-blur-md">
        <div className="relative h-px w-full bg-transparent">
          <span
            className="absolute left-0 top-0 h-px bg-accent transition-[width] duration-300 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="shell flex items-center justify-between py-3">
          {stages.map((stage, index) => (
            <span
              key={stage}
              className={cn(
                "eyebrow flex items-center gap-2 transition-colors duration-700",
                index === activeIndex
                  ? "text-accent"
                  : index < activeIndex
                    ? "text-muted-foreground"
                    : "text-muted-foreground/35",
              )}
            >
              {stage}
              {index < stages.length - 1 ? (
                <span className="ml-2 text-muted-foreground/25">→</span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
