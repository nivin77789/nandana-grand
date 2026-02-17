import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import aboutImg from "@/assets/about-venue.jpg";
import { Users, Car, Heart, UtensilsCrossed, Sparkles, Zap, MapPin, Accessibility, ArrowRight, Images } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Users, text: "Large Seating Capacity (450+)" },
  { icon: UtensilsCrossed, text: "Elegant Dining for 450 Guests" },
  { icon: Car, text: "Ample Parking Space" },
  { icon: Heart, text: "Luxurious Bridal Rooms" },
  { icon: Sparkles, text: "Grand Stage with Customizable Decor" },
  { icon: Zap, text: "Uninterrupted Power Backup" },
  { icon: MapPin, text: "Prime Location in Bangalore" },
  { icon: Accessibility, text: "Easy Accessibility for All Guests" },
];

import { useBooking } from "@/contexts/BookingContext";

export default function AboutSection() {
  const { openBooking } = useBooking();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 -z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 -z-0" />

      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        >
          {/* Image Side */}
          <div className="relative group perspective-1000 h-full">
            {/* Animated Background Blob */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[2rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow" />

            <motion.div
              whileHover={{ rotateY: 2, rotateX: 2, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 h-full"
            >
              <img
                src={aboutImg}
                alt="Nandana Convention venue interior"
                className="w-full h-full object-cover transform transition-transform duration-700 min-h-[500px]"
                loading="lazy"
              />
              {/* Glass overlay on bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-20">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-white/95 drop-shadow-md">
                    <MapPin className="w-5 h-5 text-primary fill-current" />
                    <span className="font-display text-lg tracking-wide font-semibold">Bangalore, Karnataka</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={openBooking}
                      className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-primary/50 flex items-center gap-2"
                    >
                      Book Now <ArrowRight className="w-4 h-4" />
                    </button>
                    <Link
                      to="/gallery"
                      className="px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/40 text-white text-sm font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-lg flex items-center gap-2"
                    >
                      Gallery <Images className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 hidden lg:flex items-center justify-center shadow-lg z-20"
            >
              <Sparkles className="w-8 h-8 text-gold" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 backdrop-blur-md rounded-full border border-white/20 hidden lg:block z-0"
            />
          </div>

          {/* Text Side */}
          <div>
            <motion.div>
              <span className="font-body text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4 px-4 py-1.5 bg-primary/10 inline-block rounded-full">
                About Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Grand Celebrations</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Nestled in the heart of Bangalore, Nandana Convention & Banquet is a premier destination for
                unforgettable weddings, receptions, and celebrations. Our spacious, fully air-conditioned halls
                are adorned with premium interiors that set the perfect stage for your dream event.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 group p-3 rounded-xl hover:bg-secondary/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-body text-base text-foreground font-medium pt-2 group-hover:text-primary transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
