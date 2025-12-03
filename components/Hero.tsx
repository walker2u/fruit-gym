"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero({ onOpenMenu, onOpenPartner }: { onOpenMenu: () => void; onOpenPartner: () => void }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white z-10" />
                {/* Placeholder for Hero Image - In a real app, use a high-quality image of gym + fruit */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-lime/10 text-brand-lime border border-brand-lime/20 text-sm font-bold tracking-wider mb-6">
                        SIMPLYSLICED
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-dark tracking-tighter mb-6 leading-tight">
                        THE ONLY CUTTING YOU SHOULD DO IS FOR YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-brand-yellow to-brand-pink">MUSCLES.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-dark/70 max-w-3xl mx-auto mb-4 font-medium">
                        "Let us cut the fruit."
                    </p>
                    <p className="text-lg text-brand-dark/50 max-w-2xl mx-auto mb-10 italic">
                        Mom wants you to eat fruit. Coach wants you to eat carbs. We make both happy.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onOpenMenu}
                            className="group bg-brand-lime text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-brand-lime/90 transition-all flex items-center gap-2"
                        >
                            View Menu
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={onOpenPartner}
                            className="px-8 py-4 rounded-full border border-brand-dark/20 text-brand-dark font-bold text-lg hover:bg-brand-dark/5 transition-colors"
                        >
                            Partner with Us
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements (Decorative) */}
            <div className="absolute top-1/4 left-10 w-24 h-24 bg-brand-lime/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl" />

            {/* Floating Emojis */}
            <FloatingEmoji emoji="🍇" delay={0} x="-40vw" y="-20vh" />
            <FloatingEmoji emoji="🍎" delay={1} x="35vw" y="-10vh" />
            <FloatingEmoji emoji="🍍" delay={2} x="-30vw" y="30vh" />
            <FloatingEmoji emoji="🍉" delay={3} x="40vw" y="20vh" />
        </section>
    );
}

function FloatingEmoji({ emoji, delay, x, y }: { emoji: string; delay: number; x: string; y: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
            className="absolute text-6xl pointer-events-none z-10 opacity-50"
            style={{ left: `calc(50% + ${x})`, top: `calc(50% + ${y})` }}
        >
            {emoji}
        </motion.div>
    );
}
