import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Optimized animations: Removed mouse move parallax and reduced blur intensity for better performance
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with optimized Ken Burns effect */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        >
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        </motion.div>

        {/* Simplified overlays for performance */}
        <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Reduced Particle count for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/80 rounded-full shadow-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -60],
              x: Math.random() * 40 - 20
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-primary/20 shadow-lg cursor-default">
            <Star className="w-3.5 h-3.5 text-primary fill-current" />
            <span className="font-body text-xs font-bold text-primary-foreground tracking-widest uppercase">
              Bangalore's Premium Destination
            </span>
            <Star className="w-3.5 h-3.5 text-primary fill-current" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="mb-8 relative"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] drop-shadow-lg">
            Nandana <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-secondary pb-2">
              Grand
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-lg md:text-2xl text-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Curating timeless memories with elegance and grandeur. <br className="hidden md:block" />
          <span className="text-muted-foreground font-normal">The perfect setting for your forever.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Link
            to="/book"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg rounded-full overflow-hidden shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all">
              Book Your Date <ArrowRight className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </Link>

          <Link
            to="/gallery"
            className="group px-8 py-4 bg-white/60 backdrop-blur-sm text-foreground font-display font-bold text-lg rounded-full border border-white/50 shadow-lg hover:bg-white hover:text-primary transition-all duration-300"
          >
            Explore Gallery
          </Link>
        </motion.div>
      </div>

      {/* Decorative Gradients - Static for performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/20 rounded-full blur-[80px] opacity-60 mix-blend-multiply" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-secondary/20 rounded-full blur-[80px] opacity-60 mix-blend-multiply" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="font-body text-[10px] font-bold text-foreground tracking-[0.3em] uppercase">Scroll Down</span>
        <ChevronDown className="w-5 h-5 text-foreground" />
      </motion.div>
    </section>
  );
}
