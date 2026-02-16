import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Weddings", "Receptions", "Engagements", "Decorations"];

const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  category: categories[1 + (i % 4)],
  aspect: i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]",
  gradient: [
    "from-gold/20 to-maroon/20",
    "from-maroon/20 to-champagne",
    "from-champagne to-gold/20",
    "from-gold/30 to-maroon/10",
  ][i % 4],
}));

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-body text-lg text-gold tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Event <span className="text-gold-gradient italic">Gallery</span>
          </h1>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 font-body text-lg tracking-wide rounded-sm transition-all ${
                filter === cat
                  ? "gold-gradient text-foreground shadow-md"
                  : "border border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`break-inside-avoid ${item.aspect} bg-gradient-to-br ${item.gradient} rounded-sm cursor-pointer hover:scale-[1.02] transition-transform flex items-center justify-center`}
              onClick={() => setLightbox(item.id)}
            >
              <span className="font-body text-lg text-muted-foreground/50">{item.category}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-body text-lg text-muted-foreground mt-12">
          Upload your real venue photos to replace these placeholders.
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white" aria-label="Close">
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full max-w-2xl aspect-video bg-gradient-to-br from-gold/20 to-maroon/20 rounded-sm flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-body text-2xl text-white/50">Image Preview</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
