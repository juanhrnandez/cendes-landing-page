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
        <section id="programs" className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-cyan-50 overflow-hidden">
            {/* Header */}
            <div className="container-cendes mb-12">
                <AnimatedSection>
                    <div className="text-center">
                        <h2 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">
                            Nuestros Programas
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
                            5 programas especializados por edad y temática
                        </p>
                    </div>
                </AnimatedSection>
            </div>

            {/* Embla Carousel */}
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4 md:gap-6 px-4 md:px-8">
                        {programs.map((program, index) => (
                            <div
                                key={program.id}
                                className="flex-[0_0_90%] sm:flex-[0_0_75%] md:flex-[0_0_550px] lg:flex-[0_0_650px] min-w-0"
                            >
                                <Card {...program} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute left-0 right-0 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between px-4 md:px-8 pointer-events-none">
                    <button
                        onClick={scrollPrev}
                        className="pointer-events-auto rounded-full bg-white p-3 md:p-4 shadow-xl transition-all hover:scale-110 hover:bg-purple-600 hover:text-white active:scale-95"
                        aria-label="Programa anterior"
                    >
                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="pointer-events-auto rounded-full bg-white p-3 md:p-4 shadow-xl transition-all hover:scale-110 hover:bg-purple-600 hover:text-white active:scale-95"
                        aria-label="Siguiente programa"
                    >
                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
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
                                ? 'w-10 bg-gradient-to-r from-purple-600 to-cyan-600'
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
