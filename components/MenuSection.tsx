"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Leaf, Zap, Droplets, Flame, Star, PenTool, Plus, Check } from "lucide-react";

// Data for the two plans
const plans = {
    lite: {
        id: "lite",
        name: "Lite & Glow",
        icon: <Leaf className="w-5 h-5" />,
        color: "bg-brand-lime",
        textColor: "text-brand-lime",
        description: "Perfect for weight management, skin health, and light office snacking.",
        schedule: [
            { day: "Monday", title: "The Red Detox", ingredients: "Watermelon, Pomegranate, Apple", icon: <Droplets className="w-4 h-4 text-blue-500" /> },
            { day: "Tuesday", title: "Citrus Burst", ingredients: "Orange, Kiwi, Pineapple", icon: <Zap className="w-4 h-4 text-yellow-500" /> },
            { day: "Wednesday", title: "Green Cleanse", ingredients: "Guava, Green Apple, Cucumber", icon: <Leaf className="w-4 h-4 text-green-500" /> },
            { day: "Thursday", title: "Tropical Glow", ingredients: "Papaya, Muskmelon, Pineapple", icon: <Droplets className="w-4 h-4 text-orange-500" /> },
            { day: "Friday", title: "Berry Antioxidant", ingredients: "Grapes, Pomegranate, Strawberry", icon: <Flame className="w-4 h-4 text-red-500" /> },
            { day: "Saturday", title: "Weekend Hydration", ingredients: "Watermelon, Coconut Chunks, Mint", icon: <Droplets className="w-4 h-4 text-blue-400" /> },
        ]
    },
    energy: {
        id: "energy",
        name: "Energy & Power",
        icon: <Zap className="w-5 h-5" />,
        color: "bg-brand-orange",
        textColor: "text-brand-orange",
        description: "High carb & protein focus for gym-goers and active lifestyles.",
        schedule: [
            { day: "Monday", title: "Power Pump", ingredients: "Banana, Chickoo, Dates, Peanut Butter", icon: <Zap className="w-4 h-4 text-yellow-600" /> },
            { day: "Tuesday", title: "Muscle Recovery", ingredients: "Pineapple, Papaya, Pumpkin Seeds", icon: <Leaf className="w-4 h-4 text-green-600" /> },
            { day: "Wednesday", title: "Carb Loader", ingredients: "Apple, Banana, Black Raisins", icon: <Flame className="w-4 h-4 text-red-600" /> },
            { day: "Thursday", title: "Pre-Workout Fuel", ingredients: "Chickoo, Pomegranate, Coffee Dust", icon: <Zap className="w-4 h-4 text-orange-600" /> },
            { day: "Friday", title: "Strength Builder", ingredients: "Guava, Banana, Mixed Nuts", icon: <Flame className="w-4 h-4 text-red-500" /> },
            { day: "Saturday", title: "Cheat Day Treat", ingredients: "Mango (Seasonal) or Mixed Exotic, Honey", icon: <Droplets className="w-4 h-4 text-yellow-500" /> },
        ]
    }
};

