import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AISection } from "@/components/sections/AISection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { StoryRail } from "@/components/StoryRail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Digital Marketing, Development & AI Automation Agency | Clicks N Codes",
      },
      {
        name: "description",
        content:
          "Clicks N Codes is a digital agency combining marketing, technology and AI to build brands, products and systems designed for growth.",
      },
      {
        property: "og:title",
        content: "Clicks N Codes — Marketing, Technology & AI",
      },
      {
        property: "og:description",
        content:
          "We create the clicks. We write the code. We build what happens next.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <StoryRail />
      <HeroSection />
      <PositioningSection />
      <ServicesSection />
      <WorkSection />
      <AISection />
      <ProcessSection />
      <WhyUsSection />
      <MetricsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
