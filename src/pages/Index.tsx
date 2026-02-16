import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import VenueHighlights from "@/components/home/VenueHighlights";
import AnimatedCounters from "@/components/home/AnimatedCounters";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <VenueHighlights />
      <AnimatedCounters />
      <TestimonialsSection />
      <InstagramFeed />
      <CTABanner />
    </main>
  );
};

export default Index;
