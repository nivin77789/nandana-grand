import { Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const placeholders = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  gradient: [
    "from-gold/30 to-maroon/30",
    "from-maroon/30 to-gold/30",
    "from-champagne to-gold/20",
    "from-gold/20 to-champagne",
    "from-maroon/20 to-champagne",
    "from-champagne to-maroon/20",
  ][i],
}));

export default function InstagramFeed() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-body text-lg text-gold tracking-[0.2em] uppercase mb-3">Follow Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gold-gradient italic">@nandana_convention</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {placeholders.map((p, i) => (
            <a
              key={p.id}
              href="https://www.instagram.com/nandana_convention"
              target="_blank"
              rel="noopener noreferrer"
              className={`aspect-square rounded-sm bg-gradient-to-br ${p.gradient} flex items-center justify-center group hover:scale-105 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Instagram className="w-10 h-10 text-muted-foreground/50 group-hover:text-gold transition-colors" />
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/nandana_convention"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 font-display text-lg tracking-wider border-2 border-gold text-gold rounded-sm hover:bg-gold/10 transition-colors"
          >
            <Instagram className="w-5 h-5" /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
