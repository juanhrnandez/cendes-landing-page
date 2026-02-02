'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, School } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { testimonials } from '@/lib/constants';

export default function TestimonialsSection() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="relative py-16 md:py-20 bg-gradient-to-br from-gray-900 via-[#6A6A6A] to-gray-900 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,116,64,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(180,182,81,0.1),transparent_50%)]" />
            
            <div className="container-cendes relative z-10">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center mb-4">
                            <Star className="h-8 w-8 text-[#B4B651] fill-[#B4B651]" />
                            <Star className="h-10 w-10 text-[#C47440] fill-[#C47440] mx-2" />
                            <Star className="h-8 w-8 text-[#B4B651] fill-[#B4B651]" />
                        </div>
                        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                            Lo que dicen las escuelas protectoras
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl">
                            Testimonios reales de directores escolares que ya transformaron su comunidad
                        </p>
                    </div>
                </AnimatedSection>

                {/* Video Section */}
                <AnimatedSection>
                    <div className="mx-auto mb-16 max-w-5xl">
                        <div className="relative aspect-video overflow-hidden rounded-3xl bg-gradient-to-br from-[#6A6A6A]/50 to-[#B4B651]/50 shadow-2xl border border-white/10 backdrop-blur-sm">
                            <video
                                controls
                                className="h-full w-full object-cover"
                                poster="/images/testimonial-poster.jpg"
                            >
                                <source src="/videos/testimonials.mp4" type="video/mp4" />
                            </video>
                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-[#C47440]/50 rounded-tl-3xl" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-[#B4B651]/50 rounded-br-3xl" />
                        </div>
                    </div>
                </AnimatedSection>

                {/* Testimonial Carousel */}
                <div className="relative max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonialIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="relative"
                        >
                            {/* Quote card with modern glassmorphism */}
                            <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#C47440]/10 via-transparent to-[#B4B651]/10" />
                                
                                {/* Quote icon background */}
                                <div className="absolute -top-6 -right-6 opacity-10">
                                    <Quote className="h-40 w-40 text-white" />
                                </div>

                                <div className="relative z-10 p-8 md:p-12">
                                    {/* Quote content */}
                                    <div className="mb-8">
                                        <Quote className="h-12 w-12 text-[#B4B651] mb-4" />
                                        <p className="text-xl md:text-2xl leading-relaxed text-white/95 font-light italic">
                                            {testimonials[currentTestimonialIndex].quote}
                                        </p>
                                    </div>

                                    {/* Author info */}
                                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                        <div className="relative flex-shrink-0">
                                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                                                <School className="h-8 w-8 md:h-10 md:w-10 text-white" />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-gray-900 flex items-center justify-center">
                                                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="font-bold text-white text-lg md:text-xl">
                                                {testimonials[currentTestimonialIndex].name}
                                            </p>
                                            <p className="text-sm md:text-base text-[#C8CA6F] font-medium">
                                                {testimonials[currentTestimonialIndex].school}
                                            </p>
                                            <p className="text-sm text-[#B4B651]/80">
                                                {testimonials[currentTestimonialIndex].location}
                                            </p>
                                        </div>
                                        {/* Star rating */}
                                        <div className="hidden sm:flex gap-1 flex-shrink-0">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="mt-10 flex items-center justify-center gap-6">
                        <button
                            onClick={prevTestimonial}
                            className="rounded-full bg-white/10 p-3 md:p-4 backdrop-blur-sm border border-white/20 transition-all hover:bg-[#C47440] hover:border-[#C47440] hover:scale-110 active:scale-95"
                            aria-label="Testimonio anterior"
                        >
                            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </button>

                        {/* Dots indicator */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonialIndex(index)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        index === currentTestimonialIndex
                                            ? 'w-10 bg-gradient-to-r from-[#C47440] to-[#B4B651]'
                                            : 'w-2.5 bg-white/30 hover:bg-white/50'
                                    }`}
                                    aria-label={`Ir a testimonio ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="rounded-full bg-white/10 p-3 md:p-4 backdrop-blur-sm border border-white/20 transition-all hover:bg-[#C47440] hover:border-[#C47440] hover:scale-110 active:scale-95"
                            aria-label="Siguiente testimonio"
                        >
                            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
