'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Shield, CheckCircle2, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function FinalCTASection() {
    return (
        <section id="final-cta" className="relative py-24 bg-[#111827] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] invert" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C47440]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B4B651]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container-cendes relative z-10 px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Side: Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge variant="outline" className="mb-6 px-4 py-1.5 border-[#C47440]/40 bg-[#C47440]/10 text-[#D89060] uppercase tracking-widest font-bold">
                                Mensaje de nuestra Fundadora
                            </Badge>
                            
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.15]">
                                Tu comunidad escolar <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C47440] to-[#E2E48A]">
                                    merece estar protegida.
                                </span>
                            </h2>
                            
                            <div className="relative pl-6 border-l-4 border-[#C47440]">
                                <Quote className="absolute -top-4 -left-3 h-6 w-6 text-[#C47440] bg-[#111827] p-1" />
                                <p className="text-xl text-gray-300 italic leading-relaxed font-light mb-4">
                                    "Cada escuela que se une a CENDES es un paso más hacia una infancia libre de violencia. 
                                    Más de 2,000 escuelas ya lo hicieron. El momento es ahora."
                                </p>
                                <div>
                                    <p className="text-white font-bold text-lg">Carolina López</p>
                                    <p className="text-[#9CA3AF] text-sm">Fundadora y Directora de CENDES</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button 
                                    size="lg" 
                                    className="bg-[#C47440] hover:bg-[#A85F33] text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-[#C47440]/20"
                                    asChild
                                >
                                    <Link href="https://registro.cendes.org/">
                                        Agenda tu Cita Ahora <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button 
                                    variant="outline"
                                    size="lg" 
                                    className="border-gray-700 text-white hover:bg-white/10 hover:text-white rounded-full px-8 h-14 text-lg font-medium bg-transparent"
                                    asChild
                                >
                                    <Link href="#programs">
                                        Explorar Programas
                                    </Link>
                                </Button>
                            </div>

                            {/* Trust Signals */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 pt-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-[#B4B651]" />
                                    <span>Proceso de 2 minutos</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-[#B4B651]" />
                                    <span>Sin compromiso inicial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-[#B4B651]" />
                                    <span>Respuesta en 24h</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2 relative"
                    >
                         {/* Image Container with Glow */}
                        <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                            <div className="absolute -inset-1 bg-gradient-to-br from-[#C47440] via-[#B4B651] to-transparent rounded-[2.5rem] opacity-30 blur-lg" />
                            
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gray-800 shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                                <Image
                                    src="/images/carolina-fundadora-cendes.png"
                                    alt="Carolina López - Fundadora de CENDES"
                                    fill
                                    className="object-cover object-center"
                                />
                                {/* Overlay Gradient for better integration */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60" />

                                {/* Floating Badge */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-[#C47440] flex items-center justify-center flex-shrink-0">
                                            <Heart className="h-6 w-6 text-white fill-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg">+100,000</p>
                                            <p className="text-gray-300 text-sm">Vidas impactadas positivamente</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
