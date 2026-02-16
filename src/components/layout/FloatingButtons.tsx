import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "919481250259";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to enquire about booking Nandana Convention & Banquet.")}`;
const CALL_URL = "tel:+919481250259";

export default function FloatingButtons() {
  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Floating Call */}
      <a
        href={CALL_URL}
        className="fixed bottom-8 right-4 z-50 w-14 h-14 rounded-full gold-gradient text-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Mobile sticky Book Now bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <Link
          to="/book"
          className="block w-full py-3 text-center font-display text-lg font-semibold tracking-wider gold-gradient text-foreground shadow-lg"
        >
          Book Now
        </Link>
      </div>
    </>
  );
}
