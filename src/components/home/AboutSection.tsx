import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutImg from "@/assets/about-venue.jpg";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-background" id="about">
      <div
        ref={ref}
        className={`container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Nandana Convention venue interior"
            className="w-full rounded-sm shadow-2xl"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold rounded-sm hidden lg:block" />
        </div>

        {/* Text */}
        <div>
          <p className="font-body text-lg text-gold tracking-[0.2em] uppercase mb-3">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            A Legacy of <span className="text-gold-gradient italic">Grand Celebrations</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground leading-relaxed mb-6">
            Nestled in the heart of Bangalore, Nandana Convention & Banquet is a premier destination for
            unforgettable weddings, receptions, and celebrations. Our spacious, fully air-conditioned halls
            are adorned with premium interiors that set the perfect stage for your dream event.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["Fully Air-Conditioned", "Premium Interiors", "Grand Stage Setup", "Elegant Dining"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full gold-gradient" />
                <span className="font-body text-lg text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
