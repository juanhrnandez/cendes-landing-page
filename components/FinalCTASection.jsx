'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import { Heart, Shield, Users, Mail, Phone, Quote } from 'lucide-react';

export default function FinalCTASection() {
    return (
        <section id="final-cta" className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.1),transparent_50%)]" />
            
            <div className="container-cendes relative z-10">
                {/* Hero Message with Founder */}
                <AnimatedSection>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                        {/* Text Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 mb-6">
                                <Heart className="h-4 w-4 text-purple-400" />
                                <span className="text-sm font-semibold text-purple-300">Un mensaje de nuestra fundadora</span>
                            </div>
                            
                            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl ">
                                Tu comunidad escolar<br />
                                merece estar protegida
                            </h2>
                            
                            <div className="relative mb-8">
                                <Quote className="absolute -top-4 -left-2 h-8 w-8 text-purple-400/30" />
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed pl-8 italic">
                                    "Cada escuela que se une a CENDES es un paso más hacia una infancia libre de violencia. 
                                    Más de 2,000 escuelas ya lo hicieron. El momento es ahora."
                                </p>
                            </div>
                            
                            <div className="mb-6">
                                <p className="text-white font-bold text-lg">Carolina López</p>
                                <p className="text-purple-300">Fundadora y Directora de CENDES</p>
                            </div>
                            
                            <Button variant="large" size="xlarge" href="/registro">
                                Descubre qué programa es para tu escuela
                            </Button>
                        </div>

                        {/* Founder Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                {/* Decorative elements around image */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
                                
                                <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                                    <Image
                                        src="/images/carolina-fundadora-cendes.png"
                                        alt="Carolina López - Fundadora de CENDES"
                                        width={600}
                                        height={700}
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                    {/* Gradient overlay at bottom */}
                                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>
                                
                                {/* Floating badge */}
                                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full p-3">
                                            <Users className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-2xl font-bold text-gray-900">+100K</div>
                                            <div className="text-xs text-gray-600">Vidas impactadas</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Quick Benefits */}
                <AnimatedSection delay={0.2}>
                    <div className="grid gap-6 md:grid-cols-3 mb-16">
                        <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:bg-white/10 transition-all">
                            <Heart className="mx-auto mb-4 h-10 w-10 text-purple-400" />
                            <h3 className="mb-2 text-xl font-bold text-white">2 minutos</h3>
                            <p className="text-sm text-gray-400">Proceso rápido y sencillo</p>
                        </div>
                        <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:bg-white/10 transition-all">
                            <Shield className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
                            <h3 className="mb-2 text-xl font-bold text-white">Sin compromiso</h3>
                            <p className="text-sm text-gray-400">Conoce sin obligación</p>
                        </div>
                        <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:bg-white/10 transition-all">
                            <Users className="mx-auto mb-4 h-10 w-10 text-purple-400" />
                            <h3 className="mb-2 text-xl font-bold text-white">Respuesta en 24 horas</h3>
                            <p className="text-sm text-gray-400">Atención personalizada</p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Alternative Contact */}
                <AnimatedSection delay={0.4}>
                    <div className="mx-auto max-w-3xl rounded-3xl bg-white/5 backdrop-blur-sm p-8 md:p-10 border border-white/10">
                        <h3 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
                            ¿Prefieres hablar directamente?
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <a
                                href="mailto:carolina.lopez@cendes.org"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                                    <Mail className="h-6 w-6 text-purple-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-400 mb-1">Email</div>
                                    <div className="text-white font-medium group-hover:text-purple-300 transition-colors">
                                        carolina.lopez@cendes.org
                                    </div>
                                </div>
                            </a>
                            
                            <a
                                href="tel:+525527882274"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                                    <Phone className="h-6 w-6 text-cyan-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-400 mb-1">Teléfono</div>
                                    <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                                        55 2788 2274
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        <div className="mt-6 text-center">
                            <a
                                href="https://wa.me/525527882274"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition-all hover:bg-green-600 hover:scale-105 shadow-lg"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                WhatsApp directo con Carolina
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
