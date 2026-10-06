import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled && !open
          ? "border-b border-hairline bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between gap-6 transition-all duration-700",
          scrolled && !open ? "h-16" : "h-[5.25rem]",
        )}
      >
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-500 hover:text-foreground aria-[current=page]:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full group-aria-[current=page]:w-full" />
            </Link>
          ))}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground transition-transform duration-500 hover:-translate-y-0.5"
          >
            Start a Project
            <ArrowUpRight
              className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </nav>

        {/* Two-rule mark that becomes a cross when the menu opens. */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex size-12 flex-col items-center justify-center gap-2 md:hidden"
        >
          <span
            aria-hidden="true"
            className={cn(
              "block h-px w-7 bg-foreground transition-transform duration-500",
              open && "translate-y-[4.5px] rotate-45",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "block h-px w-7 bg-foreground transition-transform duration-500",
              open && "-translate-y-[4.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      {open ? <MobileMenu onNavigate={() => setOpen(false)} /> : null}
    </header>
  );
}

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="fixed inset-0 top-0 z-40 flex h-[100dvh] flex-col bg-background pt-[5.25rem] md:hidden">
      <nav
        aria-label="Mobile"
        className="shell flex flex-1 flex-col justify-center gap-1"
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onNavigate}
            style={{ animationDelay: `${i * 70}ms` }}
            className="reveal reveal-in flex items-baseline gap-5 border-b border-hairline py-6 font-display text-[2.75rem] font-bold uppercase leading-none tracking-[-0.04em] aria-[current=page]:text-accent"
          >
            <span className="eyebrow text-muted-foreground/70">0{i + 1}</span>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="shell pb-14">
        <Link
          to="/contact"
          onClick={onNavigate}
          className="flex items-center justify-between bg-ink px-7 py-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground"
        >
          Start a Project
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="mt-7 block text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          {site.email}
        </a>
      </div>
    </div>
  );
}
