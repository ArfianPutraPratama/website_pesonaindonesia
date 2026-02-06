import Link from "next/link";
import React from "react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="about" className="bg-neutral-50 dark:bg-black border-t border-black/5 dark:border-white/10 py-12 md:py-16 relative z-50 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg" aria-hidden="true">
                                P
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-white/60">
                                Pesona Indonesia
                            </span>
                        </Link>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-sm">
                            Menjelajahi keindahan nusantara melalui pengalaman digital yang imersif. Temukan surga tersembunyi di setiap sudut kepulauan Indonesia.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-neutral-900 dark:text-white font-semibold mb-4">Navigasi</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#features" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="#destinations" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                                    Destinasi
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                                    Galeri
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-neutral-900 dark:text-white font-semibold mb-4">Sosial Media</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors flex items-center gap-2">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors flex items-center gap-2">
                                    Twitter / X
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors flex items-center gap-2">
                                    YouTube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-black/5 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-xs">
                        © {currentYear} Pesona Indonesia Interactive. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-neutral-500 hover:text-black dark:hover:text-white text-xs transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-neutral-500 hover:text-black dark:hover:text-white text-xs transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
