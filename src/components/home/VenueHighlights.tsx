import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Users, Car, Heart, UtensilsCrossed,
  Sparkles, Zap, MapPin, Accessibility
} from "lucide-react";

const highlights = [
  { icon: Users, title: "Large Seating Capacity", desc: "Spacious hall accommodating hundreds of guests" },
  { icon: Car, title: "Ample Parking", desc: "Extensive parking space for all your guests" },
  { icon: Heart, title: "Bridal Room", desc: "Luxurious private bridal preparation room" },
  { icon: UtensilsCrossed, title: "Dining Hall", desc: "Elegant dining area for grand feasts" },
  { icon: Sparkles, title: "Stage & Decoration", desc: "Grand stage with customizable décor space" },
  { icon: Zap, title: "Power Backup", desc: "Uninterrupted power supply for smooth events" },
  { icon: MapPin, title: "Prime Location", desc: "Easily accessible location in Bangalore" },
  { icon: Accessibility, title: "Easy Accessibility", desc: "Convenient access for all guests" },
];

export default function VenueHighlights() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-lg text-gold tracking-[0.2em] uppercase mb-3">Our Amenities</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Venue <span className="text-gold-gradient italic">Highlights</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`group p-8 rounded-sm glass hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-default ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <item.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-lg text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
