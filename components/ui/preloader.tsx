"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass } from "lucide-react";

const REGIONS = [
    {
        name: "Surabaya",
        color: "rgb(6, 182, 212)", // Cyan
        icon: (
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
                {/* Simplified Suro & Baya Concept */}
                <path d="M50 10 C 20 10, 10 40, 10 70 C 10 90, 40 90, 50 70 C 60 90, 90 90, 90 70 C 90 40, 80 10, 50 10" />
                <path d="M50 30 L 50 60 M 40 45 L 60 45" />
                <path d="M30 75 Q 50 60 70 75" />
            </svg>
        )
    },
    {
        name: "Jakarta",
        color: "rgb(234, 179, 8)", // Gold
        icon: (
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
                <path d="M40 90 L 60 90 L 55 25 L 45 25 Z" />
                <path d="M45 25 Q 50 15 55 25" />
                <path d="M35 90 L 65 90 M 48 20 L 52 20" />
            </svg>
        )
    },
    {
        name: "Yogyakarta",
        color: "rgb(255, 255, 255)", // White
        icon: (
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
                <path d="M45 90 L 55 90 L 53 30 L 47 30 Z" />
                <circle cx="50" cy="25" r="5" />
                <path d="M40 90 L 60 90" />
            </svg>
        )
    },
    {
        name: "Bali",
        color: "rgb(168, 85, 247)", // Purple
        icon: (
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
                <path d="M35 90 L 35 20 L 45 20 L 45 90" />
                <path d="M55 90 L 55 20 L 65 20 L 65 90" />
                <path d="M25 80 L 35 80 M 65 80 L 75 80" />
            </svg>
        )
    }
];

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Optimized for better UX (from 4.5s)

        const iconInterval = setInterval(() => {
            setIndex((prev) => (prev + 1) % REGIONS.length);
        }, 800); // Slightly faster icon cycle

        return () => {
            clearTimeout(timer);
            clearInterval(iconInterval);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="fixed inset-0 z-[999] bg-black flex items-center justify-center flex-col overflow-hidden"
                >
                    {/* Background Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-blue-500/10 blur-[100px]"
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Icon Container with Neon Aesthetic */}
                        <div className="relative w-40 h-40 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
                                    transition={{ duration: 0.5 }}
                                    className="w-24 h-24 relative"
                                    style={{ color: REGIONS[index].color }}
                                >
                                    {/* Neon Glow Layer */}
                                    <div
                                        className="absolute inset-0 blur-md opacity-50"
                                        style={{ color: REGIONS[index].color }}
                                    >
                                        {REGIONS[index].icon}
                                    </div>
                                    {/* Sharp Layer */}
                                    <div className="relative z-10 drop-shadow-[0_0_8px_currentColor]">
                                        {REGIONS[index].icon}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Compass Icon - Bottom Right Decoration */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-0 right-0 text-white/20 p-2"
                            >
                                <Compass size={32} strokeWidth={1} />
                            </motion.div>
                        </div>

                        {/* Title & Progress */}
                        <div className="mt-12 flex flex-col items-center gap-6">
                            <div className="overflow-hidden">
                                <motion.h2
                                    key={REGIONS[index].name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    className="text-white text-xl font-medium tracking-[0.3em] uppercase"
                                >
                                    {REGIONS[index].name}
                                </motion.h2>
                            </div>

                            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 4, ease: "linear" }}
                                />
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-light"
                            >
                                Jelajahi Indonesia
                            </motion.p>
                        </div>
                    </div>

                    {/* Aesthetic Corner Lines */}
                    <div className="absolute top-10 left-10 w-10 h-10 border-t border-l border-white/10" />
                    <div className="absolute bottom-10 right-10 w-10 h-10 border-b border-r border-white/10" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
