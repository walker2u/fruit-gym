"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Zap, Droplets, Flame, Star, PenTool, Plus, Check, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

// --- Data ---
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

// Combine all bowls into a single list, plus the special Bowl of the Day
const allBowls = [
    {
        id: "botd",
        title: "Exotic Berry Blast",
        ingredients: "Blueberries, Strawberries, Dragon Fruit, Mint",
        isBotD: true,
        price: "₹249",
        calories: "180",
        icon: <Star className="w-6 h-6 text-brand-pink" />
    },
    ...plans.lite.schedule.map(s => ({ ...s, id: s.title.replace(/\s+/g, '-').toLowerCase(), isBotD: false, price: "₹199", calories: "150" })),
    ...plans.energy.schedule.map(s => ({ ...s, id: s.title.replace(/\s+/g, '-').toLowerCase(), isBotD: false, price: "₹229", calories: "250" }))
];

export default function MenuPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"order" | "partner">("order");
    const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

    // Slider State
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans | null>(null);

    // Custom Bowl State
    const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

    const openModal = (type: "order" | "partner", product?: string) => {
        setModalType(type);
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

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
        openModal("order", `Custom Bowl (${fruits})`);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 2);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + 2) % 2);
    };

    const subscriptionSlides = [
        {
            id: "lite",
            plan: plans.lite,
            bg: "bg-gradient-to-br from-brand-lime/10 to-green-100 border-brand-lime/20",
            accent: "brand-lime"
        },
        {
            id: "energy",
            plan: plans.energy,
            bg: "bg-gradient-to-br from-brand-orange/10 to-orange-100 border-brand-orange/20",
            accent: "brand-orange"
        }
    ];

    return (
        <main className="min-h-screen bg-white text-brand-dark selection:bg-brand-lime selection:text-white pt-24">
            <Navbar onOpenModal={() => openModal("order")} />

            <div className="container mx-auto px-6 pb-24">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-brand-dark mb-4">OUR MENU</h1>
                    <p className="text-brand-dark/60 max-w-2xl mx-auto text-lg">
                        Fresh, healthy, and delicious bowls curated for your lifestyle.
                    </p>
                </div>

                {/* --- 1. Subscription Slider --- */}
                <section className="mb-24 relative max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-black text-brand-dark">Monthly Subscriptions</h2>
                        <div className="flex gap-2">
                            <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-gray transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-gray transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl shadow-xl bg-white min-h-[400px]">
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = offset.x;

                                if (swipe < -50) {
                                    nextSlide();
                                } else if (swipe > 50) {
                                    prevSlide();
                                }
                            }}
                            animate={{ x: `-${currentSlide * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="flex h-full cursor-grab active:cursor-grabbing"
                        >
                            {subscriptionSlides.map((slide) => (
                                <div key={slide.id} className="min-w-full h-full p-6 md:p-12 flex flex-col justify-center relative">
                                    <div className={`absolute inset-0 ${slide.bg} opacity-50`}></div>
                                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                        <div className="flex-1 text-center md:text-left">
                                            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-${slide.accent}`}>
                                                    {slide.plan.icon}
                                                </div>
                                                <span className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold tracking-wider shadow-lg bg-${slide.accent}`}>
                                                    {slide.plan.name.toUpperCase()}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-5xl font-black text-brand-dark mb-6">{slide.plan.name}</h3>
                                            <p className="text-brand-dark/70 text-lg md:text-xl mb-8 leading-relaxed">
                                                {slide.plan.description}
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                                <button
                                                    onClick={() => setSelectedPlan(slide.id as any)}
                                                    className={`bg-white text-brand-dark font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg flex items-center justify-center gap-2`}
                                                >
                                                    View Weekly Menu
                                                </button>
                                                <button
                                                    onClick={() => openModal("order", `${slide.plan.name} Subscription`)}
                                                    className={`bg-${slide.accent} text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2`}
                                                >
                                                    Subscribe Now <ShoppingBag className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Visual Element (Placeholder for now, or use icons) */}
                                        <div className="w-full md:w-1/3 flex justify-center hidden md:flex">
                                            <div className={`w-64 h-64 rounded-full bg-${slide.accent}/20 flex items-center justify-center animate-pulse`}>
                                                {slide.plan.icon}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* --- 2. Bowl Grid --- */}
                <section className="mb-24">
                    <h2 className="text-2xl font-black text-brand-dark mb-8">All Bowls</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {allBowls.map((bowl, index) => (
                            <div
                                key={index}
                                className={`rounded-3xl p-6 flex flex-col h-full relative overflow-hidden group transition-all hover:-translate-y-1 hover:shadow-xl ${bowl.isBotD
                                    ? "bg-gradient-to-br from-brand-pink/10 to-brand-yellow/10 border-2 border-brand-pink col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
                                    : "bg-white border border-brand-dark/5"
                                    }`}
                            >
                                {bowl.isBotD && (
                                    <div className="absolute top-4 right-4 bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-current" /> BOWL OF THE DAY
                                    </div>
                                )}

                                {/* Image Placeholder */}
                                <div className={`rounded-2xl mb-4 flex items-center justify-center ${bowl.isBotD ? "h-64 bg-brand-pink/5" : "h-40 bg-brand-gray"
                                    }`}>
                                    <div className="text-4xl">{bowl.isBotD ? "🍓" : "🥗"}</div>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className={`font-black text-brand-dark ${bowl.isBotD ? "text-3xl" : "text-xl"}`}>{bowl.title}</h3>
                                        <span className="font-bold text-brand-dark/40">{bowl.price}</span>
                                    </div>

                                    <p className="text-brand-dark/60 text-sm mb-4 flex-1">{bowl.ingredients}</p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-dark/5">
                                        <span className="text-xs font-bold text-brand-dark/30 uppercase">{bowl.calories} kcal</span>
                                        <button
                                            onClick={() => openModal("order", bowl.title)}
                                            className={`font-bold rounded-xl transition-all flex items-center gap-2 ${bowl.isBotD
                                                ? "bg-brand-pink text-white px-6 py-3 hover:bg-brand-pink/90"
                                                : "bg-white border border-brand-dark/10 text-brand-dark px-4 py-2 hover:bg-brand-dark hover:text-white"
                                                }`}
                                        >
                                            Add <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- 3. Customization --- */}
                <section className="mb-16">
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
                        </div>
                    </motion.div>
                </section>
            </div>

            <Footer />

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                type={modalType}
                prefilledProduct={selectedProduct}
            />

            {/* Modal for Weekly Menu Details */}
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
                        </div>
                    </motion.div>
                </div>
            )}
        </main>
    );
}
