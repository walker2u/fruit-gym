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

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", gymName: "", message: "" });
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
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-brand-gray border border-white/10 rounded-3xl p-8 max-w-lg w-full relative overflow-hidden"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-brand-lime/20 text-brand-lime rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                                    <p className="text-white/60">
                                        {type === "partner"
                                            ? "We'll be in touch with your gym shortly."
                                            : "Your order request has been sent. We'll contact you to confirm delivery."}
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="mt-8 bg-white/10 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/20 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-bold text-white mb-2">
                                        {type === "partner" ? "Partner With Us" : "Get Fresh Fuel"}
                                    </h2>
                                    <p className="text-white/60 mb-8">
                                        {type === "partner"
                                            ? "Transform your gym with our fresh fruit station."
                                            : prefilledProduct
                                                ? `Requesting: ${prefilledProduct}`
                                                : "Start your subscription today."}
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-1">Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-lime transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-1">Email</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-lime transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        {type === "partner" && (
                                            <div>
                                                <label className="block text-sm font-medium text-white/80 mb-1">Gym Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={formData.gymName}
                                                    onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-lime transition-colors"
                                                    placeholder="Iron Paradise Gym"
                                                />
                                            </div>
                                        )}

                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-1">Message (Optional)</label>
                                            <textarea
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-lime transition-colors h-24 resize-none"
                                                placeholder="Any specific requirements?"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-brand-lime text-brand-dark font-bold py-4 rounded-xl hover:bg-brand-lime/90 transition-colors mt-4"
                                        >
                                            {type === "partner" ? "Submit Partnership Request" : "Request Subscription"}
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
