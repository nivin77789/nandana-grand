import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

const counters = [
  { value: 500, suffix: "+", label: "Events Hosted" },
  { value: 10000, suffix: "+", label: "Happy Families" },
  { value: 15, suffix: "+", label: "Years of Service" },
];

function useCountUp(target: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, start, duration]);

  return count;
}

export default function AnimatedCounters() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section className="py-20 gold-gradient">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {counters.map((c) => (
            <CounterItem key={c.label} {...c} started={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCountUp(value, started);
  return (
    <div className="py-4">
      <p className="font-display text-5xl md:text-6xl font-bold text-foreground">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="font-body text-xl text-foreground/80 mt-2">{label}</p>
    </div>
  );
}
