'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 pb-12 lg:pt-28 bg-white">
            {/* Background Decorative Elements - Premium & Clean */}
            <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[#C47440]/10 blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-[#B4B651]/10 blur-[100px]" />
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

            <div className="container-cendes relative z-10 px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Premium Badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F0] px-4 py-1.5 border border-[#E5E5E0] shadow-sm"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C47440] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C47440]"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A5A]">
                                Campaña Nacional 2026
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl font-extrabold leading-[1.15] text-[#1A1A1A] sm:text-5xl md:text-6xl tracking-tight">
                                Protege a tu comunidad escolar con <span className="text-[#C47440]">educación</span> y <span className="text-[#B4B651]">arte</span>.
                            </h1>
                            <p className="text-lg text-[#5A5A5A] leading-relaxed md:text-xl font-medium max-w-xl">
                                La solución integral para la prevención de violencia sexual, bullying y acoso en escuelas, validada por más de 10 años de experiencia.
                            </p>
                        </div>

                        {/* CTA Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Button 
                                size="lg" 
                                className="bg-[#C47440] hover:bg-[#A85F33] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 font-semibold"
                                asChild
                            >
                                <Link href="https://registro.cendes.org/">
                                    Contactar Ahora <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="border-[#C47440]/20 text-[#1A1A1A] hover:bg-[#C47440]/5 hover:border-[#C47440] rounded-full px-8 py-6 text-lg font-semibold"
                                asChild
                            >
                                <Link href="#programs">
                                    Ver Programas
                                </Link>
                            </Button>
                        </div>
                        
                        {/* Trust Indicators */}
                        <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-8 items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#C47440]/10 rounded-lg">
                                    <Shield className="h-5 w-5 text-[#C47440]" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-[#1A1A1A]">Seguridad</p>
                                    <p className="text-[#6A6A6A]">Certificada</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#B4B651]/10 rounded-lg">
                                    <Users className="h-5 w-5 text-[#9A9B42]" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-[#1A1A1A]">+500k</p>
                                    <p className="text-[#6A6A6A]">Impactados</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <Trophy className="h-5 w-5 text-gray-600" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-[#1A1A1A]">10 Años</p>
                                    <p className="text-[#6A6A6A]">Experiencia</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center hidden lg:flex"
                    >
                        {/* Abstract Background Shapes behind image */}
                        <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-[#B4B651]/20 rounded-[2rem] -rotate-6" />
                        <div className="absolute bottom-10 left-10 w-3/4 h-3/4 bg-[#C47440]/10 rounded-[2rem] rotate-3" />
                        
                        {/* Main Image Container */}
                        <div className="relative z-10 w-full h-auto max-w-[550px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
                            <img 
                                src="/images/cendes-book-niños.jpg" 
                                alt="Estudiantes felices aprendiendo con CENDES" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* Overlay Gradient (Subtle) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                            {/* Floating Glass Card */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[#C47440] font-bold text-xs uppercase tracking-wide">Próximo Taller</p>
                                        <p className="text-[#1A1A1A] font-semibold text-sm">Prevención de Acoso Escolar</p>
                                    </div>
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1A1A1A] text-white cursor-pointer hover:bg-[#C47440] transition-colors">
                                        <ArrowRight className="h-5 w-5 -rotate-45" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
