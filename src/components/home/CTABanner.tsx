import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useBooking } from "@/contexts/BookingContext";

export default function CTABanner() {
  const { openBooking } = useBooking();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Dynamic Gradient Background - using CSS for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-secondary opacity-90" />

      {/* Animated noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Floating Orbs - positioned absolutely for performance */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[120px] mix-blend-overlay pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[100px] mix-blend-soft-light pointer-events-none"
      />

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/20 shadow-2xl max-w-4xl mx-auto overflow-hidden relative"
        >
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shine pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 mb-8 border border-white/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-300 fill-current animate-pulse" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">Limited Dates Available</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Your Dream Event <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-100 italic">Starting Today</span>
          </h2>

          <p className="font-body text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Experience the perfect blend of luxury and comfort. Book your date now and let us make your celebration unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openBooking}
              className="group relative px-8 py-4 bg-white text-primary font-display font-bold text-lg rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-display font-bold text-lg rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 min-w-[200px]"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
