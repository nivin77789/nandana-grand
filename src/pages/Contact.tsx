import { Phone, MessageCircle, MapPin, Mail, Instagram, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg"; // Using the hero.png as per request

const WHATSAPP_NUMBER = "919481250259";

export default function Contact() {
  const handleContactForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = `Hello! I'd like to get in touch.

*Name:* ${fd.get("name")}
*Phone:* ${fd.get("phone")}
*Message:* ${fd.get("message")}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative h-[35vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative z-10 text-center">
          <span className="font-body text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4 inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 drop-shadow-md">
            We'd Love to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Hear from You</span>
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">

            {/* Phone Card */}
            <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Call Us</h3>
              <div className="space-y-3">
                <a href="tel:+919481250259" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <span className="font-medium">+91 94812 50259</span>
                </a>
                <a href="tel:+919845030799" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <span className="font-medium">+91 98450 30799</span>
                </a>
              </div>
            </div>

            {/* Email/Chat Card */}
            <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">WhatsApp Chat</h3>
              <p className="text-muted-foreground mb-4 text-sm">Ideally looking for a quick response?</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to enquire regarding availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 hover:underline"
              >
                Start Chatting &rarr;
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Ullal Main Rd, Jnananjyothinagar, <br />
                Jnana Jyothi Nagar, Bengaluru,<br />
                Karnataka 560056
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border/60 rounded-2xl p-8 md:p-10 shadow-lg backdrop-blur-sm h-full">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleContactForm} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Your Name</label>
                    <input
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                      placeholder="+91 ...."
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Dark Mode Compatible Map */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border border-border/50 h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7!2d77.52!3d12.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzEyLjAiTiA3N8KwMzEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890" // You might want to get the specific dark mode embed URL or apply CSS filters
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nandana Convention Location"
            className="filter grayscale-[0.2] dark:invert-[.9] dark:grayscale"
          // The above class 'dark:invert...' is a CSS trick to make standard maps look 'dark' 
          // by inverting colors. It's a common quick fix. 
          // Alternatively, use Google Maps Styling Wizard for a custom map ID.
          />
        </div>
      </div>
    </main>
  );
}
