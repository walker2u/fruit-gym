"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero({ onOpenMenu, onOpenPartner }: { onOpenMenu: () => void; onOpenPartner: () => void }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 to-brand-dark z-10" />
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
                        FUEL YOUR GAINS NATURALLY
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-tight">
                        FRESH FRUIT. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-orange">
                            DELIVERED TO YOUR GYM.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10">
                        Pre-workout energy or post-workout recovery. Freshly cut, perfectly portioned fruit bowls waiting for you at your gym.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onOpenMenu}
                            className="group bg-brand-lime text-brand-dark font-bold text-lg px-8 py-4 rounded-full hover:bg-brand-lime/90 transition-all flex items-center gap-2"
                        >
                            View Menu
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={onOpenPartner}
                            className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors"
                        >
                            Partner with Us
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements (Decorative) */}
            <div className="absolute top-1/4 left-10 w-24 h-24 bg-brand-lime/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl" />
        </section>
    );
}
