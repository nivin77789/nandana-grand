import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Virtual Tour", to: "/virtual-tour" },
  { label: "Packages", to: "/packages" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isAlwaysScrolled = ["/gallery", "/packages", "/virtual-tour"].includes(location.pathname);
      if (isAlwaysScrolled) {
        setScrolled(true);
      } else {
        setScrolled(window.scrollY > 50);
      }
    };

    // Run on mount/location change
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="font-display text-2xl font-bold text-primary group-hover:text-white">N</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white drop-shadow-md"}`}>
                Nandana
              </span>
              <span className={`text-[10px] tracking-[0.2em] uppercase font-bold ${scrolled ? "text-muted-foreground" : "text-white/80 drop-shadow-sm"}`}>
                Convention Center
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className={`flex items-center gap-6 px-6 py-2 rounded-full ${scrolled ? "bg-secondary/30" : "bg-black/20 backdrop-blur-sm border border-white/10"}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative font-body text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary py-1 ${location.pathname === link.to
                    ? "text-primary"
                    : scrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                    }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setDark(!dark)}
              className={`p-2.5 rounded-full transition-all duration-300 ${scrolled ? "bg-white dark:bg-black/50 hover:bg-secondary text-foreground" : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md"}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-current" />}
            </button>

            <a
              href="https://wa.me/919481250259?text=Hi! I'd like to book Nandana Convention."
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 rounded-full font-display text-sm font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95 ${scrolled ? "bg-primary text-primary-foreground" : "bg-white text-primary hover:bg-white/90"}`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-full transition-colors ${scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-full ${scrolled ? "text-foreground" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 text-foreground"
            >
              <X className="w-8 h-8" />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`font-display text-4xl font-bold tracking-tight transition-colors ${location.pathname === link.to ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" : "text-foreground hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="https://wa.me/919481250259?text=Hi! I'd like to book Nandana Convention."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="px-8 py-3 bg-primary text-primary-foreground font-display text-xl font-bold rounded-full shadow-xl"
              >
                Book Your Event
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
