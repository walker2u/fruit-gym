"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useState, useEffect } from "react";

type ModalType = "order" | "partner";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: ModalType;
    prefilledProduct?: string;
}

export default function BookingModal({ isOpen, onClose, type, prefilledProduct }: BookingModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gymName: "",
        message: "",
    });

    // New State for Customization
    const [size, setSize] = useState<"S" | "M" | "L">("M");
    const [toppings, setToppings] = useState<string[]>([]);

    // Pricing Constants
    const PRICES = {
        S: 99,
        M: 129,
        L: 169,
    };

    const TOPPINGS = [
        { id: "seeds", name: "Protein Crunch (Seeds Mix)", price: 15 },
        { id: "dryfruits", name: "Brain Food (Walnuts/Almonds)", price: 20 },
        { id: "masala", name: "Indian Masala (Chaat/Rock Salt)", price: 0 },
        { id: "dressing", name: "Honey/Lemon Dressing", price: 0 },
    ];

    // Calculate Total Price
    const calculateTotal = () => {
        let total = PRICES[size];
        toppings.forEach(tId => {
            const topping = TOPPINGS.find(t => t.id === tId);
            if (topping) total += topping.price;
        });
        return total;
    };

    const toggleTopping = (id: string) => {
        if (toppings.includes(id)) {
            setToppings(toppings.filter(t => t !== id));
        } else {
            setToppings([...toppings, id]);
        }
    };

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", gymName: "", message: "" });
            setSize("M");
            setToppings(["masala"]); // Default free topping
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 overflow-y-auto"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white border border-brand-dark/10 rounded-3xl p-6 md:p-8 max-w-lg w-full relative overflow-hidden my-8 shadow-2xl"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-brand-dark/40 hover:text-brand-dark transition-colors z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-brand-lime/20 text-brand-lime rounded-full flex items-center justify-center mx-auto mb-6 relative">
                                        <Check className="w-8 h-8" />
                                        {/* Confetti */}
                                        {[...Array(12)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                                                animate={{
                                                    opacity: 0,
                                                    scale: 1,
                                                    x: (Math.random() - 0.5) * 200,
                                                    y: (Math.random() - 0.5) * 200,
                                                    rotate: Math.random() * 360
                                                }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="absolute w-2 h-2 rounded-full"
                                                style={{
                                                    backgroundColor: ['#ccff00', '#ff5500', '#FFD700', '#FF00CC'][i % 4]
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Order Confirmed!</h3>
                                    <p className="text-brand-dark/60">
                                        {type === "partner"
                                            ? "We'll be in touch with your gym shortly."
                                            : `Your ${prefilledProduct || "bowl"} is being prepared! Total: ₹${calculateTotal()}`}
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="mt-8 bg-brand-dark/10 text-brand-dark font-bold px-8 py-3 rounded-xl hover:bg-brand-dark/20 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2 pr-8">
                                        {type === "partner" ? "Partner With Us" : `Customize: ${prefilledProduct || "Your Bowl"}`}
                                    </h2>
                                    <p className="text-brand-dark/60 mb-6 text-sm">
                                        {type === "partner"
                                            ? "Transform your gym with our fresh fruit station."
                                            : "Build your perfect bowl for maximum results."}
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {type === "order" && (
                                            <>
                                                {/* Size Selection */}
                                                <div>
                                                    <label className="block text-sm font-bold text-brand-dark mb-3">Select Size</label>
                                                    <div className="grid grid-cols-3 gap-3">
                                                        {[
                                                            { id: "S", label: "Small", weight: "200g", price: PRICES.S, desc: "Snack" },
                                                            { id: "M", label: "Medium", weight: "300g", price: PRICES.M, desc: "Standard" },
                                                            { id: "L", label: "Large", weight: "450g", price: PRICES.L, desc: "Bulk Mode" },
                                                        ].map((option) => (
                                                            <button
                                                                key={option.id}
                                                                type="button"
                                                                onClick={() => setSize(option.id as any)}
                                                                className={`p-3 rounded-xl border text-left transition-all ${size === option.id
                                                                    ? "bg-brand-lime/10 border-brand-lime"
                                                                    : "bg-brand-dark/5 border-brand-dark/10 hover:border-brand-dark/20"
                                                                    }`}
                                                            >
                                                                <div className={`text-sm font-bold mb-1 ${size === option.id ? "text-brand-lime" : "text-brand-dark"}`}>
                                                                    {option.label}
                                                                </div>
                                                                <div className="text-xs text-brand-dark/60 mb-1">{option.weight}</div>
                                                                <div className="text-xs font-bold text-brand-dark">₹{option.price}</div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Toppings */}
                                                <div>
                                                    <label className="block text-sm font-bold text-brand-dark mb-3">Add-ons & Toppings</label>
                                                    <div className="space-y-2">
                                                        {TOPPINGS.map((topping) => (
                                                            <label
                                                                key={topping.id}
                                                                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${toppings.includes(topping.id)
                                                                    ? "bg-brand-lime/5 border-brand-lime/50"
                                                                    : "bg-brand-dark/5 border-brand-dark/10 hover:border-brand-dark/20"
                                                                    }`}
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${toppings.includes(topping.id) ? "bg-brand-lime border-brand-lime" : "border-brand-dark/30"
                                                                        }`}>
                                                                        {toppings.includes(topping.id) && <Check className="w-3 h-3 text-white" />}
                                                                    </div>
                                                                    <span className="text-sm text-brand-dark/90">{topping.name}</span>
                                                                </div>
                                                                <span className="text-xs font-bold text-brand-lime">
                                                                    {topping.price === 0 ? "FREE" : `+₹${topping.price}`}
                                                                </span>
                                                                <input
                                                                    type="checkbox"
                                                                    className="hidden"
                                                                    checked={toppings.includes(topping.id)}
                                                                    onChange={() => toggleTopping(topping.id)}
                                                                />
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* User Details */}
                                        <div className="space-y-4 pt-4 border-t border-brand-dark/10">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-medium text-brand-dark/60 mb-1">Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full bg-brand-dark/5 border border-brand-dark/10 rounded-lg px-3 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-lime transition-colors"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-brand-dark/60 mb-1">Phone</label>
                                                    <input
                                                        required
                                                        type="tel"
                                                        className="w-full bg-brand-dark/5 border border-brand-dark/10 rounded-lg px-3 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-lime transition-colors"
                                                        placeholder="+91 98765..."
                                                    />
                                                </div>
                                            </div>

                                            {type === "partner" && (
                                                <div>
                                                    <label className="block text-xs font-medium text-brand-dark/60 mb-1">Gym Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={formData.gymName}
                                                        onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                                                        className="w-full bg-brand-dark/5 border border-brand-dark/10 rounded-lg px-3 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-lime transition-colors"
                                                        placeholder="Iron Paradise Gym"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-brand-lime text-white font-bold py-4 rounded-xl hover:bg-brand-lime/90 transition-colors mt-4 flex items-center justify-between px-6"
                                        >
                                            <span>{type === "partner" ? "Submit Request" : "Place Order"}</span>
                                            {type === "order" && (
                                                <span className="bg-black/10 px-2 py-1 rounded text-sm">₹{calculateTotal()}</span>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
