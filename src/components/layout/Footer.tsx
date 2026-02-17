import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/30 via-primary/10 to-transparent text-foreground relative overflow-hidden">
      {/* Footer background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold text-primary mb-4">Nandana</h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Where Elegance Meets Celebration. Premium wedding &amp; event venue in Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3 font-body text-lg">
              {[
                { label: "Home", to: "/" },
                { label: "Gallery", to: "/gallery" },
                { label: "Packages", to: "/packages" },
                { label: "Book Now", to: "/book" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-semibold text-primary mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 font-body text-lg text-muted-foreground mb-6">
              <a href="tel:+919481250259" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 94812 50259
              </a>
              <a href="tel:+919845030799" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 98450 30799
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Ullal Main Rd, Jnananjyothinagar, Bengaluru, Karnataka 560056</span>
              </div>
            </div>

            <h4 className="font-display text-xl font-semibold text-primary mb-4">Social Media</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/nandana_convention"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919481250259?text=Hi! I'd like to book Nandana Convention."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20 text-center font-body text-muted-foreground">
          © {new Date().getFullYear()} Nandana Convention & Banquet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
