import { Phone, MessageCircle, MapPin } from "lucide-react";

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
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-lg text-gold tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Contact <span className="text-gold-gradient italic">Us</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="glass rounded-sm p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            <form onSubmit={handleContactForm} className="space-y-5">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                name="phone"
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 font-display text-lg tracking-wider gold-gradient text-foreground rounded-sm hover:scale-[1.02] transition-transform shadow-lg"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            {/* Call buttons */}
            <div className="glass rounded-sm p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Call Us</h2>
              <div className="space-y-3">
                <a
                  href="tel:+919481250259"
                  className="flex items-center gap-3 px-6 py-3 border border-border rounded-sm font-body text-lg hover:border-gold hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold" /> +91 94812 50259
                </a>
                <a
                  href="tel:+919845030799"
                  className="flex items-center gap-3 px-6 py-3 border border-border rounded-sm font-body text-lg hover:border-gold hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold" /> +91 98450 30799
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to enquire about Nandana Convention.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass rounded-sm p-6 hover:border-green-500 transition-colors"
            >
              <MessageCircle className="w-8 h-8 text-green-500" />
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Chat on WhatsApp</p>
                <p className="font-body text-muted-foreground">Quick response guaranteed</p>
              </div>
            </a>

            {/* Address */}
            <div className="glass rounded-sm p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <p className="font-display text-lg font-semibold text-foreground mb-1">Our Location</p>
                  <p className="font-body text-lg text-muted-foreground">
                    Ullal Main Rd, Jnananjyothinagar,<br />
                    Jnana Jyothi Nagar, Jnana Ganga Nagar,<br />
                    Bengaluru, Karnataka 560056
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 rounded-sm overflow-hidden shadow-xl max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7!2d77.52!3d12.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzEyLjAiTiA3N8KwMzEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nandana Convention Location"
          />
        </div>
      </div>
    </main>
  );
}
