'use client';

import { motion } from 'framer-motion';
import { Theater, Users, Lightbulb, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function SolutionSection() {
    return (
        <section id="solution" className="py-16 md:py-20 bg-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[#F9F9F9] opacity-50" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

            <div className="container-cendes relative z-10 px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    
                    {/* Left Side - Visual Composition */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                         {/* Main Image Layer */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-w-md mx-auto lg:max-w-full">
                            <img 
                                src="/images/teatro-cendes.jpg" 
                                alt="Obra de teatro profesional CENDES" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            
                            {/* Floating Stats Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
                                <p className="text-[#C47440] font-bold text-sm uppercase tracking-wider mb-1">Nuestra Metodología</p>
                                <p className="text-gray-900 font-medium text-lg leading-snug">
                                    "El arte abre puertas que las conferencias no pueden tocar."
                                </p>
                            </div>
                        </div>

                         {/* Decorative Element Behind */}
                        <div className="absolute -top-6 -left-6 w-full h-full rounded-[2.5rem] border-2 border-[#C47440]/10 -z-10" />
                        <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[2.5rem] bg-[#F5EFE7] -z-20" />
                    </motion.div>

                    {/* Right Side - Content */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#E5F6E8] px-4 py-1.5 border border-[#CDEED3] mb-6">
                                <span className="text-xs font-bold text-[#2A6E3B] uppercase tracking-widest">
                                    Solución Probada
                                </span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-[1.1]">
                                ¿Qué es <span className="text-[#C47440] inline-block relative">
                                    CENDES
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#C47440]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                    </svg>
                                </span>?
                            </h2>
                            
                            <p className="text-xl text-gray-600 leading-relaxed font-light">
                                Somos el <strong className="text-gray-900 font-bold">Centro Nacional de Prevención y Fortalecimiento</strong> ante la violencia sexual infantil y adolescente.  
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mt-4">
                                Transformamos la prevención en una experiencia inolvidable. No damos pláticas; creamos momentos que <strong className="text-[#C47440]">conectan, educan y protegen</strong>.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Card className="border-0 shadow-lg bg-white h-full hover:bg-[#FDFBF7] transition-colors group">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="h-12 w-12 rounded-2xl bg-[#C47440]/10 flex items-center justify-center group-hover:bg-[#C47440] transition-colors duration-300">
                                            <Theater className="h-6 w-6 text-[#C47440] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Arte Profesional</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                Teatro, cine y monólogos diseñados por expertos para captar la atención real de los estudiantes.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <Card className="border-0 shadow-lg bg-white h-full hover:bg-[#FDFBF7] transition-colors group">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="h-12 w-12 rounded-2xl bg-[#B4B651]/10 flex items-center justify-center group-hover:bg-[#B4B651] transition-colors duration-300">
                                            <Users className="h-6 w-6 text-[#9A9B42] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Impacto Integral</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                No solo trabajamos con alumnos; involucramos a docentes y padres para blindar la comunidad.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                        
                        {/* Quote or Bottom Line */}
                        <div className="border-l-4 border-[#C47440] pl-6 py-2">
                             <p className="text-gray-500 italic">
                                "La educación emocional es la vacuna contra la violencia."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

