import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Wedding Package",
    tagline: "Your Dream Wedding",
    features: [
      "Full venue access for the day",
      "Air-conditioned grand hall",
      "Bridal preparation room",
      "Stage & decoration space",
      "Dining hall for guests",
      "Ample parking",
      "Power backup",
    ],
  },
  {
    name: "Reception Package",
    tagline: "Celebrate in Style",
    featured: true,
    features: [
      "Evening reception access",
      "Elegant lighting setup",
      "Stage with premium backdrop",
      "Full dining arrangements",
      "Sound system included",
      "Valet parking assistance",
      "Dedicated event coordinator",
    ],
  },
  {
    name: "Custom Event Package",
    tagline: "Tailored to Your Needs",
    features: [
      "Flexible hall booking",
      "Corporate events & parties",
      "Custom decoration options",
      "Catering coordination",
      "AV equipment available",
      "Custom seating arrangement",
      "On-site support staff",
    ],
  },
];

export default function Packages() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-lg text-gold tracking-[0.2em] uppercase mb-3">Pricing</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Our <span className="text-gold-gradient italic">Packages</span>
          </h1>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`rounded-sm p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${
                pkg.featured
                  ? "glass border-2 border-gold shadow-2xl scale-105"
                  : "glass"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {pkg.featured && (
                <span className="inline-block px-4 py-1 text-sm font-display tracking-wider gold-gradient text-foreground rounded-sm mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">{pkg.name}</h3>
              <p className="font-body text-lg text-gold mb-6">{pkg.tagline}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-body text-lg text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className={`block text-center py-3 font-display text-lg tracking-wider rounded-sm transition-all hover:scale-105 ${
                  pkg.featured
                    ? "gold-gradient text-foreground shadow-lg"
                    : "border-2 border-gold text-gold hover:bg-gold/10"
                }`}
              >
                Enquire Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
