"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, MapPin, Clock, Calendar, Zap, Leaf, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

type ModalType = "order" | "partner";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: ModalType;
    prefilledProduct?: string; // "single", "week", "month", or specific product name
}

export default function BookingModal({ isOpen, onClose, type, prefilledProduct }: BookingModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gymName: "", // For partner
        address: "", // For order
    });

    // Subscription State
    const [planType, setPlanType] = useState<"lite" | "energy">("lite");
    const [duration, setDuration] = useState<"single" | "week" | "month">("week");
    const [deliveryTime, setDeliveryTime] = useState<"morning" | "evening">("morning");
    const [addressType, setAddressType] = useState<"gym" | "home_office">("home_office");

    // Pricing Constants
    const PRICES = {
        single: 179,
        week: 800,
        month: 1400
    };

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", gymName: "", address: "" });
            setPlanType("lite");

            // Determine duration based on prefilledProduct
            if (prefilledProduct === "month") {
                setDuration("month");
            } else if (prefilledProduct === "week") {
                setDuration("week");
            } else {
                // Default to single if it's a specific product name or "single"
                setDuration("single");
            }

            setDeliveryTime("morning");
            setAddressType("home_office");
        }
    }, [isOpen, prefilledProduct]);

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
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] overflow-y-auto"
                    >
                        <div className="flex min-h-full items-center justify-center p-4">
                            {/* Modal Content */}
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white border border-brand-dark/10 rounded-3xl p-6 md:p-8 max-w-lg w-full relative overflow-hidden shadow-2xl"
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
                                                : duration === "single"
                                                    ? "Your bowl is being prepared!"
                                                    : "Welcome to the club! Your first bowl arrives soon."}
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
                                            {type === "partner" ? "Partner With Us" : "Complete Order"}
                                        </h2>
                                        <p className="text-brand-dark/60 mb-6 text-sm">
                                            {type === "partner"
                                                ? "Transform your gym with our fresh fruit station."
                                                : "Customize your plan to fit your lifestyle."}
                                        </p>

                                        {type === "order" && prefilledProduct && !["single", "week", "month"].includes(prefilledProduct) && (
                                            <div className="mb-6 bg-brand-lime/10 border border-brand-lime/20 rounded-xl p-3 flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-brand-lime text-white flex items-center justify-center">
                                                    <ShoppingBag className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-brand-dark/60 font-bold uppercase tracking-wider">Ordering</div>
                                                    <div className="font-bold text-brand-dark">{prefilledProduct}</div>
                                                </div>
                                            </div>
                                        )}

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {type === "order" && (
                                                <>
                                                    {/* Plan Selection */}
                                                    <div>
                                                        <label className="block text-sm font-bold text-brand-dark mb-3">Select Goal</label>
                                                        <div className="grid grid-cols-2 gap-3">
                                                            <button
                                                                type="button"
                                                                onClick={() => setPlanType("lite")}
                                                                className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${planType === "lite"
                                                                    ? "bg-brand-lime/10 border-brand-lime"
                                                                    : "bg-brand-dark/5 border-brand-dark/10 hover:border-brand-dark/20"
                                                                    }`}
                                                            >
                                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${planType === "lite" ? "bg-brand-lime text-white" : "bg-brand-dark/10 text-brand-dark/40"}`}>
                                                                    <Leaf className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <div className={`text-sm font-bold ${planType === "lite" ? "text-brand-dark" : "text-brand-dark/60"}`}>Lite & Glow</div>
                                                                    <div className="text-[10px] text-brand-dark/40">Weight Loss</div>
                                                                </div>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => setPlanType("energy")}
                                                                className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${planType === "energy"
                                                                    ? "bg-brand-orange/10 border-brand-orange"
                                                                    : "bg-brand-dark/5 border-brand-dark/10 hover:border-brand-dark/20"
                                                                    }`}
                                                            >
                                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${planType === "energy" ? "bg-brand-orange text-white" : "bg-brand-dark/10 text-brand-dark/40"}`}>
                                                                    <Zap className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <div className={`text-sm font-bold ${planType === "energy" ? "text-brand-dark" : "text-brand-dark/60"}`}>Energy & Power</div>
                                                                    <div className="text-[10px] text-brand-dark/40">Muscle Gain</div>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Duration Selection */}
                                                    <div>
                                                        <label className="block text-sm font-bold text-brand-dark mb-3">Duration</label>
                                                        {prefilledProduct && !["week", "month", "single"].includes(prefilledProduct) ? (
                                                            <div className="p-4 rounded-xl border border-brand-dark/10 bg-brand-gray/50 text-center">
                                                                <div className="text-sm font-bold text-brand-dark mb-1">One-Time Order</div>
                                                                <div className="text-xs text-brand-dark/60">This item is available for single order only.</div>
                                                            </div>
                                                        ) : (
                                                            <div className="grid grid-cols-3 gap-2">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => setDuration("single")}
                                                                    className={`p-2 rounded-xl border text-center transition-all ${duration === "single"
                                                                        ? "bg-brand-dark text-white border-brand-dark"
                                                                        : "bg-white border-brand-dark/10 text-brand-dark hover:border-brand-dark/30"
                                                                        }`}
                                                                >
                                                                    <div className="text-xs font-bold mb-1">Single Bowl</div>
                                                                    <div className={`text-[10px] ${duration === "single" ? "text-white/60" : "text-brand-dark/40"}`}>₹179</div>
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => setDuration("week")}
                                                                    className={`p-2 rounded-xl border text-center transition-all ${duration === "week"
                                                                        ? "bg-brand-dark text-white border-brand-dark"
                                                                        : "bg-white border-brand-dark/10 text-brand-dark hover:border-brand-dark/30"
                                                                        }`}
                                                                >
                                                                    <div className="text-xs font-bold mb-1">1 Week</div>
                                                                    <div className={`text-[10px] ${duration === "week" ? "text-white/60" : "text-brand-dark/40"}`}>₹800</div>
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => setDuration("month")}
                                                                    className={`p-2 rounded-xl border text-center transition-all relative overflow-hidden ${duration === "month"
                                                                        ? "bg-brand-lime text-white border-brand-lime"
                                                                        : "bg-white border-brand-dark/10 text-brand-dark hover:border-brand-dark/30"
                                                                        }`}
                                                                >
                                                                    <div className="text-xs font-bold mb-1">1 Month</div>
                                                                    <div className={`text-[10px] ${duration === "month" ? "text-white/80" : "text-brand-dark/40"}`}>₹1,400</div>
                                                                    {duration === "month" && (
                                                                        <div className="absolute top-0 right-0 bg-white/20 text-[6px] font-bold px-1.5 py-0.5 rounded-bl-lg">BEST</div>
                                                                    )}
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Delivery Details */}
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-xs font-bold text-brand-dark mb-2">Time Slot</label>
                                                            <div className="relative">
                                                                <select
                                                                    value={deliveryTime}
                                                                    onChange={(e) => setDeliveryTime(e.target.value as any)}
                                                                    className="w-full appearance-none bg-brand-dark/5 border border-brand-dark/10 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-lime transition-colors"
                                                                >
                                                                    <option value="morning">Morning (6-9 AM)</option>
                                                                    <option value="evening">Evening (4-6 PM)</option>
                                                                </select>
                                                                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/40 pointer-events-none" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs font-bold text-brand-dark mb-2">Location Type</label>
                                                            <div className="relative">
                                                                <select
                                                                    value={addressType}
                                                                    onChange={(e) => setAddressType(e.target.value as any)}
                                                                    className="w-full appearance-none bg-brand-dark/5 border border-brand-dark/10 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-lime transition-colors"
                                                                >
                                                                    <option value="gym">Gym Reception</option>
                                                                    <option value="home_office">Home / Office</option>
                                                                </select>
                                                                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/40 pointer-events-none" />
                                                            </div>
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
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            className="w-full bg-brand-dark/5 border border-brand-dark/10 rounded-lg px-3 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-lime transition-colors"
                                                            placeholder="+91 98765..."
                                                        />
                                                    </div>
                                                </div>

                                                {type === "partner" ? (
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
                                                ) : (
                                                    <div>
                                                        <label className="block text-xs font-medium text-brand-dark/60 mb-1">Delivery Address</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            value={formData.address}
                                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                            className="w-full bg-brand-dark/5 border border-brand-dark/10 rounded-lg px-3 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-lime transition-colors"
                                                            placeholder={addressType === "gym" ? "Gym Name & Area" : "Flat No, Building, Area"}
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-brand-lime text-white font-bold py-4 rounded-xl hover:bg-brand-lime/90 transition-colors mt-4 flex items-center justify-between px-6 shadow-lg shadow-brand-lime/20"
                                            >
                                                <span>{type === "partner" ? "Submit Request" : "Confirm Order"}</span>
                                                {type === "order" && (
                                                    <span className="bg-white/20 px-2 py-1 rounded text-sm">₹{PRICES[duration]}</span>
                                                )}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
