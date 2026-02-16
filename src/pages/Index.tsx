import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import VenueHighlights from "@/components/home/VenueHighlights";
import VenueStats from "@/components/home/VenueStats";
import AnimatedCounters from "@/components/home/AnimatedCounters";
import TestimonialsSection from "@/components/home/TestimonialsSection";

import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <VenueHighlights />
      <VenueStats />
      <AnimatedCounters />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
};

export default Index;
