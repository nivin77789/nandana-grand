import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Virtual Tour", to: "/virtual-tour" },
  { label: "Packages", to: "/packages" },
  { label: "Book Now", to: "/book" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold tracking-tight text-primary">
              Nandana
            </span>
            <span className="hidden sm:inline font-body text-sm text-muted-foreground tracking-widest uppercase">
              Convention & Banquet
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-base font-medium tracking-wide transition-all hover:text-primary relative group ${location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground/70"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${location.pathname === link.to ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
              </Link>
            ))}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={link.to}
                  className={`font-display text-3xl tracking-wide transition-colors hover:text-primary ${location.pathname === link.to ? "text-primary" : "text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
