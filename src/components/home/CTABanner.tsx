import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ctaBg from "@/assets/cta-bg.jpg";

export default function CTABanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-32 overflow-hidden bg-primary/5">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-70" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-70" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
          Ready to Host Your <span className="text-primary italic">Dream Event?</span>
        </h2>
        <p className="font-body text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
          Let us create an unforgettable celebration for you and your loved ones with our premium services.
        </p>
        <Link
          to="/book"
          className="inline-block px-12 py-4 font-display text-lg font-semibold tracking-wider bg-foreground text-background rounded-full hover:scale-105 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
