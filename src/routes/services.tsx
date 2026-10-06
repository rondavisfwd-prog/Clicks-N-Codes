import { createFileRoute } from "@tanstack/react-router";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Services — Marketing, Design, Development & AI | Clicks N Codes",
      },
      {
        name: "description",
        content:
          "Marketing, brand and design, software development and AI automation, delivered by one team at Clicks N Codes.",
      },
      { property: "og:title", content: "Services | Clicks N Codes" },
      {
        property: "og:description",
        content:
          "Strategy, campaigns, design, engineering and automation from a single connected team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything digital.
            <br />
            Connected.
          </>
        }
        copy="Four capabilities that work as one: attention, identity, engineering and automation."
      />
      <ServicesSection showHeader={false} />
      <ProcessSection />
      <CTASection />
    </>
  );
}
