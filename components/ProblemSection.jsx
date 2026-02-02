'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { statistics } from '@/lib/constants';
import { AlertCircle, Shield, Users, TrendingUp } from 'lucide-react';

const icons = [AlertCircle, Shield, Users, TrendingUp];

export default function ProblemSection() {
    return (
        <section id="problem" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-[#F5EFE7]/30 to-[#F0F4E8]/30">
            <div className="container-cendes">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Side - Header */}
                    <AnimatedSection className="lg:col-span-4 self-start">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-4 py-1.5 mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                    <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                                        Realidad Urgente
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-6">
                                    El Problema<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C47440] to-[#B4B651]">que Enfrentamos</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-gray-200 pl-4">
                                    Estas estadísticas no son solo números, representan a niñas, niños y adolescentes en riesgo que necesitan prevención hoy.
                                </p>
                            </div>
                            
                            {/* Inline CTA / Insight */}
                            <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 shadow-2xl">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-[#C47440] opacity-20 blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-[#B4B651] opacity-20 blur-2xl"></div>
                                
                                <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                                    La inacción<br />tiene un costo alto
                                </h3>
                                <p className="relative z-10 text-gray-300 text-sm mb-4 leading-relaxed">
                                    La educación preventiva es la herramienta más poderosa para cambiar esta realidad.
                                </p>
                                <div className="relative z-10 flex items-center gap-2 text-[#E2E48A] text-sm font-semibold">
                                    <Shield className="h-4 w-4" />
                                    <span>La prevención salva vidas</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Side - Statistics Grid 2x2 */}
                    <div className="lg:col-span-8">
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                            {statistics.map((stat, index) => {
                                const Icon = icons[index];
                                return (
                                    <AnimatedSection key={index} delay={index * 0.1}>
                                        <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(196,116,64,0.15)] hover:-translate-y-1">
                                            {/* Top accent line */}
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-[#C47440] transition-all duration-500"></div>
                                            
                                            <div className="flex flex-col h-full justify-between">
                                                <div>
                                                    <div className="mb-6 inline-flex items-center justify-center p-3 rounded-2xl bg-[#F5EFE7] text-[#C47440] group-hover:scale-110 group-hover:bg-[#C47440] group-hover:text-white transition-all duration-300">
                                                        <Icon className="h-6 w-6" />
                                                    </div>
                                                    
                                                    <div className="mb-3">
                                                        <span className="text-5xl font-black text-gray-900 tracking-tight">
                                                            {stat.number}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                <p className="text-lg text-gray-600 font-medium leading-normal border-t border-gray-100 pt-6 mt-2 group-hover:border-[#C47440]/20 transition-colors">
                                                    {stat.text}
                                                </p>
                                            </div>

                                            {/* Background decoration */}
                                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#C47440]/5 to-[#B4B651]/5 rounded-full blur-3xl group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
