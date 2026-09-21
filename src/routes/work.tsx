import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WorkSection } from "@/components/sections/WorkSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work & Case Studies | Clicks N Codes" },
      {
        name: "description",
        content:
          "Case studies across brand, marketing, product design, development and AI automation from Clicks N Codes.",
      },
      { property: "og:title", content: "Selected Work | Clicks N Codes" },
      {
        property: "og:description",
        content: "Editorial case studies spanning marketing, product and automation work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Selected
            <br />
            work.
          </>
        }
        copy="Sample case studies shown while client engagements are being prepared for publication."
      />
      <WorkSection showHeader={false} detailed />
      <MetricsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
