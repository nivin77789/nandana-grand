import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-xl md:text-2xl text-gold-light tracking-[0.3em] uppercase mb-6"
        >
          Nandana Convention & Banquet
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
        >
          Where Elegance Meets{" "}
          <span className="text-gold-gradient italic">Celebration</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Premium Wedding & Event Venue in Bangalore
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/book"
            className="px-10 py-4 font-display text-lg font-semibold tracking-wider gold-gradient text-foreground rounded-sm hover:scale-105 transition-transform shadow-xl"
          >
            Book Now
          </Link>
          <Link
            to="/gallery"
            className="px-10 py-4 font-display text-lg font-semibold tracking-wider border-2 border-gold text-gold rounded-sm hover:bg-gold/10 transition-colors"
          >
            View Gallery
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-sm text-white/60 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-gold animate-scroll-indicator" />
      </motion.div>
    </section>
  );
}
