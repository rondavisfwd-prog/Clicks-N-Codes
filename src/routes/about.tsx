import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/Reveal";
import { teamDisciplines } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Creative Minds, Technical Thinkers | Clicks N Codes" },
      {
        name: "description",
        content:
          "Clicks N Codes is a multidisciplinary team of strategists, marketers, designers, developers and AI specialists working as one.",
      },
      { property: "og:title", content: "About | Clicks N Codes" },
      {
        property: "og:description",
        content: "One team where creative thinking and technical execution work together.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Creative minds.
            <br />
            Technical thinkers.
            <br />
            One <span className="text-accent">team.</span>
          </>
        }
        copy="Great digital experiences need both halves of the brain in the same room."
      />

      <section className="border-t border-hairline py-20 sm:py-28">
        <div className="shell grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-lead">
                Marketing that gets attention. Technology that does something with it.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lead text-muted-foreground">
                We work as one group across strategy, campaigns, design, engineering and automation,
                so decisions in one discipline are made with the others in the room.
              </p>
            </Reveal>
          </div>

          <ul className="flex flex-col">
            {teamDisciplines.map((discipline, index) => (
              <Reveal
                key={discipline}
                as="li"
                delay={index * 70}
                className="flex items-baseline gap-6 border-t border-hairline py-6 last:border-b"
              >
                <span className="eyebrow text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-title font-bold uppercase">{discipline}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <WhyUsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
