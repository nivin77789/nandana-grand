import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ctaBg from "@/assets/cta-bg.jpg";

export default function CTABanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="relative py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div
        ref={ref}
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Book Your <span className="text-gold-gradient italic">Dream Event?</span>
        </h2>
        <p className="font-body text-xl text-white/80 mb-10 max-w-xl mx-auto">
          Let us create an unforgettable celebration for you and your loved ones.
        </p>
        <Link
          to="/book"
          className="inline-block px-12 py-4 font-display text-lg font-semibold tracking-wider gold-gradient text-foreground rounded-sm hover:scale-105 transition-transform shadow-xl"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
