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
                    alt="Niños participando en programas educativos CENDES - Prevención de violencia sexual y bullying en escuelas de México" 
                    className="h-full w-full object-cover"
                />
                {/* Dark Gradient Overlays for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/70 to-[#6A6A6A]/40" />
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
                        className="lg:col-span-7 space-y-8 md:space-y-10"
                    >
                        {/* Campaign Badge */}
                        <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-2 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all hover:bg-white/15 cursor-default">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C47440] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C47440]"></span>
                            </span>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#F5EFE7]">
                                Campaña Nacional 2026
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h1 className="text-5xl font-black leading-[1.1] text-white sm:text-6xl md:text-7xl tracking-tight drop-shadow-sm">
                                Protege a tu{' '}
                                <span className="relative inline-block whitespace-nowrap">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#D89060] to-[#E2E48A]">
                                        comunidad escolar
                                    </span>
                                    {/* Decorative element behind text */}
                                    <div className="absolute -inset-1 -z-0 bg-white/5 blur-lg rounded-full opacity-50 scale-110"></div>
                                </span>
                                <br />
                                a través del <span className="text-white italic">arte</span>
                            </h1>
                            <p className="text-lg text-gray-200 leading-relaxed md:text-2xl font-light border-l-4 border-[#C47440] pl-6 max-w-2xl">
                                Prevención profesional de violencia sexual, bullying y acoso
                                para niñas, niños y adolescentes.
                            </p>
                        </div>

                        {/* Key Benefits Icons - Redesigned as glass cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="group flex sm:block items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:translate-y-[-2px]">
                                <div className="p-3 rounded-lg bg-[#C47440]/20 w-fit mb-0 sm:mb-3">
                                    <Shield className="h-6 w-6 text-[#D89060] group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white tracking-tight">10 Años</p>
                                    <p className="text-sm text-gray-300 font-medium">de experiencia</p>
                                </div>
                            </div>
                            
                            <div className="group flex sm:block items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:translate-y-[-2px]">
                                <div className="p-3 rounded-lg bg-[#B4B651]/20 w-fit mb-0 sm:mb-3">
                                    <Users className="h-6 w-6 text-[#E2E48A] group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white tracking-tight">+500k</p>
                                    <p className="text-sm text-gray-300 font-medium">personas impactadas</p>
                                </div>
                            </div>

                            <div className="group flex sm:block items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:translate-y-[-2px]">
                                <div className="p-3 rounded-lg bg-[#6A6A6A]/20 w-fit mb-0 sm:mb-3">
                                    <Heart className="h-6 w-6 text-gray-300 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white tracking-tight">5 Programas</p>
                                    <p className="text-sm text-gray-300 font-medium">especializados</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                                <img src="/images/spinna_logo.png" alt="SIPINNA - Sistema Nacional de Protección Integral de Niñas, Niños y Adolescentes" className="h-12 md:h-14 object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert" />
                                <img src="/images/SNDIF_Logo_(2018).svg" alt="DIF Nacional - Sistema Nacional para el Desarrollo Integral de la Familia" className="h-12 md:h-14 object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert" />
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
                            <p className="text-5xl md:text-6xl font-bold text-[#C47440] mb-2">+1,500</p>
                            <p className="text-base md:text-lg text-gray-200">Escuelas transformadas</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl border border-white/20"
                        >
                            <p className="text-5xl md:text-6xl font-bold text-[#B4B651] mb-2">100%</p>
                            <p className="text-base md:text-lg text-gray-200">Escuelas satisfechas</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="rounded-3xl bg-gradient-to-br from-[#C47440] to-[#B4B651] p-8 shadow-2xl text-white border border-white/20"
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
