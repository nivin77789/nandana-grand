import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FounderSection from "@/components/home/FounderSection";

import VenueStats from "@/components/home/VenueStats";
import AnimatedCounters from "@/components/home/AnimatedCounters";
import TestimonialsSection from "@/components/home/TestimonialsSection";

import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <VenueStats />
      <AnimatedCounters />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
};

export default Index;
