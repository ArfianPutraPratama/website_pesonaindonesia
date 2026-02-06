"use client";
import React from "react";
import { motion } from "motion/react";

interface TravelCardProps {
    destination: {
        name: string;
        description: string;
        images: string[];
        stats: {
            rating: number;
            visitors: string;
            temperature: string;
        };
    } | null;
    onClose: () => void;
}

export default function TravelCard({ destination, onClose }: TravelCardProps) {
    if (!destination) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-10 left-0 right-0 mx-auto w-full max-w-2xl z-50 pointer-events-none px-4"
        >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 h-48 md:h-auto">
                    <img
                        src={destination.images[0]}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end md:hidden">
                        <h2 className="text-2xl font-bold text-white shadow-black drop-shadow-md">{destination.name}</h2>
                    </div>
                </div>

                <div className="p-6 md:w-1/2 relative flex flex-col justify-center">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors z-10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <h2 className="text-2xl font-bold text-white mb-2 hidden md:block">{destination.name}</h2>

                    <div className="flex justify-between text-sm text-neutral-200 mb-3">
                        <div className="flex items-center gap-1">
                            <span>⭐</span>
                            <span>{destination.stats.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>👥</span>
                            <span>{destination.stats.visitors} / thn</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>🌡️</span>
                            <span>{destination.stats.temperature}</span>
                        </div>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed mb-4 line-clamp-3">
                        {destination.description}
                    </p>

                    <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">
                        Lihat Detail Paket
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
