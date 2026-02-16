import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useInView } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  {
    id: 1,
    value: 500,
    label: "Events Hosted",
    suffix: "+",
    description: "Grand Weddings & Celebrations"
  },
  {
    id: 2,
    value: 10000,
    label: "Happy Families",
    suffix: "+",
    description: "Trusting us with their special moments"
  },
  {
    id: 3,
    value: 15,
    label: "Years of Service",
    suffix: "+",
    description: "Excellence in Hospitality"
  },
];

function CounterItem({ value, suffix, label, description }: { value: number; suffix: string; label: string; description: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, { bounce: 0, duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="group relative p-8">
      {/* Animated Background Blob */}
      <div className="absolute inset-0 bg-white/20 rounded-[2.5rem] scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 blur-xl" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative mb-4"
        >
          <span className="font-display text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 drop-shadow-sm">
            {displayValue.toLocaleString()}
          </span>
          <span className="font-display text-4xl md:text-6xl font-bold text-white/90 align-top ml-1">
            {suffix}
          </span>

          {/* Decorative underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 rounded-full"
          />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-display text-2xl md:text-3xl font-semibold text-white mb-2"
        >
          {label}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="font-body text-white/80 text-lg font-light tracking-wide"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}

export default function AnimatedCounters() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-400 to-secondary animate-gradient-slow" />

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* Floating Circles Design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl opacity-30"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white blur-3xl opacity-20"
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <CounterItem key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
