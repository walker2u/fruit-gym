"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const products = [
    {
        id: 1,
        name: "The Power Pump",
        tagline: "Pre-Workout",
        description: "Instant energy (Glycogen) to lift heavy.",
        ingredients: "Banana, Chickoo, Apple, Dates, Honey/Coffee",
        macros: { calories: "High", carbs: "High", fiber: "Med" },
        detailedMacros: {
            calories: "220 kcal",
            carbs: "48g",
            fiber: "5g"
        },
        bestFor: "High Intensity / Leg Day",
        image: "https://images.unsplash.com/photo-1552265107-b70ebded3a39?q=80&w=2070&auto=format&fit=crop",
        color: "bg-brand-orange",
    },
    {
        id: 2,
        name: "The Cool Down",
        tagline: "Post-Workout",
        description: "Rehydration & reducing muscle soreness.",
        ingredients: "Watermelon, Pineapple, Muskmelon, Pomegranate",
        macros: { calories: "Med", carbs: "Med", fiber: "High" },
        detailedMacros: {
            calories: "140 kcal",
            carbs: "32g",
            fiber: "4g"
        },
        bestFor: "Recovery / Hydration",
        image: "https://images.unsplash.com/photo-1657030377423-ab29e5b35f58?q=80&w=1964&auto=format&fit=crop",
        color: "bg-brand-lime",
    },
    {
        id: 3,
        name: "Lean & Clean",
        tagline: "Weight Loss",
        description: "Feeling full (Satiety) with low calories.",
        ingredients: "Papaya, Guava, Cucumber, Kiwi/Orange",
        macros: { calories: "Low", carbs: "Low", fiber: "High" },
        detailedMacros: {
            calories: "< 150 kcal",
            carbs: "25g",
            fiber: "8g"
        },
        bestFor: "Fat Loss / Cutting",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2070&auto=format&fit=crop",
        color: "bg-blue-500",
    },
    {
        id: 4,
        name: "Premium Exotic",
        tagline: "Weekend Special",
        description: "To break the boredom of regular fruits.",
        ingredients: "Dragon Fruit, Kiwi, Blueberries, Strawberries, Avocado",
        macros: { calories: "Med", carbs: "Med", fiber: "High" },
        detailedMacros: {
            calories: "180 kcal",
            carbs: "35g",
            fiber: "7g"
        },
        bestFor: "Taste / Treat",
        image: "https://images.unsplash.com/photo-1728734866304-02c4e7ef783b?q=80&w=2070&auto=format&fit=crop",
        color: "bg-purple-500",
    },
];

export default function MenuSection({ onOrder }: { onOrder: (productName: string) => void }) {
    return (
        <section id="menu" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">
                        CHOOSE YOUR FUEL
                    </h2>
                    <p className="text-brand-dark/60 max-w-2xl mx-auto">
                        Scientifically designed fruit bowls for every fitness goal.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                            viewport={{ once: true }}
                            className="group relative bg-white border border-brand-dark/5 rounded-3xl overflow-hidden hover:border-brand-lime/50 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-brand-lime/10 shadow-lg shadow-brand-dark/5"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 opacity-60" />
                                <div className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-brand-dark/10 shadow-sm">
                                    <span className="text-xs font-bold text-brand-dark">{product.tagline}</span>
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
                                <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-brand-dark/5 flex-1 flex flex-col shadow-sm">
                                    <h3 className="text-xl font-bold text-brand-dark mb-1">{product.name}</h3>
                                    <p className="text-brand-lime text-xs font-bold mb-3 uppercase tracking-wider">{product.bestFor}</p>

                                    <p className="text-brand-dark/60 text-sm mb-4 flex-grow">{product.description}</p>

                                    <div className="mb-4">
                                        <p className="text-brand-dark/40 text-xs mb-1">Ingredients:</p>
                                        <p className="text-brand-dark/80 text-xs leading-relaxed">{product.ingredients}</p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 mb-6 bg-brand-gray p-3 rounded-xl">
                                        <div className="text-center">
                                            <div className="text-brand-dark/40 text-[10px] uppercase">Cal</div>
                                            <div className="text-brand-dark font-bold text-sm">{product.detailedMacros.calories}</div>
                                        </div>
                                        <div className="text-center border-l border-brand-dark/10">
                                            <div className="text-brand-dark/40 text-[10px] uppercase">Carb</div>
                                            <div className="text-brand-dark font-bold text-sm">{product.detailedMacros.carbs}</div>
                                        </div>
                                        <div className="text-center border-l border-brand-dark/10">
                                            <div className="text-brand-dark/40 text-[10px] uppercase">Fib</div>
                                            <div className="text-brand-dark font-bold text-sm">{product.detailedMacros.fiber}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-2 text-[10px] text-brand-dark/40 mb-4 px-1">
                                        <span className="flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                            Hygienic
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                            Fresh
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => onOrder(product.name)}
                                        className="w-full py-3 rounded-xl bg-brand-dark/5 text-brand-dark font-bold hover:bg-brand-lime hover:text-white transition-all flex items-center justify-center gap-2 text-sm"
                                    >
                                        <Plus className="w-4 h-4" /> Customize & Order
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
