'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { programs } from '@/lib/constants';

export default function ProgramsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { 
            loop: true,
            align: 'start',
            containScroll: false,
            dragFree: false,
            skipSnaps: false,
            startIndex: 0
        },
        [Autoplay({ delay: 4000, stopOnInteraction: true })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback((index) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section id="programs" className="py-20 md:py-24 bg-[#F5EFE7] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C47440]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#B4B651]/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header */}
            <div className="container-cendes mb-16 relative z-10">
                <AnimatedSection>
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="text-[#C47440] font-bold tracking-widest uppercase text-sm mb-3 block">Nuestra Oferta Educativa</span>
                        <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl tracking-tight">
                            Programas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C47440] to-[#B4B651]">Transformadores</span>
                        </h2>
                        <p className="mx-auto text-lg text-gray-600 md:text-xl leading-relaxed">
                            Diseñados por expertos para cada etapa del desarrollo, utilizando el arte como herramienta principal de prevención.
                        </p>
                    </div>
                </AnimatedSection>
            </div>

            {/* Embla Carousel */}
            <div className="relative z-10">
                <div className="overflow-visible" ref={emblaRef}>
                    <div className="flex touch-pan-y pl-4 md:pl-[max(2rem,calc((100vw-1200px)/2))]">
                        {programs.map((program, index) => (
                            <div
                                key={program.id}
                                className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0 pl-6 lg:pl-8 first:pl-0"
                            >
                                <div className={`transition-all duration-500 ${index === selectedIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70 hover:opacity-100'}`}>
                                    <Card {...program} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls Container */}
                <div className="container-cendes mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3">
                        {programs.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    index === selectedIndex 
                                    ? 'w-10 bg-[#C47440]' 
                                    : 'w-3 bg-gray-300 hover:bg-[#C47440]/50'
                                }`}
                                aria-label={`Ir al programa ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Arrow Navigation */}
                    <div className="flex gap-4">
                        <button
                            onClick={scrollPrev}
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:border-[#C47440] hover:bg-[#C47440] hover:text-white"
                            aria-label="Programa anterior"
                        >
                            <ChevronLeft className="h-6 w-6 text-gray-600 transition-colors group-hover:text-white" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:border-[#C47440] hover:bg-[#C47440] hover:text-white"
                            aria-label="Siguiente programa"
                        >
                            <ChevronRight className="h-6 w-6 text-gray-600 transition-colors group-hover:text-white" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="mt-8 flex justify-center gap-2">
                {programs.map((program, index) => (
                    <button
                        key={program.id}
                        onClick={() => scrollTo(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                            index === selectedIndex
                                ? 'w-10 bg-gradient-to-r from-[#C47440] to-[#B4B651]'
                                : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Ir a ${program.title}`}
                    />
                ))}
            </div>

            {/* Bottom Content */}
            <div className="container-cendes mt-10">
                <p className="text-center text-base md:text-lg text-gray-600">
                    No importa dónde esté tu escuela o cuántos alumnos tengas.
                    Tenemos opciones para TODA la República Mexicana.
                </p>

                <div className="mt-8 text-center">
                    <Button variant="primary" size="large" href="https://registro.cendes.org/">
                        Descubre qué programa es para tu escuela
                    </Button>
                </div>
            </div>
        </section>
    );
}
