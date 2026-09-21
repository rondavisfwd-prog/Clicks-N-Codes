import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Typographic lockup: CLICKS in weight, N in accent, CODES in outline —
 * the two halves of the name held together by the accent.
 */
export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Clicks N Codes — home"
      className={cn(
        "group inline-flex items-baseline gap-[0.3em] font-display text-sm font-bold uppercase tracking-[-0.01em] sm:text-base",
        className,
      )}
    >
      <span>Clicks</span>
      <span className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
        N
      </span>
      <span className="font-normal text-muted-foreground transition-colors duration-300 group-hover:text-current">
        Codes
      </span>
    </Link>
  );
}
