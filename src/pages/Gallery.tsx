import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// Image filenames from public/galary_image
const imageFilenames = [
  "RKP01878.jpg (1).jpg",
  "RKP02134.jpg (1).jpg",
  "RKP02138.jpg (1).jpg",
  "RKP02142.jpg (1).jpg",
  "RKP02146.jpg (1).jpg",
  "RKP02149.jpg (1).jpg",
  "RKP02157.jpg (1).jpg",
  "RKP02159.jpg (1).jpg",
  "RKP02189.jpg (1).jpg",
  "RKP02473.jpg (1).jpg",
  "RKP02484.jpg (1).jpg",
  "RKP03599.jpg (1).jpg",
  "RKP09880.jpg (1).jpg",
  "RKP09885.jpg (1).jpg",
  "RKP09925.jpg (1).jpg",
];

// Combine filenames with aspects
const galleryItems = imageFilenames.map((filename, index) => ({
  id: index,
  src: `/galary_image/${filename}`,
  // Varied aspect ratios for masonry effect
  aspect: index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]",
  alt: `Gallery Image ${index + 1}`
}));

export default function Gallery() {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  const selectedImage = galleryItems.find(item => item.id === selectedImageId);

  return (
    <main className="pt-32 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4 inline-block px-4 py-1.5 bg-primary/10 rounded-full"
          >
            Our Masterpieces
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground"
          >
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Gallery</span>
          </motion.h1>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow bg-muted"
                onClick={() => setSelectedImageId(item.id)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImageId(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              onClick={() => setSelectedImageId(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
