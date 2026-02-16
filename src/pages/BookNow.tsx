import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

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
      <main className="pt-24 pb-16 min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4">
          <CheckCircle className="w-20 h-20 text-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Enquiry Sent!</h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            Thank you for your interest. We'll get back to you shortly via WhatsApp.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", eventType: "", guestCount: "", message: "" }); setDate(undefined); }}
            className="px-8 py-3 font-display text-lg tracking-wider border-2 border-gold text-gold rounded-sm hover:bg-gold/10 transition-colors"
          >
            Book Another Event
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <p className="font-body text-lg text-gold tracking-[0.2em] uppercase mb-3">Reserve Your Date</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Book <span className="text-gold-gradient italic">Now</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-sm p-8 md:p-12 space-y-6">
          {/* Name */}
          <div>
            <label className="font-display text-sm font-semibold text-foreground block mb-2">Full Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-lg focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Your full name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-display text-sm font-semibold text-foreground block mb-2">Phone Number</label>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-lg focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="font-display text-sm font-semibold text-foreground block mb-2">Event Type</label>
            <select
              required
              value={form.eventType}
              onChange={(e) => update("eventType", e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-lg focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Select event type</option>
              {eventTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="font-display text-sm font-semibold text-foreground block mb-2">Event Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-lg text-left flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="w-5 h-5" />
                  {date ? format(date, "PPP") : "Select a date"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guest Count */}
          <div>
            <label className="font-display text-sm font-semibold text-foreground block mb-2">Estimated Guest Count</label>
            <input
              value={form.guestCount}
              onChange={(e) => update("guestCount", e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-lg focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="e.g., 200"
            />
          </div>

          {/* Message */}
          <div>
            <label className="font-display text-sm font-semibold text-foreground block mb-2">Message (Optional)</label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none"
              placeholder="Any special requirements..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 font-display text-xl font-semibold tracking-wider gold-gradient text-foreground rounded-sm hover:scale-[1.02] transition-transform shadow-xl"
          >
            Send Enquiry via WhatsApp
          </button>
        </form>
      </div>
    </main>
  );
}
