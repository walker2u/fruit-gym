"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function PartnerSection({ onPartner }: { onPartner: () => void }) {
    const benefits = [
        "Zero upfront cost for gym owners",
        "We handle all logistics and delivery",
        "Earn revenue share on every subscription",
        "Provide value to your members",
    ];

    return (
        <section id="partners" className="py-24 bg-brand-gray relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-lime font-bold tracking-wider text-sm mb-4 block">
                            FOR GYM OWNERS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">
                            TURN YOUR GYM INTO A <br />
                            <span className="text-brand-lime">FUEL STATION</span>
                        </h2>
                        <p className="text-brand-dark/70 text-lg mb-8">
                            Partner with us to provide fresh, healthy nutrition to your members directly at your facility. We install the fridge, stock it daily, and handle everything.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3 text-brand-dark/90">
                                    <CheckCircle2 className="text-brand-lime w-6 h-6" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={onPartner}
                            className="bg-brand-lime text-white font-bold px-8 py-4 rounded-full hover:bg-brand-lime/90 transition-colors"
                        >
                            Become a Partner
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-lime/20 blur-3xl rounded-full" />
                        <div className="relative bg-white border border-brand-dark/5 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
                            <div className="aspect-video bg-brand-dark/5 rounded-2xl mb-6 flex items-center justify-center border border-brand-dark/5">
                                <img
                                    src={"https://images.unsplash.com/photo-1632082064140-7da23f93cf17?q=80&w=2070&auto=format&fit=crop"}
                                    alt={"Fridge Mockup / Image"}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="h-4 bg-brand-dark/10 rounded w-3/4" />
                                <div className="h-4 bg-brand-dark/10 rounded w-1/2" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
