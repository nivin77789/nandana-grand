import ctaBg from "@/assets/cta-bg.jpg";

export default function VirtualTour() {
  return (
    <main className="pt-24 min-h-screen bg-background">
      <section
        className="relative py-40 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="font-body text-lg text-gold tracking-[0.2em] uppercase mb-3">Coming Soon</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            360° <span className="text-gold-gradient italic">Virtual Tour</span>
          </h1>
          <p className="font-body text-xl text-white/80 mb-10">
            Experience our stunning venue from anywhere in the world. Our immersive 360° virtual tour
            is coming soon — stay tuned!
          </p>
          <div className="glass rounded-sm p-16 max-w-xl mx-auto">
            <p className="font-display text-2xl text-foreground">🎥 Virtual Tour Placeholder</p>
            <p className="font-body text-lg text-muted-foreground mt-2">
              360° embedded tour will appear here
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
