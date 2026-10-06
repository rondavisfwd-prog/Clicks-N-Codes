import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a Project | Clicks N Codes" },
      {
        name: "description",
        content:
          "Tell us about your marketing, website, product or automation project and we'll come back within one business day.",
      },
      { property: "og:title", content: "Start a Project | Clicks N Codes" },
      {
        property: "og:description",
        content:
          "Share your brief with Clicks N Codes — marketing, technology and AI in one team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s make
            <br />
            something great.
          </>
        }
        copy="A few details are enough to start. We reply within one business day."
      />

      <section className="border-t border-hairline py-16 sm:py-24">
        <div className="shell grid gap-14 md:grid-cols-[1.3fr_0.7fr] md:gap-20">
          <ContactForm />

          <aside className="flex flex-col gap-8">
            <div>
              <p className="eyebrow text-muted-foreground">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block text-sm underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Social</p>
              <div className="mt-3 flex flex-col gap-2">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
            <p className="border-t border-hairline pt-6 text-sm text-muted-foreground">
              Not sure which discipline your project needs? Describe the outcome
              and we&apos;ll map the route.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
