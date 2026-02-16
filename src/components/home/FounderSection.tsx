import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { User, Calendar, Heart, Quote } from "lucide-react";

export default function FounderSection() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="py-24 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-bl-[10rem] -z-0" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-tr-[10rem] -z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div
                    ref={ref}
                    className={`flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="font-body text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4 px-4 py-1.5 bg-primary/10 inline-block rounded-full">
                                Our Visionary Founder
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                                Mr. M Nagaraj
                            </h2>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                                <span className="flex items-center gap-2 text-foreground/80 font-medium bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                                    <User className="w-4 h-4 text-primary" />
                                    Social Worker
                                </span>
                                <span className="flex items-center gap-2 text-foreground/80 font-medium bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                                    <Heart className="w-4 h-4 text-primary" />
                                    Age 79 Years
                                </span>
                            </div>

                            <div className="relative mb-8">
                                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/20 rotate-180" />
                                <p className="font-body text-lg text-muted-foreground leading-relaxed italic relative z-10">
                                    "Building Nandana Grand was a dream to create a space where community and celebration come together. At 79, my passion for serving people remains my driving force."
                                </p>
                            </div>

                            <div className="bg-card p-6 md:p-8 rounded-3xl shadow-lg border border-primary/10 inline-flex flex-col sm:flex-row items-center sm:items-start gap-6 text-left relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full transition-transform group-hover:scale-110" />

                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Calendar className="w-7 h-7 text-primary group-hover:text-white" />
                                </div>

                                <div>
                                    <h4 className="font-display text-xl font-bold text-foreground mb-1">Grand Opening Milestone</h4>
                                    <p className="text-muted-foreground text-sm mb-2">Proudly opened its doors to the public on</p>
                                    <div className="font-display text-2xl font-bold text-primary bg-primary/5 px-4 py-2 rounded-lg inline-block border border-primary/10">
                                        July 30th & 31st, 2025
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end perspective-1000">
                        <div className="relative group max-w-md mx-auto lg:mx-0">
                            {/* Decorative frames */}
                            <div className="absolute -inset-4 border-2 border-primary/20 rounded-[2.5rem] transform rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-6" />
                            <div className="absolute -inset-4 border-2 border-secondary/20 rounded-[2.5rem] transform -rotate-3 scale-105 transition-transform duration-500 group-hover:-rotate-6" />

                            <motion.div
                                whileHover={{ scale: 1.02, rotate: 0 }}
                                initial={{ rotate: 0 }}
                                className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-card bg-card"
                            >
                                <img
                                    src="/image/RKP02812single.jpg.jpeg"
                                    alt="M Nagaraj - Founder"
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 min-h-[400px]"
                                    loading="lazy"
                                />

                                {/* Optional Overlay for name/title on image if needed, but text is adjacent so kept clean */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
