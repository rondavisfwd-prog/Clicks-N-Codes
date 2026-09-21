import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-background">
      <div className="shell pb-[clamp(3rem,6vh,4.5rem)] pt-[clamp(4.5rem,10vh,7rem)]">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-20">
          <div>
            <p className="max-w-[24ch] font-display text-title font-light uppercase text-muted-foreground">
              We create the clicks.
              <br />
              <span className="font-bold text-foreground">We write the code.</span>
            </p>
            <a
              href={`mailto:${site.email}`}
              className="group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] transition-colors hover:text-accent"
            >
              {site.email}
              <ArrowUpRight
                className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-4">
            <span className="eyebrow text-muted-foreground/70">Navigate</span>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="w-fit text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <span className="eyebrow text-muted-foreground/70">Social</span>
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="w-fit text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-[clamp(4rem,10vh,7rem)] select-none font-display text-mega font-bold uppercase leading-[0.82] text-foreground/[0.07]"
        >
          Clicks <span className="text-accent/25">N</span> Codes
        </p>

        <div className="mt-10 flex flex-col gap-3 border-t border-hairline pt-7 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}
          </span>
          <span>Marketing · Technology · AI</span>
        </div>
      </div>
    </footer>
  );
}
