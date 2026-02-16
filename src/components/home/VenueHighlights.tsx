import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  Users, Car, Heart, UtensilsCrossed,
  Sparkles, Zap, MapPin, Accessibility
} from "lucide-react";

const highlights = [
  { icon: Users, title: "Large Seating Capacity", desc: "Spacious hall accommodating hundreds of guests", color: "from-blue-400 to-indigo-400" },
  { icon: Car, title: "Ample Parking", desc: "Extensive parking space for all your guests", color: "from-emerald-400 to-teal-400" },
  { icon: Heart, title: "Bridal Room", desc: "Luxurious private bridal preparation room", color: "from-rose-400 to-pink-400" },
  { icon: UtensilsCrossed, title: "Dining Hall", desc: "Elegant dining area for grand feasts", color: "from-orange-400 to-amber-400" },
  { icon: Sparkles, title: "Stage & Decoration", desc: "Grand stage with customizable décor space", color: "from-purple-400 to-fuchsia-400" },
  { icon: Zap, title: "Power Backup", desc: "Uninterrupted power supply for smooth events", color: "from-yellow-400 to-orange-400" },
  { icon: MapPin, title: "Prime Location", desc: "Easily accessible location in Bangalore", color: "from-cyan-400 to-sky-400" },
  { icon: Accessibility, title: "Easy Accessibility", desc: "Convenient access for all guests", color: "from-lime-400 to-green-400" },
];

export default function VenueHighlights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden perspective-1000"
    >
      {/* Moving Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-secondary/10 rounded-full dashed"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4 px-4 py-1.5 bg-white border border-primary/20 inline-block rounded-full shadow-sm"
          >
            World Class Amenities
          </motion.span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 drop-shadow-sm">
            Venue <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Highlights</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 50 }}
              whileHover={{
                y: -15,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
              className="group relative bg-card rounded-[2rem] p-8 border border-border/60 shadow-lg backdrop-blur-sm overflow-hidden"
            >
              {/* Card Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-6 flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="font-body text-muted-foreground leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
