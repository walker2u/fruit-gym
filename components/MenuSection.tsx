"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const products = [
    {
        id: 1,
        name: "The Muscle Builder",
        description: "High protein mix with Greek yogurt dip.",
        ingredients: "Banana, Strawberry, Blueberry, Greek Yogurt",
        macros: { protein: "25g", carbs: "45g", fat: "5g" },
        image: "https://images.unsplash.com/photo-1552265107-b70ebded3a39?q=80&w=2070&auto=format&fit=crop",
        color: "bg-blue-500",
    },
    {
        id: 2,
        name: "The Energy Kick",
        description: "Fast-acting carbs for pre-workout fuel.",
        ingredients: "Pineapple, Mango, Orange, Honey Drizzle",
        macros: { protein: "2g", carbs: "60g", fat: "0g" },
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2070&auto=format&fit=crop",
        color: "bg-brand-orange",
    },
    {
        id: 3,
        name: "The Recovery Bowl",
        description: "Antioxidant-rich for faster recovery.",
        ingredients: "Watermelon, Kiwi, Pomegranate, Chia Seeds",
        macros: { protein: "5g", carbs: "35g", fat: "2g" },
        image: "https://images.unsplash.com/photo-1657030377423-ab29e5b35f58?q=80&w=1964&auto=format&fit=crop",
        color: "bg-brand-lime",
    },
];

export default function MenuSection({ onOrder }: { onOrder: (productName: string) => void }) {
    return (
        <section id="menu" className="py-24 bg-brand-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        FUEL FOR EVERY GOAL
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Whether you need pre-workout energy or post-workout recovery, we have a bowl designed for your macros.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-lime/50 transition-all duration-300"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent z-10 opacity-60" />
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-8 relative z-20 -mt-20">
                                <div className="bg-brand-dark/80 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                                    <p className="text-white/60 text-sm mb-4">{product.description}</p>

                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex gap-4 text-xs font-bold text-white/80">
                                            <span>{product.macros.protein} Protein</span>
                                            <span>{product.macros.carbs} Carbs</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => onOrder(product.name)}
                                        className="w-full py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-brand-lime hover:text-brand-dark transition-all flex items-center justify-center gap-2"
                                    >
                                        <Plus className="w-4 h-4" /> Add to Plan
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
