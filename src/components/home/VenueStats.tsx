import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Utensils, BedDouble, Maximize, UsersRound } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    {
        icon: Users,
        value: "450",
        label: "Seating Capacity",
        description: "Our pillar-less grand hall comfortably seats 450 guests, ensuring every guest has a perfect view of your special moments.",
        color: "from-blue-400 to-indigo-400"
    },
    {
        icon: Utensils,
        value: "450",
        label: "Dining Capacity",
        description: "A spacious, dedicated dining hall that serves 450 guests simultaneously, offering a comfortable and grand culinary experience.",
        color: "from-emerald-400 to-teal-400"
    },
    {
        icon: Maximize,
        value: "55x100",
        label: "Grand Stage",
        description: "A massive 55x100 ft stage designed for elaborate decor, cultural performances, and large family gatherings.",
        color: "from-purple-400 to-pink-400"
    },
    {
        icon: BedDouble,
        value: "10",
        label: "AC Rooms",
        description: "10 premium air-conditioned rooms available for the bride, groom, and guests, ensuring a relaxing and luxurious stay.",
        color: "from-orange-400 to-amber-400"
    },
    {
        icon: UsersRound,
        value: "3000",
        label: "Floating Crowd",
        description: "Ideally designed to host large gatherings, accommodating a floating crowd of up to 3000 guests with ease.",
        color: "from-rose-400 to-red-400"
    }
];

export default function VenueStats() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform origin-bottom -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="font-body text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-4 px-3 py-1 bg-primary/10 inline-block rounded-full"
                    >
                        Capacity & Facilities
                    </motion.span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Designed for <span className="text-primary italic">Grandeur</span>
                    </h2>
                    <p className="font-body text-lg text-muted-foreground">
                        From intimate gatherings to massive celebrations, our venue is equipped with top-tier facilities to handle events of any scale.
                    </p>
                </div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className={`relative bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-2xl transition-all group ${index === 3 || index === 4 ? "lg:col-span-1.5" : ""}`}
                        >
                            {/* Gradient Border Effect on Hover */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`} />

                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>

                            <div className="mb-2">
                                <span className="font-display text-4xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                                    {stat.value}
                                </span>
                                {stat.value === "3000" && <span className="text-xl font-medium text-muted-foreground ml-1">+</span>}
                            </div>

                            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{stat.label}</h3>
                            <p className="font-body text-base text-muted-foreground leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