export default function MenuSection({ onOrder }: { onOrder: (productName: string) => void }) {
    const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans | null>(null);

    const toggleFruit = (fruit: string) => {
        if (selectedFruits.includes(fruit)) {
            setSelectedFruits(selectedFruits.filter(f => f !== fruit));
        } else {
            if (selectedFruits.length < 5) {
                setSelectedFruits([...selectedFruits, fruit]);
            }
        }
    };

    const handleCustomOrder = () => {
        const fruits = selectedFruits.length > 0 ? selectedFruits.join(", ") : "Chef's Choice";
        onOrder(`Custom Bowl (${fruits})`);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 3);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + 3) % 3);
    };

    const slides = [
        // Slide 1: Bowl of the Day
        {
            id: "botd",
            content: (
                <div className="bg-gradient-to-br from-brand-pink/10 to-brand-yellow/10 rounded-3xl p-8 md:p-12 border border-brand-pink/20 text-center relative overflow-hidden h-full flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Star className="w-6 h-6 text-brand-pink fill-brand-pink" />
                            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink text-white text-sm font-bold tracking-wider shadow-lg shadow-brand-pink/30">BOWL OF THE DAY</span>
                            <Star className="w-6 h-6 text-brand-pink fill-brand-pink" />
                        </div>

                        <h3 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tight">Exotic Berry Blast</h3>
                        <p className="text-brand-dark/70 text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                            A premium mix of imported blueberries, strawberries, dragon fruit, and a hint of mint. Packed with antioxidants.
                        </p>

                        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-10">
                            <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white/50">
                                <div className="text-xs text-brand-dark/50 uppercase font-bold mb-1">Calories</div>
                                <div className="text-2xl font-black text-brand-dark">180</div>
                            </div>
                            <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white/50">
                                <div className="text-xs text-brand-dark/50 uppercase font-bold mb-1">Carbs</div>
                                <div className="text-2xl font-black text-brand-dark">35g</div>
                            </div>
                            <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white/50">
                                <div className="text-xs text-brand-dark/50 uppercase font-bold mb-1">Fiber</div>
                                <div className="text-2xl font-black text-brand-dark">8g</div>
                            </div>
                        </div>

                        <button
                            onClick={() => onOrder("Exotic Berry Blast")}
                            className="bg-brand-pink text-white font-bold px-10 py-5 rounded-2xl hover:bg-brand-pink/90 transition-all shadow-xl shadow-brand-pink/20 flex items-center gap-3 mx-auto text-lg group"
                        >
                            Order This Bowl <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                        </button>
                        <p className="text-brand-dark/40 text-sm mt-4 font-medium">Single Order • Instant Delivery</p>
                    </div>
                </div>
            )
        },
        // Slide 2: Lite & Glow
        {
            id: "lite",
            content: (
                <div className="bg-gradient-to-br from-brand-lime/10 to-green-100 rounded-3xl p-8 md:p-12 border border-brand-lime/20 text-center relative overflow-hidden h-full flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Leaf className="w-6 h-6 text-brand-lime fill-brand-lime" />
                            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-lime text-white text-sm font-bold tracking-wider shadow-lg shadow-brand-lime/30">LITE & GLOW</span>
                            <Leaf className="w-6 h-6 text-brand-lime fill-brand-lime" />
                        </div>

                        <h3 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tight">Lite & Glow Plan</h3>
                        <p className="text-brand-dark/70 text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                            {plans.lite.description}
                        </p>

                        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-10">
                            <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white/50">
                                <div className="text-xs text-brand-dark/50 uppercase font-bold mb-1">Focus</div>
                                <div className="text-lg font-black text-brand-dark">Weight Loss</div>
                            </div>
                            <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white/50">
                                <div className="text-xs text-brand-dark/50 uppercase font-bold mb-1">Calories</div>
                                <div className="text-lg font-black text-brand-dark">Low Cal</div>
                            </div>
                            <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white/50">
                                <div className="text-xs text-brand-dark/50 uppercase font-bold mb-1">Benefits</div>
                                <div className="text-lg font-black text-brand-dark">Skin Health</div>
                            </div>
                        </div>

                        <button
                            onClick={() => setSelectedPlan("lite")}
                            className="bg-brand-lime text-white font-bold px-10 py-5 rounded-2xl hover:bg-brand-lime/90 transition-all shadow-xl shadow-brand-lime/20 flex items-center gap-3 mx-auto text-lg group"
                        >
                            View Weekly Menu <Leaf className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </button>
                        <p className="text-brand-dark/40 text-sm mt-4 font-medium">Monthly Subscription • Daily Delivery</p>
                    </div>
                </div>
            )
        },
        // Slide 3: Energy & Power
        {
            id: "energy",
            content: (
                <div className="bg-gradient-to-br from-brand-orange/10 to-orange-100 rounded-3xl p-8 md:p-12 border border-brand-orange/20 text-center relative overflow-hidden h-full flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Zap className="w-6 h-6 text-brand-orange fill-brand-orange" />
                            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange text-white text-sm font-bold tracking-wider shadow-lg shadow-brand-orange/30">ENERGY & POWER</span>
                            <Zap className="w-6 h-6 text-brand-orange fill-brand-orange" />
                        </div>

                        <h3 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tight">Energy & Power Plan</h3>
                        <p className="text-brand-dark/70 text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                            {plans.energy.description}
                        </p>

                        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-10">
                            <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white/50">
                                <div className="text-xs text-brand-dark/50 uppercase font-bold mb-1">Focus</div>
                                <div className="text-lg font-black text-brand-dark">High Protein</div>
                            </div>
                            <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white/50">
                                <div className="text-xs text-brand-dark/50 uppercase font-bold mb-1">Calories</div>
                                <div className="text-lg font-black text-brand-dark">High Energy</div>
                            </div>
                            <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white/50">
                                <div className="text-xs text-brand-dark/50 uppercase font-bold mb-1">Benefits</div>
                                <div className="text-lg font-black text-brand-dark">Muscle Gain</div>
                            </div>
                        </div>

                        <button
                            onClick={() => setSelectedPlan("energy")}
                            className="bg-brand-orange text-white font-bold px-10 py-5 rounded-2xl hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/20 flex items-center gap-3 mx-auto text-lg group"
                        >
                            View Weekly Menu <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </button>
                        <p className="text-brand-dark/40 text-sm mt-4 font-medium">Monthly Subscription • Daily Delivery</p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="menu" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">
                        WEEKLY MENU
                    </h2>
                    <p className="text-brand-dark/60 max-w-2xl mx-auto">
                        We rotate our menu daily so you never get bored.
                    </p>
                </div>

                {/* Main Slider */}
                <div className="mb-24 relative max-w-5xl mx-auto">
                    <div className="overflow-hidden rounded-3xl shadow-2xl bg-white min-h-[600px]">
                        <motion.div
                            animate={{ x: `-${currentSlide * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="flex h-full"
                        >
                            {slides.map((slide) => (
                                <div key={slide.id} className="min-w-full h-full p-4 md:p-0">
                                    {slide.content}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-brand-dark hover:bg-white transition-all z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-brand-dark hover:bg-white transition-all z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-brand-dark w-8" : "bg-brand-dark/20"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Customization */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-brand-dark/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden max-w-4xl mx-auto shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <PenTool className="w-6 h-6 text-brand-dark/40" />
                            <h3 className="text-3xl md:text-5xl font-black text-brand-dark">Build Your Own Bowl</h3>
                        </div>

                        <p className="text-brand-dark/60 text-lg mb-10 max-w-lg mx-auto">
                            Pick up to 5 of your favorite fruits to create your perfect mix.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {["Watermelon", "Papaya", "Pineapple", "Apple", "Banana", "Kiwi", "Pomegranate", "Muskmelon", "Dragon Fruit", "Grapes", "Orange", "Guava"].map((fruit) => (
                                <button
                                    key={fruit}
                                    onClick={() => toggleFruit(fruit)}
                                    className={`p-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-between group ${selectedFruits.includes(fruit)
                                        ? "bg-brand-dark text-white shadow-lg shadow-brand-dark/20 scale-105"
                                        : "bg-brand-gray text-brand-dark/60 hover:bg-brand-gray/80"
                                        }`}
                                >
                                    {fruit}
                                    {selectedFruits.includes(fruit) && <Check className="w-4 h-4 text-brand-lime" />}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <button
                                onClick={handleCustomOrder}
                                disabled={selectedFruits.length === 0}
                                className="bg-brand-dark text-white font-bold px-10 py-5 rounded-2xl hover:bg-brand-dark/90 transition-all shadow-xl shadow-brand-dark/20 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {selectedFruits.length === 0 ? "Select Fruits to Order" : `Order Custom Bowl (${selectedFruits.length})`}
                                <PenTool className="w-5 h-5" />
                            </button>
                            <p className="text-brand-dark/40 text-sm font-medium">Single Order • Instant Delivery</p>
                        </div>
                    </motion.div>
                </div>

                {/* Nut Upsell */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-gradient-to-r from-brand-dark to-black rounded-2xl p-6 flex items-center justify-between shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <div className="relative z-10">
                            <span className="text-brand-lime font-bold text-xs uppercase tracking-wider mb-1 block">Pro Tip</span>
                            <p className="text-white font-medium">
                                All Monthly Subscriptions come with a separate daily pouch of <span className="text-brand-lime font-bold">Nuts & Seeds.</span>
                            </p>
                        </div>
                        <div className="relative z-10 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                            <span className="text-2xl">🥜</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedPlan && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPlan(null)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`p-8 sticky top-0 z-10 flex justify-between items-center border-b ${selectedPlan === 'lite' ? 'bg-brand-lime/10 border-brand-lime/20' : 'bg-brand-orange/10 border-brand-orange/20'}`}>
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedPlan === 'lite' ? 'bg-brand-lime text-white' : 'bg-brand-orange text-white'}`}>
                                    {plans[selectedPlan].icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-brand-dark">{plans[selectedPlan].name}</h3>
                                    <p className="text-brand-dark/60 text-sm">Weekly Schedule</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedPlan(null)}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-brand-gray transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>

                        <div className="p-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {plans[selectedPlan].schedule.map((item, index) => (
                                    <div
                                        key={item.day}
                                        className={`bg-white border rounded-3xl p-6 transition-all hover:shadow-lg group flex flex-col h-full ${selectedPlan === 'lite' ? 'border-brand-lime/20 hover:border-brand-lime' : 'border-brand-orange/20 hover:border-brand-orange'}`}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${selectedPlan === 'lite' ? 'bg-brand-lime/10 text-brand-lime' : 'bg-brand-orange/10 text-brand-orange'}`}>
                                                {item.day}
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                        </div>

                                        <h3 className={`font-bold text-brand-dark text-xl mb-2 transition-colors ${selectedPlan === 'lite' ? 'group-hover:text-brand-lime' : 'group-hover:text-brand-orange'}`}>{item.title}</h3>
                                        <p className="text-brand-dark/60 text-sm leading-relaxed mb-4 flex-1">{item.ingredients}</p>

                                        <div className="pt-4 border-t border-brand-dark/5 flex items-center gap-2 text-xs font-bold text-brand-dark/30">
                                            <div className={`w-2 h-2 rounded-full ${selectedPlan === 'lite' ? 'bg-brand-lime' : 'bg-brand-orange'}`}></div>
                                            Freshly Prepared
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 rounded-2xl bg-brand-gray/50 text-center">
                                <p className="text-brand-dark/60 mb-4">Ready to start your healthy journey?</p>
                                <button
                                    onClick={() => {
                                        onOrder(`${plans[selectedPlan].name} Subscription`);
                                        setSelectedPlan(null);
                                    }}
                                    className={`font-bold px-8 py-4 rounded-xl text-white shadow-lg transition-all hover:scale-105 ${selectedPlan === 'lite' ? 'bg-brand-lime shadow-brand-lime/20' : 'bg-brand-orange shadow-brand-orange/20'}`}
                                >
                                    Subscribe to {plans[selectedPlan].name}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
