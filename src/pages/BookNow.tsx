import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle, Loader2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg"; // Using the hero.png as per request

const WHATSAPP_NUMBER = "919481250259";

const eventTypes = ["Wedding", "Reception", "Engagement", "Corporate Event", "Birthday Party", "Other"];

export default function BookNow() {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState<Date>();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: "",
    guestCount: "",
    message: "",
  });

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello! I'd like to book Nandana Convention & Banquet.

*Name:* ${form.name}
*Phone:* ${form.phone}
*Event Type:* ${form.eventType}
*Event Date:* ${date ? format(date, "PPP") : "Not selected"}
*Guest Count:* ${form.guestCount}
*Message:* ${form.message || "N/A"}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-6 max-w-lg mx-auto bg-card border border-border/60 shadow-xl rounded-2xl p-10 backdrop-blur-sm z-10"
        >
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Enquiry Sent!</h2>
          <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
            Thank you for choosing Nandana Convention. We have received your request and will get back to you shortly via WhatsApp.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", eventType: "", guestCount: "", message: "" }); setDate(undefined); }}
            className="w-full px-8 py-3.5 font-display text-lg tracking-wide bg-primary text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            Book Another Event
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Header with Image */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Nandana Grand Hall" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" /> {/* Fade to bottom */}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4 inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            Reserve Your Date
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white drop-shadow-md"
          >
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-secondary italic">Celebration</span>
          </motion.h1>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20 -mt-20 relative z-20">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Full Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full px-5 py-3.5 bg-background border border-border rounded-xl font-body text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Phone Number</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full px-5 py-3.5 bg-background border border-border rounded-xl font-body text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Event Type</label>
              <div className="relative">
                <select
                  required
                  value={form.eventType}
                  onChange={(e) => update("eventType", e.target.value)}
                  className="w-full px-5 py-3.5 bg-background border border-border rounded-xl font-body text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Guest Count */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-1">Estimated Guests</label>
              <input
                type="number"
                value={form.guestCount}
                onChange={(e) => update("guestCount", e.target.value)}
                className="w-full px-5 py-3.5 bg-background border border-border rounded-xl font-body text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="e.g., 500"
              />
            </div>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground ml-1">Preferred Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "w-full px-5 py-3.5 bg-background border border-border rounded-xl font-body text-base text-left flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all hover:bg-muted/50",
                    !date ? "text-muted-foreground" : "text-foreground"
                  )}
                >
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  {date ? format(date, "PPP") : "Select a date"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 border-border shadow-2xl rounded-xl overflow-hidden" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className="p-4 bg-card text-card-foreground pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground ml-1">Message (Optional)</label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              className="w-full px-5 py-3.5 bg-background border border-border rounded-xl font-body text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
              placeholder="Tell us more about your requirements..."
            />
          </div>

          <button
            type="submit"
            className="group w-full py-4 font-display text-xl font-semibold tracking-wide bg-primary text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Send Enquiry via WhatsApp
            <Loader2 className="w-5 h-5 animate-spin hidden group-active:block" />
          </button>

          <p className="text-center text-sm text-muted-foreground">
            By clicking submit, you agree to be contacted via WhatsApp regarding your enquiry.
          </p>
        </motion.form>
      </div>
    </main>
  );
}
