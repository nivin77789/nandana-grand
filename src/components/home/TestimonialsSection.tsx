import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul",
    text: "Nandana Convention made our wedding absolutely magical. The venue was breathtaking, and the staff went above and beyond to make our special day perfect.",
    rating: 5,
  },
  {
    name: "Ananya & Karthik",
    text: "The hall looked stunning with the decorations. Our guests couldn't stop complimenting the venue. Truly a premium experience!",
    rating: 5,
  },
  {
    name: "Meera & Suresh",
    text: "From the bridal room to the grand stage, everything was world-class. We had the reception of our dreams. Highly recommended!",
    rating: 5,
  },
  {
    name: "Lakshmi & Venkat",
    text: "Impeccable service, beautiful interiors, and a location that's easy for everyone to reach. Nandana is the best venue in Bangalore.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="font-body text-lg text-gold tracking-[0.2em] uppercase mb-3">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
          What Our <span className="text-gold-gradient italic">Clients Say</span>
        </h2>

        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-sm p-10"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-xl text-foreground leading-relaxed italic mb-6">
                "{testimonials[index].text}"
              </p>
              <p className="font-display text-lg font-semibold text-gold">
                — {testimonials[index].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="p-3 rounded-full border border-border hover:bg-secondary transition-colors" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="p-3 rounded-full border border-border hover:bg-secondary transition-colors" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
