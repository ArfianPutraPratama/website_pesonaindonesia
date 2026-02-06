"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Simulate loading time or wait for assets
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // 2.5 seconds loading

        return () => clearTimeout(timer);
    }, []);

    // Prevent hydration mismatch by not rendering until mounted
    if (!isMounted) {
        return (
            <div suppressHydrationWarning className="fixed inset-0 z-[999] bg-white dark:bg-black flex items-center justify-center flex-col transition-colors">
                <div suppressHydrationWarning className="relative">
                    <div className="w-32 h-32 rounded-full bg-blue-500/20 blur-xl absolute inset-0" />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                            <span className="text-white font-bold text-3xl">P</span>
                        </div>
                        <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden mt-4">
                            <div className="h-full bg-blue-500 w-0" />
                        </div>
                    </div>
                </div>
                <p className="text-neutral-500 text-sm mt-8 font-light tracking-widest uppercase opacity-0">
                    Memuat Keindahan...
                </p>
            </div>
        );
    }

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, pointerEvents: "none" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    suppressHydrationWarning
                    className="fixed inset-0 z-[999] bg-white dark:bg-black flex items-center justify-center flex-col transition-colors"
                >
                    <div suppressHydrationWarning className="relative">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                            className="w-32 h-32 rounded-full bg-blue-500/20 blur-xl absolute inset-0"
                        />
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10 flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <span className="text-white font-bold text-3xl">P</span>
                            </div>
                            <motion.div
                                className="h-1 w-32 bg-white/10 rounded-full overflow-hidden mt-4"
                            >
                                <motion.div
                                    className="h-full bg-blue-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2.3, ease: "easeInOut" }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-neutral-500 text-sm mt-8 font-light tracking-widest uppercase"
                    >
                        Memuat Keindahan...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
