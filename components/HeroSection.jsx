'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Shield, Users, Heart } from 'lucide-react';
import Button from '@/components/Button';

export default function HeroSection() {
    return (
        <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/cendes-book-niños.jpg" 
                    alt="Niños leyendo con CENDES" 
                    className="h-full w-full object-cover"
                />
                {/* Dark Gradient Overlays for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/70 to-purple-900/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-transparent to-gray-900/80" />
            </div>

            {/* Content */}
            <div className="container-cendes relative z-10 px-6">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Content - Main Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 space-y-6 md:space-y-7"
                    >
                        {/* Campaign Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-5 py-2.5 border border-purple-400/50 shadow-lg backdrop-blur-md">
                            <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-xs md:text-sm font-semibold uppercase tracking-wide text-purple-200">
                                Campaña Nacional 2026
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4 md:space-y-5">
                            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
                                Protege a tu{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                        comunidad escolar
                                    </span>
                                    <svg className="absolute -bottom-2 left-0 w-full hidden md:block" height="12" viewBox="0 0 300 12" fill="none">
                                        <path d="M2 10C100 2 200 2 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#9333ea" />
                                                <stop offset="100%" stopColor="#0891b2" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <br />a través del arte
                            </h1>
                            <p className="text-lg text-gray-200 leading-relaxed md:text-xl">
                                Prevención profesional de violencia sexual, bullying y acoso
                                para niñas, niños y adolescentes
                            </p>
                        </div>

                        {/* Key Benefits Icons */}
                        <div className="flex flex-wrap gap-4 md:gap-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-purple-500/20 shadow-lg backdrop-blur-md border border-purple-400/30">
                                    <Shield className="h-6 w-6 md:h-7 md:w-7 text-purple-300" />
                                </div>
                                <div>
                                    <p className="text-sm md:text-base font-semibold text-white">10 años</p>
                                    <p className="text-xs md:text-sm text-gray-300">de experiencia</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-cyan-500/20 shadow-lg backdrop-blur-md border border-cyan-400/30">
                                    <Users className="h-6 w-6 md:h-7 md:w-7 text-cyan-300" />
                                </div>
                                <div>
                                    <p className="text-sm md:text-base font-semibold text-white">+500,000</p>
                                    <p className="text-xs md:text-sm text-gray-300">personas impactadas</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-pink-500/20 shadow-lg backdrop-blur-md border border-pink-400/30">
                                    <Heart className="h-6 w-6 md:h-7 md:w-7 text-pink-300" />
                                </div>
                                <div>
                                    <p className="text-sm md:text-base font-semibold text-white">5 programas</p>
                                    <p className="text-xs md:text-sm text-gray-300">especializados</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="space-y-4 pt-2">
                            <Button variant="large" size="xlarge" href="https://registro.cendes.org/">
                                Descubre qué programa es para tu escuela
                            </Button>
                            
                            {/* Quick Benefits */}
                            <div className="flex flex-wrap items-center gap-3 md:gap-5 text-sm text-gray-200">
                                <div className="flex items-center gap-2">
                                    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Solo 2 minutos</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Sin compromiso</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Propuesta personalizada</span>
                                </div>
                            </div>
                        </div>

                        {/* Trust Bar */}
                        <div className="pt-6 border-t border-gray-600/50 backdrop-blur-sm">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Reconocidos y apoyados por:
                            </p>
                            <div className="flex flex-wrap items-center gap-6">
                                <img src="/images/spinna_logo.png" alt="SIPINNA" className="h-12 md:h-14 object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert" />
                                <img src="/images/SNDIF_Logo_(2018).svg" alt="DIF Nacional" className="h-12 md:h-14 object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Statistics Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl border border-white/20"
                        >
                            <p className="text-5xl md:text-6xl font-bold text-purple-400 mb-2">+1,500</p>
                            <p className="text-base md:text-lg text-gray-200">Escuelas transformadas</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl border border-white/20"
                        >
                            <p className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">100%</p>
                            <p className="text-base md:text-lg text-gray-200">Escuelas satisfechas</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="rounded-3xl bg-gradient-to-br from-purple-500 to-cyan-500 p-8 shadow-2xl text-white border border-white/20"
                        >
                            <p className="text-5xl md:text-6xl font-bold mb-2">10+</p>
                            <p className="text-base md:text-lg">Años de experiencia transformando vidas</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <ChevronDown className="h-8 w-8 text-gray-300" />
            </motion.div>
        </section>
    );
}
