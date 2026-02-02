'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import AnimatedSection from '@/components/AnimatedSection';
import { Award, MapPin, School, Users, Globe } from 'lucide-react';
import { recognitions } from '@/lib/constants';

// Importar el mapa solo en el cliente para evitar errores de SSR
const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
    ssr: false,
    loading: () => (
        <div className="h-[500px] md:h-[600px] bg-gradient-to-br from-[#F5EFE7] to-[#F0F4E8] rounded-b-3xl flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C47440] mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando mapa...</p>
            </div>
        </div>
    )
});

export default function ReachSection() {
    // Ciudades con coordenadas reales
    const locations = [
        { name: 'Ciudad de México', lat: 19.4326, lng: -99.1332, students: '45,000+' },
        { name: 'Guadalajara', lat: 20.6597, lng: -103.3496, students: '12,000+' },
        { name: 'Monterrey', lat: 25.6866, lng: -100.3161, students: '15,000+' },
        { name: 'Puebla', lat: 19.0414, lng: -98.2063, students: '8,500+' },
        { name: 'Querétaro', lat: 20.5888, lng: -100.3899, students: '7,200+' },
        { name: 'Mérida', lat: 20.9674, lng: -89.5926, students: '5,800+' },
        { name: 'Tijuana', lat: 32.5149, lng: -117.0382, students: '6,400+' },
        { name: 'Cancún', lat: 21.1619, lng: -86.8515, students: '4,100+' },
    ];

    return (
        <section id="reach" className="relative py-16 md:py-20 bg-gradient-to-br from-white via-[#F5EFE7] to-[#F0F4E8] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D89060]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8CA6F]/30 rounded-full blur-3xl" />

            <div className="container-cendes relative z-10">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center gap-2 mb-4">
                            <Globe className="h-10 w-10 text-[#C47440]" />
                        </div>
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                            Nuestro Alcance
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                            10 años protegiendo infancias en México y el mundo
                        </p>
                    </div>
                </AnimatedSection>

                {/* Impact Numbers - 3 Columns */}
                <AnimatedSection>
                    <div className="mb-16 grid gap-6 md:grid-cols-3">
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#C47440] to-[#A85F33] p-8 text-center shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <School className="h-12 w-12 text-white/80 mx-auto mb-4" />
                            <div className="relative mb-2 text-5xl font-bold text-white md:text-6xl">
                                +2,000
                            </div>
                            <div className="relative text-lg font-semibold text-white/90">
                                Escuelas alcanzadas
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#B4B651] to-[#9A9B42] p-8 text-center shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Users className="h-12 w-12 text-white/80 mx-auto mb-4" />
                            <div className="relative mb-2 text-5xl font-bold text-white md:text-6xl">
                                +100,000
                            </div>
                            <div className="relative text-lg font-semibold text-white/90">
                                Personas impactadas
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6A6A6A] to-[#525252] p-8 text-center shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <MapPin className="h-12 w-12 text-white/80 mx-auto mb-4" />
                            <div className="relative mb-2 text-5xl font-bold text-white md:text-6xl">
                                5 estados
                            </div>
                            <div className="relative text-lg font-semibold text-white/90">
                                + CDMX + España
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Large Interactive Map */}
                <AnimatedSection>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-200">
                        {/* Header with clean design */}
                        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-10">
                            {/* Subtle decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />
                            
                            <div className="relative max-w-4xl mx-auto text-center">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                                    <MapPin className="h-7 w-7 text-white" strokeWidth={2} />
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                                    Nuestra Presencia en México
                                </h3>
                                
                                {/* Subtitle */}
                                <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                                    Protegiendo a miles de estudiantes en las principales ciudades del país
                                </p>
                                
                                {/* Stats row */}
                                <div className="flex items-center justify-center gap-8 mt-6">
                                    <div className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-white">8</div>
                                        <div className="text-sm text-gray-400">Ciudades principales</div>
                                    </div>
                                    <div className="h-10 w-px bg-white/20"></div>
                                    <div className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-white">100K+</div>
                                        <div className="text-sm text-gray-400">Estudiantes protegidos</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Container */}
                        <div className="h-[600px] md:h-[700px] bg-gray-50">
                            <InteractiveMap locations={locations} />
                        </div>

                        {/* Cities list below map */}
                        <div className="p-8 bg-gray-50 border-t border-gray-200">
                            <p className="text-center text-sm text-gray-500 mb-5 font-medium uppercase tracking-wide">
                                Ciudades con presencia activa
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 max-w-6xl mx-auto">
                                {locations.map((location, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-2 text-xs bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-gray-200 cursor-pointer"
                                    >
                                        <div className="h-2 w-2 rounded-full bg-gray-900 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                        <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">{location.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Recognitions Section Below */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Recognitions Card */}
                    <AnimatedSection className="md:col-span-2">
                        <div className="bg-gradient-to-br from-white to-[#F5EFE7] rounded-3xl p-8 shadow-xl border border-[#C47440]/20 h-full">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                                <Award className="h-8 w-8 text-amber-500" />
                                Reconocimientos Oficiales
                            </h3>
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {recognitions.map((recognition, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex-shrink-0 mt-0.5">
                                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                                                <Award className="h-3 w-3 text-white" />
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-700 leading-relaxed">{recognition}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    {/* Additional Info Card */}
                    <AnimatedSection>
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#C47440] via-[#B4B651] to-[#6A6A6A] p-8 shadow-xl h-full flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
                            <div className="relative text-center">
                                <Globe className="h-16 w-16 text-white/80 mx-auto mb-6" />
                                <p className="text-xl font-bold text-white leading-relaxed mb-4">
                                    Llevando prevención de calidad a toda la República Mexicana y más allá
                                </p>
                                <div className="flex items-center justify-center gap-4 text-white/90 mt-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold">10+</div>
                                        <div className="text-sm">años</div>
                                    </div>
                                    <div className="h-12 w-px bg-white/30"></div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold">7</div>
                                        <div className="text-sm">regiones</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
