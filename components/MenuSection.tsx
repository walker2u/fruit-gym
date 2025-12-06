"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Leaf, Zap } from "lucide-react";

export default function MenuSection() {
    return (
        <section id="menu" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-brand-lime/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-brand-dark mb-4"
                    >
                        FRESH MENU
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-dark/60 max-w-2xl mx-auto text-lg"
                    >
                        Delicious bowls designed for your health goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {/* card 1: Bowl of the Day */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative rounded-3xl overflow-hidden border border-brand-pink/20 bg-gradient-to-br from-brand-pink/5 to-white hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                        <div className="p-8 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-6 group-hover:scale-110 transition-transform">
                                <Star className="w-7 h-7 fill-current" />
                            </div>
                            <h3 className="text-2xl font-black text-brand-dark mb-2">Bowl of the Day</h3>
                            <p className="text-brand-dark/60 mb-6 flex-1">
                                A unique, chef-curated bowl available only for 24 hours. Packed with seasonal antioxidants.
                            </p>
                            <div className="flex items-center text-brand-pink font-bold text-sm">
                                Check Today's Special <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                        <Link href="/menu" className="absolute inset-0 z-10" aria-label="View Bowl of the Day"></Link>
                    </motion.div>

                    {/* Card 2: Lite & Glow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group relative rounded-3xl overflow-hidden border border-brand-lime/20 bg-gradient-to-br from-brand-lime/5 to-white hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                        <div className="p-8 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-brand-lime/10 flex items-center justify-center text-brand-lime mb-6 group-hover:scale-110 transition-transform">
                                <Leaf className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black text-brand-dark mb-2">Lite & Glow</h3>
                            <p className="text-brand-dark/60 mb-6 flex-1">
                                Low-calorie, fiber-rich bowls designed for weight management and glowing skin.
                            </p>
                            <div className="flex items-center text-brand-lime font-bold text-sm">
                                View Monthly Plan <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                        <Link href="/menu" className="absolute inset-0 z-10" aria-label="View Lite & Glow Plan"></Link>
                    </motion.div>

                    {/* Card 3: Energy & Power */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group relative rounded-3xl overflow-hidden border border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 to-white hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                        <div className="p-8 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="w-7 h-7 fill-current" />
                            </div>
                            <h3 className="text-2xl font-black text-brand-dark mb-2">Energy & Power</h3>
                            <p className="text-brand-dark/60 mb-6 flex-1">
                                High-protein, nutrient-dense bowls perfect for muscle recovery and sustained energy.
                            </p>
                            <div className="flex items-center text-brand-orange font-bold text-sm">
                                View Monthly Plan <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                        <Link href="/menu" className="absolute inset-0 z-10" aria-label="View Energy & Power Plan"></Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <Link
                        href="/menu"
                        className="inline-flex items-center gap-3 bg-brand-dark text-white font-bold py-4 px-8 rounded-2xl hover:bg-brand-dark/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Explore Full Menu <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
