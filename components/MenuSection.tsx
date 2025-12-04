"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Leaf, Zap, Droplets, Flame, Star, PenTool, Plus } from "lucide-react";

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

type TabType = "today" | "lite" | "energy" | "custom";

export default function MenuSection({ onOrder }: { onOrder: (productName: string) => void }) {
    const [activeTab, setActiveTab] = useState<TabType>("today");

    const getTabPosition = (tab: TabType) => {
        switch (tab) {
            case "today": return "0%";
            case "lite": return "25%";
            case "energy": return "50%";
            case "custom": return "75%";
        }
    };

    return (
        <section id="menu" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">
                        WEEKLY MENU
                    </h2>
                    <p className="text-brand-dark/60 max-w-2xl mx-auto">
                        We rotate our menu daily so you never get bored.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-brand-gray p-1 rounded-full inline-flex relative overflow-hidden">
                        {/* Animated Background */}
                        <motion.div
                            className="absolute top-1 bottom-1 rounded-full shadow-sm bg-white"
                            initial={false}
                            animate={{
                                left: getTabPosition(activeTab),
                                width: "25%"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />

                        <button
                            onClick={() => setActiveTab("today")}
                            className={`relative z-10 px-4 md:px-6 py-3 rounded-full flex items-center gap-2 font-bold transition-colors text-sm md:text-base ${activeTab === "today" ? "text-brand-pink" : "text-brand-dark/50 hover:text-brand-dark/70"}`}
                        >
                            <Star className="w-4 h-4" />
                            <span className="hidden md:inline">Bowl of the Day</span>
                            <span className="md:hidden">Today</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("lite")}
                            className={`relative z-10 px-4 md:px-6 py-3 rounded-full flex items-center gap-2 font-bold transition-colors text-sm md:text-base ${activeTab === "lite" ? "text-brand-lime" : "text-brand-dark/50 hover:text-brand-dark/70"}`}
                        >
                            <Leaf className="w-4 h-4" />
                            <span className="hidden md:inline">Lite & Glow</span>
                            <span className="md:hidden">Lite</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("energy")}
                            className={`relative z-10 px-4 md:px-6 py-3 rounded-full flex items-center gap-2 font-bold transition-colors text-sm md:text-base ${activeTab === "energy" ? "text-brand-orange" : "text-brand-dark/50 hover:text-brand-dark/70"}`}
                        >
                            <Zap className="w-4 h-4" />
                            <span className="hidden md:inline">Energy & Power</span>
                            <span className="md:hidden">Energy</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("custom")}
                            className={`relative z-10 px-4 md:px-6 py-3 rounded-full flex items-center gap-2 font-bold transition-colors text-sm md:text-base ${activeTab === "custom" ? "text-blue-500" : "text-brand-dark/50 hover:text-brand-dark/70"}`}
                        >
                            <PenTool className="w-4 h-4" />
                            <span className="hidden md:inline">Customization</span>
                            <span className="md:hidden">Custom</span>
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-3xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "today" && (
                            <motion.div
                                key="today"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-gradient-to-br from-brand-pink/10 to-brand-yellow/10 rounded-3xl p-8 border border-brand-pink/20 text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 rounded-full bg-brand-pink text-white text-xs font-bold tracking-wider mb-4">CHEF'S SPECIAL</span>
                                    <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">Exotic Berry Blast</h3>
                                    <p className="text-brand-dark/70 text-lg mb-8 max-w-lg mx-auto">
                                        A premium mix of imported blueberries, strawberries, dragon fruit, and a hint of mint. Packed with antioxidants.
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
                                        <div className="bg-white/50 p-3 rounded-xl backdrop-blur-sm">
                                            <div className="text-xs text-brand-dark/50 uppercase font-bold">Cal</div>
                                            <div className="text-xl font-black text-brand-dark">180</div>
                                        </div>
                                        <div className="bg-white/50 p-3 rounded-xl backdrop-blur-sm">
                                            <div className="text-xs text-brand-dark/50 uppercase font-bold">Carb</div>
                                            <div className="text-xl font-black text-brand-dark">35g</div>
                                        </div>
                                        <div className="bg-white/50 p-3 rounded-xl backdrop-blur-sm">
                                            <div className="text-xs text-brand-dark/50 uppercase font-bold">Fib</div>
                                            <div className="text-xl font-black text-brand-dark">8g</div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => onOrder("Exotic Berry Blast")}
                                        className="bg-brand-pink text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-pink/90 transition-all shadow-lg shadow-brand-pink/20 flex items-center gap-2 mx-auto"
                                    >
                                        Order This Bowl <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {(activeTab === "lite" || activeTab === "energy") && (
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="text-center mb-8">
                                    <p className={`text-lg font-medium ${plans[activeTab].textColor}`}>
                                        {plans[activeTab].description}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    {plans[activeTab].schedule.map((item, index) => (
                                        <motion.div
                                            key={item.day}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="bg-white border border-brand-dark/5 rounded-2xl p-4 flex items-center justify-between hover:border-brand-dark/20 transition-colors shadow-sm hover:shadow-md group"
                                        >
                                            <div className="flex items-center gap-4 md:gap-6">
                                                <div className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${activeTab === "lite" ? "bg-brand-lime/10 text-brand-lime" : "bg-brand-orange/10 text-brand-orange"}`}>
                                                    {item.day}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-brand-dark text-lg group-hover:text-brand-lime transition-colors">{item.title}</h3>
                                                    <p className="text-sm text-brand-dark/60">{item.ingredients}</p>
                                                </div>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "custom" && (
                            <motion.div
                                key="custom"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white border border-brand-dark/10 rounded-3xl p-8 text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
                                <h3 className="text-3xl font-black text-brand-dark mb-4">Build Your Own Bowl</h3>
                                <p className="text-brand-dark/60 text-lg mb-8 max-w-lg mx-auto">
                                    Don't like our menu? No problem. Pick your favorite fruits and toppings to create your perfect mix.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                    {["Watermelon", "Papaya", "Pineapple", "Apple", "Banana", "Kiwi", "Pomegranate", "Muskmelon"].map((fruit) => (
                                        <div key={fruit} className="bg-brand-gray/50 p-3 rounded-xl text-sm font-medium text-brand-dark/80">
                                            {fruit}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => onOrder("Custom Bowl")}
                                    className="bg-brand-dark text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-dark/90 transition-all shadow-lg shadow-brand-dark/20 flex items-center gap-2 mx-auto"
                                >
                                    Start Customizing <PenTool className="w-5 h-5" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Nut Upsell */}
                <div className="max-w-3xl mx-auto mt-12">
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
        </section>
    );
}
