import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Wedding Package",
    tagline: "Your Dream Wedding",
    price: "Custom",
    features: [
      "Full venue access for the day",
      "Air-conditioned grand hall",
      "Luxurious Bridal & Groom Rooms",
      "Grand Stage & decoration space",
      "Spacious Dining hall for guests",
      "Ample parking space",
      "Full Power backup",
    ],
    color: "from-blue-500/10 to-purple-500/10",
    border: "group-hover:border-blue-500/50",
    icon: Star
  },
  {
    name: "Reception Package",
    tagline: "Celebrate in Style",
    featured: true,
    price: "Premium",
    features: [
      "Evening reception access",
      "Elegant lighting setup",
      "Stage with premium backdrop",
      "Full dining arrangements",
      "High-quality Sound system",
      "Valet parking assistance",
      "Dedicated event coordinator",
    ],
    color: "from-primary/10 to-secondary/10",
    border: "group-hover:border-primary/50",
    icon: Sparkles
  },
  {
    name: "Custom Event",
    tagline: "Tailored to Your Needs",
    price: "Flexible",
    features: [
      "Flexible hall booking hours",
      "Corporate events & parties",
      "Custom decoration options",
      "Catering coordination",
      "AV equipment available",
      "Custom seating arrangement",
      "On-site support staff",
    ],
    color: "from-orange-500/10 to-rose-500/10",
    border: "group-hover:border-orange-500/50",
    icon: Star
  },
  {
    name: "Birthday Bash",
    tagline: "Make Memories",
    price: "Fun",
    features: [
      "4-Hour Hall usage",
      "Theme decoration space",
      "Music system included",
      "Cake table setup",
      "Dining area access",
      "Changing room provided",
      "Cleaning service included",
    ],
    color: "from-green-500/10 to-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
    icon: Sparkles
  },
];

export default function Packages() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <main className="pt-24 pb-20 min-h-screen bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4"
          >
            <span className="font-body text-sm font-bold text-primary tracking-[0.2em] uppercase px-4 py-1.5 bg-primary/10 rounded-full">
              Pricing Options
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Packages</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Choose the perfect package for your celebration. We offer transparent pricing and customizable options to suit every budget.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative flex flex-col h-full bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${pkg.featured ? "ring-2 ring-primary shadow-primary/20 scale-105 md:scale-110 z-10" : ""
                }`}
            >
              {/* Card Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {pkg.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
                  POPULAR
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <pkg.icon className="w-6 h-6 text-foreground/80" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{pkg.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{pkg.tagline}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                  </div>
                </div>

                <div className="w-full h-px bg-border group-hover:bg-primary/20 transition-colors mb-6" />

                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="mt-1 min-w-[18px] min-h-[18px] rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <Check className="w-3 h-3 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-body text-sm text-foreground/80 group-hover:text-foreground transition-colors">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book"
                  className={`block w-full text-center py-3 rounded-xl font-display font-semibold text-sm tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] ${pkg.featured
                      ? "bg-primary text-primary-foreground shadow-lg hover:shadow-primary/30"
                      : "bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-white border border-transparent hover:shadow-lg"
                    }`}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
