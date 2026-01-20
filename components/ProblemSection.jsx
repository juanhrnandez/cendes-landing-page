'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { statistics } from '@/lib/constants';
import { AlertCircle, Shield, Users, TrendingUp } from 'lucide-react';

const icons = [AlertCircle, Shield, Users, TrendingUp];

export default function ProblemSection() {
    return (
        <section id="problem" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-cyan-50/30">
            <div className="container-cendes">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Side - Header */}
                    <AnimatedSection className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24">
                            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 mb-4">
                                <AlertCircle className="h-4 w-4 text-red-600" />
                                <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                                    Realidad Urgente
                                </span>
                            </div>
                            <h2 className="mb-4 text-3xl md:text-4xl  font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                                El Problema que Enfrentamos
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Estas estadísticas muestran por qué la prevención es urgente y necesaria
                            </p>
                            
                            {/* Inline CTA */}
                            <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 p-6 shadow-xl">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Juntos podemos cambiar esto
                                </h3>
                                <p className="text-sm text-purple-100">
                                    La prevención salva vidas
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Side - Statistics Grid 2x2 */}
                    <div className="lg:col-span-8">
                        <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
                            {statistics.map((stat, index) => {
                                const Icon = icons[index];
                                return (
                                    <AnimatedSection key={index} delay={index * 0.1}>
                                        <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:border-purple-200 h-full">
                                            {/* Background Gradient Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                            
                                            {/* Icon */}
                                            <div className="relative z-10 mb-4">
                                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-cyan-100 shadow-md group-hover:scale-105 transition-transform duration-300">
                                                    <Icon className="h-6 w-6 text-purple-600" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                {/* Number */}
                                                <div className="mb-3">
                                                    <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                                                        {stat.number}
                                                    </div>
                                                    {/* Animated underline */}
                                                    <div className="h-1 w-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full transition-all duration-300 group-hover:w-16 mt-2" />
                                                </div>

                                                {/* Description */}
                                                <p className="text-base font-medium leading-snug text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                                    {stat.text}
                                                </p>
                                            </div>

                                            {/* Decorative corner element */}
                                            <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-purple-200/20 to-cyan-200/20 blur-2xl transition-all duration-300 group-hover:scale-125" />
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
