"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import dynamic from "next/dynamic";
import TravelCard from "./travel-card";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
    ssr: false,
});

// Data Destinasi Wisata
const destinations = [
    {
        id: "sumatra",
        name: "Sumatera",
        lat: -0.5897,
        lng: 101.3431,
        description: "Danau vulkanik terbesar di dunia, Danau Toba menawarkan pemandangan magis dengan pulau Samosir di tengahnya. Sebuah keajaiban alam yang tenang dan mempesona.",
        stats: {
            rating: 4.7,
            visitors: "2M+",
            temperature: "24°C",
        },
        images: ["https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1000&auto=format&fit=crop"],
        color: "#ff5533",
    },
    {
        id: "java",
        name: "Jawa",
        lat: -7.6145,
        lng: 110.7122,
        description: "Gunung Bromo yang ikonik dengan kaldera luas dan pemandangan matahari terbit yang dramatis. Salah satu destinasi paling fotogenik di Indonesia.",
        stats: {
            rating: 4.8,
            visitors: "15M+",
            temperature: "15°C",
        },
        images: ["https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=1000&auto=format&fit=crop"],
        color: "#33ff55",
    },
    {
        id: "kalimantan",
        name: "Kalimantan",
        lat: -0.9618,
        lng: 114.5684,
        description: "Pasar Terapung Banjarmasin yang legendaris, menampilkan kearifan lokal budaya sungai yang telah berlangsung selama ratusan tahun di pulau seribu sungai.",
        stats: {
            rating: 4.6,
            visitors: "1M+",
            temperature: "30°C",
        },
        images: ["https://images.unsplash.com/photo-1596402184320-417d7178a2cd?q=80&w=1000&auto=format&fit=crop"],
        color: "#3355ff",
    },
    {
        id: "sulawesi",
        name: "Sulawesi",
        lat: -1.4300,
        lng: 121.4456,
        description: "Taman Laut Bunaken dengan keanekaragaman hayati bawah laut yang luar biasa. Surga bagi para penyelam dengan dinding karang raksasa dan biota laut yang eksotis.",
        stats: {
            rating: 4.9,
            visitors: "500K+",
            temperature: "29°C",
        },
        images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop"],
        color: "#ff33aa",
    },
    {
        id: "papua",
        name: "Papua",
        lat: -4.2699,
        lng: 138.0804,
        description: "Kepulauan Raja Ampat, jantung segitiga karang dunia. Labirin pulau-pulau karst yang megah di tengah gradasi air laut yang jernih dan tak tertandingi.",
        stats: {
            rating: 4.9,
            visitors: "100K+",
            temperature: "27°C",
        },
        images: ["https://images.unsplash.com/photo-1516690553959-71a414d6b9b6?q=80&w=1000&auto=format&fit=crop"],
        color: "#ffff33",
    },
];

