"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-md border-b border-brand-dark/10 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter text-brand-dark">
                    SIMPLY<span className="text-brand-lime">SLICED</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="#menu">Menu</NavLink>
                    <NavLink href="#how-it-works">How it Works</NavLink>
                    <NavLink href="#partners">For Gyms</NavLink>
                    <button
                        onClick={onOpenModal}
                        className="bg-brand-lime text-white font-bold px-6 py-2 rounded-full hover:bg-brand-lime/90 transition-colors"
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-dark"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-brand-dark/10 p-6 md:hidden flex flex-col space-y-4"
                    >
                        <MobileNavLink href="#menu" onClick={() => setIsMobileMenuOpen(false)}>
                            Menu
                        </MobileNavLink>
                        <MobileNavLink href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>
                            How it Works
                        </MobileNavLink>
                        <MobileNavLink href="#partners" onClick={() => setIsMobileMenuOpen(false)}>
                            For Gyms
                        </MobileNavLink>
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                onOpenModal();
                            }}
                            className="bg-brand-lime text-white font-bold px-6 py-3 rounded-full w-full"
                        >
                            Get Started
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-brand-dark/80 hover:text-brand-lime transition-colors font-medium"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({
    href,
    onClick,
    children,
}: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-brand-dark/80 hover:text-brand-lime transition-colors font-medium text-lg block"
        >
            {children}
        </Link>
    );
}
