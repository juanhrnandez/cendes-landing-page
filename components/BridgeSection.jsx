'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowDown } from 'lucide-react';

export default function BridgeSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0F4E8]/30 to-white py-12 md:py-16">
            {/* Subtle decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-40">
                {/* Soft wave patterns */}
                <svg
                    className="absolute left-0 top-0 h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.15 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        fill="none"
                        stroke="url(#gradient-bridge1)"
                        strokeWidth="2"
                        d="M0,160 C320,100 420,220 720,160 C1020,100 1120,220 1440,160 L1440,0 L0,0 Z"
                    />
                    <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                        fill="none"
                        stroke="url(#gradient-bridge2)"
                        strokeWidth="2"
                        d="M0,100 C360,140 540,60 900,100 C1260,140 1380,60 1440,100 L1440,0 L0,0 Z"
                    />
                    <defs>
                        <linearGradient id="gradient-bridge1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#E5D4C1" />
                            <stop offset="50%" stopColor="#C8CA6F" />
                            <stop offset="100%" stopColor="#E5D4C1" />
                        </linearGradient>
                        <linearGradient id="gradient-bridge2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F5EFE7" />
                            <stop offset="50%" stopColor="#E5D4C1" />
                            <stop offset="100%" stopColor="#F5EFE7" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Floating subtle dots */}
                <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-[#C8CA6F]/40" />
                <div className="absolute right-1/3 top-1/3 h-3 w-3 rounded-full bg-[#D89060]/40" />
                <div className="absolute bottom-1/4 left-1/2 h-2 w-2 rounded-full bg-[#C8CA6F]/40" />
            </div>

            {/* Content */}
            <div className="container-cendes relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-3xl"
                >
                    {/* Heart icon with subtle animation */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 12,
                            delay: 0.2
                        }}
                        className="mb-6 flex justify-center"
                    >
                        <div className="rounded-full border-2 border-[#C8CA6F]/40 bg-[#F0F4E8] p-3">
                            <Heart className="h-6 w-6 text-[#B4B651] md:h-7 md:w-7" />
                        </div>
                    </motion.div>

                    {/* Main text */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center"
                    >
                        <p className="mb-3 text-2xl font-semibold leading-relaxed text-gray-800 md:text-3xl lg:text-4xl">
                            Tu escuela puede ser{' '}
                            <span className="relative inline-block text-[#B4B651]">
                                parte de la solución
                                <motion.svg
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="absolute -bottom-1 left-0 w-full"
                                    height="8"
                                    viewBox="0 0 200 8"
                                    preserveAspectRatio="none"
                                >
                                    <motion.path
                                        d="M0,4 Q50,0 100,4 T200,4"
                                        stroke="#C8CA6F"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                </motion.svg>
                            </span>
                        </p>
                    </motion.div>

                    {/* Decorative divider */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mx-auto mt-8 flex items-center justify-center gap-3"
                    >
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B4B651]/40" />
                        <div className="flex gap-1.5">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        delay: 0.7 + (i * 0.1)
                                    }}
                                    className="h-1.5 w-1.5 rounded-full bg-[#B4B651]"
                                />
                            ))}
                        </div>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B4B651]/40" />
                    </motion.div>

                    {/* Subtle arrow indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="mt-6 flex justify-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <ArrowDown className="h-5 w-5 text-[#B4B651]" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