export default function GlobeDemo() {
    const [selectedDestination, setSelectedDestination] = useState<any>(null);

    const globeConfig = {
        pointSize: 2, // Base size, points will override
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: -2.5, lng: 118 },
        autoRotate: !selectedDestination, // Stop rotation when selecting
        autoRotateSpeed: 0.5,
        onPointClick: (point: any) => {
            const dest = destinations.find(d => d.lat === point.lat && d.lng === point.lng);
            if (dest) {
                setSelectedDestination(dest);
            }
        },
        onGlobeClick: () => {
            setSelectedDestination(null);
        }
    };

    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        {
            order: 1,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: colors[0], // Fixed color to prevent hydration mismatch
        },
        {
            order: 1,
            startLat: -8.409518,
            startLng: 115.188919,
            endLat: -33.8688,
            endLng: 151.2093,
            arcAlt: 0.2,
            color: colors[1], // Fixed color to prevent hydration mismatch
        }
    ];

    // Map destinations to points format expected by Globe
    const pointsData = destinations.map(d => ({
        order: 1, // Optional ordering
        lat: d.lat,
        lng: d.lng,
        color: d.color,
        size: 0.6 // Slightly larger points
    }));

    return (
        <div className="min-h-screen bg-white dark:bg-black relative w-full flex flex-col font-sans transition-colors duration-500">
            {/* Hero Section: Globe, Text, and Overlay */}
            <div className="w-full relative h-screen min-h-[600px] overflow-hidden flex flex-col bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50 dark:from-black dark:via-black dark:to-black">
                <div className="max-w-7xl mx-auto w-full h-full relative px-4 flex items-center shrink-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, type: "spring" }}
                        className="absolute left-4 md:left-10 z-30 max-w-lg pointer-events-none"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-left text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-white/60 drop-shadow-lg tracking-tight leading-tight"
                        >
                            Pesona <br />
                            <span className="text-blue-600 dark:text-blue-400">Indonesia</span> <br />
                            Mendunia
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-left text-base md:text-xl font-light text-neutral-600 dark:text-neutral-300 max-w-md mt-6 leading-relaxed backdrop-blur-sm bg-white/20 dark:bg-black/20 p-2 rounded-lg"
                        >
                            Jelajahi keindahan kepulauan Indonesia dari sabang sampai merauke.
                            Klik titik untuk memulai petualanganmu.
                        </motion.p>
                    </motion.div>

                    <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-white dark:to-black z-40" />

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 2,
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 cursor-pointer hidden md:block"
                        onClick={() => {
                            const features = document.getElementById('destinations');
                            features?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light tracking-widest uppercase">Scroll</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-neutral-500/50 dark:text-white/50">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Globe Component */}
                    <div className="absolute w-full -bottom-20 h-full md:h-full z-10 cursor-pointer md:left-32">
                        <World
                            data={sampleArcs}
                            globeConfig={globeConfig}
                            points={pointsData}
                        />
                    </div>
                </div>
            </div>

            {/* Navigation Section: Vertical List Below */}
            <div className="w-full bg-white dark:bg-black relative z-50 py-20 border-t border-black/5 dark:border-white/10 transition-colors duration-500" id="destinations">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Left Side: Vertical List */}
                        <div className="w-full md:w-1/3 flex flex-col gap-6">
                            <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 border-b border-blue-500/50 pb-4 inline-block w-full">
                                Destinasi Pilihan
                            </h3>
                            <div className="flex flex-col gap-4">
                                {destinations.map((dest) => (
                                    <button
                                        key={dest.id}
                                        onClick={() => {
                                            setSelectedDestination(dest);
                                        }}
                                        className={`group relative flex items-center gap-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border p-4 rounded-2xl transition-all duration-300 hover:translate-x-2 text-left w-full ${selectedDestination?.id === dest.id ? 'border-blue-500 bg-blue-100/50 dark:bg-blue-900/10' : 'border-black/5 dark:border-white/10 hover:border-blue-500/50'}`}
                                    >
                                        <div className="w-16 h-16 shrink-0 bg-white dark:bg-black/50 rounded-xl border border-black/5 dark:border-white/10 p-2 group-hover:border-blue-400/50 transition-colors">
                                            <Image
                                                src={dest.images[0]}
                                                alt={dest.name}
                                                className="w-full h-full object-contain"
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {dest.name}
                                            </span>
                                            <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">
                                                Klik untuk detail
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Details or Placeholder */}
                        <div className="w-full md:w-2/3 flex flex-col justify-center items-center h-full min-h-[500px] border-l border-black/5 dark:border-white/5 pl-4 md:pl-10 py-4 relative overflow-hidden bg-black/5 dark:bg-white/5 rounded-3xl ml-4">
                            <AnimatePresence mode="wait">
                                {selectedDestination ? (
                                    <motion.div
                                        key={selectedDestination.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full flex flex-col h-full relative"
                                    >
                                        <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden relative mb-6">
                                            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10" />
                                            <Image
                                                src={selectedDestination.images[0]}
                                                alt={selectedDestination.name}
                                                className="w-full h-full object-contain p-4"
                                                width={500}
                                                height={500}
                                            />
                                            {/* Glow effect behind image */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black opacity-80" />
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <motion.h2
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.2 }}
                                                        className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2"
                                                    >
                                                        {selectedDestination.name}
                                                    </motion.h2>
                                                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                        </svg>
                                                        <span className="text-sm font-medium">Indonesia</span>
                                                    </div>
                                                </div>
                                                <div className="bg-blue-600/10 dark:bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full">
                                                    <span className="text-blue-600 dark:text-blue-300 text-sm font-semibold">
                                                        ★ {selectedDestination.stats.rating}
                                                    </span>
                                                </div>
                                            </div>

                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                                className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed border-l-2 border-blue-500/30 pl-4"
                                            >
                                                {selectedDestination.description}
                                            </motion.p>

                                            <div className="grid grid-cols-2 gap-4 mt-6">
                                                <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/10 shadow-sm">
                                                    <span className="text-neutral-500 dark:text-neutral-400 text-sm block mb-1">Visitors/Year</span>
                                                    <span className="text-2xl font-bold text-neutral-900 dark:text-white">{selectedDestination.stats.visitors}</span>
                                                </div>
                                                <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/10 shadow-sm">
                                                    <span className="text-neutral-500 dark:text-neutral-400 text-sm block mb-1">Avg. Temp</span>
                                                    <span className="text-2xl font-bold text-neutral-900 dark:text-white">{selectedDestination.stats.temperature}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col justify-center items-center text-center text-neutral-500"
                                    >
                                        <div className="p-8 rounded-full bg-white dark:bg-white/5 mb-4 shadow-sm border border-black/5 dark:border-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-neutral-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                            </svg>
                                        </div>
                                        <h4 className="text-xl font-medium text-neutral-900 dark:text-white mb-2">Jelajahi Indonesia</h4>
                                        <p className="max-w-md text-neutral-500 dark:text-neutral-400">
                                            Pilih salah satu destinasi di sebelah kiri untuk melihat keindahan dan statistik pariwisata secara detail di Globe interaktif kami.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
