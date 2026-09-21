import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal className="flex items-center gap-4">
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          <span className="eyebrow text-muted-foreground">{eyebrow}</span>
        </Reveal>
      ) : null}
      <Reveal delay={60}>
        <h2 className="mask-rise max-w-[20ch] text-headline font-bold uppercase">
          <span className="mask-rise-inner">{title}</span>
        </h2>
      </Reveal>
      {copy ? (
        <Reveal delay={120}>
          <p
            className={cn(
              "max-w-[46ch] text-lead text-muted-foreground",
              align === "center" && "mx-auto",
            )}
          >
            {copy}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
