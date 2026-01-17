'use client';

import { motion } from 'framer-motion';

export default function Card({
    title,
    theme,
    ageRange,
    format,
    gradient = "from-purple-500 to-pink-500",
    className = ''
}) {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-8 shadow-xl hover:shadow-2xl ${className}`}
        >
            <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                    {title}
                </h3>
                <div className="space-y-3 text-white/90">
                    <p className="flex items-center gap-2">
                        <span className="font-semibold">Temática:</span> {theme}
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="font-semibold">Edad:</span> {ageRange}
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="font-semibold">Formato:</span> {format}
                    </p>
                </div>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </motion.div>
    );
}
