import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { DashboardPreviews } from "@/components/dashboard-previews";
import { PricingCards } from "@/components/pricing-cards";
import { Testimonials } from "@/components/testimonials";
import { CTABanner } from "@/components/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <DashboardPreviews />
      <PricingCards />
      <Testimonials />
      <CTABanner />
    </>
  );
}
