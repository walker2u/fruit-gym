"use client";

import { motion } from "framer-motion";
import { Check, ShoppingBag } from "lucide-react";

export default function PricingSection({ onOrder }: { onOrder: (plan: "single" | "week" | "month") => void }) {
    return (
        <section id="pricing" className="py-24 bg-brand-gray relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">
                        SIMPLE PRICING
                    </h2>
                    <p className="text-brand-dark/60 max-w-2xl mx-auto">
                        No hidden fees. Free delivery. Cancel anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Single Bowl */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-6 border border-brand-dark/10 hover:border-brand-dark/20 transition-all relative flex flex-col"
                    >
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-brand-dark mb-2">Single Bowl</h3>
                            <p className="text-brand-dark/60 text-sm">Just want to try one?</p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-black text-brand-dark">₹179</span>
                                <span className="text-brand-dark/40 font-medium mb-2">/ bowl</span>
                            </div>
                            <p className="text-xs text-brand-dark/40 mt-2">Instant Delivery</p>
                        </div>

                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-brand-dark/80 text-sm">
                                <Check className="w-4 h-4 text-brand-lime" />
                                Any Fruit Bowl
                            </li>
                            <li className="flex items-center gap-3 text-brand-dark/80 text-sm">
                                <Check className="w-4 h-4 text-brand-lime" />
                                Delivered in 45 mins
                            </li>
                            <li className="flex items-center gap-3 text-brand-dark/80 text-sm">
                                <Check className="w-4 h-4 text-brand-lime" />
                                No Commitment
                            </li>
                        </ul>

                        <button
                            onClick={() => onOrder("single")}
                            className="w-full py-3 rounded-xl border-2 border-brand-dark/10 text-brand-dark font-bold hover:bg-brand-dark/5 transition-colors flex items-center justify-center gap-2"
                        >
                            Order Now <ShoppingBag className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* The Tester - 1 Week */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-6 border border-brand-dark/10 hover:border-brand-dark/20 transition-all relative flex flex-col"
                    >
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-brand-dark mb-2">The Tester</h3>
                            <p className="text-brand-dark/60 text-sm">Perfect for trying us out.</p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-black text-brand-dark">₹800</span>
                                <span className="text-brand-dark/40 font-medium mb-2">/ week</span>
                            </div>
                            <p className="text-xs text-brand-dark/40 mt-2">Just ₹133 / day</p>
                        </div>

                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-brand-dark/80 text-sm">
                                <Check className="w-4 h-4 text-brand-lime" />
                                6 Days of Fruit Bowls
                            </li>
                            <li className="flex items-center gap-3 text-brand-dark/80 text-sm">
                                <Check className="w-4 h-4 text-brand-lime" />
                                Free Delivery
                            </li>
                            <li className="flex items-center gap-3 text-brand-dark/80 text-sm">
                                <Check className="w-4 h-4 text-brand-lime" />
                                Pause Anytime
                            </li>
                        </ul>

                        <button
                            onClick={() => onOrder("week")}
                            className="w-full py-3 rounded-xl bg-brand-dark text-white font-bold hover:bg-brand-dark/90 transition-colors"
                        >
                            Try for 1 Week
                        </button>
                    </motion.div>

                    {/* The Monthly Pro - 4 Weeks */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-6 border-2 border-brand-lime shadow-xl shadow-brand-lime/10 relative flex flex-col transform md:-translate-y-4"
                    >
                        <div className="absolute top-0 right-0 bg-brand-lime text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
                            BEST VALUE
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-brand-dark mb-2">The Monthly Pro</h3>
                            <p className="text-brand-dark/60 text-sm">Build a healthy habit.</p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-black text-brand-dark">₹1,400</span>
                                <span className="text-brand-dark/40 font-medium mb-2">/ month</span>
                            </div>
                            <p className="text-xs text-brand-lime font-bold mt-2">Save ₹200 compared to weekly</p>
                        </div>

                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-brand-dark/80 text-sm">
                                <Check className="w-4 h-4 text-brand-lime" />
                                12 Days (3 Days/Week)
                            </li>
                            <li className="flex items-center gap-3 text-brand-dark/80 text-sm">
                                <Check className="w-4 h-4 text-brand-lime" />
                                <span className="font-bold">Daily Nuts & Seeds Pouch</span>
                            </li>
                            <li className="flex items-center gap-3 text-brand-dark/80 text-sm">
                                <Check className="w-4 h-4 text-brand-lime" />
                                Free Delivery
                            </li>
                            <li className="flex items-center gap-3 text-brand-dark/80 text-sm">
                                <Check className="w-4 h-4 text-brand-lime" />
                                Priority Support
                            </li>
                        </ul>

                        <button
                            onClick={() => onOrder("month")}
                            className="w-full py-3 rounded-xl bg-brand-lime text-white font-bold hover:bg-brand-lime/90 transition-colors shadow-lg shadow-brand-lime/20"
                        >
                            Subscribe Monthly
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
