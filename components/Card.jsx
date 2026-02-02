'use client';

import { motion } from 'framer-motion';
import { Theater, Film, Mic, Users2, Sparkles } from 'lucide-react';

export default function Card({
    title,
    theme,
    ageRange,
    format,
    gradient = "from-[#C47440] to-[#B4B651]",
    className = ''
}) {
    // Determine icon based on format
    const getFormatIcons = (formatString) => {
        const icons = [];
        if (formatString.includes('Teatro')) icons.push({ Icon: Theater, label: 'Teatro' });
        if (formatString.includes('Cine')) icons.push({ Icon: Film, label: 'Cine' });
        if (formatString.includes('Monólogo')) icons.push({ Icon: Mic, label: 'Monólogo' });
        return icons;
    };

    const formatIcons = getFormatIcons(format);

    return (
        <div
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} shadow-2xl transition-shadow duration-300 hover:shadow-3xl ${className}`}
        >
            {/* Decorative background elements */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:scale-150" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

            {/* Sparkle icon in corner */}
            <div className="absolute right-4 top-4 md:right-6 md:top-6 opacity-20 transition-all duration-300 group-hover:opacity-40 group-hover:rotate-12">
                <Sparkles className="h-8 w-8 md:h-12 md:w-12 text-white" />
            </div>

            <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                {/* Header section with title and formats */}
                <div className="flex-shrink-0 mb-5">
                    <h3 className="mb-3 text-2xl font-bold text-white md:text-4xl leading-tight">
                        {title}
                    </h3>
                    
                    {/* Format badges - now at top, more compact */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {formatIcons.map(({ Icon, label }, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center gap-1.5 rounded-full bg-white/25 px-3 py-1 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/35"
                            >
                                <Icon className="h-4 w-4 text-white" />
                                <span className="text-xs font-semibold text-white">{label}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="h-1 w-16 rounded-full bg-white/50" />
                </div>

                {/* Content section - flexible space */}
                <div className="flex-grow space-y-4">
                    {/* Theme */}
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/20">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                            Temática
                        </p>
                        <p className="text-base md:text-lg font-medium text-white leading-relaxed">
                            {theme}
                        </p>
                    </div>

                    {/* Age Range */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                            <Users2 className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                            <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                                Edad
                            </p>
                            <p className="text-base md:text-lg font-medium text-white">
                                {ageRange}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
    );
}
