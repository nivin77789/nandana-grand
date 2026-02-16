import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutImg from "@/assets/about-venue.jpg";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 -z-0" />

      <div
        ref={ref}
        className={`container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={aboutImg}
            alt="Nandana Convention venue interior"
            className="w-full rounded-2xl shadow-xl relative z-10 transform group-hover:scale-[1.01] transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-white/50 rounded-2xl hidden lg:block z-20 shadow-lg backdrop-blur-sm" />
        </div>

        {/* Text */}
        <div>
          <p className="font-body text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-4 px-3 py-1 bg-primary/10 inline-block rounded-full">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            A Legacy of <span className="text-secondary italic">Grand Celebrations</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            Nestled in the heart of Bangalore, Nandana Convention & Banquet is a premier destination for
            unforgettable weddings, receptions, and celebrations. Our spacious, fully air-conditioned halls
            are adorned with premium interiors that set the perfect stage for your dream event.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            {["Fully Air-Conditioned", "Premium Interiors", "Grand Stage Setup", "Elegant Dining"].map((item) => (
              <div key={item} className="flex items-center gap-3 group">
                <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                <span className="font-body text-lg text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
