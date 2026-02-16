import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold text-gold mb-4">Nandana</h3>
            <p className="font-body text-lg text-primary-foreground/70 leading-relaxed">
              Where Elegance Meets Celebration. Premium wedding &amp; event venue in Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3 font-body text-lg">
              {[
                { label: "Home", to: "/" },
                { label: "Gallery", to: "/gallery" },
                { label: "Packages", to: "/packages" },
                { label: "Book Now", to: "/book" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-primary-foreground/70 hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 font-body text-lg text-primary-foreground/70">
              <a href="tel:+919481250259" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> +91 94812 50259
              </a>
              <a href="tel:+919845030799" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> +91 98450 30799
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Ullal Main Rd, Jnananjyothinagar, Bengaluru, Karnataka 560056</span>
              </div>
              <a
                href="https://www.instagram.com/nandana_convention"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" /> @nandana_convention
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center font-body text-primary-foreground/50">
          © {new Date().getFullYear()} Nandana Convention & Banquet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
